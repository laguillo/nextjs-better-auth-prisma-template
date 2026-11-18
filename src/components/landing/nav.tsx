'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Menu, X, Terminal } from 'lucide-react';
import { GithubIcon } from '@/components/shared/icons';
import { ModeToggle } from '@/components/shared/mode-toggle';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { authClient } from '@/lib/auth-client';
import { DeployButton } from '@/components/landing/deploy-button';
import { GITHUB_URL } from '@/lib/constants';

const MENU_ID = 'landing-menu';

export function LandingNav() {
  const menuRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => menuRef.current?.hidePopover();

  useEffect(() => {
    // Popover is not Baseline widely available yet: polyfill only where missing.
    if (!Object.hasOwn(HTMLElement.prototype, 'popover')) {
      import('@oddbird/popover-polyfill');
    }
  }, []);
  const { data: session, isPending } = authClient.useSession();

  const authHref = session
    ? session.user.role === 'admin'
      ? '/admin'
      : '/dashboard'
    : '/login';
  const authLabel = session
    ? session.user.role === 'admin'
      ? 'Admin'
      : 'Dashboard'
    : 'Login';

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#deploy', label: 'Deploy' },
    { href: '#stack', label: 'Stack' },
    { href: '#faq', label: 'FAQ' }
  ];

  return (
    <>
      <header className='border-border bg-background/70 sticky top-0 z-50 border-b backdrop-blur-md [backdrop-filter:saturate(180%)_blur(12px)]'>
        <div className='mx-auto flex h-15 max-w-280 items-center justify-between px-6'>
          {/* Brand */}
          <Link
            href='/'
            className='flex items-center gap-2.5 text-[0.95rem] font-semibold tracking-[-0.02em]'
          >
            <span className='bg-primary text-primary-foreground grid size-7.5 place-items-center rounded-xl'>
              <Terminal className='size-4.25' />
            </span>
            Next.js Starter
          </Link>

          {/* Desktop nav links */}
          <nav
            aria-label='Primary'
            className='hidden items-center gap-1 md:flex'
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='text-muted-foreground hover:text-foreground hover:bg-muted rounded-[calc(var(--radius)-2px)] px-3 py-[0.45rem] text-sm font-[450] transition-colors'
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className='flex items-center gap-2'>
            {!isPending && (
              <Link
                href={authHref}
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'lg' }),
                  'hidden rounded-lg md:inline-flex'
                )}
              >
                {authLabel}
              </Link>
            )}
            {/* GitHub */}
            <a
              href={GITHUB_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='border-border bg-background text-foreground hover:bg-muted hidden size-9 items-center justify-center rounded-[calc(var(--radius)-2px)] border transition-colors md:inline-flex'
              aria-label='GitHub'
            >
              <GithubIcon className='size-5' />
            </a>

            {/* Theme toggle */}
            <ModeToggle />

            {/* Deploy CTA — hidden on mobile (see StickyDeployBar) */}
            <DeployButton
              placement='nav'
              size='md'
              className='hidden md:inline-flex'
            />

            {/* Mobile menu: native popover (Escape, light dismiss, expanded state) */}
            <button
              type='button'
              popoverTarget={MENU_ID}
              aria-controls={MENU_ID}
              aria-label='Menu'
              className='border-border bg-background text-foreground hover:bg-muted inline-flex size-9 items-center justify-center rounded-[calc(var(--radius)-2px)] border transition-colors md:hidden'
            >
              {menuOpen ? (
                <X aria-hidden className='size-4.5' />
              ) : (
                <Menu aria-hidden className='size-4.5' />
              )}
            </button>
            <nav
              ref={menuRef}
              id={MENU_ID}
              popover='auto'
              aria-label='Primary'
              onToggle={(e) => setMenuOpen(e.newState === 'open')}
              className='landing-menu border-border bg-background text-foreground inset-x-0 top-15 bottom-auto m-0 h-auto max-h-[calc(100dvh-3.75rem)] w-full max-w-none flex-col gap-1 overflow-auto border-0 border-t p-6'
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className='border-border hover:bg-muted rounded-lg border-b px-3 py-4 text-[1.05rem] font-[450] transition-colors last:border-b-0'
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={GITHUB_URL}
                target='_blank'
                rel='noopener noreferrer'
                onClick={closeMenu}
                className='border-border hover:bg-muted rounded-lg border-b px-3 py-4 text-[1.05rem] font-[450] transition-colors'
              >
                GitHub ↗
              </a>
              <DeployButton
                placement='nav-mobile'
                size='lg'
                className='mt-4 self-center'
              />
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
