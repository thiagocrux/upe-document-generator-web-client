import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

import InteractiveMapSection from '@/components/features/auth/InteractiveMapSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

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
  const t = useTranslations();

  return (
    <>
      <div className="flex flex-col gap-y-8 p-6 sm:p-12 w-full">
        <div className="flex flex-col gap-y-2">
          <p className="font-bold text-2xl">Bem-vindo de volta</p>
          <p className="text-gray-500 text-sm">
            Insira suas credenciais para acessar.
          </p>
        </div>
        <div className="flex flex-col gap-y-4">
          <div>
            <Label>E-mail</Label>
            <Input
              placeholder="Insira o seu e-mail"
              className="mt-1 placeholder:text-sm"
            />
          </div>
          <div>
            <Label>Senha</Label>
            <Input
              type="password"
              placeholder="Insira a sua senha"
              className="mt-1 placeholder:text-sm"
            />
          </div>
          <Button variant="link" className="self-end p-0 font-normal">
            <Link href="/auth/password-recovery">Esqueceu a senha?</Link>
          </Button>
        </div>
        {/* TODO: Implement form and submit functionalities. */}
        <Button size="lg" className="w-full">
          Entrar
        </Button>
        <p className="text-gray-500 text-sm text-center">
          Não tem uma conta?{' '}
          <Button variant="link" className="p-0 font-bold">
            <Link href="/auth/sign-up">Cadastre-se</Link>
          </Button>
          .
        </p>
      </div>

      <Separator orientation="vertical" className="hidden md:flex h-auto" />

      <InteractiveMapSection />
    </>
  );
}
