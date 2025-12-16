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
    title: t('pages.internal.AboutPage.metadata.title'),
    description: t('pages.internal.AboutPage.metadata.description'),
  };
}

export default function AboutPage() {
  const t = useTranslations();

  return <p>{t('pages.internal.AboutPage.metadata.title')}</p>;
}
