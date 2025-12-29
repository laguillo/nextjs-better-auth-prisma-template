import { isAuthenticated } from '@/server/user';
import { SignupForm } from './signup-form';
import { redirect } from 'next/navigation';

export default async function SignUpPage() {
  const session = await isAuthenticated();

  if (session) {
    redirect('/');
  }

  return (
    <div className='bg-background relative flex min-h-screen w-full flex-col overflow-x-hidden'>
      <div className='flex h-full grow flex-col items-center justify-center p-4'>
        <SignupForm />
      </div>
    </div>
  );
}
