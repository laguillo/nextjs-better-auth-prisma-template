import { Button } from '@/components/ui/button';

export function RecentActivity() {
  const activities = [
    {
      title: 'New Subscription',
      description: 'John Doe subscribed to Pro Plan',
      time: '2 mins ago',
      color: 'bg-primary'
    },
    {
      title: 'System Backup',
      description: 'Daily database backup completed',
      time: '1 hour ago',
      color: 'bg-emerald-500'
    },
    {
      title: 'Profile Updated',
      description: 'Jane Smith changed email settings',
      time: '3 hours ago',
      color: 'bg-purple-500'
    },
    {
      title: 'Maintenance Mode',
      description: 'Scheduled maintenance completed',
      time: 'Yesterday',
      color: 'bg-gray-500'
    }
  ];

  return (
    <div className='bg-card rounded-xl border p-6 shadow-sm'>
      <h3 className='mb-6 text-lg font-bold'>Recent Activity</h3>
      <div className='border-border relative space-y-8 border-l pl-4'>
        {activities.map((activity, index) => (
          <div key={index} className='relative'>
            <div
              className={`absolute top-0 -left-5.25 size-2.5 rounded-full ${activity.color} ring-card ring-4`}
            ></div>
            <p className='text-sm font-medium'>{activity.title}</p>
            <p className='text-muted-foreground mt-0.5 text-xs'>
              {activity.description}
            </p>
            <p className='text-muted-foreground mt-2 text-[10px]'>
              {activity.time}
            </p>
          </div>
        ))}
      </div>
      <Button className='mt-6 w-full'>View all activity</Button>
    </div>
  );
}
