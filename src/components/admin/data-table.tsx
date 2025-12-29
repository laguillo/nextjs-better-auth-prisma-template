'use client';

import { IconDotsVertical } from '@tabler/icons-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  joined: string;
  avatar: string;
}

const data: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'Active',
    joined: 'Oct 24, 2023',
    avatar: '#3b82f6'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'Editor',
    status: 'Active',
    joined: 'Oct 22, 2023',
    avatar: '#a855f7'
  },
  {
    id: 3,
    name: 'Robert Johnson',
    email: 'robert@example.com',
    role: 'Viewer',
    status: 'Pending',
    joined: 'Oct 20, 2023',
    avatar: '#f97316'
  },
  {
    id: 4,
    name: 'Alice Lee',
    email: 'alice@example.com',
    role: 'Editor',
    status: 'Inactive',
    joined: 'Oct 18, 2023',
    avatar: '#ec4899'
  }
];

export function DataTable() {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-emerald-500/10 text-emerald-500';
      case 'pending':
        return 'bg-yellow-500/10 text-yellow-500';
      case 'inactive':
        return 'bg-gray-500/10 text-gray-400';
      default:
        return 'bg-gray-500/10 text-gray-400';
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className='bg-card overflow-hidden rounded-xl border shadow-sm'>
      <div className='flex items-center justify-between border-b p-6'>
        <div>
          <h3 className='text-lg font-bold'>Recent Users</h3>
          <p className='text-muted-foreground text-sm'>
            Manage your latest user signups.
          </p>
        </div>
        <Button
          variant='ghost'
          size='sm'
          className='text-muted-foreground hover:text-foreground'
        >
          <span className='text-sm'>Filter</span>
        </Button>
      </div>
      <div className='overflow-x-auto'>
        <table className='w-full border-collapse text-left'>
          <thead>
            <tr className='text-muted-foreground border-b text-xs font-semibold uppercase'>
              <th className='px-6 py-4'>User</th>
              <th className='px-6 py-4'>Role</th>
              <th className='px-6 py-4'>Status</th>
              <th className='px-6 py-4'>Joined</th>
              <th className='px-6 py-4 text-right'>Actions</th>
            </tr>
          </thead>
          <tbody className='divide-y text-sm'>
            {data.map((user) => (
              <tr key={user.id} className='hover:bg-muted/50 transition-colors'>
                <td className='px-6 py-4'>
                  <div className='flex items-center gap-3'>
                    <div
                      className='flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold text-white'
                      style={{ backgroundColor: user.avatar }}
                    >
                      {getInitials(user.name)}
                    </div>
                    <div>
                      <div className='font-medium'>{user.name}</div>
                      <div className='text-muted-foreground text-xs'>
                        {user.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className='text-muted-foreground px-6 py-4'>{user.role}</td>
                <td className='px-6 py-4'>
                  <Badge
                    variant='outline'
                    className={getStatusColor(user.status)}
                  >
                    {user.status}
                  </Badge>
                </td>
                <td className='text-muted-foreground px-6 py-4'>
                  {user.joined}
                </td>
                <td className='px-6 py-4 text-right'>
                  <Button
                    variant='ghost'
                    size='icon'
                    className='text-muted-foreground hover:text-foreground'
                  >
                    <IconDotsVertical className='h-5 w-5' />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
