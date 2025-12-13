'use server';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

export async function signUp(data: {
  name: string;
  email: string;
  password: string;
}) {
  try {
    const newUser = await auth.api.createUser({
      body: {
        email: data.email,
        password: data.password,
        name: data.name
      }
    });

    return { success: true, data: newUser };
  } catch (error) {
    console.error('Failed to create user:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create user'
    };
  }
}

export async function login(data: { email: string; password: string }) {
  try {
    const result = await auth.api.signInEmail({
      body: {
        email: data.email,
        password: data.password
      },
      headers: await headers()
    });

    return { success: true, data: result };
  } catch (error) {
    console.error('Login failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Login failed'
    };
  }
}

export async function logout() {
  try {
    await auth.api.signOut({
      headers: await headers()
    });
    return { success: true };
  } catch (error) {
    console.error('Logout failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Logout failed'
    };
  }
}

export async function forgotPassword(data: { email: string }) {
  try {
    const result = await auth.api.requestPasswordReset({
      body: {
        email: data.email,
        redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password`
      }
    });
    return { success: true, data: result };
  } catch (error) {
    console.error('Forgot password failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Forgot password failed'
    };
  }
}

export async function resetPassword(data: {
  password: string;
  token?: string;
}) {
  try {
    const result = await auth.api.resetPassword({
      body: {
        password: data.password,
        token: data.token
      }
    });
    return { success: true, data: result };
  } catch (error) {
    console.error('Reset password failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Reset password failed'
    };
  }
}

export async function isAuthenticated() {
  return await auth.api.getSession({
    headers: await headers()
  });
}
