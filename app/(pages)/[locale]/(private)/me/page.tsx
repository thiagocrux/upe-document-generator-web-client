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
  const t = useTranslations('pages.internal.MePage');

  return <p>{t('metadata.title')}</p>;
}
