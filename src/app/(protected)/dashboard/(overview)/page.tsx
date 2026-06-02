import { RecentActivity } from '@/components/dashboard/recent-activity';
import { StatsCards } from '@/components/dashboard/stats-cards';
import { UpgradeBanner } from '@/components/dashboard/upgrade-banner';
import { isAuthenticated } from '@/server/user';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const session = await isAuthenticated();

  if (!session) {
    redirect('/login');
  }

  const user = session.user;

  return (
    <div className='mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 p-6 md:p-10'>
      {/* Welcome Banner */}
      <div className='flex flex-col gap-2'>
        <h1 className='text-3xl font-bold tracking-tight md:text-4xl'>
          Welcome back, {user.name}!
        </h1>
        <p className='text-muted-foreground'>
          Here&apos;s what&apos;s happening with your projects today.
        </p>
      </div>

      {/* Stats Grid */}
      <StatsCards />

      {/* Recent Activity Section */}
      <RecentActivity />

      {/* Upgrade Banner */}
      <UpgradeBanner />
    </div>
  );
}
