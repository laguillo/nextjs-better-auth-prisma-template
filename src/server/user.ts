'use server';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

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
        newPassword: data.password,
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
