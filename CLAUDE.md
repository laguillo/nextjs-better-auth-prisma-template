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

## Architecture

### Authentication (Better Auth)

Auth is split across two files:

- **`src/lib/auth.ts`** — server-side Better Auth config. Configures email/password, Google OAuth, email verification, password reset (via Resend), and the `admin` plugin. Uses `prismaAdapter` for persistence. Import this only in server contexts.
- **`src/lib/auth-client.ts`** — client-side `authClient` with `adminClient` plugin. Use this in Client Components for session state and auth actions.

The Better Auth API route is at `src/app/api/auth/[...all]/route.ts` and delegates entirely to `toNextJsHandler(auth)`.

### Server Actions

`src/server/user.ts` contains all auth-related Server Actions (`signUp`, `login`, `logout`, `forgotPassword`, `resetPassword`, `isAuthenticated`). These call `auth.api.*` directly with `headers()` from `next/headers`. `isAuthenticated()` is the canonical way to get the current session in Server Components and layouts.

### Route Protection

Protection is enforced at the **layout level**, not in middleware:

- `src/app/dashboard/layout.tsx` — calls `isAuthenticated()`, redirects to `/login` if no session.
- `src/app/admin/layout.tsx` — calls `isAuthenticated()`, calls `unauthorized()` if no session or `role !== 'admin'`. The `unauthorized()` function is enabled by `experimental.authInterrupts: true` in `next.config.ts`.

`src/proxy.ts` exists but is **not** a `middleware.ts`. It's an optional optimistic redirect helper, explicitly marked as not secure — actual auth checks happen in layouts.

### Database (Prisma)

- Schema: `prisma/schema.prisma`
- Prisma client output: `src/generated/prisma/` (import from `@/generated/prisma/client`)
- Prisma client singleton: `src/lib/prisma.ts` — uses `@prisma/adapter-pg` (driver-adapter mode, not the default TCP connection)
- CLI config: `prisma.config.ts` — required by Prisma 7.x

After changing `prisma/schema.prisma`, always run `bunx prisma migrate dev` (dev) or `bunx prisma generate` (client-only) before building.

### UI Components

Shadcn UI components live in `src/components/ui/`. Add new Shadcn components with `bunx shadcn@latest add <component>`. Components are configured via `components.json`.

Tailwind CSS 4 is used — configuration is in `postcss.config.mjs` and `src/app/globals.css` (no `tailwind.config.*` file).

### Email

Email templates are React Email components in `src/components/emails/`. Sending uses the Resend SDK, called directly from `src/lib/auth.ts` callbacks.

### Role System

Users have a `role` field (`"user"` | `"admin"`) on the `User` model, managed by the Better Auth `admin` plugin. Role checks are done against `session.user.role`.
