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
    title: t('SignUpPage.metadata.title'),
    description: t('SignUpPage.metadata.description'),
  };
}

export default function SignUpPage() {
  const t = useTranslations();

  return <p>{t('SignUpPage.metadata.title')}</p>;
}
