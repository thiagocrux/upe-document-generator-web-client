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
    title: t('DocumentsPage.metadata.title'),
    description: t('DocumentsPage.metadata.description'),
  };
}

export default function DocumentsPage() {
  const t = useTranslations();

  return <p>{t('DocumentsPage.metadata.title')}</p>;
}
