'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from 'next-themes';
import React from 'react';

interface ProvidersProps {
  children: React.ReactNode;
  locale: string;
  messages: AbstractIntlMessages;
}

export function Providers({ children, locale, messages }: ProvidersProps) {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
          timeZone="America/Recife"
        >
          {children}
        </NextIntlClientProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
