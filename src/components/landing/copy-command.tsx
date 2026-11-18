'use client';

import { useEffect, useRef, useState } from 'react';
import { Copy, Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const CMD =
  'git clone https://github.com/laguillo/nextjs-better-auth-prisma-template';
const CMD_DISPLAY =
  'git clone github.com/laguillo/nextjs-better-auth-prisma-template';

type Status = 'idle' | 'copied' | 'failed';

export function CopyCommand() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const lastMessage = useRef('');

  useEffect(() => () => clearTimeout(timer.current), []);

  const handleCopy = async () => {
    clearTimeout(timer.current);
    let next: Status = 'copied';
    try {
      // Rejects without a secure context or clipboard permission.
      await navigator.clipboard.writeText(CMD);
    } catch {
      next = 'failed';
    }

    let text = next === 'copied' ? 'Copied' : 'Copy failed';
    // VoiceOver skips a message identical to the previous one.
    if (text === lastMessage.current) text += ' ';
    lastMessage.current = text;

    setStatus(next);
    setMessage('');
    requestAnimationFrame(() => setMessage(text));
    timer.current = setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 2000);
  };

  const Icon = status === 'copied' ? Check : status === 'failed' ? X : Copy;

  return (
    <div className='border-border bg-card mx-auto mt-7 flex h-11.5 max-w-110 items-center gap-2.5 rounded-(--radius) border px-4 pr-[0.35rem] font-mono text-[0.85rem] shadow-sm'>
      <span className='text-muted-foreground select-none'>$</span>
      <code className='flex-1 overflow-hidden text-left text-ellipsis whitespace-nowrap'>
        {CMD_DISPLAY}
      </code>
      <span className='relative flex-none'>
        <button
          type='button'
          onClick={handleCopy}
          aria-label='Copy git clone command'
          className='border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground grid size-[2.1rem] place-items-center rounded-[calc(var(--radius)-4px)] border transition-colors'
        >
          <Icon aria-hidden className='size-3.75' />
        </button>
        {/* Visible confirmation and live region in one; outside the button so it is announced */}
        <span
          role='status'
          className={cn(
            'bg-foreground text-background pointer-events-none absolute right-0 bottom-full mb-2 rounded-md px-2 py-1 font-sans text-xs whitespace-nowrap motion-safe:transition-opacity',
            message ? 'opacity-100' : 'opacity-0'
          )}
        >
          {message}
        </span>
      </span>
    </div>
  );
}
