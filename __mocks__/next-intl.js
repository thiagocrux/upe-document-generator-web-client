import React from 'react';

// Helper to read nested keys from object using dot notation
function getNested(object = {}, path = '') {
  if (!path) {
    return undefined;
  }

  const pathParts = path.split('.');
  let current = object;

  for (let index = 0; index < pathParts.length; index++) {
    const part = pathParts[index];

    if (current && Object.prototype.hasOwnProperty.call(current, part)) {
      current = current[part];
    } else {
      return undefined;
    }
  }

  return current;
}

const NextIntlContext = React.createContext({ locale: 'pt-BR', messages: {} });

function NextIntlClientProvider({ children, locale = 'pt-BR', messages = {} }) {
  return React.createElement(
    NextIntlContext.Provider,
    { value: { locale, messages } },
    children
  );
}

function useTranslations(namespace) {
  const context = React.useContext(NextIntlContext);
  const messages = context?.messages || {};

  return function translate(key) {
    const id = namespace ? `${namespace}.${key}` : key;
    const value = getNested(messages, id);
    return value ?? id;
  };
}

function useLocale() {
  const context = React.useContext(NextIntlContext);
  return context?.locale || 'pt-BR';
}

function useFormatter() {
  return { formatNumber: (value) => value };
}

function useMessages() {
  const context = React.useContext(NextIntlContext);
  return context?.messages || {};
}

function useNow() {
  return new Date();
}

function useTimeZone() {
  return 'UTC';
}

function createIntl() {
  return { formatMessage: (message) => message.id };
}

function getRequestConfig() {
  return {};
}

async function getTranslations({ locale = 'pt-BR' } = {}) {
  let messages = {};

  try {
    messages = (await import(`../i18n/messages/${locale}.json`)).default;
  } catch (error) {
    console.log(error);
    messages = {};
  }

  return function translate(key) {
    const value = getNested(messages, key);
    return value ?? key;
  };
}

module.exports = {
  useTranslations,
  useLocale,
  useFormatter,
  useMessages,
  useNow,
  useTimeZone,
  createIntl,
  NextIntlClientProvider,
  getRequestConfig,
  getTranslations,
  default: {
    useTranslations,
    useLocale,
    useFormatter,
    useMessages,
    useNow,
    useTimeZone,
    createIntl,
    NextIntlClientProvider,
    getRequestConfig,
    getTranslations,
  },
};
