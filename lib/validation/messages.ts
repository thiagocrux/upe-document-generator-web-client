import { createTranslator } from 'next-intl';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getValidationMessages(locale: string, messages: any) {
  const t = createTranslator({ locale, messages });

  return {
    REQUIRED_FIELD: (field: string) =>
      t('lib.validation.messages.requiredField', { field }),
    INVALID_FIELD: (field: string) =>
      t('lib.validation.messages.invalidField', { field }),
    REQUIRED_MIN_LENGTH: (field: string, min: number) =>
      t('lib.validation.messages.requiredMinLength', { field, min }),
    REQUIRED_MAX_LENGTH: (field: string, max: number) =>
      t('lib.validation.messages.requiredMaxLength', { field, max }),

    INVALID_PASSWORD: t('lib.validation.messages.invalidPassword'),
    UNMATCHED_PASSWORDS: t('lib.validation.messages.unmatchedPasswords'),
    INVALID_PHONE: t('lib.validation.messages.invalidPhone'),
    INVALID_UUID: t('lib.validation.messages.invalidUuid'),
  };
}
