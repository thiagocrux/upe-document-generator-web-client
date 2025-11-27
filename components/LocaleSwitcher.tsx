'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { LOCALES } from '@/config/constants';

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = useLocale();

  const supportedLocales = Object.values(LOCALES).map((locale) => locale.value);

  function changeLocale(newLocale: string) {
    if (!supportedLocales.includes(newLocale)) {
      return;
    }

    const pathnameSegments = pathname.split('/');

    if (supportedLocales.includes(pathnameSegments[1])) {
      pathnameSegments[1] = newLocale;
    } else {
      pathnameSegments.unshift('', newLocale);
    }

    const query = searchParams?.toString();
    const newPath = pathnameSegments.join('/') + (query ? `?${query}` : '');

    // TODO: Optionally set cookie or localStorage if you want to remember choice
    // document.cookie = `NEXT_LOCALE=${newLocale}; Path=/; Max-Age=31536000`;

    // Replace the path to avoid an extra history back entry. Use router.push(newPath) if you want a back entry.
    router.replace(newPath);
  }

  return (
    <select
      value={locale}
      onChange={(event) => changeLocale(event.target.value)}
    >
      {Object.values(LOCALES).map((locale) => (
        <option key={locale.label} value={locale.value}>
          {locale.label}
        </option>
      ))}
    </select>
  );
}
