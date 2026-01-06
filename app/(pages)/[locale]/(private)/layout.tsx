import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { cookies } from 'next/headers';
import Link from 'next/link';

import LocaleSwitcher from '@/app/components/common/LocaleSwitcher';
import ThemeSwitcher from '@/app/components/common/ThemeSwitcher';
import { AppSidebar } from '@/app/components/layout/AppSidebar';
import { Button } from '@/app/components/ui/button';
import { Separator } from '@/app/components/ui/separator';

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/app/components/ui/sidebar';

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
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true';

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <div className="flex flex-col w-full">
        <SidebarInset>
          <header className="top-0 sticky flex justify-between items-center gap-2 bg-background p-4 border-b shrink-0">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="-ml-1 cursor-pointer" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
            </div>
            <div className="flex items-center gap-x-2">
              <LocaleSwitcher hideLabel selectClasses="min-w-15.5" />
              <ThemeSwitcher />
            </div>
          </header>
        </SidebarInset>
        <main className="p-6 w-full h-full">
          <div className="flex justify-center mx-auto max-w-4xl">
            {children}
          </div>
        </main>
        <footer className="flex justify-between items-center px-4 py-3 text-muted-foreground text-xs">
          <p>@ 2026 Placeholder</p>
          <div className="flex items-center gap-4">
            <Link href="#">
              <Button
                variant="link"
                className="px-1 font-normal text-muted-gray text-xs cursor-pointer"
                tabIndex={-1}
              >
                Configurações
              </Button>
            </Link>
            <Link href="#">
              <Button
                variant="link"
                className="px-1 font-normal text-muted-gray text-xs cursor-pointer"
                tabIndex={-1}
              >
                Suporte
              </Button>
            </Link>
            <Link href="#">
              <Button
                variant="link"
                className="px-1 font-normal text-muted-gray text-xs cursor-pointer"
                tabIndex={-1}
              >
                Sobre o sistema
              </Button>
            </Link>
          </div>
        </footer>
      </div>
    </SidebarProvider>
  );
}
