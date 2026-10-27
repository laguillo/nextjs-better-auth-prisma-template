import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Folder, File, Terminal } from 'lucide-react';
import { LandingNav } from '@/components/landing/nav';
import { AppMock } from '@/components/landing/app-mock';
import { DeployButton } from '@/components/landing/deploy-button';
import { DeployLog } from '@/components/landing/deploy-log';
import { DeploySteps } from '@/components/landing/deploy-steps';
import { Features } from '@/components/landing/features';
import { LandingFAQ } from '@/components/landing/faq';
import { StickyDeployBar } from '@/components/landing/sticky-deploy-bar';
import { GithubIcon } from '@/components/shared/icons';
import { GITHUB_URL, railwayDeployUrl } from '@/lib/constants';

/* ─── Code window (what's inside section) ─── */
function CodeWindow() {
  return (
    <div className='border-border bg-card overflow-hidden rounded-2xl border shadow-lg'>
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
              '    google: { clientId: process.env.',
              <span key='fn' className='text-[#2563eb] dark:text-[#60a5fa]'>
                GOOGLE_CLIENT_ID
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
      <section className='relative overflow-hidden pt-20 pb-16 sm:pt-24'>
        <div className='landing-aurora' />
        <div className='landing-grid-bg' />
        <div className='relative z-10 mx-auto max-w-240 px-6 text-center'>
          <span className='border-border bg-background/70 text-muted-foreground inline-flex h-7 items-center gap-2 rounded-full border px-3 text-[0.75rem] font-medium backdrop-blur'>
            <span className='size-1.5 rounded-full bg-emerald-500 shadow-[0_0_0_3px_#10b98133]' />
            Open source · Postgres included
          </span>

          <h1 className='mt-6 text-[clamp(2.6rem,6.4vw,4.4rem)] leading-[1.02] font-semibold tracking-[-0.04em] text-balance'>
            Launch your Next.js SaaS
            <br />
            <span className='landing-text-gradient'>
              in minutes, not weeks.
            </span>
          </h1>

          <p className='text-muted-foreground mx-auto mt-6 max-w-152 text-[1.075rem] text-pretty'>
            Auth, PostgreSQL, an admin panel, a user dashboard and transactional
            emails, already wired with Prisma, Better&nbsp;Auth and shadcn/ui.
            One click on Railway gives you a live app with its own database.
          </p>

          <div className='mt-9 flex flex-wrap items-center justify-center gap-3.5'>
            <DeployButton placement='hero' size='lg' glow />
            <a
              href={GITHUB_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='border-border bg-background/70 hover:bg-muted inline-flex h-12 items-center gap-2 rounded-lg border px-6 text-[0.95rem] font-medium backdrop-blur transition-colors sm:h-14'
            >
              <GithubIcon className='size-4' />
              Star on GitHub
            </a>
          </div>

          <ul className='text-muted-foreground mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-[0.82rem]'>
            {[
              'Postgres provisioned for you',
              'Migrations run on deploy',
              'Live on HTTPS in minutes'
            ].map((t) => (
              <li key={t} className='flex items-center gap-1.5'>
                <Check className='size-3.5 text-emerald-500' />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* click → live app */}
        <div className='relative z-10 mx-auto mt-16 grid max-w-6xl items-center gap-5 px-6 lg:grid-cols-[minmax(0,0.78fr)_auto_minmax(0,1.5fr)] lg:gap-6'>
          <DeployLog />
          <div className='mx-auto grid size-10 place-items-center rounded-full bg-linear-to-br from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/30 max-lg:rotate-90'>
            <ArrowRight className='size-5' />
          </div>
          <AppMock />
        </div>
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

      <Features />

      <DeploySteps />

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
                  <span className='bg-primary text-primary-foreground mt-px grid size-5.5 flex-none place-items-center rounded-md'>
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
                className='border-border bg-card rounded-2xl border p-6.5'
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
          <div className='relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 px-8 py-16 text-center text-white shadow-2xl'>
            <div className='pointer-events-none absolute -top-32 left-1/4 size-96 rounded-full bg-violet-600/45 blur-3xl' />
            <div className='pointer-events-none absolute -right-10 -bottom-32 size-96 rounded-full bg-fuchsia-600/35 blur-3xl' />
            <div
              className='landing-grid-bg'
              style={
                {
                  '--grid-line': 'rgb(255 255 255 / 0.07)',
                  maskImage:
                    'radial-gradient(ellipse 70% 100% at 50% 0%, #000 30%, transparent 75%)',
                  WebkitMaskImage:
                    'radial-gradient(ellipse 70% 100% at 50% 0%, #000 30%, transparent 75%)'
                } as React.CSSProperties
              }
            />
            <h2 className='relative text-[clamp(1.9rem,3.6vw,2.6rem)] font-semibold tracking-[-0.035em] text-balance'>
              Your SaaS is one click away.
            </h2>
            <p className='relative mx-auto mt-3.5 max-w-120 text-neutral-300'>
              Skip the boilerplate. Deploy the starter to Railway and start
              building the features that actually matter.
            </p>
            <div className='relative mt-8 flex flex-wrap items-center justify-center gap-3.5'>
              <DeployButton placement='final-cta' size='lg' glow />
              <a
                href={GITHUB_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex h-12 items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 text-[0.95rem] font-medium transition-colors hover:bg-white/10 sm:h-14'
              >
                <GithubIcon className='size-4' />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className='border-border border-t pt-14 pb-10 max-md:pb-28'>
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
                  href={GITHUB_URL}
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
                  href: railwayDeployUrl('footer'),
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
                  href: GITHUB_URL,
                  label: 'Documentation',
                  external: true
                },
                {
                  href: `${GITHUB_URL}/issues`,
                  label: 'Issues & support',
                  external: true
                }
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

      <StickyDeployBar />
    </div>
  );
}
