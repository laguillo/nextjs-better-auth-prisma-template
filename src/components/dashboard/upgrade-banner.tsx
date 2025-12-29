import { Button } from '@/components/ui/button';

export function UpgradeBanner() {
  return (
    <div className='relative mt-4 overflow-hidden rounded-xl bg-linear-to-r from-slate-900 to-slate-800 p-8 text-white dark:from-slate-900 dark:to-slate-950'>
      {/* Decorative background glow */}
      <div className='bg-primary/20 pointer-events-none absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 rounded-full blur-3xl'></div>

      <div className='relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center'>
        <div className='max-w-xl'>
          <h3 className='mb-2 text-xl font-bold'>Upgrade to Pro Plan</h3>
          <p className='text-sm leading-relaxed text-slate-300'>
            Unlock advanced features like unlimited API calls, priority support,
            and custom domain mapping.
          </p>
        </div>
        <Button className='bg-primary hover:bg-primary/90 shrink-0 text-white shadow-sm'>
          Upgrade Now
        </Button>
      </div>
    </div>
  );
}
