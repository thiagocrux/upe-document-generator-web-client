import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import LockSection from '@/components/features/auth/LockSection';
import PasswordRecoverySection from '@/components/features/auth/PasswordRecoverySection';
import { Separator } from '@/components/ui/separator';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t('PassowordRecoveryPage.metadata.title'),
    description: t('PassowordRecoveryPage.metadata.description'),
  };
}

export default function PasswordRecoveryPage() {
  const t = useTranslations();

  return (
    <>
      <PasswordRecoverySection />
      <Separator orientation="vertical" className="hidden md:flex h-auto" />
      <LockSection />
    </>
  );
}
