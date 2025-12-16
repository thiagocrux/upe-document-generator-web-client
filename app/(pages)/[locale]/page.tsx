import { redirect } from 'next/navigation';

export default async function LocaleRootPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // FIXME: Implement real check to verify if there is an active session and remove the hardcoded value.
  const hasActiveSession = true;

  if (hasActiveSession) {
    redirect(`/${locale}/me`);
  } else {
    redirect(`/${locale}/auth/sign-in`);
  }
}
