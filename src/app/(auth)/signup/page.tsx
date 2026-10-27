import { RedirectIfAuthenticated } from '@/components/shared/redirect-if-authenticated';
import { Suspense } from 'react';
import { SignupForm } from './signup-form';

export default function SignUpPage() {
  return (
    <div className='bg-background relative flex min-h-screen w-full flex-col overflow-x-hidden'>
      <div className='flex h-full grow flex-col items-center justify-center p-4'>
        <SignupForm />
      </div>
      <Suspense>
        <RedirectIfAuthenticated />
      </Suspense>
    </div>
  );
}
