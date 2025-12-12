'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { login } from '@/server/user';
import { Spinner } from '@/components/ui/spinner';
import { authClient } from '@/lib/auth-client';

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

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const result = await login(data);
      if (result.success) {
        toast.success('Logged in successfully!');
        router.push('/dashboard');
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
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader className='text-center'>
          <CardTitle className='text-xl'>Welcome back</CardTitle>
          <CardDescription>Login with your Google account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <Field>
                <Button
                  variant='outline'
                  type='button'
                  onClick={signInWithGoogle}
                >
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                    <path
                      fill='currentColor'
                      d='M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053z'
                    />
                  </svg>
                  Login with Google
                </Button>
              </Field>
              <FieldSeparator className='*:data-[slot=field-separator-content]:bg-card'>
                Or continue with
              </FieldSeparator>
              <FieldGroup>
                <Controller
                  name='email'
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel>Email address</FieldLabel>
                      <Input
                        {...field}
                        aria-invalid={fieldState.invalid}
                        type='email'
                        placeholder='Email address'
                        autoComplete='email'
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name='password'
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <div className='flex items-center'>
                        <FieldLabel htmlFor='password'>Password</FieldLabel>
                        <Link
                          href='/forgot-password'
                          className='ml-auto text-sm underline-offset-4 hover:underline'
                        >
                          Forgot your password?
                        </Link>
                      </div>
                      <Input
                        {...field}
                        aria-invalid={fieldState.invalid}
                        type='password'
                        placeholder='Your password'
                        autoComplete='current-password'
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </FieldGroup>
              <Field>
                <Button type='submit' disabled={isSubmitting}>
                  {isSubmitting ? <Spinner /> : 'Login'}
                </Button>
                <FieldDescription className='text-center'>
                  Don&apos;t have an account?{' '}
                  <Link href='/signup'>Sign up</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className='px-6 text-center'>
        By clicking continue, you agree to our{' '}
        <Link href='#'>Terms of Service</Link> and{' '}
        <Link href='#'>Privacy Policy</Link>.
      </FieldDescription>
    </div>
  );
}
