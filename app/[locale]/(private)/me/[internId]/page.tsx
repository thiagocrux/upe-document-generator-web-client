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
    title: t('MeFormPage.metadata.title'),
    description: t('MeFormPage.metadata.description'),
  };
}

export default function MeFormPage() {
  const t = useTranslations();

  return <p>{t('MeFormPage.metadata.title')}</p>;
}
