import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

import InteractiveMapSection from '@/app/components/features/auth/InteractiveMapSection';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Separator } from '@/app/components/ui/separator';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t('pages.auth.SignInPage.metadata.title'),
    description: t('pages.auth.SignInPage.metadata.description'),
  };
}

export default function SignInPage() {
  const t = useTranslations('pages.auth.SignInPage');

  return (
    <>
      <div className="flex flex-col gap-y-8 p-6 sm:p-12 w-full">
        <div className="flex flex-col gap-y-2">
          <p className="font-bold text-2xl">{t('title')}</p>
          <p className="text-gray-500 text-sm">{t('subtitle')}</p>
        </div>
        <div className="flex flex-col gap-y-4">
          <div>
            <Label>{t('form.inputs.email.label')}</Label>
            <Input
              placeholder={t('form.inputs.email.placeholder')}
              className="mt-1 placeholder:text-sm"
            />
          </div>
          <div>
            <Label>{t('form.inputs.password.label')}</Label>
            <Input
              type="password"
              placeholder={t('form.inputs.password.placeholder')}
              className="mt-1 placeholder:text-sm"
            />
          </div>
          <Button variant="link" className="self-end p-0 font-normal">
            <Link href="/auth/password-recovery">
              {t('form.buttons.forgotPassword')}
            </Link>
          </Button>
        </div>
        {/* TODO: Implement form and submit functionalities. */}
        <Button size="lg" className="w-full">
          {t('form.buttons.submit')}
        </Button>
        <p className="text-gray-500 text-sm text-center">
          {t('buttons.notRegisteredYet.text')}{' '}
          <Button variant="link" className="p-0 font-bold">
            <Link href="/auth/sign-up">
              {t('buttons.notRegisteredYet.link')}
            </Link>
          </Button>
          .
        </p>
      </div>

      <Separator orientation="vertical" className="hidden md:flex h-auto" />

      <InteractiveMapSection />
    </>
  );
}
