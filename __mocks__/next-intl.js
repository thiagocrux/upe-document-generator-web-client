const useTranslations = () => (key) => key;
const useLocale = () => 'pt-BR';
const useFormatter = () => ({ formatNumber: (value) => value });
const useMessages = () => ({});
const useNow = () => new Date();
const useTimeZone = () => 'UTC';
const createIntl = () => ({ formatMessage: (message) => message.id });
const NextIntlClientProvider = ({ children }) => children;
const getRequestConfig = () => ({});

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
  },
};
