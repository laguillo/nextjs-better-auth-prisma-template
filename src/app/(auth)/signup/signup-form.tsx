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
import { useState } from 'react';
import { signUp } from '@/server/user';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Spinner } from '@/components/ui/spinner';
import { Eye, EyeOff } from 'lucide-react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput
} from '@/components/ui/input-group';
import Image from 'next/image';

const formSchema = z.object({
  name: z
    .string()
    .min(2, 'Name is  required.')
    .max(50, 'Name must be at most 50 characters.'),
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const result = await signUp(data);
      if (result.success) {
        toast.success('Account created successfully!');
        router.push('/dashboard');
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.log('Error creating account' + error);
      toast.error('There was an error creating your account.');
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
          Create your account
        </h1>
        <p className='text-muted-foreground text-sm'>
          Enter your details below to create your account
        </p>
      </div>

      {/* Main Form Area */}
      <div className='grid gap-6'>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            {/* Name Field */}
            <Controller
              name='name'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='name'>Name</FieldLabel>
                  <Input
                    {...field}
                    id='name'
                    type='text'
                    placeholder='Your name'
                    autoComplete='name'
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

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
