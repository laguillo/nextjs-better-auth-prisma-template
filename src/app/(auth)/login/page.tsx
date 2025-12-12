import { isAuthenticated } from '@/server/user';
import { LoginForm } from './login-form';
import { redirect } from 'next/navigation';

export default async function LoginPage() {
  const session = await isAuthenticated();

  if (session) {
    redirect('/');
  }

  return (
    <div className='bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10'>
      <div className='flex w-full max-w-md flex-col gap-6'>
        <LoginForm />
      </div>
    </div>
  );
}
