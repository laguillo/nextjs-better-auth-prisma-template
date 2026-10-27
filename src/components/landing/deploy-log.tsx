'use client';

import { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';

const STEPS = [
  { label: 'Postgres provisioned', detail: 'database' },
  { label: 'DATABASE_URL connected', detail: 'env' },
  { label: 'prisma migrate deploy', detail: 'applied' },
  { label: 'next build', detail: 'compiled' },
  { label: 'GET /api/health', detail: '200 OK' }
];

export function DeployLog() {
  const ref = useRef<HTMLDivElement>(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlay(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-play={play}
      className='deploy-log border-border bg-card overflow-hidden rounded-2xl border shadow-xl'
    >
      {/* Without JavaScript the animation never starts, so show the final state */}
      <noscript>
        <style>{`.deploy-log-line{opacity:1!important;transform:none!important}`}</style>
      </noscript>

      <div className='border-border bg-muted/40 flex h-10 items-center gap-2 border-b px-3.5'>
        <div className='flex gap-2'>
          <i className='size-3 rounded-full bg-red-400/80' />
          <i className='size-3 rounded-full bg-amber-400/80' />
          <i className='size-3 rounded-full bg-emerald-400/80' />
        </div>
        <span className='text-muted-foreground mx-auto font-mono text-[0.72rem]'>
          railway · deploy
        </span>
        <span className='w-11' />
      </div>

      <div className='flex flex-col gap-3 p-5 font-mono text-[0.8rem]'>
        {STEPS.map((step, i) => (
          <div
            key={step.label}
            className='deploy-log-line flex items-center gap-2.5'
            style={{ '--i': i } as React.CSSProperties}
          >
            <span className='grid size-4.5 flex-none place-items-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'>
              <Check className='size-3' strokeWidth={3} />
            </span>
            <span className='truncate'>{step.label}</span>
            <span className='text-muted-foreground ml-auto hidden flex-none text-[0.72rem] sm:inline'>
              {step.detail}
            </span>
          </div>
        ))}

        <div
          className='deploy-log-line border-border mt-1 flex items-center gap-2.5 border-t pt-4'
          style={{ '--i': STEPS.length } as React.CSSProperties}
        >
          <span className='relative grid size-4.5 flex-none place-items-center'>
            <span className='landing-ping absolute size-2 rounded-full bg-emerald-500' />
            <span className='relative size-2 rounded-full bg-emerald-500' />
          </span>
          <span className='font-semibold text-emerald-600 dark:text-emerald-400'>
            Live
          </span>
          <span className='text-muted-foreground truncate'>
            your-app.up.railway.app
          </span>
        </div>
      </div>

      <p className='border-border text-muted-foreground bg-muted/30 border-t px-5 py-2.5 text-[0.72rem]'>
        What Railway runs for you after you click deploy (simplified).
      </p>
    </div>
  );
}
