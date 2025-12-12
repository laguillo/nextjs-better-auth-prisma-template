'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className='flex min-h-screen flex-col items-center justify-center px-4'>
      <div className='max-w-md space-y-6 text-center'>
        <div className='space-y-2'>
          <h1 className='text-muted-foreground/20 text-8xl font-bold'>500</h1>
          <h2 className='text-2xl font-semibold tracking-tight'>
            Something went wrong
          </h2>
          <p className='text-muted-foreground'>
            An unexpected error occurred. Please try again.
          </p>
        </div>

        <div className='flex flex-col justify-center gap-3 pt-4 sm:flex-row'>
          <Button onClick={() => reset()}>Try Again</Button>
          <Button variant='outline' asChild>
            <Link href='/'>Go Home</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
