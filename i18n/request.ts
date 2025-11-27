import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';

import { routing } from './routing';

/*
 * Server-side request configuration for next-intl
 *
 * Purpose
 * - This module exports a request-scoped configuration via `getRequestConfig`.
 *   It is used by `next-intl` to determine the active locale for the current
 *   request and to load the appropriate message bundle.
 *
 * Behavior and constraints
 * - Runs on the server (App Router) and executes per incoming request.
 * - `requestLocale` usually corresponds to the `[locale]` route segment (e.g.
 *   `/pt` or `/en`), but next-intl resolves it independently of the detection
 *   method.
 * - We validate the detected locale with `hasLocale`. If invalid or missing,
 *   we fall back to `routing.defaultLocale`.
 * - Message bundles are dynamically imported from `./messages/${locale}.json`.
 * - The import returns an ES module; use `messagesModule.default` to get a
 *   plain object that is safe to pass to client components.
 *
 * Usage
 * - The config integrates with next-intl in the App Router and populates
 *   `NextIntlProvider` with `locale` and `messages` for server components.
 *
 * Example (app/[locale]/layout.tsx):
 *
 *   export default async function LocaleLayout({ params, children }) {
 *     return (
 *       <html lang={params.locale}>
 *         <body>
 *           {children}
 *         </body>
 *       </html>
 *     );
 *   }
 *
 * Developer notes
 * - Keep the `i18n/messages` JSON files small and well-structured. Large
 *   bundles increase server response costs if dynamically imported on each
 *   request.
 * - When adding new locales, update `routing.locales` and add the matching
 *   `i18n/messages/<locale>.json` file.
 * - If you use lazy-loaded bundles, ensure their `default` export is a plain
 *   object and not a module with non-serializable members.
 */
export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment; next-intl resolves it for us
  const requested = await requestLocale;

  // Validate the detected locale against the app's supported locales
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  // Dynamically import the message bundle for the resolved locale. Importing
  // a JSON file via `import()` returns an ES module with a `default` export —
  // we select `.default` to get the plain object required by client components.
  const messagesModule = await import(`./messages/${locale}.json`);

  return {
    locale,
    messages: messagesModule.default,
  };
});
