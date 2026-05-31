'use client';

import { useState } from 'react';

const ITEMS = [
  {
    q: 'Is the template free to use?',
    a: "Yes. It's open source under the MIT license — clone it, deploy it, and use it for personal or commercial projects with no strings attached."
  },
  {
    q: 'Do I need a Railway account?',
    a: 'To use the one-click deploy, yes. Railway offers a free tier to get started and provisions your PostgreSQL database automatically. You can also self-host anywhere that runs Node.'
  },
  {
    q: 'Which authentication methods are supported?',
    a: 'Better Auth ships with email & password, social OAuth providers (GitHub, Google, and more), and email magic links. Everything is pre-configured — just add your provider keys.'
  },
  {
    q: 'Can I swap PostgreSQL for another database?',
    a: (
      <>
        Absolutely. Prisma supports MySQL, SQLite, MongoDB and more — change the
        provider in{' '}
        <code className='font-mono text-[0.85em]'>schema.prisma</code>, update
        your connection string, and run a migration.
      </>
    )
  },
  {
    q: 'Is it production-ready?',
    a: "It's built on stable, battle-tested libraries with sensible defaults for security and performance. Add your environment variables and business logic, and you're ready to launch."
  }
];

export function LandingFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className='mx-auto mt-10 max-w-190'>
      {ITEMS.map((item, i) => (
        <div key={i} className='border-border border-b last:border-b-0'>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className='flex w-full cursor-pointer items-center justify-between gap-4 px-1 py-4.5 text-left text-base font-medium tracking-[-0.01em]'
          >
            <span>{item.q}</span>
            <span
              className='text-muted-foreground flex-none transition-transform duration-200'
              style={{ transform: open === i ? 'rotate(45deg)' : 'none' }}
            >
              <svg
                viewBox='0 0 24 24'
                width='18'
                height='18'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
              >
                <path d='M12 5v14M5 12h14' />
              </svg>
            </span>
          </button>
          {open === i && (
            <div className='text-muted-foreground max-w-160 px-1 pb-4.5 text-[0.92rem] text-pretty'>
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
