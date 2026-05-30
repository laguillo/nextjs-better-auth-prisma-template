'use client';

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
import { PasswordInput } from '@/components/ui/password-input';
import { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Spinner } from '@/components/ui/spinner';
import Image from 'next/image';
import { Alert } from '@/components/ui/alert';
import { AlertTriangleIcon } from 'lucide-react';

const signUpSchema = z.object({
  name: z
    .string()
    .min(2, 'Name is required.')
    .max(50, 'Name must be at most 50 characters.'),
  lastName: z
    .string()
    .min(2, 'Last name is required.')
    .max(50, 'Last name must be at most 50 characters.'),
  email: z
    .email('Please enter a valid email address.')
    .min(5, 'Email is too short.')
    .max(50, 'Email must be at most 50 characters.'),
  password: z
    .string()
    .min(8, 'Password is too short.')
    .max(100, 'Password must be at most 100 characters.')
});

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsLoading] = useState(false);

  type FormValues = z.infer<typeof signUpSchema>;

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      lastName: '',
      email: '',
      password: ''
    }
  });

  async function onSubmit(values: FormValues) {
    try {
      setIsLoading(true);
      setError(null);
      const { error } = await authClient.signUp.email({
        name: `${values.name} ${values.lastName}`,
        email: values.email,
        password: values.password,
        callbackURL: '/dashboard'
      });

      if (error) {
        setError(error.message ?? 'Something went wrong. Please try again.');
        return;
      }

      toast.success('Account created. Check your email to verify it.');
      form.reset();
      router.push('/login');
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.'
      );
    } finally {
      setIsLoading(false);
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
          Create your account
        </h1>
        <p className='text-muted-foreground text-sm'>
          Enter your details below to create your account
        </p>

        {error && (
          <Alert variant='destructive' className='mt-4 w-full'>
            <AlertTriangleIcon className='mr-2 h-4 w-4' />
            {error}
          </Alert>
        )}
      </div>

      {/* Main Form Area */}
      <div className='grid gap-6'>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <FieldGroup className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
              <Controller
                name='name'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>First Name</FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      type='text'
                      placeholder='Enter your first name'
                      autoComplete='name'
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name='lastName'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Last Name</FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      type='text'
                      placeholder='Enter your last name'
                      autoComplete='family-name'
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>

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
                  <FieldLabel htmlFor='password'>Password</FieldLabel>
                  <PasswordInput
                    {...field}
                    id='password'
                    placeholder='••••••••'
                    autoComplete='new-password'
                    aria-invalid={fieldState.invalid}
                    className='rounded-l-lg'
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Create Account Button */}
            <Button type='submit' disabled={isSubmitting} className='w-full'>
              {isSubmitting ? <Spinner /> : 'Create Account'}
            </Button>
          </FieldGroup>
        </form>
      </div>

      {/* Footer Sign In */}
      <p className='text-muted-foreground px-8 text-center text-sm'>
        Already have an account?{' '}
        <Link
          href='/login'
          className='text-primary hover:text-primary/80 font-medium underline-offset-4 hover:underline'
        >
          Sign in
        </Link>
      </p>

      {/* Terms */}
      <p className='text-muted-foreground px-8 text-center text-xs'>
        By clicking continue, you agree to our{' '}
        <Link
          href='#'
          className='hover:text-primary underline underline-offset-4'
        >
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link
          href='#'
          className='hover:text-primary underline underline-offset-4'
        >
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}
