export const LOCALES: Record<
  string,
  { label: string; value: string; icon: string }
> = {
  'pt-BR': {
    label: 'Português do Brasil',
    value: 'pt-BR',
    icon: 'flag-brazil',
  },
  en: {
    label: 'English',
    value: 'en',
    icon: 'flag-uk',
  },
  es: {
    label: 'Español',
    value: 'es',
    icon: 'flag-spain',
  },
  fr: {
    label: 'Français',
    value: 'fr',
    icon: 'flag-france',
  },
};

export const DEFAULT_LOCALE = LOCALES['pt-BR'].value;
