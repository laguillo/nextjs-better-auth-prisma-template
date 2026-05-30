import { SectionCards } from '@/components/admin/section-cards';
import { ChartAreaInteractive } from '@/components/admin/chart-area-interactive';
import { DataTable } from '@/components/admin/data-table';
import { RecentActivity } from '@/components/admin/recent-activity';
import { Button } from '@/components/ui/button';

export default function AdminDashboardPage() {
  return (
    <div className='flex flex-1 flex-col'>
      <div className='@container/main flex flex-1 flex-col gap-2'>
        <div className='flex flex-col gap-8 py-4 md:gap-8 md:py-6'>
          {/* Header & Actions */}
          <div className='flex flex-col justify-between gap-4 px-4 sm:flex-row sm:items-center lg:px-6'>
            <div>
              <h1 className='text-2xl font-bold tracking-tight'>
                Dashboard Overview
              </h1>
              <p className='text-muted-foreground mt-1'>
                Welcome back, here&apos;s what&apos;s happening with your
                platform today.
              </p>
            </div>
            <div className='flex gap-2'>
              <Button variant={'outline'} size={'sm'}>
                Export
              </Button>
              <Button size={'sm'}>Add User</Button>
            </div>
          </div>

          {/* Stats Grid */}
          <SectionCards />

          {/* Chart & Activity Section */}
          <div className='grid grid-cols-1 gap-6 px-4 lg:grid-cols-3 lg:px-6'>
            <div className='lg:col-span-2'>
              <ChartAreaInteractive />
            </div>
            <div>
              <RecentActivity />
            </div>
          </div>

          {/* Users Table */}
          <div className='px-4 lg:px-6'>
            <DataTable />
          </div>
        </div>
      </div>
    </div>
  );
}
