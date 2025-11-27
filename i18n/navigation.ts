import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

/*
 * Locale-aware navigation helpers
 *
 * `next-intl` can create small wrappers for the Next.js navigation APIs.
 * Those wrappers are aware of your routing configuration (for example,
 * localized prefixes like `/pt` or `/en`). We create them with
 * `createNavigation(routing)` and re-export the helpers the app needs.
 *
 * Exports:
 * - `Link`: a locale-aware replacement for Next.js `<Link />`.
 * - `redirect`: a server-side helper that preserves locale during redirects.
 * - `usePathname`: returns the current path including a locale prefix.
 * - `useRouter`: router with helpers that understand locale-aware routing.
 * - `getPathname`: builds localized paths from route names.
 *
 * Usage examples:
 * - Use `Link` like `next/link`; it will preserve the current locale:
 *     <Link href="/about">About</Link>
 *
 * - To change the locale using navigation, construct a localized path and
 *   push it with the router:
 *     router.push(getPathname('/about', { locale: 'en' }))
 *
 * These helpers keep localized links and redirects consistent and prevent
 * manual locale-prefix handling across the app.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
