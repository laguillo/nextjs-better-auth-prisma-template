import {
  Database,
  LayoutDashboard,
  Layers,
  Mail,
  Rocket,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { DeployButton } from '@/components/landing/deploy-button';

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Authentication, done right',
    body: 'Email & password, Google OAuth, email verification, password reset and role-based access. Wired with Better Auth, not bolted on.',
    tags: ['Better Auth', 'Google OAuth', 'Roles'],
    span: 'lg:col-span-3'
  },
  {
    icon: LayoutDashboard,
    title: 'Admin panel & user dashboard',
    body: 'Two ready-made panels with sidebar, charts and data tables. They ship with demo data you replace with your own.',
    tags: ['Sidebar', 'Charts', 'Data tables'],
    span: 'lg:col-span-3'
  },
  {
    icon: Database,
    title: 'PostgreSQL + Prisma 7',
    body: 'Type-safe queries, versioned migrations and an auth schema you can extend. Migrations apply on every start.',
    tags: ['Prisma', 'PostgreSQL'],
    span: 'lg:col-span-2'
  },
  {
    icon: Mail,
    title: 'Transactional emails',
    body: 'Verification and password-reset emails built with React Email and sent through Resend.',
    tags: ['React Email', 'Resend'],
    span: 'lg:col-span-2'
  },
  {
    icon: Layers,
    title: 'Polished UI kit',
    body: '25+ shadcn/ui components on Base UI and Tailwind 4, with dark mode out of the box.',
    tags: ['shadcn/ui', 'Tailwind 4', 'Dark mode'],
    span: 'lg:col-span-2'
  }
];

export function Features() {
  return (
    <section id='features' className='py-21'>
      <div className='mx-auto max-w-6xl px-6'>
        <div>
          <span className='text-muted-foreground font-mono text-[0.72rem] tracking-[0.12em] uppercase'>
            // what&apos;s inside
          </span>
          <h2 className='mt-2.5 text-[clamp(1.8rem,3.6vw,2.5rem)] font-semibold tracking-[-0.035em] text-balance'>
            Everything you need to ship.
          </h2>
          <p className='text-muted-foreground mt-3.5 max-w-140 text-[1.02rem] text-pretty'>
            Stop wrestling with auth flows and database connections. It&apos;s
            already done, and it&apos;s yours to change.
          </p>
        </div>

        <div className='mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6'>
          {FEATURES.map(({ icon: Icon, title, body, tags, span }) => (
            <div
              key={title}
              className={`border-border bg-card group relative overflow-hidden rounded-2xl border p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-500/40 hover:shadow-lg ${span}`}
            >
              <div className='pointer-events-none absolute -top-16 -right-16 size-40 rounded-full bg-linear-to-br from-violet-500/0 to-fuchsia-500/0 blur-2xl transition-all duration-300 group-hover:from-violet-500/20 group-hover:to-fuchsia-500/20' />
              <div className='mb-4 grid size-10 place-items-center rounded-xl bg-linear-to-br from-violet-500/15 to-fuchsia-500/15 text-violet-600 dark:text-violet-300'>
                <Icon className='size-5' />
              </div>
              <h3 className='text-[1.05rem] font-semibold tracking-[-0.02em]'>
                {title}
              </h3>
              <p className='text-muted-foreground mt-2 text-[0.9rem] text-pretty'>
                {body}
              </p>
              <div className='mt-4 flex flex-wrap gap-1.5'>
                {tags.map((t) => (
                  <span
                    key={t}
                    className='bg-muted/70 text-muted-foreground rounded-md px-2 py-0.5 font-mono text-[0.68rem]'
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Railway-ready banner */}
          <div className='border-border relative overflow-hidden rounded-2xl border bg-neutral-950 p-6 text-white sm:col-span-2 sm:p-8 lg:col-span-6'>
            <div className='pointer-events-none absolute -top-24 right-0 size-72 rounded-full bg-violet-600/40 blur-3xl' />
            <div className='pointer-events-none absolute -bottom-24 left-1/3 size-72 rounded-full bg-fuchsia-600/25 blur-3xl' />
            <div className='relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center'>
              <div className='max-w-xl'>
                <div className='mb-3 flex items-center gap-2 text-violet-300'>
                  <Rocket className='size-5' />
                  <Zap className='size-4' />
                </div>
                <h3 className='text-xl font-semibold tracking-[-0.02em]'>
                  Production defaults for Railway
                </h3>
                <p className='mt-2 text-[0.92rem] text-pretty text-neutral-300'>
                  A healthcheck at{' '}
                  <code className='font-mono text-[0.85em] text-white'>
                    /api/health
                  </code>
                  , restart on failure and migrations on start are already set
                  in{' '}
                  <code className='font-mono text-[0.85em] text-white'>
                    railway.toml
                  </code>
                  . Deploy it and you get a database, HTTPS and a public URL.
                </p>
              </div>
              <DeployButton placement='features' size='md' glow />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
