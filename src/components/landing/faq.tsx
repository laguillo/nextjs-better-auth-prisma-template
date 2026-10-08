'use client';

import { PlusIcon } from 'lucide-react';
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
    a: 'Email & password with email verification and password reset, plus Google OAuth, all pre-configured. Better Auth supports many more providers and plugins — adding one is a few lines in auth.ts.'
  },
  {
    q: 'How much does it cost to run on Railway?',
    a: 'Railway bills by actual usage (CPU, memory and storage) rather than a flat server fee, so a small app with a Postgres database is typically inexpensive. Check railway.com/pricing for current plans and free credits.'
  },
  {
    q: 'What do I get after clicking deploy?',
    a: 'A running Next.js app plus a PostgreSQL database, with migrations applied on start, a /api/health healthcheck, and a public HTTPS URL. You only need to set your Resend and Google OAuth keys to enable emails and social login.'
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
              <PlusIcon className='size-4' />
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
