'use server';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

export async function signUp(name: string, email: string, password: string) {
  return await auth.api.createUser({
    body: {
      email,
      password,
      name
    }
  });
}

export async function signIn(email: string, password: string) {
  return await auth.api.signInEmail({
    body: {
      email,
      password
    }
  });
}

export async function isAuthenticated() {
  return await auth.api.getSession({
    headers: await headers()
  });
}
