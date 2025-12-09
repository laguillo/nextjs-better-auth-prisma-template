import Link from 'next/link';

export default function Home() {
  return (
    <div className='from-background to-muted/20 flex min-h-screen items-center justify-center bg-linear-to-br'>
      <div className='mx-auto max-w-3xl space-y-8 px-6 py-12 text-center'>
        <div className='space-y-4'>
          <h1 className='text-5xl font-bold tracking-tight md:text-6xl'>
            Next.js Template
          </h1>
          <p className='text-muted-foreground text-xl'>
            Production-ready starter with modern authentication
          </p>
        </div>

        <div className='grid grid-cols-2 gap-6 pt-8 md:grid-cols-4'>
          <div className='space-y-2'>
            <div className='text-primary text-3xl font-bold'>⚡</div>
            <h3 className='font-semibold'>Next.js 16</h3>
            <p className='text-muted-foreground text-sm'>App Router & RSC</p>
          </div>

          <div className='space-y-2'>
            <div className='text-primary text-3xl font-bold'>🔐</div>
            <h3 className='font-semibold'>Better Auth</h3>
            <p className='text-muted-foreground text-sm'>
              Secure authentication
            </p>
          </div>

          <div className='space-y-2'>
            <div className='text-primary text-3xl font-bold'>🗄️</div>
            <h3 className='font-semibold'>Prisma</h3>
            <p className='text-muted-foreground text-sm'>Type-safe ORM</p>
          </div>

          <div className='space-y-2'>
            <div className='text-primary text-3xl font-bold'>🎨</div>
            <h3 className='font-semibold'>shadcn/ui</h3>
            <p className='text-muted-foreground text-sm'>
              Beautiful components
            </p>
          </div>
        </div>

        <div className='space-y-4 pt-8'>
          <div className='bg-muted/50 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm'>
            <span className='h-2 w-2 animate-pulse rounded-full bg-green-500'></span>
            <span>PostgreSQL database connected</span>
          </div>

          <div className='flex flex-col justify-center gap-4 pt-4 sm:flex-row'>
            <Link
              href='/login'
              className='bg-primary text-primary-foreground rounded-lg px-6 py-3 font-medium transition-opacity hover:opacity-90'
            >
              Get Started
            </Link>
            <Link
              href='https://github.com/laguillo/nextjs-better-auth-prisma-template'
              target='_blank'
              rel='noopener noreferrer'
              className='border-border hover:bg-muted/50 rounded-lg border px-6 py-3 font-medium transition-colors'
            >
              View on GitHub
            </Link>
          </div>
        </div>

        <div className='border-border border-t pt-8'>
          <p className='text-muted-foreground text-sm'>
            Deploy to Railway in one click • Start building immediately
          </p>
        </div>
      </div>
    </div>
  );
}
