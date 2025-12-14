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
    title: t('pages.internal.InternshipsFormPage.metadata.title'),
    description: t('pages.internal.InternshipsFormPage.metadata.description'),
  };
}

export default function InternshipsPage() {
  const t = useTranslations();

  return <p>{t('pages.internal.InternshipsFormPage.metadata.title')}</p>;
}
