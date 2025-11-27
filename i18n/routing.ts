import { defineRouting } from 'next-intl/routing';

import { DEFAULT_LOCALE, LOCALES } from '@/config/constants';

/*
 * Application routing configuration for next-intl
 *
 * Purpose
 * - Centralizes the app's supported locales and default locale in a
 *   single `routing` object that `next-intl` helpers consume. The routing
 *   object is used by middleware, navigation helpers and request config.
 *
 * Source of truth
 * - The actual locale definitions are stored in `@/config/constants`. Keep
 *   `LOCALES` and `DEFAULT_LOCALE` in a single place to simplify updates and
 *   ensure type safety.
 *
 * How to add a locale
 * - Add a new item to `LOCALES` in `config/constants.ts` with a `value`
 *   matching `i18n/messages/<locale>.json` (for example, `pt` or `en`).
 * - Add `i18n/messages/<locale>.json` with your translations.
 * - Update `DEFAULT_LOCALE` if you want a different fallback locale.
 *
 * Usage
 * - The returned `routing` object is consumed by other i18n helpers, e.g.
 *   `i18n/request.ts`, `i18n/navigation.ts`, and `proxy.ts`.
 */

export const routing = defineRouting({
  // Allowed locales array list.
  locales: Object.values(LOCALES).map((locale) => locale.value),
  // Fallback locale when the detected locale is missing or invalid.
  defaultLocale: DEFAULT_LOCALE,
});
