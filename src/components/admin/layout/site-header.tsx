import { ModeToggle } from '@/components/shared/mode-toggle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { IconBell } from '@tabler/icons-react';

export function SiteHeader() {
  return (
    <header className='flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)'>
      <div className='flex w-full items-center gap-1 px-4 py-2 lg:gap-2 lg:px-6'>
        <SidebarTrigger className='-ml-1' />
        <Separator
          orientation='vertical'
          className='mx-2 data-[orientation=vertical]:h-4'
        />
        <h1 className='text-base font-medium'>Documents</h1>
        <div className='ml-auto flex items-center gap-2'>
          <Input placeholder='Search resources...' className='max-w-sm' />
          <Button variant='outline' size={'icon'}>
            <IconBell />
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
