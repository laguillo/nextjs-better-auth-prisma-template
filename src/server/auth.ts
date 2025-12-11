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

export async function isAuthenticated() {
  return await auth.api.getSession({
    headers: await headers()
  });
}
