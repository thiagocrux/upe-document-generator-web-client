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
      'pages.internal.InternshipSupervisionStatementDetailsPage.metadata.title'
    ),
    description: t(
      'pages.internal.InternshipSupervisionStatementDetailsPage.metadata.description'
    ),
  };
}

export default function InternshipAgreementFormPage() {
  const t = useTranslations(
    'pages.internal.InternshipSupervisionStatementDetailsPage'
  );

  return <p>{t('metadata.title')}</p>;
}
