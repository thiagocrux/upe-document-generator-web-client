import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t('SignInPage.metadata.title'),
    description: t('SignInPage.metadata.description'),
  };
}

export default function SignInPage() {
  const t = useTranslations();

  return <p>{t('SignInPage.metadata.title')}</p>;
}
