import Image from 'next/image';
import Link from 'next/link';
import OptionsButton from '@/components/site/options';
import {
  Rocket,
  Lock,
  Database,
  LayoutDashboard,
  Star,
  Github,
  Twitter
} from 'lucide-react';

export default function Home() {
  return (
    <div className='flex min-h-screen w-full flex-col'>
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
                <OptionsButton />
                <Link
                  href='https://github.com/laguillo/nextjs-better-auth-prisma-template'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='border-border bg-card hover:bg-accent flex h-12 items-center gap-2 rounded-lg border px-8 font-bold transition-all'
                >
                  <Github className='h-5 w-5' />
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
      <section className='px-4'>
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
      <section className='border-border/50 bg-muted/30 border-y px-4 py-20'>
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
                <Twitter className='h-5 w-5' />
              </a>
              <a
                href='https://github.com/laguillo/nextjs-better-auth-prisma-template'
                target='_blank'
                rel='noopener noreferrer'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                <span className='sr-only'>GitHub</span>
                <Github className='h-5 w-5' />
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
