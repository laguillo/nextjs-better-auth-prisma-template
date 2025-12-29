import { IconTrendingUp, IconAlertCircle } from '@tabler/icons-react';
import { DollarSign, Users, Activity, Ticket } from 'lucide-react';

export function SectionCards() {
  return (
    <div className='grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-6'>
      {/* Total Revenue */}
      <div className='bg-card rounded-xl border p-5 shadow-sm'>
        <div className='mb-4 flex items-start justify-between'>
          <div>
            <p className='text-muted-foreground text-sm font-medium'>
              Total Revenue
            </p>
            <h3 className='mt-1 text-2xl font-bold'>$12,340</h3>
          </div>
          <div className='bg-primary/10 text-primary rounded-lg p-2'>
            <DollarSign className='h-6 w-6' />
          </div>
        </div>
        <div className='flex items-center gap-1 text-sm font-medium text-emerald-500'>
          <IconTrendingUp className='h-4 w-4' />
          <span>+12%</span>
          <span className='text-muted-foreground ml-1 font-normal'>
            from last month
          </span>
        </div>
      </div>

      {/* Active Users */}
      <div className='bg-card rounded-xl border p-5 shadow-sm'>
        <div className='mb-4 flex items-start justify-between'>
          <div>
            <p className='text-muted-foreground text-sm font-medium'>
              Active Users
            </p>
            <h3 className='mt-1 text-2xl font-bold'>1,234</h3>
          </div>
          <div className='rounded-lg bg-purple-500/10 p-2 text-purple-500'>
            <Users className='h-6 w-6' />
          </div>
        </div>
        <div className='flex items-center gap-1 text-sm font-medium text-emerald-500'>
          <IconTrendingUp className='h-4 w-4' />
          <span>+50</span>
          <span className='text-muted-foreground ml-1 font-normal'>
            new this week
          </span>
        </div>
      </div>

      {/* System Health */}
      <div className='bg-card rounded-xl border p-5 shadow-sm'>
        <div className='mb-4 flex items-start justify-between'>
          <div>
            <p className='text-muted-foreground text-sm font-medium'>
              System Health
            </p>
            <h3 className='mt-1 text-2xl font-bold'>98.9%</h3>
          </div>
          <div className='rounded-lg bg-emerald-500/10 p-2 text-emerald-500'>
            <Activity className='h-6 w-6' />
          </div>
        </div>
        <div className='text-muted-foreground flex items-center gap-1 text-sm font-medium'>
          <div className='h-2 w-2 rounded-full bg-emerald-500'></div>
          <span>All systems operational</span>
        </div>
      </div>

      {/* Pending Tickets */}
      <div className='bg-card rounded-xl border p-5 shadow-sm'>
        <div className='mb-4 flex items-start justify-between'>
          <div>
            <p className='text-muted-foreground text-sm font-medium'>
              Pending Tickets
            </p>
            <h3 className='mt-1 text-2xl font-bold'>5</h3>
          </div>
          <div className='rounded-lg bg-orange-500/10 p-2 text-orange-500'>
            <Ticket className='h-6 w-6' />
          </div>
        </div>
        <div className='flex items-center gap-1 text-sm font-medium text-orange-500'>
          <IconAlertCircle className='h-4 w-4' />
          <span>2 high priority</span>
        </div>
      </div>
    </div>
  );
}
