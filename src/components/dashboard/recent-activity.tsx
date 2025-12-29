import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

const activities = [
  {
    id: 1,
    project: 'Alpha Stream',
    icon: '🚀',
    iconBg: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    event: 'Deployment initiated',
    status: 'Success',
    statusVariant: 'default' as const,
    date: 'Just now'
  },
  {
    id: 2,
    project: 'Data Warehouse',
    icon: '💾',
    iconBg:
      'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    event: 'Backup created',
    status: 'Success',
    statusVariant: 'default' as const,
    date: '2 hrs ago'
  },
  {
    id: 3,
    project: 'API Gateway',
    icon: '💻',
    iconBg:
      'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
    event: 'Key rotated',
    status: 'Pending',
    statusVariant: 'secondary' as const,
    date: 'Yesterday'
  },
  {
    id: 4,
    project: 'Billing',
    icon: '💳',
    iconBg: 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300',
    event: 'Invoice paid',
    status: 'Success',
    statusVariant: 'default' as const,
    date: 'Oct 24, 2023'
  }
];

export function RecentActivity() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-between'>
        <h2 className='text-lg font-semibold'>Recent Activity</h2>
        <Button variant='link' className='text-primary hover:text-primary/80'>
          View All
        </Button>
      </div>
      <Card className='overflow-hidden p-0'>
        <div className='overflow-x-auto'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Project</TableHead>
                <TableHead>Event</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className='text-right'>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activities.map((activity) => (
                <TableRow
                  key={activity.id}
                  className='hover:bg-accent transition-colors'
                >
                  <TableCell>
                    <div className='flex items-center gap-3'>
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded text-lg ${activity.iconBg}`}
                      >
                        {activity.icon}
                      </div>
                      <span className='font-medium'>{activity.project}</span>
                    </div>
                  </TableCell>
                  <TableCell className='text-muted-foreground'>
                    {activity.event}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={activity.statusVariant}
                      className={
                        activity.status === 'Success'
                          ? 'border-transparent bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400'
                          : 'border-transparent bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                      }
                    >
                      {activity.status}
                    </Badge>
                  </TableCell>
                  <TableCell className='text-muted-foreground text-right'>
                    {activity.date}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
