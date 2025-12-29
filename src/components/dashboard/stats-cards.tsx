import { Card } from '@/components/ui/card';

export function StatsCards() {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
      {/* Stat Card 1: Monthly Usage Limit */}
      <Card className='relative overflow-hidden p-6'>
        <div className='flex items-center justify-between'>
          <p className='text-muted-foreground text-sm font-medium'>
            Monthly Usage Limit
          </p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            stroke='currentColor'
            className='text-muted-foreground h-5 w-5'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2'
              strokeWidth={2}
            />
          </svg>
        </div>
        <div className='mt-4 flex items-baseline gap-2'>
          <span className='text-3xl font-bold'>75%</span>
          <span className='text-sm font-medium text-emerald-500'>+5% mo</span>
        </div>
        <div className='mt-4 flex flex-col gap-2'>
          <div className='bg-secondary h-2 w-full rounded-full'>
            <div
              className='bg-primary h-2 rounded-full transition-all duration-500'
              style={{ width: '75%' }}
            ></div>
          </div>
          <p className='text-muted-foreground text-xs'>Resets in 5 days</p>
        </div>
      </Card>

      {/* Stat Card 2: Credits Remaining */}
      <Card className='p-6'>
        <div className='flex items-center justify-between'>
          <p className='text-muted-foreground text-sm font-medium'>
            Credits Remaining
          </p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            stroke='currentColor'
            className='text-muted-foreground h-5 w-5'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0'
              strokeWidth={2}
            />
          </svg>
        </div>
        <div className='mt-4 flex items-baseline gap-2'>
          <span className='text-3xl font-bold'>450</span>
          <span className='text-muted-foreground text-sm font-medium'>
            / 1000
          </span>
        </div>
        <p className='mt-4 flex items-center gap-1 text-xs font-medium text-orange-500'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            className='h-4 w-4'
            viewBox='0 0 20 20'
          >
            <path
              fillRule='evenodd'
              d='M12 13a1 1 0 1 0 0 2h5a1 1 0 0 0 1-1V9a1 1 0 1 0-2 0v2.586l-4.293-4.293a1 1 0 0 0-1.414 0L8 9.586 3.707 5.293a1 1 0 0 0-1.414 1.414l5 5a1 1 0 0 0 1.414 0L11 9.414 14.586 13z'
              clipRule='evenodd'
            />
          </svg>
          -10 since yesterday
        </p>
      </Card>

      {/* Stat Card 3: API Calls */}
      <Card className='p-6'>
        <div className='flex items-center justify-between'>
          <p className='text-muted-foreground text-sm font-medium'>API Calls</p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            stroke='currentColor'
            className='text-muted-foreground h-5 w-5'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m10 20 4-16m4 4 4 4-4 4M6 16l-4-4 4-4'
              strokeWidth={2}
            />
          </svg>
        </div>
        <div className='mt-4 flex items-baseline gap-2'>
          <span className='text-3xl font-bold'>12.5k</span>
          <span className='text-sm font-medium text-emerald-500'>+12% wk</span>
        </div>
        <div className='mt-4 flex h-6 w-full items-end gap-1'>
          {/* Simple Bar Chart Visualization */}
          <div className='bg-primary/20 hover:bg-primary/40 h-[40%] w-1/6 rounded-sm transition-colors'></div>
          <div className='bg-primary/20 hover:bg-primary/40 h-[60%] w-1/6 rounded-sm transition-colors'></div>
          <div className='bg-primary/20 hover:bg-primary/40 h-[30%] w-1/6 rounded-sm transition-colors'></div>
          <div className='bg-primary/20 hover:bg-primary/40 h-[80%] w-1/6 rounded-sm transition-colors'></div>
          <div className='bg-primary/20 hover:bg-primary/40 h-[50%] w-1/6 rounded-sm transition-colors'></div>
          <div className='bg-primary h-[90%] w-1/6 rounded-sm transition-colors'></div>
        </div>
      </Card>
    </div>
  );
}
