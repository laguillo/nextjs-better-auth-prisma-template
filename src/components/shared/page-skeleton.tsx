import { Skeleton } from '@/components/ui/skeleton';

export function PageSkeleton() {
  return (
    <div className='flex flex-1 flex-col gap-6 p-4 md:p-6 lg:p-8'>
      <div className='flex flex-col gap-2'>
        <Skeleton className='h-8 w-64' />
        <Skeleton className='h-4 w-96 max-w-full' />
      </div>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4'>
        {Array.from({ length: 4 }, (_, i) => (
          <Skeleton key={i} className='h-32' />
        ))}
      </div>
      <Skeleton className='h-80' />
    </div>
  );
}
