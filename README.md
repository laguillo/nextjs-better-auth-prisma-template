# Next.js Better Auth Prisma Template

Este es un template robusto y moderno para aplicaciones Next.js, pre-configurado con autenticación avanzada, base de datos y componentes de UI listos para usar. Diseñado para acelerar el desarrollo de aplicaciones web seguras y escalables.

## ✨ Características Principales

- **Autenticación Completa**: Sistema de autenticación robusto con [Better Auth](https://better-auth.com/).
  - Email & Password
  - Social Login (Google)
  - Verificación de Email
  - Recuperación de Contraseña
  - Gestión de Sesiones
- **Roles y Permisos**: Sistema de roles (Admin, User) integrado.
- **Base de Datos**: Configuración lista para usar con PostgreSQL y Prisma ORM.
- **UI Moderna**: Componentes estilizados con Tailwind CSS y Shadcn UI.
- **Emails Transaccionales**: Plantillas de email con React Email y envío mediante Resend.
- **Dashboards**: Layouts pre-construidos para paneles de administración y usuario.
- **Type-Safe**: Desarrollo seguro con TypeScript en todo el proyecto.

## 🚀 Tecnologías

- **[Next.js 16](https://nextjs.org/)**: App Router, Server Components y Server Actions.
- **[React 19](https://react.dev/)**: Últimas características de React.
- **[Better Auth](https://better-auth.com/)**: Autenticación moderna y segura.
- **[Prisma](https://www.prisma.io/)**: ORM para interactuar con la base de datos.
- **[Tailwind CSS](https://tailwindcss.com/)**: Estilos rápidos y flexibles.
- **[Shadcn UI](https://ui.shadcn.com/)**: Componentes de UI accesibles y personalizables.
- **[Bun](https://bun.sh/)**: Runtime de JavaScript rápido (opcional, compatible con Node.js/npm/pnpm).

## 🛠️ Instalación y Configuración

Sigue estos pasos para levantar el proyecto en tu entorno local:

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd nextjs-better-auth-prisma-template
```

### 2. Instalar dependencias

Recomendamos usar **Bun** para una experiencia más rápida, pero npm o pnpm también funcionan.

```bash
bun install
# o
npm install
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

Ejecuta las migraciones de Prisma para crear las tablas en tu base de datos:

```bash
bunx prisma migrate dev
# o
npx prisma migrate dev
```

### 5. Iniciar el Servidor de Desarrollo

```bash
bun dev
# o
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## 📂 Estructura del Proyecto

```
├── prisma/                # Esquema de base de datos y migraciones
├── public/                # Archivos estáticos
├── src/
│   ├── app/               # Rutas de la aplicación (App Router)
│   │   ├── (auth)/        # Rutas de autenticación (login, signup, etc.)
│   │   ├── (site)/        # Rutas públicas (landing page)
│   │   ├── dashboard/     # Rutas protegidas del panel de usuario
│   │   ├── admin/         # Rutas protegidas del panel de administración
│   │   └── api/           # Endpoints de API
│   ├── components/        # Componentes de React
│   │   ├── emails/        # Plantillas de email (React Email)
│   │   ├── ui/            # Componentes base (Shadcn UI)
│   │   └── ...
│   ├── lib/               # Utilidades (auth client, prisma client, etc.)
│   └── ...
```

## 📜 Scripts Disponibles

- `bun dev`: Inicia el servidor de desarrollo.
- `bun build`: Construye la aplicación para producción.
- `bun start`: Inicia el servidor de producción.
- `bun lint`: Ejecuta el linter para verificar el código.
- `bun prisma studio`: Abre una interfaz visual para gestionar la base de datos.

## 📚 Más Información

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de Better Auth](https://better-auth.com/docs)
- [Documentación de Prisma](https://www.prisma.io/docs)
- [Documentación de Shadcn UI](https://ui.shadcn.com/docs)

## 📄 Licencia

Este proyecto está bajo la licencia MIT.
- **Account**: Vinculación con proveedores OAuth (Google, GitHub).
- **Verification**: Tokens para verificación de email y contraseñas.

### Dashboard
Un panel de administración moderno (`src/app/dashboard`) que incluye:
- **Sidebar**: Navegación responsiva y colapsable.
- **Gráficos**: Visualización de datos con Recharts.
- **Tablas**: Tablas de datos interactivas.

## 🛠️ Guía de Implementación

Sigue estos pasos para levantar el proyecto en tu entorno local:

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd nextjs-better-auth-prisma-template
```

### 2. Instalar dependencias

```bash
npm install
# o
yarn install
# o
pnpm install
# o
bun install
```

### 3. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto basándote en el siguiente ejemplo:

```env
# Base de datos (PostgreSQL)
DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"

# Better Auth
BETTER_AUTH_SECRET="tu_secreto_generado_aleatoriamente"
BETTER_AUTH_URL="http://localhost:3000"

# Proveedores OAuth (Opcional si no los usas)
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""

# Email (Resend)
RESEND_API_KEY="re_123456789"
EMAIL_SENDER_NAME="Tu App"
EMAIL_SENDER_ADDRESS="no-reply@tuapp.com"
```

### 4. Configurar la base de datos

Ejecuta las migraciones de Prisma para crear las tablas en tu base de datos:

```bash
npx prisma migrate dev
```

### 5. Iniciar el servidor de desarrollo

```bash
npm run dev
```

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
