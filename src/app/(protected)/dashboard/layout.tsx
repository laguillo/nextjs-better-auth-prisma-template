import { AppSidebar } from '@/components/dashboard/layout/app-sidebar';
import { SiteHeader } from '@/components/dashboard/layout/site-header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { isAuthenticated } from '@/server/user';
import { userType } from '@/types/user';
import { redirect } from 'next/navigation';

export default async function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await isAuthenticated();

  if (!session) {
    redirect('/login');
    // Alternatively, you can use:
    // unauthorized();
  }

  const user = session.user;

  return (
    <SidebarProvider>
      <AppSidebar variant='inset' user={user as userType} />
      <SidebarInset>
        <SiteHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
