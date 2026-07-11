# Next.js Better Auth Prisma Template

This is a robust and modern template for Next.js applications, pre-configured with advanced authentication, database, and ready-to-use UI components. Designed to accelerate the development of secure and scalable web applications.

[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/deploy/nextjs-better-auth-prisma-template?referralCode=HKQvZr&utm_medium=integration&utm_source=template&utm_campaign=generic)

## ✨ Main Features

- **Complete Authentication**: Robust authentication system with [Better Auth](https://better-auth.com/)
  - Email & Password
  - Social Login (Google)
  - Email Verification
  - Password Recovery
  - Session Management
- **Roles and Permissions**: Role system (Admin, User) integrated with route protection
- **Database**: PostgreSQL with Prisma ORM and custom output in `src/generated/prisma`
- **Modern UI**: Styled components with Tailwind CSS 4 and Shadcn UI (Base UI style, not Radix)
- **Transactional Emails**: Email templates with React Email and sending via Resend
- **Dashboards**: Pre-built layouts for admin and user panels
- **Type-Safe**: Safe development with TypeScript throughout the project

## 🚀 Technologies

- **[Next.js 16.2](https://nextjs.org/)**: App Router, Server Components and Server Actions
- **[React 19.2](https://react.dev/)**: Latest React features
- **[Better Auth 1.6](https://better-auth.com/)**: Modern and secure authentication
- **[Prisma 7.8](https://www.prisma.io/)**: ORM for interacting with PostgreSQL, using the `@prisma/adapter-pg` driver adapter
- **[Tailwind CSS 4.3](https://tailwindcss.com/)**: Fast and flexible styling
- **[Shadcn UI](https://ui.shadcn.com/)** on **[Base UI](https://base-ui.com/)**: Accessible and customizable UI components
- **[Bun](https://bun.sh/)**: Fast JavaScript runtime (recommended)

## 🛠️ Installation and Setup

Follow these steps to set up the project in your local environment:

### 1. Clone the repository

```bash
git clone <repository-url>
cd nextjs-better-auth-prisma-template
```

### 2. Install dependencies

We recommend using **Bun** for a faster experience:

```bash
bun install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root and configure the following variables:

```env
# Database (PostgreSQL)
DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"

# Better Auth
BETTER_AUTH_SECRET="your_super_secure_secret" # Generate with: openssl rand -base64 32
BETTER_AUTH_URL="http://localhost:3000"
NEXT_PUBLIC_BASE_URL="http://localhost:3000"

# OAuth Providers (Google)
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"

# Email (Resend)
RESEND_API_KEY="re_123456789"
EMAIL_SENDER_NAME="Your App"
EMAIL_SENDER_ADDRESS="noreply@yourapp.com"
```

### 4. Configure the Database

Run Prisma migrations to create the tables:

```bash
bunx prisma migrate dev
```

This will also generate the Prisma client in `src/generated/prisma` automatically.

### 5. Start the Development Server

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```
├── prisma/
│   ├── schema.prisma       # Database schema
│   └── migrations/         # Migration history
├── public/                 # Static files (favicons, tech-stack logo SVGs)
├── src/
│   ├── app/                # Application routes (App Router)
│   │   ├── (auth)/         # Authentication routes
│   │   │   ├── login/
│   │   │   ├── signup/
│   │   │   ├── forgot-password/
│   │   │   └── reset-password/
│   │   ├── (public)/       # Public landing page
│   │   ├── (protected)/    # Routes requiring a session
│   │   │   ├── dashboard/  # User panel
│   │   │   └── admin/      # Admin panel (requires role === "admin")
│   │   └── api/            # API Routes (Better Auth handler, health check)
│   ├── components/         # React components
│   │   ├── admin/          # Admin panel components (+ layout/ subfolder)
│   │   ├── dashboard/      # User panel components (+ layout/ subfolder)
│   │   ├── emails/         # Email templates (React Email)
│   │   ├── landing/        # Public landing page components
│   │   ├── shared/         # Shared components
│   │   └── ui/             # Base components (Shadcn UI on Base UI)
│   ├── generated/          # Generated code
│   │   └── prisma/         # Generated Prisma client
│   ├── hooks/              # Custom React Hooks
│   ├── lib/                # Utilities and configuration
│   │   ├── auth.ts         # Better Auth configuration (server-only)
│   │   ├── auth-client.ts  # Better Auth client (Client Components)
│   │   ├── prisma.ts       # Prisma client singleton
│   │   └── utils.ts        # Helper functions
│   ├── server/             # Server Actions
│   └── types/              # TypeScript type definitions
```

## 📜 Available Scripts

- `bun dev`: Starts the development server with Bun runtime
- `bun build`: Generates the Prisma client and builds the application for production
- `bun start`: Applies pending migrations and starts the production server
- `bun lint`: Runs the linter to check the code
- `bunx prisma studio`: Opens Prisma Studio to visually manage the database
- `bunx prisma migrate dev`: Creates and applies database migrations
- `bunx prisma generate`: Regenerates the Prisma client after schema changes without creating a migration

## 🗄️ Database Models

The project includes the following models:

- **User**: User information (id, name, email, role, banned, etc.)
- **Session**: Session management with IP and userAgent information
- **Account**: Linking with OAuth providers and credentials
- **Verification**: Tokens for email verification and password recovery

## 📚 More Information

- [Next.js Documentation](https://nextjs.org/docs)
- [Better Auth Documentation](https://better-auth.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com/docs)
- [Base UI Documentation](https://base-ui.com/react/overview/quick-start)

## 📄 License

This project is under the MIT license.
