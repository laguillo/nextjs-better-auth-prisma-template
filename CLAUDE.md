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
- **`src/lib/auth-client.ts`** — client-side `authClient` with `adminClient` plugin. Use this in Client Components for session state and auth actions.

The Better Auth API route is at `src/app/api/auth/[...all]/route.ts` and delegates entirely to `toNextJsHandler(auth)`.

### Server Actions

`src/server/user.ts` contains all auth-related Server Actions (`forgotPassword`, `resetPassword`, `isAuthenticated`). These call `auth.api.*` directly with `headers()` from `next/headers`. `isAuthenticated()` is the canonical way to get the current session in Server Components and layouts.

Sign-up and login are called directly from Client Components via `authClient` (no Server Action wrapper).

### Route Protection

Protection is enforced at the **layout level**, not in middleware:

- `src/app/(protected)/dashboard/layout.tsx` — calls `isAuthenticated()`, redirects to `/login` if no session.
- `src/app/(protected)/admin/layout.tsx` — calls `isAuthenticated()`, calls `unauthorized()` if no session or `role !== 'admin'`. The `unauthorized()` function is enabled by `experimental.authInterrupts: true` in `next.config.ts`.

`src/proxy.ts` exists but is **not** wired as `middleware.ts`. It's an optional optimistic redirect helper, explicitly marked as not secure — actual auth checks happen in layouts.

### Database (Prisma)

- Schema: `prisma/schema.prisma`
- Prisma client output: `src/generated/prisma/` (import from `@/generated/prisma/client`)
- Prisma client singleton: `src/lib/prisma.ts` — uses `@prisma/adapter-pg` (driver-adapter mode, not the default TCP connection)
- CLI config: `prisma.config.ts` — required by Prisma 7.x

After changing `prisma/schema.prisma`, always run `bunx prisma migrate dev` (dev) or `bunx prisma generate` (client-only) before building.

### UI Components

Shadcn UI components live in `src/components/ui/`. Add new Shadcn components with `bunx shadcn@latest add <component>`. Components are configured via `components.json`.

Tailwind CSS 4 is used — configuration is in `postcss.config.mjs` and `src/app/globals.css` (no `tailwind.config.*` file).

Admin and dashboard panel components are mirrored under `src/components/admin/` and `src/components/dashboard/` respectively, each with a `layout/` subfolder containing sidebar, nav, and header components.

### Forms

Auth forms use **react-hook-form + zod + `Controller`** consistently. Each form file is a Client Component co-located with its page (`login-form.tsx`, `signup-form.tsx`, etc.). Field components (`Field`, `FieldLabel`, `FieldError`, `FieldGroup`) come from `src/components/ui/field.tsx`.

The signup form captures `name` + `lastName` separately and concatenates them into the single `name` field on the `User` model before calling `authClient.signUp.email`.

### Email

Email templates are React Email components in `src/components/emails/`. Sending uses the Resend SDK, called directly from `src/lib/auth.ts` callbacks.

### Role System

Users have a `role` field (`"user"` | `"admin"`) on the `User` model, managed by the Better Auth `admin` plugin. Role checks are done against `session.user.role`.
