import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import LockSection from '@/app/components/features/auth/LockSection';
import PasswordRecoverySection from '@/app/components/features/auth/PasswordRecoverySection';
import { Separator } from '@/app/components/ui/separator';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t('pages.auth.PasswordRecoveryPage.metadata.title'),
    description: t('pages.auth.PasswordRecoveryPage.metadata.description'),
  };
}

export default function PasswordRecoveryPage() {
  const t = useTranslations('pages.auth.PasswordRecoveryPage');

  return (
    <>
      <PasswordRecoverySection />
      <Separator orientation="vertical" className="hidden md:flex h-auto" />
      <LockSection />
    </>
  );
}
