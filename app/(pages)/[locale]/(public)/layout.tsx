import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import LocaleSwitcher from '@/components/common/LocaleSwitcher';
import ThemeSwitcher from '@/components/common/ThemeSwitcher';
import { Card } from '@/components/ui/card';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t('applicationTitle'),
    description: t('applicationDescription'),
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="top-4 right-4 absolute flex items-center gap-x-2">
        <LocaleSwitcher hideLabel selectClasses="min-w-15.5" />
        <ThemeSwitcher />
      </div>
      <main className="flex flex-col flex-1 items-center px-2 sm:px-6 py-2 sm:py-16 w-full">
        <Card className="flex items-stretch my-auto w-full max-w-md md:max-w-4xl">
          {children}
        </Card>
      </main>
    </>
  );
}
