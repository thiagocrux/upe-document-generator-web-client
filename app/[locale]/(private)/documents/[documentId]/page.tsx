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
    title: t('DocumentsFormPage.metadata.title'),
    description: t('DocumentsFormPage.metadata.description'),
  };
}

export default function DocumentsFormPage() {
  const t = useTranslations();

  return <p>{t('DocumentsFormPage.metadata.title')}</p>;
}
