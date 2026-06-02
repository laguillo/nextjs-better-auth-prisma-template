'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Sun, Moon, Zap, Menu, X, Terminal } from 'lucide-react';

function GithubIcon() {
  return (
    <svg viewBox='0 0 24 24' fill='currentColor' className='size-4.5'>
      <path d='M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.34 9.34 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z' />
    </svg>
  );
}

export function LandingNav() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

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
            {/* GitHub */}
            <a
              href='https://github.com/laguillo/nextjs-better-auth-prisma-template'
              target='_blank'
              rel='noopener noreferrer'
              className='border-border bg-background text-foreground hover:bg-muted inline-flex size-9 items-center justify-center rounded-[calc(var(--radius)-2px)] border transition-colors'
              aria-label='GitHub'
            >
              <GithubIcon />
            </a>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className='border-border bg-background text-foreground hover:bg-muted inline-flex size-9 items-center justify-center rounded-[calc(var(--radius)-2px)] border transition-colors'
              aria-label='Toggle theme'
            >
              {mounted ? (
                resolvedTheme === 'dark' ? (
                  <Sun className='size-4.5' />
                ) : (
                  <Moon className='size-4.5' />
                )
              ) : (
                <Sun className='size-4.5' />
              )}
            </button>
            {/* <ModeToggle /> */}

            {/* Deploy CTA — hidden on mobile */}
            <Link
              href='#deploy'
              className='bg-primary text-primary-foreground hidden h-10 items-center gap-2 rounded-[calc(var(--radius)-2px)] px-4 text-sm font-medium transition-all hover:-translate-y-px hover:opacity-90 md:inline-flex'
            >
              <Zap className='size-4' />
              Deploy on Railway
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
            className='bg-primary text-primary-foreground mt-4 flex h-11 items-center justify-center gap-2 rounded-(--radius) text-sm font-medium transition-opacity hover:opacity-90'
          >
            <Zap className='size-4' />
            Deploy on Railway
          </Link>
        </div>
      )}
    </>
  );
}
