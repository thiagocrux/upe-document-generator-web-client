'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { LOCALES } from '@/config/constants';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { DEFAULT_LOCALE } from '@/config/constants';
import Image from 'next/image';

interface LocaleSwitcherProps {
  hideLabel?: boolean;
  selectClasses?: string;
  contentClasses?: string;
}

export default function LocaleSwitcher({
  hideLabel = false,
  selectClasses = '',
  contentClasses = '',
}: LocaleSwitcherProps) {
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
    <Select
      value={locale}
      defaultValue={DEFAULT_LOCALE}
      onValueChange={(newValue) => changeLocale(newValue)}
    >
      <SelectTrigger className={selectClasses}>
        <SelectValue placeholder="Selecione uma linguagem" />
      </SelectTrigger>

      <SelectContent className={contentClasses}>
        <SelectGroup>
          {Object.values(LOCALES).map((locale) => (
            <SelectItem value={locale.value} key={locale.value}>
              <div className="flex items-center gap-x-2">
                <Image
                  src={`/svgs/flags/${locale.icon}.svg`}
                  alt={locale.icon}
                  width={16}
                  height={16}
                />
                {!hideLabel ? <p className="mr-2">{locale.label}</p> : null}
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
