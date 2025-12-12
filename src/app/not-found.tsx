import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center px-4'>
      <div className='max-w-md space-y-6 text-center'>
        <div className='space-y-2'>
          <h1 className='text-muted-foreground/20 text-8xl font-bold'>404</h1>
          <h2 className='text-2xl font-semibold tracking-tight'>
            Page not found
          </h2>
          <p className='text-muted-foreground'>
            The page you are looking for does not exist.
          </p>
        </div>

        <div className='flex flex-col justify-center gap-3 pt-4 sm:flex-row'>
          <Button asChild>
            <Link href='/'>Go Home</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
