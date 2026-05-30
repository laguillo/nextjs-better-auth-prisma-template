import Image from 'next/image';
import Link from 'next/link';
import OptionsButton from '@/components/site/options';
import { Rocket, Lock, Database, LayoutDashboard, Star } from 'lucide-react';
import { ModeToggle } from '@/components/shared/mode-toggle';

export default function Home() {
  return (
    <div className='flex min-h-screen w-full flex-col'>
      {/* Navbar */}
      <header className='border-border bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur-md'>
        <div className='mx-auto flex h-16 max-w-240 items-center justify-between px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center gap-2'>
            <Image
              src='/nextjs.svg'
              alt='Logo'
              width={32}
              height={32}
              className='size-8'
              priority
            />
            <span className='text-lg font-bold tracking-tight'>
              Next.js Starter
            </span>
          </div>

          <nav className='text-muted-foreground hidden items-center gap-8 text-sm font-medium md:flex'>
            <Link
              href='#features'
              className='hover:text-primary transition-colors'
            >
              Features
            </Link>
            <Link
              href='#testimonials'
              className='hover:text-primary transition-colors'
            >
              Testimonials
            </Link>
            <Link
              href='https://github.com/laguillo/nextjs-better-auth-prisma-template'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-primary transition-colors'
            >
              Docs
            </Link>
          </nav>

          <div className='flex items-center gap-4'>
            <OptionsButton />
            <ModeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className='relative px-4 pt-16 pb-20 lg:pt-24 lg:pb-32'>
        <div className='mx-auto max-w-240'>
          <div className='border-border bg-card relative overflow-hidden rounded-2xl border p-8 text-center md:p-12 lg:p-16'>
            {/* Abstract Background Pattern */}
            <div
              className='absolute inset-0 z-0 opacity-20'
              style={{
                backgroundImage:
                  'radial-gradient(hsl(var(--primary)) 1px, transparent 1px)',
                backgroundSize: '32px 32px'
              }}
            />
            <div className='via-background/80 to-background absolute inset-0 z-0 bg-linear-to-b from-transparent' />

            <div className='relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-6'>
              <div className='border-border bg-background/50 text-primary inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium backdrop-blur-sm'>
                <span className='bg-primary me-2 flex size-2 animate-pulse rounded-full' />
                Production Ready Template
              </div>

              <h1 className='text-4xl leading-[1.1] font-black tracking-tight md:text-5xl lg:text-6xl'>
                Build your Next.js SaaS in{' '}
                <span className='text-primary'>minutes</span>.
              </h1>

              <p className='text-muted-foreground max-w-xl text-lg leading-relaxed'>
                The ultimate starter template. Pre-configured with Prisma,
                Better Auth, and Shadcn UI components so you can ship faster.
              </p>

              <div className='mt-4 flex flex-wrap items-center justify-center gap-3'>
                {/* <OptionsButton /> */}
                <Link
                  href='https://github.com/laguillo/nextjs-better-auth-prisma-template'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='border-border bg-card hover:bg-accent flex h-12 items-center gap-2 rounded-lg border px-8 font-bold transition-all'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 -0.5 25 25'
                    className='size-5'
                  >
                    <path d='M12.301 0h.093c2.242 0 4.34.613 6.137 1.68l-.055-.031a12.35 12.35 0 0 1 4.449 4.422l.031.058a12.2 12.2 0 0 1 1.654 6.166c0 5.406-3.483 10-8.327 11.658l-.087.026a.72.72 0 0 1-.642-.113l.002.001a.62.62 0 0 1-.208-.466v-.014.001l.008-1.226q.008-1.178.008-2.154a2.84 2.84 0 0 0-.833-2.274 11 11 0 0 0 1.718-.305l-.076.017a6.5 6.5 0 0 0 1.537-.642l-.031.017a4.5 4.5 0 0 0 1.292-1.058l.006-.007a4.9 4.9 0 0 0 .84-1.645l.009-.035a7.9 7.9 0 0 0 .329-2.281l-.001-.136v.007l.001-.072a4.73 4.73 0 0 0-1.269-3.23l.003.003c.168-.44.265-.948.265-1.479a4.25 4.25 0 0 0-.404-1.814l.011.026a2.1 2.1 0 0 0-1.31.181l.012-.005a8.6 8.6 0 0 0-1.512.726l.038-.022-.609.384c-.922-.264-1.981-.416-3.075-.416s-2.153.152-3.157.436l.081-.02q-.256-.176-.681-.433a9 9 0 0 0-1.272-.595l-.066-.022A2.17 2.17 0 0 0 5.837 5.1l.013-.002a4.2 4.2 0 0 0-.393 1.788c0 .531.097 1.04.275 1.509l-.01-.029a4.72 4.72 0 0 0-1.265 3.303v-.004l-.001.13c0 .809.12 1.591.344 2.327l-.015-.057c.189.643.476 1.202.85 1.693l-.009-.013a4.4 4.4 0 0 0 1.267 1.062l.022.011c.432.252.933.465 1.46.614l.046.011c.466.125 1.024.227 1.595.284l.046.004c-.431.428-.718 1-.784 1.638l-.001.012a3 3 0 0 1-.699.236l-.021.004c-.256.051-.549.08-.85.08h-.066.003a1.9 1.9 0 0 1-1.055-.348l.006.004a2.84 2.84 0 0 1-.881-.986l-.007-.015a2.6 2.6 0 0 0-.768-.827l-.009-.006a2.3 2.3 0 0 0-.776-.38l-.016-.004-.32-.048-.077-.003q-.211.002-.394.077l.007-.003q-.128.072-.08.184.058.128.145.225l-.001-.001q.092.108.205.19l.003.002.112.08c.283.148.516.354.693.603l.004.006c.191.237.359.505.494.792l.01.024.16.368c.135.402.38.738.7.981l.005.004c.3.234.662.402 1.057.478l.016.002c.33.064.714.104 1.106.112h.007q.069.003.15.002.392 0 .767-.062l-.027.004.368-.064q0 .609.008 1.418t.008.873v.014c0 .185-.08.351-.208.466h-.001a.72.72 0 0 1-.645.111l.005.001C3.486 22.286.006 17.692.006 12.285c0-2.268.612-4.393 1.681-6.219l-.032.058a12.35 12.35 0 0 1 4.422-4.449l.058-.031a11.9 11.9 0 0 1 6.073-1.645h.098zm-7.64 17.666q.048-.112-.112-.192-.16-.048-.208.032-.048.112.112.192.144.096.208-.032m.497.545q.112-.08-.032-.256-.16-.144-.256-.048-.112.08.032.256.159.157.256.047zm.48.72q.144-.112 0-.304-.128-.208-.272-.096-.144.08 0 .288t.272.112m.672.673q.128-.128-.064-.304-.192-.192-.32-.048-.144.128.064.304.192.192.32.044zm.913.4q.048-.176-.208-.256-.24-.064-.304.112t.208.24q.24.097.304-.096m1.009.08q0-.208-.272-.176-.256 0-.256.176 0 .208.272.176.256.001.256-.175zm.929-.16q-.032-.176-.288-.144-.256.048-.224.24t.288.128.225-.224z' />
                  </svg>
                  View on GitHub
                </Link>
              </div>

              <div className='border-border mt-8 flex w-full flex-col items-center gap-4 border-t pt-8'>
                <p className='text-muted-foreground text-sm font-medium tracking-wider uppercase'>
                  Powered by modern stack
                </p>
                <div className='flex flex-wrap justify-center gap-8 opacity-60 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0'>
                  <div className='flex items-center gap-2'>
                    <Image
                      src='/nextjs.svg'
                      alt='Next.js'
                      width={24}
                      height={24}
                    />
                    <span className='text-lg font-bold'>Next.js</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Image
                      src='/prisma.svg'
                      alt='Prisma'
                      width={24}
                      height={24}
                      className='dark:invert'
                    />
                    <span className='text-lg font-bold'>Prisma</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Image
                      src='/better-auth.svg'
                      alt='Better Auth'
                      width={24}
                      height={24}
                    />
                    <span className='text-lg font-bold'>Better Auth</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Image
                      src='/shadcn-ui.svg'
                      alt='Shadcn/UI'
                      width={24}
                      height={24}
                      className='dark:invert'
                    />
                    <span className='text-lg font-bold'>Shadcn</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Headline */}
      <section id='features' className='px-4'>
        <div className='mx-auto max-w-240 text-center'>
          <h2 className='mb-4 text-3xl font-bold tracking-tight sm:text-4xl'>
            Everything you need to ship
          </h2>
          <p className='text-muted-foreground mx-auto max-w-2xl'>
            Don&apos;t waste time configuring ESLint, setting up authentication,
            or wrestling with database connections.
          </p>
        </div>
      </section>

      {/* Feature Grid */}
      <section className='px-4 py-12'>
        <div className='mx-auto max-w-240'>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
            {/* Card 1 */}
            <div className='group border-border bg-card hover:border-primary/50 rounded-xl border p-6 transition-colors'>
              <div className='bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground mb-4 inline-flex size-12 items-center justify-center rounded-lg transition-colors'>
                <Lock className='h-6 w-6' />
              </div>
              <h3 className='mb-2 text-lg font-bold'>Authentication Ready</h3>
              <p className='text-muted-foreground text-sm leading-relaxed'>
                Secure, instant auth setup with Better Auth pre-configured.
                Social logins, email magic links, and more ready to go.
              </p>
            </div>

            {/* Card 2 */}
            <div className='group border-border bg-card hover:border-primary/50 rounded-xl border p-6 transition-colors'>
              <div className='bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground mb-4 inline-flex size-12 items-center justify-center rounded-lg transition-colors'>
                <Database className='h-6 w-6' />
              </div>
              <h3 className='mb-2 text-lg font-bold'>Database Optimized</h3>
              <p className='text-muted-foreground text-sm leading-relaxed'>
                Prisma ORM connected and optimized for PostgreSQL. Type-safe
                database queries out of the box.
              </p>
            </div>

            {/* Card 3 */}
            <div className='group border-border bg-card hover:border-primary/50 rounded-xl border p-6 transition-colors'>
              <div className='bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground mb-4 inline-flex size-12 items-center justify-center rounded-lg transition-colors'>
                <LayoutDashboard className='h-6 w-6' />
              </div>
              <h3 className='mb-2 text-lg font-bold'>Shadcn UI Library</h3>
              <p className='text-muted-foreground text-sm leading-relaxed'>
                Beautiful, accessible components built with Shadcn UI and
                Tailwind CSS. Dark mode support included by default.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id='testimonials'
        className='border-border/50 bg-muted/30 border-y px-4 py-20'
      >
        <div className='mx-auto max-w-240'>
          <div className='mb-12 text-center'>
            <h2 className='mb-2 text-3xl font-bold tracking-tight'>
              Trusted by Developers
            </h2>
            <p className='text-muted-foreground'>
              Join thousands of developers shipping faster.
            </p>
          </div>

          <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
            {/* Testimonial 1 */}
            <div className='border-border bg-card flex flex-col gap-4 rounded-xl border p-6'>
              <div className='text-primary flex gap-1'>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className='h-5 w-5 fill-current' />
                ))}
              </div>
              <p className='leading-relaxed font-medium'>
                &quot;This template saved me at least 40 hours of setup time. I
                had my SaaS MVP deployed within an hour of cloning the repo. The
                code quality is top notch.&quot;
              </p>
              <div className='border-border/50 mt-auto flex items-center gap-3 border-t pt-4'>
                <div className='bg-muted size-10 overflow-hidden rounded-full'>
                  <div className='flex h-full w-full items-center justify-center text-sm font-bold'>
                    AC
                  </div>
                </div>
                <div>
                  <div className='text-sm font-bold'>Alex Chen</div>
                  <div className='text-muted-foreground text-xs'>
                    Senior Frontend Dev
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className='border-border bg-card flex flex-col gap-4 rounded-xl border p-6'>
              <div className='text-primary flex gap-1'>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className='h-5 w-5 fill-current' />
                ))}
              </div>
              <p className='leading-relaxed font-medium'>
                &quot;The integration with Prisma and Better Auth is seamless. I
                didn&apos;t have to worry about session management or database
                types. It just works.&quot;
              </p>
              <div className='border-border/50 mt-auto flex items-center gap-3 border-t pt-4'>
                <div className='bg-muted size-10 overflow-hidden rounded-full'>
                  <div className='flex h-full w-full items-center justify-center text-sm font-bold'>
                    SJ
                  </div>
                </div>
                <div>
                  <div className='text-sm font-bold'>Sarah Jenkins</div>
                  <div className='text-muted-foreground text-xs'>
                    Indie Hacker
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='border-border bg-card border-t px-4 py-12'>
        <div className='mx-auto flex max-w-240 flex-col justify-between gap-10 md:flex-row'>
          <div className='flex max-w-xs flex-col gap-4'>
            <div className='flex items-center gap-2'>
              <Rocket className='text-primary h-6 w-6' />
              <span className='text-lg font-bold'>Next.js Starter</span>
            </div>
            <p className='text-muted-foreground text-sm'>
              The best way to build modern SaaS applications. Open source and
              free to use.
            </p>
            <div className='mt-2 flex gap-4'>
              <a
                href='#'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                <span className='sr-only'>Twitter</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='size-5 invert dark:invert-0'
                  fill='none'
                  viewBox='0 0 1200 1227'
                >
                  <path
                    fill='#fff'
                    d='M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284zM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854z'
                  />
                </svg>
              </a>
              <a
                href='https://github.com/laguillo/nextjs-better-auth-prisma-template'
                target='_blank'
                rel='noopener noreferrer'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                <span className='sr-only'>GitHub</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='size-5'
                  viewBox='0 -0.5 25 25'
                >
                  <path d='M12.301 0h.093c2.242 0 4.34.613 6.137 1.68l-.055-.031a12.35 12.35 0 0 1 4.449 4.422l.031.058a12.2 12.2 0 0 1 1.654 6.166c0 5.406-3.483 10-8.327 11.658l-.087.026a.72.72 0 0 1-.642-.113l.002.001a.62.62 0 0 1-.208-.466v-.014.001l.008-1.226q.008-1.178.008-2.154a2.84 2.84 0 0 0-.833-2.274 11 11 0 0 0 1.718-.305l-.076.017a6.5 6.5 0 0 0 1.537-.642l-.031.017a4.5 4.5 0 0 0 1.292-1.058l.006-.007a4.9 4.9 0 0 0 .84-1.645l.009-.035a7.9 7.9 0 0 0 .329-2.281l-.001-.136v.007l.001-.072a4.73 4.73 0 0 0-1.269-3.23l.003.003c.168-.44.265-.948.265-1.479a4.25 4.25 0 0 0-.404-1.814l.011.026a2.1 2.1 0 0 0-1.31.181l.012-.005a8.6 8.6 0 0 0-1.512.726l.038-.022-.609.384c-.922-.264-1.981-.416-3.075-.416s-2.153.152-3.157.436l.081-.02q-.256-.176-.681-.433a9 9 0 0 0-1.272-.595l-.066-.022A2.17 2.17 0 0 0 5.837 5.1l.013-.002a4.2 4.2 0 0 0-.393 1.788c0 .531.097 1.04.275 1.509l-.01-.029a4.72 4.72 0 0 0-1.265 3.303v-.004l-.001.13c0 .809.12 1.591.344 2.327l-.015-.057c.189.643.476 1.202.85 1.693l-.009-.013a4.4 4.4 0 0 0 1.267 1.062l.022.011c.432.252.933.465 1.46.614l.046.011c.466.125 1.024.227 1.595.284l.046.004c-.431.428-.718 1-.784 1.638l-.001.012a3 3 0 0 1-.699.236l-.021.004c-.256.051-.549.08-.85.08h-.066.003a1.9 1.9 0 0 1-1.055-.348l.006.004a2.84 2.84 0 0 1-.881-.986l-.007-.015a2.6 2.6 0 0 0-.768-.827l-.009-.006a2.3 2.3 0 0 0-.776-.38l-.016-.004-.32-.048-.077-.003q-.211.002-.394.077l.007-.003q-.128.072-.08.184.058.128.145.225l-.001-.001q.092.108.205.19l.003.002.112.08c.283.148.516.354.693.603l.004.006c.191.237.359.505.494.792l.01.024.16.368c.135.402.38.738.7.981l.005.004c.3.234.662.402 1.057.478l.016.002c.33.064.714.104 1.106.112h.007q.069.003.15.002.392 0 .767-.062l-.027.004.368-.064q0 .609.008 1.418t.008.873v.014c0 .185-.08.351-.208.466h-.001a.72.72 0 0 1-.645.111l.005.001C3.486 22.286.006 17.692.006 12.285c0-2.268.612-4.393 1.681-6.219l-.032.058a12.35 12.35 0 0 1 4.422-4.449l.058-.031a11.9 11.9 0 0 1 6.073-1.645h.098zm-7.64 17.666q.048-.112-.112-.192-.16-.048-.208.032-.048.112.112.192.144.096.208-.032m.497.545q.112-.08-.032-.256-.16-.144-.256-.048-.112.08.032.256.159.157.256.047zm.48.72q.144-.112 0-.304-.128-.208-.272-.096-.144.08 0 .288t.272.112m.672.673q.128-.128-.064-.304-.192-.192-.32-.048-.144.128.064.304.192.192.32.044zm.913.4q.048-.176-.208-.256-.24-.064-.304.112t.208.24q.24.097.304-.096m1.009.08q0-.208-.272-.176-.256 0-.256.176 0 .208.272.176.256.001.256-.175zm.929-.16q-.032-.176-.288-.144-.256.048-.224.24t.288.128.225-.224z' />
                </svg>
              </a>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-12 sm:grid-cols-3'>
            <div className='flex flex-col gap-3'>
              <h4 className='text-sm font-bold'>Product</h4>
              <a
                href='#'
                className='text-muted-foreground hover:text-primary text-sm transition-colors'
              >
                Features
              </a>
              <a
                href='#'
                className='text-muted-foreground hover:text-primary text-sm transition-colors'
              >
                Pricing
              </a>
              <a
                href='#'
                className='text-muted-foreground hover:text-primary text-sm transition-colors'
              >
                Documentation
              </a>
              <a
                href='#'
                className='text-muted-foreground hover:text-primary text-sm transition-colors'
              >
                Changelog
              </a>
            </div>
            <div className='flex flex-col gap-3'>
              <h4 className='text-sm font-bold'>Resources</h4>
              <a
                href='#'
                className='text-muted-foreground hover:text-primary text-sm transition-colors'
              >
                Community
              </a>
              <a
                href='#'
                className='text-muted-foreground hover:text-primary text-sm transition-colors'
              >
                Help Center
              </a>
              <a
                href='#'
                className='text-muted-foreground hover:text-primary text-sm transition-colors'
              >
                Partners
              </a>
            </div>
            <div className='flex flex-col gap-3'>
              <h4 className='text-sm font-bold'>Company</h4>
              <a
                href='#'
                className='text-muted-foreground hover:text-primary text-sm transition-colors'
              >
                About
              </a>
              <a
                href='#'
                className='text-muted-foreground hover:text-primary text-sm transition-colors'
              >
                Blog
              </a>
              <a
                href='#'
                className='text-muted-foreground hover:text-primary text-sm transition-colors'
              >
                Careers
              </a>
            </div>
          </div>
        </div>

        <div className='border-border mx-auto mt-12 max-w-240 border-t pt-8 text-center sm:text-left'>
          <p className='text-muted-foreground text-xs'>
            © {new Date().getFullYear()} Next.js Starter Template. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
