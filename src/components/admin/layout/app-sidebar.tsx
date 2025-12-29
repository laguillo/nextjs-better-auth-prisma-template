'use client';

import * as React from 'react';
import {
  IconChartBar,
  IconCreditCardFilled,
  IconDashboard,
  IconInnerShadowTop,
  IconNews,
  IconSettings,
  IconUsers
} from '@tabler/icons-react';

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
      icon: IconDashboard
    },
    {
      title: 'Users',
      url: '#',
      icon: IconUsers
    },
    {
      title: 'Suscriptions',
      url: '#',
      icon: IconCreditCardFilled
    },
    {
      title: 'Documents',
      url: '#',
      icon: IconNews
    }
  ],
  navSecondary: [
    {
      title: 'Analytics',
      url: '#',
      icon: IconChartBar
    },
    {
      title: 'Settings',
      url: '#',
      icon: IconSettings
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
                <IconInnerShadowTop className='size-5!' />
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
