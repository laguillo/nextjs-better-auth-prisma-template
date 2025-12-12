'use client';

import * as React from 'react';
import {
  IconChartBar,
  IconDashboard,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconLock,
  IconMoodPuzzled,
  IconSearch,
  IconSettings
} from '@tabler/icons-react';

import { NavMain } from '@/components/dashboard/layout/nav-main';
import { NavSecondary } from '@/components/dashboard/layout/nav-secondary';
import { NavUser } from '@/components/dashboard/layout/nav-user';
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
      url: '#',
      icon: IconDashboard
    },
    {
      title: 'Lifecycle',
      url: '#',
      icon: IconListDetails
    },
    {
      title: 'Analytics',
      url: '#',
      icon: IconChartBar
    },
    {
      title: 'Unauthorized',
      url: '/admin',
      icon: IconLock
    },
    {
      title: 'Not Found',
      url: '/non-existent-page',
      icon: IconMoodPuzzled
    }
  ],
  navSecondary: [
    {
      title: 'Settings',
      url: '#',
      icon: IconSettings
    },
    {
      title: 'Get Help',
      url: '#',
      icon: IconHelp
    },
    {
      title: 'Search',
      url: '#',
      icon: IconSearch
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
                <span className='text-base font-semibold'>Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className='mt-auto' />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
