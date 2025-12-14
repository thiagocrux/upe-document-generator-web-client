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
    title: t('pages.NotFoundPage.metadata.title'),
    description: t('pages.NotFoundPage.metadata.description'),
  };
}

export default function NotFound() {
  const t = useTranslations();

  return <p>{t('pages.NotFoundPage.metadata.title')}</p>;
}
