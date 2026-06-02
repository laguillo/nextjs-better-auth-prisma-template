import Link from 'next/link';
import { LandingNav } from '@/components/landing/nav';
import { CopyCommand } from '@/components/landing/copy-command';
import { LandingFAQ } from '@/components/landing/faq';

/* ─── Icons (Lucide-style inline SVGs for server component) ─── */

function CheckIcon({ className = 'size-[13px]' }) {
  return (
    <svg
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='3'
      className={className}
      viewBox='0 0 24 24'
    >
      <path d='M20 6 9 17l-5-5' />
    </svg>
  );
}
function BoltIcon({ className = 'size-4' }) {
  return (
    <svg
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      className={className}
      viewBox='0 0 24 24'
    >
      <path d='M13 2 3 14h8l-1 8 10-12h-8z' />
    </svg>
  );
}
function GithubIcon({ className = 'size-4' }) {
  return (
    <svg fill='currentColor' className={className} viewBox='0 0 24 24'>
      <path d='M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.34 9.34 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2' />
    </svg>
  );
}
function StarIcon({ className = 'size-[15px]' }) {
  return (
    <svg fill='currentColor' className={className} viewBox='0 0 24 24'>
      <path d='m12 2 2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17l-6 3.4 1.4-6.8L2.3 9l6.8-.7Z' />
    </svg>
  );
}
function FolderIcon({ className = 'size-[13px]' }) {
  return (
    <svg
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      className={className}
      viewBox='0 0 24 24'
    >
      <path d='M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z' />
    </svg>
  );
}
function FileIcon({ className = 'size-[13px]' }) {
  return (
    <svg
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      className={className}
      viewBox='0 0 24 24'
    >
      <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z' />
      <path d='M14 2v6h6' />
    </svg>
  );
}

