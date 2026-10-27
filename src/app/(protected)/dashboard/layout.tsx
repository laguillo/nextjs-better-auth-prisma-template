import { AppSidebar } from '@/components/dashboard/layout/app-sidebar';
import { SiteHeader } from '@/components/dashboard/layout/site-header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { isAuthenticated } from '@/server/user';
import { userType } from '@/types/user';
import { Suspense } from 'react';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Suspense fallback={<AppSidebar variant='inset' user={null} />}>
        <SidebarWithUser />
      </Suspense>
      <SidebarInset>
        <SiteHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}

async function SidebarWithUser() {
  const session = await isAuthenticated();

  return (
    <AppSidebar
      variant='inset'
      user={session ? (session.user as userType) : null}
    />
  );
}
