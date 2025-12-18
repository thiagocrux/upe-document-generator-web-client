import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/app/components/ui/button';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t('pages.NotFoundPage.metadata.title'),
    description: t('pages.NotFoundPage.metadata.description'),
  };
}

export default function NotFoundPage() {
  const t = useTranslations('pages.NotFoundPage');

  return (
    <>
      <div className="relative flex flex-col gap-y-6 px-6 sm:px-12 pt-20 sm:pt-20 pb-6 sm:pb-12 w-full overflow-hidden">
        <p className="-top-8 left-1 z-0 absolute font-extrabold text-accent text-9xl select-none">
          404
        </p>
        <p className="z-1 font-bold text-5xl">{t('title')}</p>
        <p className="text-custom-gray">{t('description')}</p>
        <Button size="lg" className="w-min select-none">
          <ArrowLeft />
          <Link href="/">{t('button')}</Link>
        </Button>
      </div>
      <div
        className={`bg-accent hidden md:flex flex-col justify-center items-center gap-y-8 sm:p-12 px-6 w-full text-center`}
      >
        <Image src="/icons/404.svg" width="500" height="500" alt="" />
      </div>
    </>
  );
}
