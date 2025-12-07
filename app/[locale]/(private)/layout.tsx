import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import LocaleSwitcher from '@/components/LocaleSwitcher';
import ThemeSwitcher from '@/components/ThemeSwitcher';

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
      <header className="flex items-center gap-x-2 justify-between min-h-20 px-6 border-b border-border">
        <div>GDOC</div>
        <div className="flex items-center gap-x-2">
          <LocaleSwitcher />
          <ThemeSwitcher />
        </div>
      </header>
      <main className="flex flex-col flex-1 px-6 py-10">{children}</main>
      <footer className="border-t border-border flex py-10 min-h-20 px-6">
        Footer
      </footer>
    </>
  );
}
