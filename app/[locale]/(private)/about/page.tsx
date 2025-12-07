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
    title: t('AboutPage.metadata.title'),
    description: t('AboutPage.metadata.description'),
  };
}

export default function AboutPage() {
  const t = useTranslations();

  return <p>{t('AboutPage.metadata.title')}</p>;
}
