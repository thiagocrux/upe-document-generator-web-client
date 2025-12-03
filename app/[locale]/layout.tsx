import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import LocaleSwitcher from '@/components/LocaleSwitcher';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import '../globals.css';
import { Providers } from '../providers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Gerador de Documentos da UPE',
  description: 'Lorem Ipsum',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers locale={locale}>
          <header>
            <LocaleSwitcher />
            <ThemeSwitcher />
          </header>
          <main>{children}</main>
          <footer></footer>
        </Providers>
      </body>
    </html>
  );
}
