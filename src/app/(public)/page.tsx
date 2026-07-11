import Link from 'next/link';
import Image from 'next/image';
import {
  Check,
  Star,
  Folder,
  File,
  Lock,
  LayoutDashboard,
  Users,
  Database,
  Settings,
  ShieldCheck,
  Layers,
  Terminal
} from 'lucide-react';
import { LandingNav } from '@/components/landing/nav';
import { CopyCommand } from '@/components/landing/copy-command';
import { LandingFAQ } from '@/components/landing/faq';
import { GithubIcon } from '@/components/shared/icons';

/* ─── App window mock (hero) ─── */
function AppMock() {
  return (
    <div className='relative mx-auto mt-14 max-w-245 px-6'>
      {/* glow */}
      <div className='absolute -inset-px -z-10 rounded-2xl bg-[radial-gradient(60%_80%_at_50%_0%,hsl(var(--foreground)/0.06),transparent_70%)]' />
      <div className='border-border bg-card rounded-3.5 overflow-hidden border shadow-xl'>
        {/* browser chrome */}
        <div className='border-border bg-muted/40 flex h-10 items-center gap-2 border-b px-3.5'>
          <div className='flex gap-2'>
            <i className='border-border size-3 rounded-full border bg-transparent' />
            <i className='border-border size-3 rounded-full border bg-transparent' />
            <i className='border-border size-3 rounded-full border bg-transparent' />
          </div>
          <div className='border-border bg-background text-muted-foreground mx-auto flex h-6 items-center gap-1.5 rounded-full border px-3 font-mono text-[0.72rem]'>
            <Lock className='size-3' />
            app.yoursaas.com/dashboard
          </div>
        </div>
        {/* app grid */}
        <div className='grid min-h-95 grid-cols-[208px_1fr] max-sm:grid-cols-1'>
          {/* sidebar */}
          <aside className='border-border bg-muted/25 hidden border-r p-3.5 sm:flex sm:flex-col sm:gap-1'>
            <div className='mb-2 flex items-center gap-[0.55rem] px-2 py-[0.45rem]'>
              <span className='bg-primary text-primary-foreground rounded-2 grid size-6.5 place-items-center text-[0.7rem] font-semibold'>
                N
              </span>
              <b className='text-[0.82rem] font-[550]'>Acme Inc.</b>
            </div>
            {[
              {
                label: 'Dashboard',
                active: true,
                icon: <LayoutDashboard className='size-4' />
              },
              {
                label: 'Members',
                active: false,
                icon: <Users className='size-4' />
              },
              {
                label: 'Database',
                active: false,
                icon: <Database className='size-4' />
              },
              {
                label: 'Settings',
                active: false,
                icon: <Settings className='size-4' />
              }
            ].map((item) => (
              <div
                key={item.label}
                className={`rounded-2 flex items-center gap-[0.6rem] px-[0.55rem] py-2 text-[0.8rem] font-[450] ${
                  item.active
                    ? 'bg-background text-foreground font-medium shadow-sm'
                    : 'text-muted-foreground'
                }`}
              >
                {item.icon}
                {item.label}
              </div>
            ))}
            <div className='mt-auto flex items-center gap-2 px-[0.55rem] py-2'>
              <span className='bg-muted text-muted-foreground grid size-5.5 place-items-center rounded-full text-[0.6rem] font-semibold'>
                JL
              </span>
              <span className='text-muted-foreground truncate text-[0.8rem]'>
                jane@acme.co
              </span>
            </div>
          </aside>
          {/* main */}
          <main className='p-5'>
            <div className='mb-4 flex items-center justify-between'>
              <h3 className='text-[1.05rem] font-semibold tracking-[-0.02em]'>
                Dashboard
              </h3>
              <span className='border-border text-muted-foreground inline-flex h-8 cursor-default items-center rounded-[calc(var(--radius)-2px)] border px-3 text-[0.78rem]'>
                + Invite
              </span>
            </div>
            {/* stat row */}
            <div className='mb-4 grid grid-cols-3 gap-3 max-sm:grid-cols-2'>
              {[
                { label: 'Users', value: '2,847', delta: '+12%' },
                { label: 'MRR', value: '$8.2k', delta: '+4%' },
                { label: 'Sessions', value: '19.4k', delta: null }
              ].map((s) => (
                <div
                  key={s.label}
                  className='border-border bg-background rounded-2.5 border p-3'
                >
                  <div className='text-muted-foreground text-[0.7rem] tracking-[0.04em] uppercase'>
                    {s.label}
                  </div>
                  <div className='mt-1 text-[1.35rem] font-semibold tracking-[-0.03em]'>
                    {s.value}
                    {s.delta && (
                      <small className='ml-1 text-[0.7rem] font-medium text-green-500'>
                        {s.delta}
                      </small>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {/* user table */}
            <div className='border-border bg-background rounded-2.5 overflow-hidden border'>
              <div className='text-muted-foreground border-border bg-muted/40 grid grid-cols-[1fr_90px_70px] items-center border-b px-3.5 py-2.5 text-[0.68rem] tracking-[0.04em] uppercase'>
                <span>User</span>
                <span>Role</span>
                <span>Status</span>
              </div>
              {[
                { initials: 'AC', name: 'Alex Chen', role: 'Owner' },
                { initials: 'SJ', name: 'Sarah Jenkins', role: 'Admin' },
                { initials: 'MR', name: 'Marco Rossi', role: 'Member' }
              ].map((u) => (
                <div
                  key={u.name}
                  className='border-border grid grid-cols-[1fr_90px_70px] items-center border-t px-3.5 py-2.5 text-[0.78rem]'
                >
                  <span className='flex items-center gap-2'>
                    <span className='bg-muted text-muted-foreground grid size-5.5 place-items-center rounded-full text-[0.62rem] font-semibold'>
                      {u.initials}
                    </span>
                    <span className='font-[450]'>{u.name}</span>
                  </span>
                  <span className='text-muted-foreground'>{u.role}</span>
                  <span className='border-border inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[0.66rem] font-medium text-green-700 dark:text-green-400'>
                    <i className='inline-block size-1.25 rounded-full bg-green-500' />
                    Active
                  </span>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

/* ─── Code window (what's inside section) ─── */
function CodeWindow() {
  return (
    <div className='border-border bg-card rounded-3.5 overflow-hidden border shadow-lg'>
      <div className='border-border bg-muted/40 flex h-10 items-center gap-2 border-b px-3.5'>
        <div className='flex gap-2'>
          <i className='border-border size-3 rounded-full border' />
          <i className='border-border size-3 rounded-full border' />
          <i className='border-border size-3 rounded-full border' />
        </div>
        <span className='border-border bg-background text-muted-foreground mx-auto flex h-6 items-center rounded-full border px-3 font-mono text-[0.7rem]'>
          auth.ts
        </span>
      </div>
      <div className='grid min-h-85 grid-cols-[170px_1fr] max-sm:grid-cols-1'>
        {/* file tree */}
        <div className='border-border bg-muted/25 hidden border-r p-3.5 font-mono text-[0.74rem] sm:block'>
          {[
            {
              indent: false,
              label: 'app',
              icon: <Folder className='size-4' />,
              type: 'folder'
            },
            { indent: true, label: '(auth)', icon: null, type: 'text' },
            { indent: true, label: 'dashboard', icon: null, type: 'text' },
            {
              indent: false,
              label: 'lib',
              icon: <Folder className='size-4' />,
              type: 'folder'
            },
            {
              indent: true,
              label: 'auth.ts',
              icon: <File className='size-4' />,
              type: 'file',
              selected: true
            },
            { indent: true, label: 'prisma.ts', icon: null, type: 'text' },
            {
              indent: false,
              label: 'prisma',
              icon: <Folder className='size-4' />,
              type: 'folder'
            },
            { indent: true, label: 'schema.prisma', icon: null, type: 'text' },
            {
              indent: false,
              label: '.env',
              icon: <File className='size-4' />,
              type: 'file'
            }
          ].map((row, i) => (
            <div
              key={i}
              className={`flex items-center gap-[0.4rem] rounded-[5px] px-1 py-[0.2rem] whitespace-nowrap ${
                row.indent ? 'pl-4' : ''
              } ${
                row.selected
                  ? 'bg-background text-foreground shadow-sm'
                  : row.icon
                    ? 'text-foreground'
                    : 'text-muted-foreground'
              }`}
            >
              {row.icon && <span className='flex-none'>{row.icon}</span>}
              {row.label}
            </div>
          ))}
        </div>
        {/* code */}
        <div className='overflow-auto p-4 font-mono text-[0.78rem] leading-[1.7]'>
          {[
            [
              <span key='k' className='text-[#c026d3] dark:text-[#e879f9]'>
                import
              </span>,
              ' { betterAuth } ',
              <span key='k2' className='text-[#c026d3] dark:text-[#e879f9]'>
                from
              </span>,
              ' ',
              <span key='s' className='text-[#16a34a] dark:text-[#4ade80]'>
                &quot;better-auth&quot;
              </span>,
              ';'
            ],
            [
              <span key='k' className='text-[#c026d3] dark:text-[#e879f9]'>
                import
              </span>,
              ' { prisma } ',
              <span key='k2' className='text-[#c026d3] dark:text-[#e879f9]'>
                from
              </span>,
              ' ',
              <span key='s' className='text-[#16a34a] dark:text-[#4ade80]'>
                &quot;@/lib/prisma&quot;
              </span>,
              ';'
            ],
            [' '],
            [
              <span key='k' className='text-[#c026d3] dark:text-[#e879f9]'>
                export
              </span>,
              ' ',
              <span key='k2' className='text-[#c026d3] dark:text-[#e879f9]'>
                const
              </span>,
              ' ',
              <span key='fn' className='text-[#2563eb] dark:text-[#60a5fa]'>
                auth
              </span>,
              ' = ',
              <span key='fn2' className='text-[#2563eb] dark:text-[#60a5fa]'>
                betterAuth
              </span>,
              '({'
            ],
            [
              '  database: ',
              <span key='fn' className='text-[#2563eb] dark:text-[#60a5fa]'>
                prismaAdapter
              </span>,
              '(prisma),'
            ],
            [
              '  emailAndPassword: { enabled: ',
              <span key='k' className='text-[#c026d3] dark:text-[#e879f9]'>
                true
              </span>,
              ' },'
            ],
            ['  socialProviders: {'],
            [
              '    github: { clientId: process.env.',
              <span key='fn' className='text-[#2563eb] dark:text-[#60a5fa]'>
                GH_ID
              </span>,
              '! },'
            ],
            ['  },'],
            ['});'],
            [' '],
            [
              <span key='cm' className='text-muted-foreground'>
                // → fully typed session, ready to use
              </span>
            ]
          ].map((line, i) => (
            <div key={i} className='flex gap-5'>
              <span className='text-muted-foreground/60 w-5 flex-none text-right select-none'>
                {i + 1}
              </span>
              <span>{line}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Main page ─── */
export default function Home() {
  return (
    <div className='flex min-h-screen flex-col'>
      <LandingNav />

      {/* ── Hero ── */}
      <section className='relative overflow-hidden pt-22 pb-6'>
        <div className='landing-grid-bg' />
        <div className='relative z-10 mx-auto max-w-210 px-6 text-center'>
          {/* Badge */}
          <span className='border-border bg-muted/50 text-muted-foreground inline-flex h-[1.6rem] items-center gap-[0.45rem] rounded-full border px-[0.7rem] text-[0.75rem] font-medium'>
            <span className='size-1.5 rounded-full bg-green-500 shadow-[0_0_0_3px_#22c55e22]' />
            Production-ready · Open source
          </span>

          <h1 className='mt-5.5 text-[clamp(2.6rem,6.4vw,4.4rem)] leading-[1.02] font-semibold tracking-[-0.04em] text-balance'>
            Build your Next.js SaaS
            <br />
            <span className='text-muted-foreground'>
              in minutes, not weeks.
            </span>
          </h1>

          <p className='text-muted-foreground mx-auto mt-5.5 max-w-150 text-[1.075rem] text-pretty'>
            A batteries-included starter pre-configured with Prisma,
            Better&nbsp;Auth and shadcn/ui. Clone it, push the button, and ship
            features instead of boilerplate.
          </p>

          {/* CTA row */}
          <div className='mt-7.5 flex flex-wrap justify-center gap-[0.7rem]'>
            <a
              href='https://railway.com/deploy/nextjs-better-auth-prisma-template?referralCode=HKQvZr&utm_medium=integration&utm_source=template&utm_campaign=generic'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex h-11 items-center transition-all hover:-translate-y-px'
            >
              <img
                src='https://railway.com/button.svg'
                alt='Deploy on Railway'
                className='h-11 w-auto'
              />
            </a>
            <a
              href='https://github.com/laguillo/nextjs-better-auth-prisma-template'
              target='_blank'
              rel='noopener noreferrer'
              className='border-border bg-background hover:bg-muted inline-flex h-11 items-center gap-2 rounded-(--radius) border px-[1.4rem] text-[0.95rem] font-medium transition-colors'
            >
              <GithubIcon className='size-4' />
              Star on GitHub
            </a>
          </div>

          <CopyCommand />
        </div>

        <AppMock />
      </section>

      {/* ── Logo cloud ── */}
      <section id='stack' className='py-10'>
        <div className='mx-auto max-w-6xl px-6'>
          <p className='text-muted-foreground mb-5.5 text-center text-[0.78rem] font-[450]'>
            A modern, type-safe stack — wired together and ready to extend
          </p>
          <div className='flex flex-wrap items-center justify-center gap-x-10 gap-y-3.5'>
            {[
              {
                name: 'Next.js',
                icon: (
                  <Image
                    src='/next-js-logo.svg'
                    alt='Next.js'
                    width={20}
                    height={20}
                    className='dark:invert'
                  />
                )
              },
              {
                name: 'Prisma',
                icon: (
                  <Image
                    src='/prisma-logo.svg'
                    alt='Prisma'
                    width={20}
                    height={20}
                    className='dark:invert'
                  />
                )
              },
              {
                name: 'Better Auth',
                icon: (
                  <Image
                    src='/better-auth-logo.svg'
                    alt='Better Auth'
                    width={20}
                    height={20}
                    className='dark:invert'
                  />
                )
              },
              {
                name: 'shadcn/ui',
                icon: (
                  <Image
                    src='/shadcn-ui-logo.svg'
                    alt='shadcn/ui'
                    width={20}
                    height={20}
                    className='dark:invert'
                  />
                )
              },
              {
                name: 'Tailwind',
                icon: (
                  <Image
                    src='/tailwind-logo.svg'
                    alt='Tailwind CSS'
                    width={20}
                    height={20}
                    className='dark:invert'
                  />
                )
              },
              {
                name: 'PostgreSQL',
                icon: (
                  <Image
                    src='/postgresql-logo.svg'
                    alt='PostgreSQL'
                    width={20}
                    height={20}
                  />
                )
              },
              {
                name: 'TypeScript',
                icon: (
                  <Image
                    src='/typescript-logo.svg'
                    alt='TypeScript'
                    width={20}
                    height={20}
                  />
                )
              }
            ].map((tech) => (
              <span
                key={tech.name}
                className='text-muted-foreground hover:text-foreground flex items-center gap-[0.55rem] text-[0.98rem] font-[550] tracking-[-0.02em] opacity-85 transition-all hover:opacity-100'
              >
                <span className='grid size-5.5 place-items-center'>
                  {tech.icon}
                </span>
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className='border-border bg-border mx-auto h-px w-full max-w-6xl' />

      {/* ── Features ── */}
      <section id='features' className='py-21'>
        <div className='mx-auto max-w-6xl px-6'>
          <div>
            <span className='text-muted-foreground font-mono text-[0.72rem] tracking-[0.12em] uppercase'>
              // what&apos;s inside
            </span>
            <h2 className='mt-[0.6rem] text-[clamp(1.8rem,3.6vw,2.5rem)] font-semibold tracking-[-0.035em] text-balance'>
              Everything you need to ship.
            </h2>
            <p className='text-muted-foreground mt-[0.9rem] max-w-140 text-[1.02rem] text-pretty'>
              Stop configuring ESLint, wrestling with auth flows, and debugging
              database connections. It&apos;s already done — the right way.
            </p>
          </div>
          <div className='mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {[
              {
                icon: <ShieldCheck className='size-5' />,
                title: 'Authentication ready',
                body: 'Secure sessions out of the box with Better Auth. Social logins, email magic links, and role-based access — all pre-wired.',
                tags: ['OAuth', 'Magic links', 'Sessions']
              },
              {
                icon: <Database className='size-5' />,
                title: 'Database optimized',
                body: 'Prisma ORM connected to PostgreSQL with type-safe queries, migrations, and a seeded schema you can extend in minutes.',
                tags: ['Prisma', 'PostgreSQL', 'Type-safe']
              },
              {
                icon: <Layers className='size-5' />,
                title: 'Beautiful UI library',
                body: 'Accessible components built on shadcn/ui and Tailwind. Dark mode, theming, and a polished design system included by default.',
                tags: ['shadcn/ui', 'Tailwind', 'Dark mode']
              }
            ].map((card) => (
              <div
                key={card.title}
                className='border-border bg-card hover:border-ring/50 rounded-3.5 relative overflow-hidden border p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg'
              >
                <div className='border-border bg-muted/50 rounded-3 mb-4 grid size-10 place-items-center border'>
                  {card.icon}
                </div>
                <h3 className='text-[1.05rem] font-semibold tracking-[-0.02em]'>
                  {card.title}
                </h3>
                <p className='text-muted-foreground mt-2 text-[0.9rem] text-pretty'>
                  {card.body}
                </p>
                <div className='mt-3.5 flex flex-wrap gap-1.5'>
                  {card.tags.map((t) => (
                    <span
                      key={t}
                      className='bg-muted/60 text-muted-foreground rounded-1.5 px-2 py-[0.18rem] font-mono text-[0.68rem]'
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Deploy steps ── */}
      <section id='deploy' className='border-border bg-muted/35 border-y py-21'>
        <div className='mx-auto max-w-6xl px-6'>
          <div>
            <span className='text-muted-foreground font-mono text-[0.72rem] tracking-[0.12em] uppercase'>
              // from zero to live
            </span>
            <h2 className='mt-[0.6rem] text-[clamp(1.8rem,3.6vw,2.5rem)] font-semibold tracking-[-0.035em] text-balance'>
              Deploy to Railway in one click.
            </h2>
            <p className='text-muted-foreground mt-[0.9rem] max-w-140 text-[1.02rem] text-pretty'>
              No Dockerfiles, no CI pipelines to babysit. Railway provisions the
              Postgres database, injects the env vars, and builds your app
              automatically.
            </p>
          </div>
          <div className='mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3'>
            {[
              {
                n: '1',
                title: 'Click deploy',
                body: 'Hit the Railway button and pick your GitHub repo. The template ships with a ready-to-go config.'
              },
              {
                n: '2',
                title: 'Provision & connect',
                body: "Railway spins up PostgreSQL and wires the DATABASE_URL for you. Add your auth secret and you're set."
              },
              {
                n: '3',
                title: 'Ship it',
                body: 'Your SaaS is live on a public URL with HTTPS. Push to main and Railway redeploys automatically.'
              }
            ].map((step, i, arr) => (
              <div key={step.n} className='relative'>
                <div className='border-border bg-background grid size-7.5 place-items-center rounded-[8px] border font-mono text-[0.78rem] font-medium'>
                  {step.n}
                </div>
                {i < arr.length - 1 && (
                  <div className='border-border absolute top-4 -right-3 left-10 h-px border-t' />
                )}
                <h3 className='mt-4 text-[1.05rem] font-semibold tracking-[-0.02em]'>
                  {step.title}
                </h3>
                <p className='text-muted-foreground mt-2 text-[0.9rem] text-pretty'>
                  {step.body}
                </p>
              </div>
            ))}
          </div>
          <div className='mt-10 flex flex-wrap items-center gap-[0.7rem]'>
            <a
              href='https://railway.com/deploy/nextjs-better-auth-prisma-template?referralCode=HKQvZr&utm_medium=integration&utm_source=template&utm_campaign=generic'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex h-11 items-center transition-all hover:-translate-y-px'
            >
              <img
                src='https://railway.com/button.svg'
                alt='Deploy on Railway'
                className='h-11 w-auto'
              />
            </a>
            <Link
              href='#faq'
              className='hover:bg-muted inline-flex h-11 items-center rounded-(--radius) px-[1.4rem] text-[0.95rem] font-medium transition-colors'
            >
              Read the docs →
            </Link>
          </div>
        </div>
      </section>

      {/* ── What's inside ── */}
      <section className='py-21'>
        <div className='mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1fr_1.15fr]'>
          <div>
            <span className='text-muted-foreground font-mono text-[0.72rem] tracking-[0.12em] uppercase'>
              // developer experience
            </span>
            <h2 className='mt-[0.6rem] text-[clamp(1.7rem,3.2vw,2.3rem)] font-semibold tracking-[-0.035em] text-balance'>
              Sensible structure, zero surprises.
            </h2>
            <p className='text-muted-foreground mt-[0.9rem] max-w-140 text-[1.02rem] text-pretty'>
              A clean App Router layout with conventions you already know. Open
              the repo and everything is exactly where you&apos;d expect it.
            </p>
            <div className='mt-7 flex flex-col gap-3.5'>
              {[
                {
                  title: 'Typed end-to-end',
                  body: 'TypeScript + Prisma client give you autocomplete from the database to the UI.'
                },
                {
                  title: 'Auth helpers included',
                  body: 'Drop-in isAuthenticated() and protected route patterns ready to copy.'
                },
                {
                  title: 'Lint & format preset',
                  body: 'ESLint, Prettier and a tuned tsconfig so commits stay clean.'
                }
              ].map((item) => (
                <div key={item.title} className='flex items-start gap-3'>
                  <span className='bg-primary text-primary-foreground rounded-1.5 mt-px grid size-5.5 flex-none place-items-center'>
                    <Check className='size-4' />
                  </span>
                  <div>
                    <b className='text-[0.95rem] font-[550]'>{item.title}</b>
                    <span className='text-muted-foreground mt-0.5 block text-[0.86rem]'>
                      {item.body}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <CodeWindow />
        </div>
      </section>

      {/* ── Testimonials ── */}
      {/* <section className='pb-21'>
        <div className='mx-auto max-w-6xl px-6'>
          <div className='text-center'>
            <span className='text-muted-foreground font-mono text-[0.72rem] tracking-[0.12em] uppercase'>
              // trusted by builders
            </span>
            <h2 className='mt-[0.6rem] text-[clamp(1.8rem,3.6vw,2.5rem)] font-semibold tracking-[-0.035em] text-balance'>
              Shipped by developers who hate boilerplate.
            </h2>
          </div>
          <div className='mt-12 grid grid-cols-1 gap-5 md:grid-cols-2'>
            {[
              {
                initials: 'AC',
                name: 'Alex Chen',
                role: 'Senior Frontend Dev',
                body: '"This template saved me at least 40 hours of setup. I had my MVP deployed within an hour of cloning the repo — the code quality is genuinely top notch."'
              },
              {
                initials: 'SJ',
                name: 'Sarah Jenkins',
                role: 'Indie Hacker',
                body: '"The Prisma and Better Auth integration is seamless. I didn\'t have to think about session management or database types — it just works."'
              }
            ].map((q) => (
              <div
                key={q.name}
                className='border-border bg-card rounded-3.5 border p-6.5'
              >
                <div className='text-foreground mb-3.5 flex gap-0.5'>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className='size-4' />
                  ))}
                </div>
                <p className='text-[1rem] tracking-[-0.01em] text-pretty'>
                  {q.body}
                </p>
                <div className='mt-5 flex items-center gap-3'>
                  <span className='bg-muted text-muted-foreground grid size-9.5 place-items-center rounded-full text-[0.78rem] font-semibold'>
                    {q.initials}
                  </span>
                  <div>
                    <b className='block text-[0.88rem] font-[550]'>{q.name}</b>
                    <span className='text-muted-foreground text-[0.78rem]'>
                      {q.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── FAQ ── */}
      <section id='faq' className='pb-21'>
        <div className='mx-auto max-w-6xl px-6'>
          <div className='text-center'>
            <span className='text-muted-foreground font-mono text-[0.72rem] tracking-[0.12em] uppercase'>
              // questions
            </span>
            <h2 className='mt-[0.6rem] text-[clamp(1.8rem,3.6vw,2.5rem)] font-semibold tracking-[-0.035em] text-balance'>
              Frequently asked.
            </h2>
          </div>
          <LandingFAQ />
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className='pb-21'>
        <div className='mx-auto max-w-6xl px-6'>
          <div className='border-border bg-card rounded-4.5 relative overflow-hidden border px-8 py-14 text-center shadow-lg'>
            <div
              className='landing-grid-bg opacity-50'
              style={{
                maskImage:
                  'radial-gradient(ellipse 70% 100% at 50% 0%, #000 30%, transparent 75%)',
                WebkitMaskImage:
                  'radial-gradient(ellipse 70% 100% at 50% 0%, #000 30%, transparent 75%)'
              }}
            />
            <h2 className='relative text-[clamp(1.9rem,3.6vw,2.6rem)] font-semibold tracking-[-0.035em] text-balance'>
              Your SaaS is one click away.
            </h2>
            <p className='text-muted-foreground relative mx-auto mt-3.5 max-w-120'>
              Skip the boilerplate. Deploy the starter to Railway and start
              building the features that actually matter.
            </p>
            <div className='relative mt-7 flex flex-wrap justify-center gap-[0.7rem]'>
              <a
                href='https://railway.com/deploy/nextjs-better-auth-prisma-template?referralCode=HKQvZr&utm_medium=integration&utm_source=template&utm_campaign=generic'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex h-11 items-center transition-all hover:-translate-y-px'
              >
                <img
                  src='https://railway.com/button.svg'
                  alt='Deploy on Railway'
                  className='h-11 w-auto'
                />
              </a>
              <a
                href='https://github.com/laguillo/nextjs-better-auth-prisma-template'
                target='_blank'
                rel='noopener noreferrer'
                className='border-border bg-background hover:bg-muted inline-flex h-11 items-center gap-2 rounded-(--radius) border px-[1.4rem] text-[0.95rem] font-medium transition-colors'
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className='border-border mt-21 border-t pt-14 pb-10'>
        <div className='mx-auto max-w-6xl px-6'>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]'>
            {/* Brand col */}
            <div>
              <Link
                href='/'
                className='flex items-center gap-2.5 text-[0.95rem] font-semibold tracking-[-0.02em]'
              >
                <span className='bg-primary text-primary-foreground grid size-7.5 place-items-center rounded-[8px]'>
                  <Terminal className='size-4' />
                </span>
                Next.js Starter
              </Link>
              <p className='text-muted-foreground mt-3.5 max-w-65 text-[0.88rem] text-pretty'>
                The fastest way to build modern SaaS applications. Open source
                and free to use.
              </p>
              <div className='mt-4.5 flex gap-2'>
                <a
                  href='#'
                  className='border-border bg-background text-foreground hover:bg-muted grid size-9 place-items-center rounded-[calc(var(--radius)-2px)] border transition-colors'
                  aria-label='Twitter'
                >
                  <svg
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='size-4.5'
                  >
                    <path d='M18.244 2H21.5l-7.5 8.57L22.5 22h-6.9l-5.4-7.06L4.02 22H.76l8.02-9.17L1.5 2h7.07l4.88 6.45L18.244 2Zm-1.2 18h1.83L7.04 3.9H5.07L17.044 20Z' />
                  </svg>
                </a>
                <a
                  href='https://github.com/laguillo/nextjs-better-auth-prisma-template'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='border-border bg-background text-foreground hover:bg-muted grid size-9 place-items-center rounded-[calc(var(--radius)-2px)] border transition-colors'
                  aria-label='GitHub'
                >
                  <GithubIcon className='size-4.5' />
                </a>
              </div>
            </div>
            {/* Product */}
            <div>
              <h4 className='mb-3.5 text-[0.8rem] font-semibold'>Product</h4>
              {[
                { href: '#features', label: 'Features' },
                { href: '#stack', label: 'Stack' },
                {
                  href: 'https://railway.com/deploy/nextjs-better-auth-prisma-template?referralCode=HKQvZr&utm_medium=integration&utm_source=template&utm_campaign=generic',
                  label: 'Deploy'
                },
                { href: '#faq', label: 'FAQ' }
              ].map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className='text-muted-foreground hover:text-foreground block py-[0.3rem] text-[0.86rem] transition-colors'
                >
                  {l.label}
                </Link>
              ))}
            </div>
            {/* Resources */}
            <div>
              <h4 className='mb-3.5 text-[0.8rem] font-semibold'>Resources</h4>
              {[
                {
                  href: 'https://github.com/laguillo/nextjs-better-auth-prisma-template',
                  label: 'Documentation',
                  external: true
                },
                { href: '#', label: 'Changelog', external: false },
                { href: '#', label: 'Community', external: false }
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.external ? '_blank' : undefined}
                  rel={l.external ? 'noopener noreferrer' : undefined}
                  className='text-muted-foreground hover:text-foreground block py-[0.3rem] text-[0.86rem] transition-colors'
                >
                  {l.label}
                </a>
              ))}
            </div>
            {/* Stack */}
            <div>
              <h4 className='mb-3.5 text-[0.8rem] font-semibold'>Stack</h4>
              {[
                { href: 'https://nextjs.org', label: 'Next.js' },
                { href: 'https://www.prisma.io', label: 'Prisma' },
                { href: 'https://www.better-auth.com', label: 'Better Auth' },
                { href: 'https://ui.shadcn.com', label: 'shadcn/ui' }
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-muted-foreground hover:text-foreground block py-[0.3rem] text-[0.86rem] transition-colors'
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div className='border-border mt-12 flex flex-wrap items-center justify-between gap-3 border-t pt-6'>
            <p className='text-muted-foreground text-[0.82rem]'>
              © 2026 Next.js Starter Template. MIT Licensed.
            </p>
            <p className='text-muted-foreground font-mono text-[0.78rem]'>
              Built with Next.js · Prisma · Better Auth
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
