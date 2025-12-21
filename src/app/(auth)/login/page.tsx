import { isAuthenticated } from '@/server/user';
import { LoginForm } from './login-form';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default async function LoginPage() {
  const session = await isAuthenticated();

  if (session) {
    redirect('/');
  }

  return (
    <div className='bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10'>
      <div className='flex w-full max-w-md flex-col gap-6'>
        <div>
          <Link href='/' className='flex items-center gap-2 text-sm font-bold'>
            <ArrowLeft className='size-4' />
            Back to Home
          </Link>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