/* ─── App window mock (hero) ─── */
function AppMock() {
  return (
    <div className='relative mx-auto mt-14 max-w-[980px] px-6'>
      {/* glow */}
      <div className='absolute -inset-px -z-10 rounded-2xl bg-[radial-gradient(60%_80%_at_50%_0%,hsl(var(--foreground)/0.06),transparent_70%)]' />
      <div className='border-border bg-card overflow-hidden rounded-[14px] border shadow-xl'>
        {/* browser chrome */}
        <div className='border-border bg-muted/40 flex h-[42px] items-center gap-2 border-b px-[14px]'>
          <div className='flex gap-[7px]'>
            <i className='border-border size-[11px] rounded-full border bg-transparent' />
            <i className='border-border size-[11px] rounded-full border bg-transparent' />
            <i className='border-border size-[11px] rounded-full border bg-transparent' />
          </div>
          <div className='border-border bg-background text-muted-foreground mx-auto flex h-6 items-center gap-1.5 rounded-full border px-3 font-mono text-[0.72rem]'>
            <svg
              viewBox='0 0 24 24'
              width='11'
              height='11'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
            >
              <rect x='3' y='11' width='18' height='11' rx='2' />
              <path d='M7 11V7a5 5 0 0 1 10 0v4' />
            </svg>
            app.yoursaas.com/dashboard
          </div>
        </div>
        {/* app grid */}
        <div className='grid min-h-[380px] grid-cols-[208px_1fr] max-sm:grid-cols-1'>
          {/* sidebar */}
          <aside className='border-border bg-muted/25 hidden border-r p-[14px] sm:flex sm:flex-col sm:gap-1'>
            <div className='mb-2 flex items-center gap-[0.55rem] px-2 py-[0.45rem]'>
              <span className='bg-primary text-primary-foreground grid size-[26px] place-items-center rounded-[7px] text-[0.7rem] font-semibold'>
                N
              </span>
              <b className='text-[0.82rem] font-[550]'>Acme Inc.</b>
            </div>
            {[
              {
                label: 'Dashboard',
                active: true,
                icon: (
                  <svg
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='size-[15px]'
                  >
                    <rect x='3' y='3' width='7' height='9' rx='1' />
                    <rect x='14' y='3' width='7' height='5' rx='1' />
                    <rect x='14' y='12' width='7' height='9' rx='1' />
                    <rect x='3' y='16' width='7' height='5' rx='1' />
                  </svg>
                )
              },
              {
                label: 'Members',
                active: false,
                icon: (
                  <svg
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='size-[15px]'
                  >
                    <path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' />
                    <circle cx='9' cy='7' r='4' />
                    <path d='M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' />
                  </svg>
                )
              },
              {
                label: 'Database',
                active: false,
                icon: (
                  <svg
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='size-[15px]'
                  >
                    <ellipse cx='12' cy='5' rx='9' ry='3' />
                    <path d='M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5' />
                    <path d='M3 12c0 1.66 4 3 9 3s9-1.34 9-3' />
                  </svg>
                )
              },
              {
                label: 'Settings',
                active: false,
                icon: (
                  <svg
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='size-[15px]'
                  >
                    <path d='M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z' />
                    <path d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-2.82 1.17V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15H4.5a2 2 0 0 1 0-4H4.6a1.65 1.65 0 0 0 1.51-1z' />
                  </svg>
                )
              }
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-[0.6rem] rounded-[7px] px-[0.55rem] py-2 text-[0.8rem] font-[450] ${
                  item.active
                    ? 'bg-background text-foreground font-[500] shadow-sm'
                    : 'text-muted-foreground'
                }`}
              >
                {item.icon}
                {item.label}
              </div>
            ))}
            <div className='mt-auto flex items-center gap-2 px-[0.55rem] py-2'>
              <span className='bg-muted text-muted-foreground grid size-[22px] place-items-center rounded-full text-[0.6rem] font-semibold'>
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
                  className='border-border bg-background rounded-[10px] border p-3'
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
            <div className='border-border bg-background overflow-hidden rounded-[10px] border'>
              <div className='text-muted-foreground border-border bg-muted/40 grid grid-cols-[1fr_90px_70px] items-center border-b px-[14px] py-[10px] text-[0.68rem] tracking-[0.04em] uppercase'>
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
                  className='border-border grid grid-cols-[1fr_90px_70px] items-center border-t px-[14px] py-[10px] text-[0.78rem]'
                >
                  <span className='flex items-center gap-2'>
                    <span className='bg-muted text-muted-foreground grid size-[22px] place-items-center rounded-full text-[0.62rem] font-semibold'>
                      {u.initials}
                    </span>
                    <span className='font-[450]'>{u.name}</span>
                  </span>
                  <span className='text-muted-foreground'>{u.role}</span>
                  <span className='border-border inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[0.66rem] font-medium text-green-700 dark:text-green-400'>
                    <i className='inline-block size-[5px] rounded-full bg-green-500' />
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
    <div className='border-border bg-card overflow-hidden rounded-[14px] border shadow-lg'>
      <div className='border-border bg-muted/40 flex h-[42px] items-center gap-2 border-b px-[14px]'>
        <div className='flex gap-[7px]'>
          <i className='border-border size-[11px] rounded-full border' />
          <i className='border-border size-[11px] rounded-full border' />
          <i className='border-border size-[11px] rounded-full border' />
        </div>
        <span className='border-border bg-background text-muted-foreground mx-auto flex h-6 items-center rounded-full border px-3 font-mono text-[0.7rem]'>
          auth.ts
        </span>
      </div>
      <div className='grid min-h-[340px] grid-cols-[170px_1fr] max-sm:grid-cols-1'>
        {/* file tree */}
        <div className='border-border bg-muted/25 hidden border-r p-[14px] font-mono text-[0.74rem] sm:block'>
          {[
            {
              indent: false,
              label: 'app',
              icon: <FolderIcon />,
              type: 'folder'
            },
            { indent: true, label: '(auth)', icon: null, type: 'text' },
            { indent: true, label: 'dashboard', icon: null, type: 'text' },
            {
              indent: false,
              label: 'lib',
              icon: <FolderIcon />,
              type: 'folder'
            },
            {
              indent: true,
              label: 'auth.ts',
              icon: <FileIcon />,
              type: 'file',
              selected: true
            },
            { indent: true, label: 'prisma.ts', icon: null, type: 'text' },
            {
              indent: false,
              label: 'prisma',
              icon: <FolderIcon />,
              type: 'folder'
            },
            { indent: true, label: 'schema.prisma', icon: null, type: 'text' },
            { indent: false, label: '.env', icon: <FileIcon />, type: 'file' }
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
      <section className='relative overflow-hidden pt-[88px] pb-6'>
        <div className='landing-grid-bg' />
        <div className='relative z-10 mx-auto max-w-[840px] px-6 text-center'>
          {/* Badge */}
          <span className='border-border bg-muted/50 text-muted-foreground inline-flex h-[1.6rem] items-center gap-[0.45rem] rounded-full border px-[0.7rem] text-[0.75rem] font-medium'>
            <span className='size-[6px] rounded-full bg-green-500 shadow-[0_0_0_3px_#22c55e22]' />
            Production-ready · Open source
          </span>

          <h1 className='mt-[22px] text-[clamp(2.6rem,6.4vw,4.4rem)] leading-[1.02] font-semibold tracking-[-0.04em] text-balance'>
            Build your Next.js SaaS
            <br />
            <span className='text-muted-foreground'>
              in minutes, not weeks.
            </span>
          </h1>

          <p className='text-muted-foreground mx-auto mt-[22px] max-w-[600px] text-[1.075rem] [text-wrap:pretty]'>
            A batteries-included starter pre-configured with Prisma,
            Better&nbsp;Auth and shadcn/ui. Clone it, push the button, and ship
            features instead of boilerplate.
          </p>

          {/* CTA row */}
          <div className='mt-[30px] flex flex-wrap justify-center gap-[0.7rem]'>
            <Link
              href='https://railway.com/deploy/nextjs-better-auth-prisma-template?referralCode=HKQvZr&utm_medium=integration&utm_source=template&utm_campaign=generic'
              className='bg-primary text-primary-foreground inline-flex h-[2.875rem] items-center gap-2 rounded-[var(--radius)] px-[1.4rem] text-[0.95rem] font-medium shadow-sm transition-all hover:-translate-y-px hover:opacity-90'
            >
              <BoltIcon />
              Deploy on Railway
            </Link>
            <a
              href='https://github.com/laguillo/nextjs-better-auth-prisma-template'
              target='_blank'
              rel='noopener noreferrer'
              className='border-border bg-background hover:bg-muted inline-flex h-[2.875rem] items-center gap-2 rounded-[var(--radius)] border px-[1.4rem] text-[0.95rem] font-medium transition-colors'
            >
              <GithubIcon />
              Star on GitHub
            </a>
          </div>

          <CopyCommand />
        </div>

        <AppMock />
      </section>

      {/* ── Logo cloud ── */}
      <section id='stack' className='py-10'>
        <div className='mx-auto max-w-[1120px] px-6'>
          <p className='text-muted-foreground mb-[22px] text-center text-[0.78rem] font-[450]'>
            A modern, type-safe stack — wired together and ready to extend
          </p>
          <div className='flex flex-wrap items-center justify-center gap-x-10 gap-y-[14px]'>
            {[
              {
                name: 'Next.js',
                icon: (
                  <svg
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='size-5'
                  >
                    <circle
                      cx='12'
                      cy='12'
                      r='11'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='1.4'
                    />
                    <path
                      d='M9 8v8M9 8l6.5 8.5M15 8v6.2'
                      stroke='currentColor'
                      strokeWidth='1.6'
                      fill='none'
                      strokeLinecap='round'
                    />
                  </svg>
                )
              },
              {
                name: 'Prisma',
                icon: (
                  <svg
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.6'
                    strokeLinejoin='round'
                    className='size-5'
                  >
                    <path d='M5 16.5 11 3.2c.3-.7 1.3-.6 1.5.1l4.3 15c.2.6-.4 1.2-1 1L5.7 17.8a.9.9 0 0 1-.7-1.3Z' />
                  </svg>
                )
              },
              {
                name: 'Better Auth',
                icon: (
                  <svg
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.7'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='size-5'
                  >
                    <path d='M12 2 4 5v6c0 5 3.5 8 8 11 4.5-3 8-6 8-11V5l-8-3Z' />
                    <path d='m9 12 2 2 4-4' />
                  </svg>
                )
              },
              {
                name: 'shadcn/ui',
                icon: (
                  <svg
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.6'
                    className='size-5'
                  >
                    <circle cx='8.5' cy='8.5' r='5.5' />
                    <circle cx='15.5' cy='15.5' r='5.5' />
                  </svg>
                )
              },
              {
                name: 'Tailwind',
                icon: (
                  <svg
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.7'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='size-5'
                  >
                    <path d='M6 11c1.5-4 4-5 7.5-3 2.3 1.3 3 .3 4.5-1-1.5 4-4 5-7.5 3-2.3-1.3-3-.3-4.5 1Z' />
                    <path
                      d='M2 16c1.5-4 4-5 7.5-3 2.3 1.3 3 .3 4.5-1'
                      opacity='.5'
                    />
                  </svg>
                )
              },
              {
                name: 'PostgreSQL',
                icon: (
                  <svg
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    className='size-5'
                  >
                    <path d='M12 21c-4 0-7-3-7-9 0-5 2.5-7 5-7 1.5 0 2 .8 2 2.2' />
                    <path d='M12 21c4 0 6.5-3 6.5-8.5C18.5 7 16.5 5 14 5' />
                    <path d='M11 9c.5-1 1.5-1.5 2.5-1.2' />
                  </svg>
                )
              },
              {
                name: 'TypeScript',
                icon: (
                  <svg
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.7'
                    className='size-5'
                  >
                    <rect x='3' y='3' width='18' height='18' rx='3' />
                    <path d='M8 10h5M10.5 10v7' strokeLinecap='round' />
                  </svg>
                )
              }
            ].map((tech) => (
              <span
                key={tech.name}
                className='text-muted-foreground hover:text-foreground flex items-center gap-[0.55rem] text-[0.98rem] font-[550] tracking-[-0.02em] opacity-85 transition-all hover:opacity-100'
              >
                <span className='grid size-[22px] place-items-center'>
                  {tech.icon}
                </span>
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className='border-border bg-border mx-auto h-px w-full max-w-[1120px]' />

      {/* ── Features ── */}
      <section id='features' className='py-[84px]'>
        <div className='mx-auto max-w-[1120px] px-6'>
          <div>
            <span className='text-muted-foreground font-mono text-[0.72rem] tracking-[0.12em] uppercase'>
              // what&apos;s inside
            </span>
            <h2 className='mt-[0.6rem] text-[clamp(1.8rem,3.6vw,2.5rem)] font-semibold tracking-[-0.035em] text-balance'>
              Everything you need to ship.
            </h2>
            <p className='text-muted-foreground mt-[0.9rem] max-w-[560px] text-[1.02rem] [text-wrap:pretty]'>
              Stop configuring ESLint, wrestling with auth flows, and debugging
              database connections. It&apos;s already done — the right way.
            </p>
          </div>
          <div className='mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {[
              {
                icon: (
                  <svg
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.8'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='size-5'
                  >
                    <path d='M12 2 4 5v6c0 5 3.5 8 8 11 4.5-3 8-6 8-11V5l-8-3Z' />
                    <path d='m9 12 2 2 4-4' />
                  </svg>
                ),
                title: 'Authentication ready',
                body: 'Secure sessions out of the box with Better Auth. Social logins, email magic links, and role-based access — all pre-wired.',
                tags: ['OAuth', 'Magic links', 'Sessions']
              },
              {
                icon: (
                  <svg
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.8'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='size-5'
                  >
                    <ellipse cx='12' cy='5' rx='9' ry='3' />
                    <path d='M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5' />
                    <path d='M3 12c0 1.66 4 3 9 3s9-1.34 9-3' />
                  </svg>
                ),
                title: 'Database optimized',
                body: 'Prisma ORM connected to PostgreSQL with type-safe queries, migrations, and a seeded schema you can extend in minutes.',
                tags: ['Prisma', 'PostgreSQL', 'Type-safe']
              },
              {
                icon: (
                  <svg
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.8'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='size-5'
                  >
                    <path d='M12 2 2 7l10 5 10-5-10-5z' />
                    <path d='m2 17 10 5 10-5' />
                    <path d='m2 12 10 5 10-5' />
                  </svg>
                ),
                title: 'Beautiful UI library',
                body: 'Accessible components built on shadcn/ui and Tailwind. Dark mode, theming, and a polished design system included by default.',
                tags: ['shadcn/ui', 'Tailwind', 'Dark mode']
              }
            ].map((card) => (
              <div
                key={card.title}
                className='border-border bg-card hover:border-ring/50 relative overflow-hidden rounded-[14px] border p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg'
              >
                <div className='border-border bg-muted/50 mb-4 grid size-[42px] place-items-center rounded-[11px] border'>
                  {card.icon}
                </div>
                <h3 className='text-[1.05rem] font-semibold tracking-[-0.02em]'>
                  {card.title}
                </h3>
                <p className='text-muted-foreground mt-2 text-[0.9rem] [text-wrap:pretty]'>
                  {card.body}
                </p>
                <div className='mt-3.5 flex flex-wrap gap-1.5'>
                  {card.tags.map((t) => (
                    <span
                      key={t}
                      className='bg-muted/60 text-muted-foreground rounded-[6px] px-2 py-[0.18rem] font-mono text-[0.68rem]'
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
      <section
        id='deploy'
        className='border-border bg-muted/35 border-y py-[84px]'
      >
        <div className='mx-auto max-w-[1120px] px-6'>
          <div>
            <span className='text-muted-foreground font-mono text-[0.72rem] tracking-[0.12em] uppercase'>
              // from zero to live
            </span>
            <h2 className='mt-[0.6rem] text-[clamp(1.8rem,3.6vw,2.5rem)] font-semibold tracking-[-0.035em] text-balance'>
              Deploy to Railway in one click.
            </h2>
            <p className='text-muted-foreground mt-[0.9rem] max-w-[560px] text-[1.02rem] [text-wrap:pretty]'>
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
                <div className='border-border bg-background grid size-[30px] place-items-center rounded-[8px] border font-mono text-[0.78rem] font-medium'>
                  {step.n}
                </div>
                {i < arr.length - 1 && (
                  <div className='border-border absolute top-[15px] right-[-12px] left-[42px] h-px border-t' />
                )}
                <h3 className='mt-4 text-[1.05rem] font-semibold tracking-[-0.02em]'>
                  {step.title}
                </h3>
                <p className='text-muted-foreground mt-2 text-[0.9rem] [text-wrap:pretty]'>
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
              className='bg-primary text-primary-foreground inline-flex h-[2.875rem] items-center gap-2 rounded-[var(--radius)] px-[1.4rem] text-[0.95rem] font-medium shadow-sm transition-all hover:-translate-y-px hover:opacity-90'
            >
              <BoltIcon />
              Deploy on Railway
            </a>
            <Link
              href='#faq'
              className='hover:bg-muted inline-flex h-[2.875rem] items-center rounded-[var(--radius)] px-[1.4rem] text-[0.95rem] font-medium transition-colors'
            >
              Read the docs →
            </Link>
          </div>
        </div>
      </section>

      {/* ── What's inside ── */}
      <section className='py-[84px]'>
        <div className='mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1fr_1.15fr]'>
          <div>
            <span className='text-muted-foreground font-mono text-[0.72rem] tracking-[0.12em] uppercase'>
              // developer experience
            </span>
            <h2 className='mt-[0.6rem] text-[clamp(1.7rem,3.2vw,2.3rem)] font-semibold tracking-[-0.035em] text-balance'>
              Sensible structure, zero surprises.
            </h2>
            <p className='text-muted-foreground mt-[0.9rem] max-w-[560px] text-[1.02rem] [text-wrap:pretty]'>
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
                  <span className='bg-primary text-primary-foreground mt-[1px] grid size-[22px] flex-none place-items-center rounded-[6px]'>
                    <CheckIcon />
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
      <section className='pb-[84px]'>
        <div className='mx-auto max-w-[1120px] px-6'>
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
                className='border-border bg-card rounded-[14px] border p-[26px]'
              >
                <div className='text-foreground mb-3.5 flex gap-0.5'>
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p className='text-[1rem] tracking-[-0.01em] [text-wrap:pretty]'>
                  {q.body}
                </p>
                <div className='mt-5 flex items-center gap-3'>
                  <span className='bg-muted text-muted-foreground grid size-[38px] place-items-center rounded-full text-[0.78rem] font-semibold'>
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
      </section>

      {/* ── FAQ ── */}
      <section id='faq' className='pb-[84px]'>
        <div className='mx-auto max-w-[1120px] px-6'>
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
      <section className='pb-[84px]'>
        <div className='mx-auto max-w-[1120px] px-6'>
          <div className='border-border bg-card relative overflow-hidden rounded-[18px] border px-8 py-14 text-center shadow-lg'>
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
            <p className='text-muted-foreground relative mx-auto mt-3.5 max-w-[480px]'>
              Skip the boilerplate. Deploy the starter to Railway and start
              building the features that actually matter.
            </p>
            <div className='relative mt-7 flex flex-wrap justify-center gap-[0.7rem]'>
              <a
                href='https://railway.com/deploy/nextjs-better-auth-prisma-template?referralCode=HKQvZr&utm_medium=integration&utm_source=template&utm_campaign=generic'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-primary text-primary-foreground inline-flex h-[2.875rem] items-center gap-2 rounded-[var(--radius)] px-[1.4rem] text-[0.95rem] font-medium shadow-sm transition-all hover:-translate-y-px hover:opacity-90'
              >
                <BoltIcon />
                Deploy on Railway
              </a>
              <a
                href='https://github.com/laguillo/nextjs-better-auth-prisma-template'
                target='_blank'
                rel='noopener noreferrer'
                className='border-border bg-background hover:bg-muted inline-flex h-[2.875rem] items-center gap-2 rounded-[var(--radius)] border px-[1.4rem] text-[0.95rem] font-medium transition-colors'
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className='border-border mt-[84px] border-t pt-14 pb-10'>
        <div className='mx-auto max-w-[1120px] px-6'>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]'>
            {/* Brand col */}
            <div>
              <Link
                href='/'
                className='flex items-center gap-2.5 text-[0.95rem] font-semibold tracking-[-0.02em]'
              >
                <span className='bg-primary text-primary-foreground grid size-[30px] place-items-center rounded-[8px]'>
                  <svg
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2.2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='size-[17px]'
                  >
                    <path d='m4 17 6-6-6-6' />
                    <path d='M12 19h8' />
                  </svg>
                </span>
                Next.js Starter
              </Link>
              <p className='text-muted-foreground mt-3.5 max-w-[260px] text-[0.88rem] [text-wrap:pretty]'>
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
                    className='size-[18px]'
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
                  <GithubIcon className='size-[18px]' />
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
