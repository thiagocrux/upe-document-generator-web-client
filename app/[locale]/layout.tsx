import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import LocaleSwitcher from '@/components/LocaleSwitcher';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import '../globals.css';
import { Providers } from '../providers';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

// TODO: Adjust title and description.
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
      <body className={`${poppins.variable} antialiased`}>
        <Providers locale={locale}>
          <header className="flex items-center gap-x-2 justify-between">
            <div>GDOC</div>
            <div className="flex items-center gap-x-2">
              <LocaleSwitcher />
              <ThemeSwitcher />
            </div>
          </header>
          <main>{children}</main>
          <footer></footer>
        </Providers>
      </body>
    </html>
  );
}
