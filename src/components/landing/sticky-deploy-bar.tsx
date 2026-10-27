'use client';

import { useEffect, useState } from 'react';
import { DeployButton } from '@/components/landing/deploy-button';
import { cn } from '@/lib/utils';

/** Mobile-only: the nav hides its deploy button, so keep one in reach. */
export function StickyDeployBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      inert={!visible}
      className={cn(
        'border-border bg-background/90 fixed inset-x-0 bottom-0 z-40 border-t px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md transition-transform duration-300 md:hidden',
        visible ? 'translate-y-0' : 'translate-y-full'
      )}
    >
      <div className='mx-auto flex max-w-md items-center justify-between gap-3'>
        <p className='text-sm leading-tight font-semibold'>
          Live in minutes
          <span className='text-muted-foreground block text-xs font-normal'>
            Postgres included
          </span>
        </p>
        <DeployButton placement='sticky-mobile' size='sm' />
      </div>
    </div>
  );
}
