'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const CMD =
  'git clone https://github.com/laguillo/nextjs-better-auth-prisma-template';
const CMD_DISPLAY =
  'git clone github.com/laguillo/nextjs-better-auth-prisma-template';

export function CopyCommand() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(CMD);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className='border-border bg-card mx-auto mt-7 flex h-11.5 max-w-110 items-center gap-2.5 rounded-(--radius) border px-4 pr-[0.35rem] font-mono text-[0.85rem] shadow-sm'>
      <span className='text-muted-foreground select-none'>$</span>
      <code className='flex-1 overflow-hidden text-left text-ellipsis whitespace-nowrap'>
        {CMD_DISPLAY}
      </code>
      <button
        onClick={handleCopy}
        aria-label='Copy command'
        className='border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground grid size-[2.1rem] flex-none place-items-center rounded-[calc(var(--radius)-4px)] border transition-colors'
      >
        {copied ? (
          <Check className='size-3.75' />
        ) : (
          <Copy className='size-3.75' />
        )}
      </button>
    </div>
  );
}
