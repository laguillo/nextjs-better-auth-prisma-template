import { isAuthenticated } from '@/server/user';
import { redirect } from 'next/navigation';

export async function RedirectIfAuthenticated() {
  const session = await isAuthenticated();

  if (session) {
    redirect('/');
  }

  return null;
}
