import { PageSkeleton } from '@/components/shared/page-skeleton';
import { isAuthenticated } from '@/server/user';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';

// Pages render independently of their layout, so the layout cannot protect
// them: every dashboard page must wrap its content in <DashboardGate>.
export function DashboardGate({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <RequireSession>{children}</RequireSession>
    </Suspense>
  );
}

async function RequireSession({ children }: { children: React.ReactNode }) {
  const session = await isAuthenticated();

  if (!session) {
    redirect('/login');
    // Alternatively, you can use:
    // unauthorized();
  }

  return children;
}
