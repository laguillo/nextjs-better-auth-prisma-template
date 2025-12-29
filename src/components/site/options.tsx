import { isAuthenticated } from '@/server/user';
import Link from 'next/link';

export default async function OptionsButton() {
  const session = await isAuthenticated();

  if (!session) {
    return (
      <Link
        href='/login'
        className='bg-primary text-primary-foreground rounded-lg px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90'
      >
        Get Started
      </Link>
    );
  }

  if (session.user?.role === 'admin') {
    return (
      <div className='flex items-center gap-4'>
        <Link
          href='/dashboard'
          className='bg-primary text-primary-foreground rounded-lg px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90'
        >
          Go to Dashboard
        </Link>
        <Link
          href='/admin'
          className='bg-primary text-primary-foreground rounded-lg px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90'
        >
          Go to Admin
        </Link>
      </div>
    );
  }

  if (session.user) {
    return (
      <Link
        href='/dashboard'
        className='bg-primary text-primary-foreground rounded-lg px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90'
      >
        Go to Dashboard
      </Link>
    );
  }

  return null;
}
