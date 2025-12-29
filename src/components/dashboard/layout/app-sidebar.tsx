'use client';

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
import {
  IconCreditCardFilled,
  IconDashboard,
  IconFolderOpen,
  IconHelp,
  IconLock,
  IconMoodPuzzled,
  IconSettings
} from '@tabler/icons-react';
import Image from 'next/image';

const data = {
  navMain: [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: IconDashboard
    },
    {
      title: 'Projects',
      url: '#',
      icon: IconFolderOpen
    },
    {
      title: 'Billing',
      url: '#',
      icon: IconCreditCardFilled
    },
    {
      title: 'Settings',
      url: '#',
      icon: IconSettings
    },
    {
      title: 'Get Help',
      url: '#',
      icon: IconHelp
    }
  ],
  navSecondary: [
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
                <Image
                  src='/nextjs.svg'
                  alt='Logo'
                  width={32}
                  height={32}
                  className='size-8'
                  priority
                />
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
