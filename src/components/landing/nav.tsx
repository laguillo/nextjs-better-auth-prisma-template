'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Terminal } from 'lucide-react';
import { GithubIcon } from '../shared/icons';
import { ModeToggle } from '../shared/mode-toggle';
import { Button } from '../ui/button';

export function LandingNav() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <nav className='hidden items-center gap-1 md:flex'>
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
            <Button
              className='hidden rounded-lg md:inline-flex'
              variant='outline'
              size='lg'
            >
              <Link href='/login'>Login</Link>
            </Button>
            {/* GitHub */}
            <a
              href='https://github.com/laguillo/nextjs-better-auth-prisma-template'
              target='_blank'
              rel='noopener noreferrer'
              className='border-border bg-background text-foreground hover:bg-muted inline-flex size-9 items-center justify-center rounded-[calc(var(--radius)-2px)] border transition-colors'
              aria-label='GitHub'
            >
              <GithubIcon className='size-5' />
            </a>

            {/* Theme toggle */}
            <ModeToggle />

            {/* Deploy CTA — hidden on mobile */}
            <Link
              href='#deploy'
              className='hidden h-10 items-center transition-all hover:-translate-y-px md:inline-flex'
            >
              <img
                src='https://railway.com/button.svg'
                alt='Deploy on Railway'
                className='h-10 w-auto'
              />
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className='border-border bg-background text-foreground hover:bg-muted inline-flex size-9 items-center justify-center rounded-[calc(var(--radius)-2px)] border transition-colors md:hidden'
              aria-label='Menu'
            >
              {menuOpen ? (
                <X className='size-4.5' />
              ) : (
                <Menu className='size-4.5' />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className='border-border bg-background fixed inset-x-0 top-15 z-40 flex flex-col gap-1 border-t p-6 md:hidden'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className='border-border hover:bg-muted rounded-lg border-b px-3 py-4 text-[1.05rem] font-[450] transition-colors last:border-b-0'
            >
              {link.label}
            </Link>
          ))}
          <a
            href='https://github.com/laguillo/nextjs-better-auth-prisma-template'
            target='_blank'
            rel='noopener noreferrer'
            onClick={() => setMenuOpen(false)}
            className='border-border hover:bg-muted rounded-lg border-b px-3 py-4 text-[1.05rem] font-[450] transition-colors'
          >
            GitHub ↗
          </a>
          <Link
            href='#deploy'
            onClick={() => setMenuOpen(false)}
            className='mt-4 flex h-11 items-center justify-center transition-opacity hover:opacity-90'
          >
            <img
              src='https://railway.com/button.svg'
              alt='Deploy on Railway'
              className='h-11 w-auto'
            />
          </Link>
        </div>
      )}
    </>
  );
}
