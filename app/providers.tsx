'use client';

import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from 'next-themes';
import React from 'react';

interface ProvidersProps {
  children: React.ReactNode;
  locale: string;
}

export function Providers({ children, locale }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <NextIntlClientProvider locale={locale}>
        {children}
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}
