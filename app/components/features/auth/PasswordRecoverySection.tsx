'use client';

import { ArrowLeft, CircleAlert, CircleCheckBig } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';

interface PasswordRecoverySectionProps {
  variant?:
    | 'password-solicitation'
    | 'generated-link'
    | 'expired-link'
    | 'new-password-form';
}

export default function PasswordRecoverySection({
  variant = 'password-solicitation',
}: PasswordRecoverySectionProps) {
  const router = useRouter();

  const t = useTranslations('components.features.auth.PasswordRecoverySection');

  return (
    <>
      <div className="flex flex-col gap-y-8 p-6 sm:p-12 w-full">
        {variant === 'password-solicitation' && (
          <>
            <div className="flex flex-col gap-y-2">
              <p className="font-bold text-2xl">
                {t('passwordSolicitationVariant.title')}
              </p>
              <p className="text-gray-500 text-sm">
                {t('passwordSolicitationVariant.subtitle')}
              </p>
            </div>
            <div className="flex flex-col gap-y-6">
              <div>
                <Label>
                  {t(
                    'passwordSolicitationVariant.form.inputs.registeredEmail.label'
                  )}
                </Label>
                <Input
                  placeholder={t(
                    'passwordSolicitationVariant.form.inputs.registeredEmail.placeholder'
                  )}
                  className="mt-1 placeholder:text-sm"
                />
              </div>
              <Button size="lg" className="w-full">
                {t('passwordSolicitationVariant.form.buttons.submit')}
              </Button>
              <Button
                variant="link"
                className="p-0 w-min cursor-pointer"
                onClick={() => router.push('/auth/sign-in')}
              >
                <ArrowLeft />
                <span>
                  {t('passwordSolicitationVariant.buttons.redirectToLogin')}
                </span>
              </Button>
            </div>
          </>
        )}

        {variant === 'generated-link' && (
          <>
            <div className="bg-green-100 p-6 border-2 border-green-600 rounded-full w-min">
              <CircleCheckBig size={32} className="text-green-600" />
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="font-bold text-2xl">
                {t('generatedLinkVariant.title')}
              </p>
              <p className="text-sm">
                {/* TODO: Make the e-mail dynamic. */}
                {t.rich('generatedLinkVariant.subtitle', {
                  strong: (chunks) => <strong>{chunks}</strong>,
                  email: 'seu@email.com',
                })}
              </p>
            </div>
            <p className="text-sm">
              {t('generatedLinkVariant.linkNotReceivedText')}
            </p>
            <Button
              size="lg"
              className="w-full"
              onClick={() => router.push('/auth/sign-in')}
            >
              {t('generatedLinkVariant.buttons.redirectToLogin')}
            </Button>
          </>
        )}

        {variant === 'expired-link' && (
          <>
            <div className="bg-red-100 p-6 border-2 border-red-600 rounded-full w-min">
              <CircleAlert size={32} className="text-red-600" />
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="font-bold text-2xl">
                {t('expiredLinkVariant.title')}
              </p>
              <p className="text-sm">{t('expiredLinkVariant.subtitle')}</p>
            </div>
            <div className="flex flex-col gap-y-4">
              <Button size="lg" className="w-full">
                {t('expiredLinkVariant.buttons.requestAgain')}
              </Button>
              <Button variant="link" className="p-0 w-min cursor-pointer">
                <ArrowLeft />
                <span>{t('expiredLinkVariant.buttons.redirectToLogin')}</span>
              </Button>
            </div>
          </>
        )}

        {variant === 'new-password-form' && (
          <>
            <div className="flex flex-col gap-y-2">
              <p className="font-bold text-2xl">
                {t('newPasswordFormVariant.title')}
              </p>
              <p className="text-gray-500 text-sm">
                {t('newPasswordFormVariant.subtitle')}
              </p>
            </div>
            <div className="flex flex-col gap-y-4">
              <div>
                <Label>
                  {t('newPasswordFormVariant.form.inputs.newPassword.label')}
                </Label>
                <Input
                  placeholder={t(
                    'newPasswordFormVariant.form.inputs.newPassword.placeholder'
                  )}
                  className="mt-1 placeholder:text-sm"
                />
              </div>
              <div>
                <Label>
                  {t(
                    'newPasswordFormVariant.form.inputs.newPasswordConfirmation.label'
                  )}
                </Label>
                <Input
                  placeholder={t(
                    'newPasswordFormVariant.form.inputs.newPasswordConfirmation.placeholder'
                  )}
                  className="mt-1 placeholder:text-sm"
                />
              </div>
            </div>
            <Button size="lg" className="w-full">
              {t('newPasswordFormVariant.form.buttons.submit')}
            </Button>
            <Button variant="link" className="p-0 w-min cursor-pointer">
              <ArrowLeft />
              <span>{t('newPasswordFormVariant.buttons.redirectToLogin')}</span>
            </Button>
          </>
        )}
      </div>
    </>
  );
}
