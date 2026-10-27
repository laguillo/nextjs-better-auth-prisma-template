import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';
import { ResetPasswordForm } from './reset-password-form';

type SearchParams = Promise<{ token?: string }>;

export default function ResetPasswordRoute({
  searchParams
}: {
  searchParams: SearchParams;
}) {
  return (
    <div className='bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10'>
      <div className='flex w-full max-w-md flex-col gap-6'>
        <Suspense fallback={<ResetPasswordFormSkeleton />}>
          <ResetPasswordContent searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}

async function ResetPasswordContent({
  searchParams
}: {
  searchParams: SearchParams;
}) {
  const { token } = await searchParams;

  return <ResetPasswordForm token={token} />;
}

function ResetPasswordFormSkeleton() {
  return (
    <Card>
      <CardHeader className='items-center gap-2'>
        <Skeleton className='h-6 w-48' />
        <Skeleton className='h-4 w-72 max-w-full' />
      </CardHeader>
      <CardContent className='flex flex-col gap-6'>
        <Skeleton className='h-9 w-full' />
        <Skeleton className='h-9 w-full' />
        <Skeleton className='h-9 w-full' />
      </CardContent>
    </Card>
  );
}
