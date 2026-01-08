import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { DEFAULT_LOCALE, VALID_LOCALES } from '@/config/constants';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// TODO: Move it to another file.
import enMessages from '@/i18n/messages/en.json';
import esMessages from '@/i18n/messages/es.json';
import frMessages from '@/i18n/messages/fr.json';
import ptBrMessages from '@/i18n/messages/pt-BR.json';

export function getMessages(locale: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const messages: Record<string, any> = {
    en: enMessages,
    es: esMessages,
    fr: frMessages,
    'pt-BR': ptBrMessages,
  };

  if (!VALID_LOCALES.includes(locale)) {
    return messages[DEFAULT_LOCALE];
  }

  return messages[locale];
}
