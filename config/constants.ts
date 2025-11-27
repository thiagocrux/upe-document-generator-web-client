export const LOCALES: Record<
  string,
  { label: string; value: string; icon: string }
> = {
  'pt-BR': {
    label: 'Português do Brasil',
    value: 'pt-BR',
    icon: '',
  },
  en: {
    label: 'English',
    value: 'en',
    icon: '',
  },
  es: {
    label: 'Español',
    value: 'es',
    icon: '',
  },
  fr: {
    label: 'Français',
    value: 'fr',
    icon: '',
  },
};

export const DEFAULT_LOCALE = LOCALES['pt-BR'].value;
