import { PageSkeleton } from '@/components/shared/page-skeleton';
import { isAuthenticated } from '@/server/user';
import { unauthorized } from 'next/navigation';
import { Suspense } from 'react';

// Pages render independently of their layout, so the layout cannot protect
// them: every admin page must wrap its content in <AdminGate>.
export function AdminGate({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <RequireAdmin>{children}</RequireAdmin>
    </Suspense>
  );
}

async function RequireAdmin({ children }: { children: React.ReactNode }) {
  const session = await isAuthenticated();

  if (!session || session.user.role !== 'admin') {
    unauthorized();
  }

  return children;
}
