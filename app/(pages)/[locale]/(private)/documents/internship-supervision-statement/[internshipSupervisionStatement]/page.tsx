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
    title: t(
      'pages.internal.InternshipSupervisionStatementFormPage.metadata.title'
    ),
    description: t(
      'pages.internal.InternshipSupervisionStatementFormPage.metadata.description'
    ),
  };
}

export default function InternshipSupervisionStatementFormPage() {
  const t = useTranslations(
    'pages.internal.InternshipSupervisionStatementFormPage'
  );

  return <p>{t('metadata.title')}</p>;
}
