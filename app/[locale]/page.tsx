import { redirect } from 'next/navigation';

export default async function RootPage() {
  // FIXME: Implement real check to verify if there is an active session and remove the hardcoded value.
  const hasActiveSession = true;

  if (hasActiveSession) {
    redirect('/me');
  } else {
    redirect('/pt-BR/auth/sign-in');
  }
}
