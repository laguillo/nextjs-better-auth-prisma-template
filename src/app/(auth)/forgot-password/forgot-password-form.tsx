'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { forgotPassword } from '@/server/user';
import { Spinner } from '@/components/ui/spinner';
import Image from 'next/image';

const formSchema = z.object({
  email: z
    .email('Please enter a valid email address.')
    .min(1, 'Email is required.')
    .max(50, 'Email must be at most 50 characters.')
});

export function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: ''
    }
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const result = await forgotPassword(data);

      if (result.success) {
        toast.success('Password reset link sent to your email.');
        router.push('/login');
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error(`Forgot password failed:`, error);
      toast.error(
        error instanceof Error
          ? error.message
          : 'Forgot password failed. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div
      className={cn('flex w-full max-w-100 flex-col gap-6', className)}
      {...props}
    >
      {/* Header */}
      <div className='flex flex-col items-center gap-2 text-center'>
        <div className='bg-primary/10 text-primary mb-2 flex h-12 w-12 items-center justify-center rounded-xl'>
          <Image
            src='/nextjs.svg'
            alt='Logo'
            width={50}
            height={50}
            className='size-12'
            priority
          />
        </div>
        <h1 className='text-2xl font-semibold tracking-tight'>
          Forgot your password?
        </h1>
        <p className='text-muted-foreground text-sm'>
          Please provide the email address associated with your account. We will
          send you a link to reset your password.
        </p>
      </div>

      {/* Main Form Area */}
      <div className='grid gap-6'>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            {/* Email Field */}
            <Controller
              name='email'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='email'>Email</FieldLabel>
                  <Input
                    {...field}
                    id='email'
                    type='email'
                    placeholder='name@example.com'
                    autoComplete='email'
                    autoCapitalize='none'
                    autoCorrect='off'
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Send Reset Link Button */}
            <Button type='submit' disabled={isSubmitting} className='w-full'>
              {isSubmitting ? <Spinner /> : 'Send reset link'}
            </Button>
          </FieldGroup>
        </form>
      </div>

      {/* Footer Login Link */}
      <p className='text-muted-foreground px-8 text-center text-sm'>
        Remember your password?{' '}
        <Link
          href='/login'
          className='text-primary hover:text-primary/80 font-medium underline-offset-4 hover:underline'
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}
