# Next.js Better Auth Prisma Template

Este es un template robusto y moderno para aplicaciones Next.js, pre-configurado con autenticación avanzada, base de datos y componentes de UI listos para usar. Diseñado para acelerar el desarrollo de aplicaciones web seguras y escalables.

[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/deploy/nextjs-better-auth-prisma-template?referralCode=HKQvZr&utm_medium=integration&utm_source=template&utm_campaign=generic)

## ✨ Características Principales

- **Autenticación Completa**: Sistema de autenticación robusto con [Better Auth](https://better-auth.com/)
  - Email & Password
  - Social Login (Google)
  - Verificación de Email
  - Recuperación de Contraseña
  - Gestión de Sesiones
- **Roles y Permisos**: Sistema de roles (Admin, User) integrado con protección de rutas
- **Base de Datos**: PostgreSQL con Prisma ORM y output personalizado en `src/generated/prisma`
- **UI Moderna**: Componentes estilizados con Tailwind CSS 4 y Shadcn UI
- **Emails Transaccionales**: Plantillas de email con React Email y envío mediante Resend
- **Dashboards**: Layouts pre-construidos para paneles de administración y usuario
- **Type-Safe**: Desarrollo seguro con TypeScript en todo el proyecto

## 🚀 Tecnologías

- **[Next.js 16.1](https://nextjs.org/)**: App Router, Server Components y Server Actions
- **[React 19.2](https://react.dev/)**: Últimas características de React
- **[Better Auth 1.4](https://better-auth.com/)**: Autenticación moderna y segura
- **[Prisma 7.2](https://www.prisma.io/)**: ORM para interactuar con PostgreSQL
- **[Tailwind CSS 4.1](https://tailwindcss.com/)**: Estilos rápidos y flexibles
- **[Shadcn UI](https://ui.shadcn.com/)**: Componentes de UI accesibles y personalizables
- **[Bun](https://bun.sh/)**: Runtime de JavaScript rápido (recomendado)

## 🛠️ Instalación y Configuración

Sigue estos pasos para levantar el proyecto en tu entorno local:

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd nextjs-better-auth-prisma-template
```

### 2. Instalar dependencias

Recomendamos usar **Bun** para una experiencia más rápida:

```bash
bun install
```

### 3. Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto y configura las siguientes variables:

```env
# Base de Datos (PostgreSQL)
DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"

# Better Auth
BETTER_AUTH_SECRET="tu_secreto_super_seguro" # Generar con: openssl rand -base64 32
BETTER_AUTH_URL="http://localhost:3000"

# Proveedores OAuth (Google)
GOOGLE_CLIENT_ID="tu_google_client_id"
GOOGLE_CLIENT_SECRET="tu_google_client_secret"

# Email (Resend)
RESEND_API_KEY="re_123456789"
EMAIL_SENDER_NAME="Tu App"
EMAIL_SENDER_ADDRESS="noreply@tuapp.com"
```

### 4. Configurar la Base de Datos

Ejecuta las migraciones de Prisma para crear las tablas:

```bash
bunx prisma migrate dev
```

Esto también generará el cliente de Prisma en `src/generated/prisma` automáticamente.

### 5. Iniciar el Servidor de Desarrollo

```bash
bun dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📂 Estructura del Proyecto

```
├── prisma/
│   ├── schema.prisma      # Esquema de base de datos
│   └── migrations/        # Historial de migraciones
├── public/                # Archivos estáticos
├── src/
│   ├── app/               # Rutas de la aplicación (App Router)
│   │   ├── (auth)/        # Rutas de autenticación
│   │   │   ├── login/
│   │   │   ├── signup/
│   │   │   ├── forgot-password/
│   │   │   └── reset-password/
│   │   ├── (site)/        # Rutas públicas (landing page)
│   │   ├── dashboard/     # Panel de usuario (protegido)
│   │   ├── admin/         # Panel de administración (protegido)
│   │   └── api/           # API Routes
│   ├── components/        # Componentes de React
│   │   ├── admin/         # Componentes del panel de admin
│   │   ├── dashboard/     # Componentes del panel de usuario
│   │   ├── emails/        # Plantillas de email (React Email)
│   │   ├── shared/        # Componentes compartidos
│   │   ├── site/          # Componentes del sitio público
│   │   └── ui/            # Componentes base (Shadcn UI)
│   ├── generated/         # Código generado
│   │   └── prisma/        # Cliente de Prisma generado
│   ├── hooks/             # React Hooks personalizados
│   ├── lib/               # Utilidades y configuración
│   │   ├── auth.ts        # Configuración de Better Auth
│   │   ├── auth-client.ts # Cliente de Better Auth
│   │   ├── prisma.ts      # Cliente de Prisma
│   │   └── utils.ts       # Funciones auxiliares
│   ├── server/            # Lógica del servidor
│   └── types/             # Definiciones de tipos TypeScript
```

## 📜 Scripts Disponibles

- `bun dev`: Inicia el servidor de desarrollo con Bun runtime
- `bun build`: Construye la aplicación para producción
- `bun start`: Inicia el servidor de producción
- `bun lint`: Ejecuta el linter para verificar el código
- `bunx prisma studio`: Abre Prisma Studio para gestionar la base de datos visualmente
- `bunx prisma migrate dev`: Crea y aplica migraciones de base de datos

## 🗄️ Modelos de Base de Datos

El proyecto incluye los siguientes modelos:

- **User**: Información del usuario (id, name, email, role, banned, etc.)
- **Session**: Gestión de sesiones con información de IP y userAgent
- **Account**: Vinculación con proveedores OAuth y credenciales
- **Verification**: Tokens para verificación de email y recuperación de contraseña

## 📚 Más Información

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de Better Auth](https://better-auth.com/docs)
- [Documentación de Prisma](https://www.prisma.io/docs)
- [Documentación de Shadcn UI](https://ui.shadcn.com/docs)

## 📄 Licencia

Este proyecto está bajo la licencia MIT.


Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📜 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Construye la aplicación para producción.
- `npm run start`: Inicia el servidor de producción.
- `npm run lint`: Ejecuta el linter para verificar el código.
- `npx prisma studio`: Abre una interfaz visual para gestionar tu base de datos.

## 📚 Aprende Más

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de Better Auth](https://better-auth.com/docs)
- [Documentación de Prisma](https://www.prisma.io/docs)
