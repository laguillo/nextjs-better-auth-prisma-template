import { ResetPasswordForm } from './reset-password-form';

export default async function ResetPasswordRoute({
  searchParams
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;

  return (
    <div className='bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10'>
      <div className='flex w-full max-w-md flex-col gap-6'>
        <ResetPasswordForm token={token} />
      </div>
    </div>
  );
}
