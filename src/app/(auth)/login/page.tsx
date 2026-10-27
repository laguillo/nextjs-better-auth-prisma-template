import { RedirectIfAuthenticated } from '@/components/shared/redirect-if-authenticated';
import { Suspense } from 'react';
import { LoginForm } from './login-form';

export default function LoginPage() {
  return (
    <div className='bg-background relative flex min-h-screen w-full flex-col overflow-x-hidden'>
      <div className='flex h-full grow flex-col items-center justify-center p-4'>
        <LoginForm />
      </div>
      <Suspense>
        <RedirectIfAuthenticated />
      </Suspense>
    </div>
  );
}
