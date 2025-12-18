import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import LocaleSwitcher from '@/app/components/common/LocaleSwitcher';
import Logo from '@/app/components/common/Logo';
import ThemeSwitcher from '@/app/components/common/ThemeSwitcher';
import Sidebar from '@/app/components/layout/Sidebar';

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
    <div className="flex flex-1 border">
      <Sidebar className="hidden md:top-0 md:left-0 md:fixed md:flex md:h-dvh">
        <LocaleSwitcher selectClasses="w-full" />
        <ThemeSwitcher showLabel />
      </Sidebar>

      <div className="flex flex-col w-full">
        <nav className="md:hidden xl:top-4 xl:right-4 xl:absolute flex xl:flex justify-between items-center gap-x-4 xl:p-0 px-6 py-4 w-full xl:w-auto">
          <Logo className="md:hidden flex" />
          <div className="flex items-center gap-x-2">
            <LocaleSwitcher hideLabel selectClasses="min-w-15.5" />
            <ThemeSwitcher />
          </div>
        </nav>

        <main className="flex flex-col flex-1 items-center px-6 py-6 w-full">
          <div className="md:ml-80 max-w-2xl">{children}</div>
        </main>

        <footer className="flex md:ml-80 px-6 py-10 border-border border-t min-h-20">
          Footer
        </footer>
      </div>
    </div>
  );
}
