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
    title: t('SettingsPage.metadata.title'),
    description: t('SettingsPage.metadata.description'),
  };
}

export default function SettingsPage() {
  const t = useTranslations();

  return <p>{t('SettingsPage.metadata.title')}</p>;
}
