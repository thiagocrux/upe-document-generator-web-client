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
    title: t('pages.internal.MePage.metadata.title'),
    description: t('pages.internal.MePage.metadata.description'),
  };
}

export default function MePage() {
  const t = useTranslations();

  return <p>{t('pages.internal.MePage.metadata.title')}</p>;
}
