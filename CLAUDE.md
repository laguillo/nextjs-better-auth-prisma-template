# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
bun dev              # Start development server
bun build            # Generate Prisma client + build for production
bun start            # Apply pending migrations + start production server
bun lint             # Run ESLint

bunx prisma migrate dev      # Create and apply a new migration
bunx prisma migrate deploy   # Apply pending migrations (production)
bunx prisma studio           # Open Prisma Studio GUI
bunx prisma generate         # Regenerate Prisma client after schema changes
```

There are no tests in this project.

`bun lint` currently fails in this environment with `TypeError: Class extends value undefined is not a constructor or null` from `@typescript-eslint/utils` — a pre-existing dependency-version mismatch, not something broken by your changes. Use `bunx tsc --noEmit` to type-check instead.

## Environment Variables

Required in `.env`:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
BETTER_AUTH_SECRET="..."          # openssl rand -base64 32
BETTER_AUTH_URL="http://localhost:3000"
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
RESEND_API_KEY="re_..."
EMAIL_SENDER_NAME="Your App"
EMAIL_SENDER_ADDRESS="noreply@yourapp.com"
```

## Architecture

### App Route Groups

- `src/app/(auth)/` — unauthenticated pages: login, signup, forgot-password, reset-password
- `src/app/(public)/` — public landing page
- `src/app/(protected)/dashboard/` — user dashboard (requires session)
- `src/app/(protected)/admin/` — admin panel (requires session + `role === 'admin'`)

### Authentication (Better Auth)

Auth is split across two files:

- **`src/lib/auth.ts`** — server-side Better Auth config. Configures email/password, Google OAuth, email verification, password reset (via Resend), and the `admin` plugin. Uses `prismaAdapter` for persistence. Import this only in server contexts.
- **`src/lib/auth-client.ts`** — client-side `authClient` with `adminClient` plugin. Use this in Client Components for session state and auth actions. Must import `createAuthClient` from **`better-auth/react`**, not `better-auth/client` — the latter is the framework-agnostic vanilla client where `useSession` is a raw nanostore atom rather than a React hook, and it fails to type-check as callable.

The Better Auth API route is at `src/app/api/auth/[...all]/route.ts` and delegates entirely to `toNextJsHandler(auth)`.

### Server Actions

`src/server/user.ts` contains all auth-related Server Actions (`forgotPassword`, `resetPassword`, `isAuthenticated`). These call `auth.api.*` directly with `headers()` from `next/headers`. `isAuthenticated()` is the canonical way to get the current session in Server Components and layouts. It is memoized per request with React `cache()`, so calling it from the layout, sidebar and page costs a single session lookup.

Sign-up and login are called directly from Client Components via `authClient` (no Server Action wrapper).

### Route Protection

Protection has two layers:

