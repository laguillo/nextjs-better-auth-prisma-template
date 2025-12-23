import { ForgotPasswordForm } from './forgot-password-form';

export default async function ForgotPasswordRoute() {
  return (
    <div className='bg-background relative flex min-h-screen w-full flex-col overflow-x-hidden'>
      <div className='flex h-full grow flex-col items-center justify-center p-4'>
        <ForgotPasswordForm />
      </div>
    </div>
  );
}
