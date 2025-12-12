# Next.js Better Auth Prisma Template

Este es un template robusto y moderno para aplicaciones Next.js, pre-configurado con autenticación avanzada, base de datos y componentes de UI listos para usar.

## 🚀 Tecnologías Principales

- **[Next.js 16](https://nextjs.org/)**: El framework de React para producción.
- **[React 19](https://react.dev/)**: La biblioteca para interfaces de usuario web y nativas.
- **[Better Auth](https://better-auth.com/)**: Solución de autenticación completa y segura.
- **[Prisma](https://www.prisma.io/)**: ORM de próxima generación para Node.js y TypeScript.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework de CSS utilitario.
- **[Shadcn UI](https://ui.shadcn.com/)**: Componentes de UI reutilizables construidos con Radix UI y Tailwind CSS.
- **[React Email](https://react.email/)**: Construcción de emails con componentes React.
- **[Resend](https://resend.com/)**: API para envío de emails transaccionales.

## 📂 Estructura del Proyecto

```
├── prisma/                # Esquema de base de datos y migraciones
├── public/                # Archivos estáticos
├── src/
│   ├── app/               # Rutas de la aplicación (App Router)
│   │   ├── (auth)/        # Rutas de autenticación (login, signup, etc.)
│   │   ├── (site)/        # Rutas públicas (landing page)
│   │   ├── dashboard/     # Rutas protegidas del panel de control
│   │   └── api/           # Rutas API
│   ├── components/        # Componentes de React
│   │   ├── dashboard/     # Componentes específicos del dashboard
│   │   ├── emails/        # Plantillas de email
│   │   ├── ui/            # Componentes base (Shadcn UI)
│   │   └── ...
│   ├── lib/               # Utilidades y configuraciones (auth, prisma, etc.)
│   └── ...
└── ...
```

## 🧩 Componentes Principales

### Autenticación (`src/lib/auth.ts`)
Configuración centralizada de **Better Auth** que incluye:
- **Email & Password**: Registro e inicio de sesión tradicional.
- **Social Login**: Configurado para Google y GitHub.
- **Verificación de Email**: Flujo completo con envío de correos.
- **Recuperación de Contraseña**: Flujo seguro para restablecer credenciales.
- **Roles**: Soporte para roles de usuario (ej. admin, user).

### Base de Datos (Prisma)
El esquema (`prisma/schema.prisma`) define los modelos esenciales para la autenticación y gestión de usuarios:
- **User**: Almacena la información del usuario, rol y estado.
- **Session**: Manejo de sesiones activas.
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