- **`src/proxy.ts`** (active — Next 16's replacement for `middleware.ts`, matching `/dashboard/*` and `/admin/*`) — optimistic only: redirects to `/login` when there is no session _cookie_ (`getSessionCookie`). It does not validate the session, so it is not a security boundary.
- **Gate components inside each page** — the real check, which validates the session against the database:
  - `src/components/dashboard/auth-gate.tsx` — `<DashboardGate>` redirects to `/login` if no session.
  - `src/components/admin/auth-gate.tsx` — `<AdminGate>` calls `unauthorized()` if no session or `role !== 'admin'`. `unauthorized()` is enabled by `experimental.authInterrupts: true` in `next.config.ts`.

**Every page under `(protected)` must wrap its content in its panel's gate.** A layout cannot protect its pages: Next renders route segments independently of the layout and a page's output can still reach the client in the RSC payload even when the layout swaps it for an error UI (see `node_modules/next/dist/docs/01-app/02-guides/authentication.md`, "Partial Rendering"). The layouts only render the static chrome plus the sidebar's user.

### Cache Components

`cacheComponents` and `partialPrefetching` are enabled in `next.config.ts`, so every route must be prerenderable: reading `cookies()`, `headers()`, `await params` or `await searchParams` outside a `<Suspense>` boundary fails `bun build` ("Next.js encountered uncached or runtime data during prerendering"). Patterns used here:

- Push the request-time read into a small async Server Component inside `<Suspense>`, with a skeleton fallback that matches the final layout. Forward `searchParams`/`params` as promises and `await` them in that child, never at the top of the page (`reset-password/page.tsx`).
- Never `await` the session at the top of a layout. Layouts render static chrome and put the user lookup behind `<Suspense>` (`SidebarWithUser` in the protected layouts, with `AppSidebar user={null}` as the fallback).
- Pages with a "redirect if already signed in" rule render the form in the static shell and stream `<RedirectIfAuthenticated />` (`src/components/shared/`) behind `<Suspense>`. The redirect therefore happens after the shell, not as an HTTP 307.
- Routes that reach `unauthorized()`/`redirect()` while streaming answer `200` and the redirect/401 UI is applied client-side; the proxy's cookie check provides the HTTP-level redirect for anonymous users.
- `Date.now()`/`new Date()`/`Math.random()` before a request-time read in a render path is a build error. Route Handlers such as `/api/health` stay dynamic because the database query comes first.

### Database (Prisma)

- Schema: `prisma/schema.prisma`
- Prisma client output: `src/generated/prisma/` (import from `@/generated/prisma/client`)
- Prisma client singleton: `src/lib/prisma.ts` — uses `@prisma/adapter-pg` (driver-adapter mode, not the default TCP connection)
- CLI config: `prisma.config.ts` — required by Prisma 7.x

After changing `prisma/schema.prisma`, always run `bunx prisma migrate dev` (dev) or `bunx prisma generate` (client-only) before building.

### UI Components (Base UI, not Radix)

Shadcn UI components live in `src/components/ui/`. Add new Shadcn components with `bunx shadcn@latest add <component>`. Components are configured via `components.json`, which sets `"style": "base-rhea"` — this project uses the **Base UI** shadcn style, not the default Radix-based one. Components import from `@base-ui/react/*`, not `@radix-ui/react-*` or `vaul`. Training-data assumptions about shadcn/Radix prop APIs do not apply here — check `node_modules/@base-ui/react/<component>/**/*.d.ts` before assuming a prop exists or has a particular shape. Recurring gotchas hit in this codebase:

- **Never nest a Trigger around a component that itself renders a native element** (e.g. `DropdownMenuTrigger` wrapping `<Button>` or `<SidebarMenuButton>`). The trigger already renders a `<button>`, so wrapping another button-rendering component inside it produces `<button><button>` and a hydration error. Compose them with the `render` prop instead: `<DropdownMenuTrigger render={<Button variant="outline">...</Button>} />`. This works because Base UI clones the `render` element and merges the trigger's props onto it, rather than wrapping it.
- **Never do `<Button render={<Link href="..." />}>` for a "button that navigates."** Base UI's `Button` always sets `role="button"`, which overrides the anchor's link semantics. Use `buttonVariants({ variant, size })` (exported from `ui/button.tsx`) on a plain `<Link>`/`<a>` instead.
- **`DropdownMenuLabel` (`Menu.GroupLabel`) requires a `<DropdownMenuGroup>` (`Menu.Group`) ancestor** — using it as a direct child of `DropdownMenuContent` throws "MenuGroupContext is missing" at runtime.
- **`Checkbox`**: `checked` only accepts `boolean`; there is no `'indeterminate'` string value. Pass a separate `indeterminate` boolean prop.
- **`Drawer`**: no `direction` prop; use `swipeDirection` with values `'up' | 'down' | 'left' | 'right'` (not vaul's `'top' | 'bottom'`).
- **`Select` / `ToggleGroup` `onValueChange`**: signature is `(value, eventDetails) => void`, not a plain `Dispatch<SetStateAction<...>>` — passing a raw `useState` setter fails to type-check. `Select`'s value can be `null`; guard before forwarding to a string setter. `ToggleGroup` has no `type="single"` prop (unlike the old Radix version) — it always takes an array `value`/`onValueChange`, even when used for single-selection (multi-select is opted into via `multiple`).
- **Anchor-width CSS var**: use `w-(--anchor-width)` (Base UI), not `w-(--radix-dropdown-menu-trigger-width)` (a Radix leftover that silently resolves to nothing).

Tailwind CSS 4 is used — configuration is in `postcss.config.mjs` and `src/app/globals.css` (no `tailwind.config.*` file). CSS-variable utilities use the v4 parens shorthand (`rounded-(--radius)`), not the v3 bracket form (`rounded-[var(--radius)]`); `calc()` expressions still need brackets (`rounded-[calc(var(--radius)-2px)]`).

`lucide-react` is pinned to an unusual major version (`^1.46.0`, per `package.json`); it has no brand/logo icons (GitHub, X/Twitter, framework/tool logos). Those are either custom inline SVGs (`src/components/shared/icons.tsx`) or files under `public/*.svg`, loaded via `next/image` (apply `dark:invert` for monochrome-black logo files so they stay visible in dark mode; skip it for logos that already carry their own brand color).

Admin and dashboard panel components are mirrored under `src/components/admin/` and `src/components/dashboard/` respectively, each with a `layout/` subfolder containing sidebar, nav, and header components.

### Forms

Auth forms use **react-hook-form + zod + `Controller`** consistently. Each form file is a Client Component co-located with its page (`login-form.tsx`, `signup-form.tsx`, etc.). Field components (`Field`, `FieldLabel`, `FieldError`, `FieldGroup`) come from `src/components/ui/field.tsx`.

The signup form captures `name` + `lastName` separately and concatenates them into the single `name` field on the `User` model before calling `authClient.signUp.email`.

### Email

Email templates are React Email components in `src/components/emails/`. Sending uses the Resend SDK, called directly from `src/lib/auth.ts` callbacks.

### Role System

Users have a `role` field (`"user"` | `"admin"`) on the `User` model, managed by the Better Auth `admin` plugin. Role checks are done against `session.user.role`.

### Deployment

`railway.toml` configures Railway's healthcheck against `src/app/api/health/route.ts`, which runs `SELECT 1` through the Prisma singleton to verify database connectivity.
