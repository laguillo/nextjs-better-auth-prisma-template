'use client';

import { cn } from '@/lib/utils';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useState } from 'react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput
} from '@/components/ui/input-group';

export function PasswordInput({
  className,
  ...props
}: React.ComponentProps<'input'>) {
  const [show, setShow] = useState(false);

  return (
    <InputGroup>
      <InputGroupInput
        type={show ? 'text' : 'password'}
        className={cn(className)}
        {...props}
      />
      <InputGroupAddon align='inline-end'>
        <InputGroupButton
          aria-label={show ? 'Hide password' : 'Show password'}
          title={show ? 'Hide password' : 'Show password'}
          size='icon-xs'
          onClick={() => setShow((v) => !v)}
        >
          {show ? (
            <EyeOffIcon className='size-4' />
          ) : (
            <EyeIcon className='size-4' />
          )}
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}
