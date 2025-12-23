'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { login } from '@/server/user';
import { Spinner } from '@/components/ui/spinner';
import { authClient } from '@/lib/auth-client';
import { Eye, EyeOff } from 'lucide-react';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel
} from '@/components/ui/field';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput
} from '@/components/ui/input-group';
import Image from 'next/image';

const formSchema = z.object({
  email: z
    .email('Please enter a valid email address.')
    .min(1, 'Email is required.')
    .max(50, 'Email must be at most 50 characters.'),
  password: z
    .string()
    .min(1, 'Password is required.')
    .max(100, 'Password must be at most 100 characters.')
});

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const signInWithGoogle = async () => {
    try {
      await authClient.signIn.social({
        provider: 'google',
        callbackURL: '/dashboard'
      });
    } catch (error) {
      console.error('Google sign-in failed:', error);
      toast.error(
        error instanceof Error
          ? error.message
          : 'Google sign-in failed. Please try again.'
      );
    }
  };

  const signInWithUserDemo = async (
    callbackURL: string,
    email: string,
    password: string
  ) => {
    const data = {
      email,
      password
    };
    try {
      await login(data);
      toast.success('Logged in as user demo successfully!');
      router.push(callbackURL);
    } catch (error) {
      console.error('Admin demo sign-in failed:', error);
      toast.error(
        error instanceof Error
          ? error.message
          : 'Admin demo sign-in failed. Please try again.'
      );
    }
  };

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const result = await login(data);
      if (result.success) {
        toast.success('Logged in successfully!');
        router.push('/');
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error(`Login failed:`, error);
      toast.error(
        error instanceof Error
          ? error.message
          : 'Login failed. Please try again.'
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
        <h1 className='text-2xl font-semibold tracking-tight'>Welcome back</h1>
        <p className='text-muted-foreground text-sm'>
          Enter your email below to login to your account
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

            {/* Password Field */}
            <Controller
              name='password'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <div className='flex items-center justify-between'>
                    <FieldLabel htmlFor='password'>Password</FieldLabel>
                    <Link
                      href='/forgot-password'
                      className='text-primary hover:text-primary/80 text-sm font-medium hover:underline'
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <InputGroup>
                    <InputGroupInput
                      {...field}
                      id='password'
                      type={showPassword ? 'text' : 'password'}
                      placeholder='••••••••'
                      autoComplete='current-password'
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon align='inline-end'>
                      <InputGroupButton
                        aria-label='Show Password'
                        title='Show Password'
                        size='icon-xs'
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className='size-4' />
                        ) : (
                          <Eye className='size-4' />
                        )}
                      </InputGroupButton>
                    </InputGroupAddon>
                  </InputGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Sign In Button */}
            <Button
              type='submit'
              disabled={isSubmitting}
              className='w-full shadow-sm'
            >
              {isSubmitting ? <Spinner /> : 'Sign In'}
            </Button>
          </FieldGroup>
        </form>

        {/* Divider */}
        <div className='relative'>
          <div className='absolute inset-0 flex items-center'>
            <span className='w-full border-t' />
          </div>
          <div className='relative flex justify-center text-xs uppercase'>
            <span className='bg-background text-muted-foreground px-2'>
              Or continue with
            </span>
          </div>
        </div>

        {/* Social Login */}
        <Button
          type='button'
          variant='outline'
          onClick={signInWithGoogle}
          className='w-full'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
            className='size-4'
            data-icon='google'
            data-prefix='fab'
            focusable='false'
            role='img'
            viewBox='0 0 488 512'
          >
            <path
              fill='currentColor'
              d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4'
            />
          </svg>
          Sign in with Google
        </Button>

        {/* Demo Accounts */}
        <div className='grid grid-cols-2 gap-4'>
          <Button
            type='button'
            variant='outline'
            onClick={() =>
              signInWithUserDemo('/', 'demouser@example.com', '12345678')
            }
            className='text-xs'
          >
            Demo User
          </Button>
          <Button
            type='button'
            variant='outline'
            onClick={() =>
              signInWithUserDemo('/', 'demoadmin@example.com', '12345678')
            }
            className='text-xs'
          >
            Demo Admin
          </Button>
        </div>
      </div>

      {/* Footer Sign Up */}
      <p className='text-muted-foreground px-8 text-center text-sm'>
        Don&apos;t have an account?{' '}
        <Link
          href='/signup'
          className='text-primary hover:text-primary/80 font-medium underline-offset-4 hover:underline'
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}
