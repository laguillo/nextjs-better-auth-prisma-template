import { KeyRound } from 'lucide-react';
import { CopyCommand } from '@/components/landing/copy-command';
import { DeployButton } from '@/components/landing/deploy-button';
import { GITHUB_URL } from '@/lib/constants';

const STEPS = [
  {
    title: 'Click deploy',
    body: 'Hit the Railway button and pick your GitHub repo. The template ships with a ready-to-go config.'
  },
  {
    title: 'Provision & connect',
    body: 'Railway spins up PostgreSQL and wires the DATABASE_URL for you. Migrations are applied on start.'
  },
  {
    title: 'Ship it',
    body: 'Your SaaS is live on a public URL with HTTPS. Push to main and Railway redeploys automatically.'
  }
];

const KEYS = [
  { name: 'RESEND_API_KEY', note: 'Verification and password-reset emails' },
  { name: 'GOOGLE_CLIENT_ID', note: 'Google login' },
  { name: 'GOOGLE_CLIENT_SECRET', note: 'Google login' }
];

export function DeploySteps() {
  return (
    <section id='deploy' className='border-border bg-muted/35 border-y py-21'>
      <div className='mx-auto max-w-6xl px-6'>
        <div>
          <span className='text-muted-foreground font-mono text-[0.72rem] tracking-[0.12em] uppercase'>
            // from zero to live
          </span>
          <h2 className='mt-2.5 text-[clamp(1.8rem,3.6vw,2.5rem)] font-semibold tracking-[-0.035em] text-balance'>
            Deploy to Railway in{' '}
            <span className='landing-text-gradient'>one click</span>.
          </h2>
          <p className='text-muted-foreground mt-3.5 max-w-140 text-[1.02rem] text-pretty'>
            No Dockerfiles, no CI pipelines to babysit. Railway provisions the
            Postgres database, injects the env vars, and builds your app
            automatically.
          </p>
        </div>

        <div className='mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr]'>
          {/* timeline */}
          <ol className='relative flex flex-col gap-9'>
            <span className='from-border via-border absolute top-4 bottom-4 left-4.5 w-px -translate-x-1/2 bg-linear-to-b to-transparent' />
            {STEPS.map((step, i) => (
              <li key={step.title} className='relative flex gap-5'>
                <span className='bg-background relative grid size-9 flex-none place-items-center rounded-full border border-violet-500/40 font-mono text-[0.85rem] font-medium text-violet-600 shadow-sm dark:text-violet-300'>
                  {i + 1}
                </span>
                <div className='pt-1'>
                  <h3 className='text-[1.05rem] font-semibold tracking-[-0.02em]'>
                    {step.title}
                  </h3>
                  <p className='text-muted-foreground mt-1.5 max-w-md text-[0.9rem] text-pretty'>
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {/* what to add afterwards */}
          <div className='border-border bg-card rounded-2xl border p-6 shadow-sm'>
            <div className='flex items-center gap-2.5'>
              <span className='grid size-9 place-items-center rounded-xl bg-linear-to-br from-violet-500/15 to-fuchsia-500/15 text-violet-600 dark:text-violet-300'>
                <KeyRound className='size-4.5' />
              </span>
              <h3 className='text-[1rem] font-semibold tracking-[-0.02em]'>
                Then plug in your keys
              </h3>
            </div>
            <p className='text-muted-foreground mt-2 text-[0.88rem] text-pretty'>
              Emails and Google login stay off until you add these in
              Railway&apos;s Variables tab.
            </p>
            <ul className='mt-4 flex flex-col gap-2'>
              {KEYS.map((k) => (
                <li
                  key={k.name}
                  className='bg-muted/50 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 rounded-lg px-3 py-2'
                >
                  <code className='font-mono text-[0.78rem] font-medium'>
                    {k.name}
                  </code>
                  <span className='text-muted-foreground text-[0.76rem]'>
                    {k.note}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center'>
          <DeployButton placement='steps' size='lg' glow />
          <a
            href={`${GITHUB_URL}#readme`}
            target='_blank'
            rel='noopener noreferrer'
            className='hover:bg-muted inline-flex h-11 items-center rounded-lg px-5 text-[0.95rem] font-medium transition-colors'
          >
            Read the docs →
          </a>
        </div>

        <div className='border-border mt-12 border-t pt-8'>
          <p className='text-muted-foreground text-center text-[0.85rem]'>
            Prefer to run it locally first?
          </p>
          <CopyCommand />
        </div>
      </div>
    </section>
  );
}
