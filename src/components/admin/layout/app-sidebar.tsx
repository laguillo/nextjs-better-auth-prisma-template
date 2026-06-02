'use client';

import * as React from 'react';
import {
  BarChart,
  CreditCard,
  LayoutDashboard,
  Layers,
  Newspaper,
  Settings,
  Users
} from 'lucide-react';

import { NavMain } from '@/components/admin/layout/nav-main';
import { NavSecondary } from '@/components/admin/layout/nav-secondary';
import { NavUser } from '@/components/admin/layout/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { userType } from '@/types/user';

const data = {
  navMain: [
    {
      title: 'Dashboard',
      url: '/admin',
      icon: LayoutDashboard
    },
    {
      title: 'Users',
      url: '#',
      icon: Users
    },
    {
      title: 'Suscriptions',
      url: '#',
      icon: CreditCard
    },
    {
      title: 'Documents',
      url: '#',
      icon: Newspaper
    }
  ],
  navSecondary: [
    {
      title: 'Analytics',
      url: '#',
      icon: BarChart
    },
    {
      title: 'Settings',
      url: '#',
      icon: Settings
    }
  ]
};

export function AppSidebar({
  user,
  ...props
}: React.ComponentProps<typeof Sidebar> & { user: userType }) {
  return (
    <Sidebar collapsible='offcanvas' {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className='data-[slot=sidebar-menu-button]:p-1.5!'
            >
              <Link href='/'>
                <Layers className='size-5!' />
                <span className='text-base font-semibold'>Admin Panel</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
