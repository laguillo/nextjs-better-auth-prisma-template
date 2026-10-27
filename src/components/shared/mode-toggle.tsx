'use client';

import { useLayoutEffect, useRef, useSyncExternalStore } from 'react';
import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { cn } from '@/lib/utils';

const OPTIONS = [
  { value: 'light', label: 'Light', icon: Sun, active: 'text-amber-500' },
  {
    value: 'system',
    label: 'System',
    icon: Monitor,
    active: 'text-foreground'
  },
  { value: 'dark', label: 'Dark', icon: Moon, active: 'text-violet-300' }
] as const;

// The stored theme is only known on the client, so wait for mount to avoid a
// hydration mismatch.
const subscribe = () => () => {};
const useMounted = () =>
  useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();
  const thumbRef = useRef<HTMLSpanElement>(null);
  const previous = useRef<number | null>(null);

  const index = mounted ? OPTIONS.findIndex((o) => o.value === theme) : -1;

  // next-themes disables CSS transitions while the theme changes, which would
  // make the thumb snap, so slide it with the Web Animations API instead.
  useLayoutEffect(() => {
    const thumb = thumbRef.current;
    if (!thumb || index < 0) return;

    const from = previous.current;
    previous.current = index;

    if (from === null || from === index) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    thumb.animate(
      [
        { transform: `translateX(${from * 100}%)` },
        { transform: `translateX(${index * 100}%)` }
      ],
      { duration: 300, easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }
    );
  }, [index]);

  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    const step =
      e.key === 'ArrowRight' || e.key === 'ArrowDown'
        ? 1
        : e.key === 'ArrowLeft' || e.key === 'ArrowUp'
          ? -1
          : 0;
    if (!step) return;

    e.preventDefault();
    const next = (Math.max(index, 0) + step + OPTIONS.length) % OPTIONS.length;
    setTheme(OPTIONS[next].value);
    e.currentTarget
      .querySelectorAll<HTMLButtonElement>('[role="radio"]')
      [next]?.focus();
  }

  return (
    <div
      role='radiogroup'
      aria-label='Theme'
      onKeyDown={handleKeyDown}
      className='border-border bg-muted/40 relative inline-flex h-9 items-center rounded-lg border p-[3px] backdrop-blur'
    >
      {index >= 0 && (
        <span
          ref={thumbRef}
          aria-hidden
          style={{ transform: `translateX(${index * 100}%)` }}
          className='bg-card ring-border absolute top-[3px] left-[3px] size-7 rounded-[7px] shadow-sm ring-1'
        />
      )}
      {OPTIONS.map(({ value, label, icon: Icon, active }, i) => {
        const selected = i === index;

        return (
          <button
            key={value}
            type='button'
            role='radio'
            aria-checked={selected}
            aria-label={label}
            title={label}
            tabIndex={selected || (index < 0 && i === 0) ? 0 : -1}
            onClick={() => setTheme(value)}
            className={cn(
              'focus-visible:ring-ring relative z-10 grid size-7 place-items-center rounded-[7px] transition-colors outline-none focus-visible:ring-2',
              selected ? active : 'text-muted-foreground hover:text-foreground'
            )}
          >
            <Icon className='size-3.5' />
          </button>
        );
      })}
    </div>
  );
}
