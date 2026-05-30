import { AppSidebar } from '@/components/admin/layout/app-sidebar';
import { SiteHeader } from '@/components/admin/layout/site-header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { isAuthenticated } from '@/server/user';
import { userType } from '@/types/user';
import { unauthorized } from 'next/navigation';

export default async function AdminLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await isAuthenticated();

  if (!session || session.user.role !== 'admin') {
    unauthorized();
  }

  const user = session.user;

  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': 'calc(var(--spacing) * 72)',
          '--header-height': 'calc(var(--spacing) * 12)'
        } as React.CSSProperties
      }
    >
      <AppSidebar variant='inset' user={user as userType} />
      <SidebarInset>
        <SiteHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
