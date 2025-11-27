import createMiddleware from 'next-intl/middleware';

import { routing } from './i18n/routing';

/*
 * next-intl middleware wrapper
 *
 * Purpose
 * - Creates a lightweight middleware that integrates `next-intl` into Next.js
 *   routing. It detects locale-prefixed paths and exposes the locale so
 *   request-aware helpers can load the correct message bundle.
 *
 * Behavior
 * - The middleware runs only for paths matched by `config.matcher` (see
 *   below).
 * - It should not run for API routes, Next internals, or static assets; the
 *   matcher excludes those paths to avoid side effects.
 *
 * Placement
 * - This file is the middleware entrypoint. Next.js executes middleware files
 *   from the project root. If you rename or move it, ensure the middleware
 *   configuration remains consistent.
 *
 * Security & performance notes
 * - Keep the middleware simple and performant. Avoid expensive synchronous
 *   work, as the middleware runs on every matched request.
 */
export default createMiddleware(routing);

export const config = {
  // Next.js middleware matcher. The regex matches all pathnames except for:
  // - Paths that start with `api`, `trpc`, `_next` or `_vercel` (internal or
  //   API routes)
  // - Paths that include a dot, typically static assets (e.g. favicon.ico or
  //   /images/logo.png)
  //
  // The `matcher` ensures the i18n middleware only runs for pages where the
  // locale-aware routing needs to be detected or altered.
  //
  // The string contains a regex-like pattern. We keep the `\.` escape so the
  // pattern excludes paths that contain a dot (file extensions / static
  // assets). We keep the escape for clarity and to match Next.js examples.
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
