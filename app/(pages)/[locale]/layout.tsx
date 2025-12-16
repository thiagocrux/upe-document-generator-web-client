/**
 * IMPORTANT: This layout must reside inside the dynamic route segment
 * `[locale]` (for example: app/(pages)/[locale]/layout.tsx) so that
 * `params.locale` is available. Without this, `NextIntlClientProvider`
 * cannot infer the `locale` prop and will throw the error:
 * "Couldn't infer the `locale` prop in `NextIntlClientProvider`, please provide it explicitly."
 *
 * See: https://next-intl.dev/docs/configuration#locale
 */

import type { Metadata } from 'next';
import { getMessages, getTranslations } from 'next-intl/server';
import { Poppins } from 'next/font/google';

import { Providers } from '../../providers';

import '../../globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

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
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!locale) {
    throw new Error(
      'Locale missing: this layout must be placed under [locale] (e.g. app/(pages)/[locale]/layout.tsx). NextIntlClientProvider requires a valid `locale` prop. See https://next-intl.dev/docs/configuration#locale for more information.'
    );
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${poppins.variable} antialiased flex flex-col min-h-dvh min-w-full`}
      >
        <Providers locale={locale} messages={messages}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
