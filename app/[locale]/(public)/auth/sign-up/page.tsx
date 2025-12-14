import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import InteractiveMapSection from '@/components/features/auth/InteractiveMapSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t('pages.auth.SignUpPage.metadata.title'),
    description: t('pages.auth.SignUpPage.metadata.description'),
  };
}

export default function SignUpPage() {
  const t = useTranslations();

  return (
    <>
      <div className="flex flex-col gap-y-8 p-6 sm:p-12 w-full">
        <div className="flex flex-col gap-y-2">
          <p className="font-bold text-2xl">Crie sua conta</p>
          <p className="text-gray-500 text-sm">
            Vamos começar seu cadastro para gerar documentos incríveis.
          </p>
        </div>
        <div className="flex flex-col gap-y-4">
          <div>
            <Label>Nome completo</Label>
            <Input
              placeholder="Insira o seu nome completo"
              className="mt-1 placeholder:text-sm"
            />
          </div>
          <div>
            <Label>CPF</Label>
            <Input
              placeholder="Insira o seu CPF"
              className="mt-1 placeholder:text-sm"
            />
          </div>
          <div>
            <Label>Curso</Label>
            <Input
              placeholder="Insira o seu curso"
              className="mt-1 placeholder:text-sm"
            />
          </div>
          <div>
            <Label>E-mail institucional</Label>
            <Input
              type="email"
              placeholder="Insira o seu e-mail institucional"
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
          <div>
            <Label>Confirme a senha</Label>
            <Input
              type="password"
              placeholder="Confirme a sua senha"
              className="mt-1 placeholder:text-sm"
            />
          </div>
        </div>
        {/* TODO: Implement form and submit functionalities. */}
        <Button size="lg" className="w-full">
          Cadastrar
        </Button>
        <p className="text-gray-500 text-sm text-center">
          Já tem uma conta?{' '}
          <Button variant="link" className="p-0 font-bold">
            <Link href="/auth/sign-in">Faça login</Link>
          </Button>
          .
        </p>
      </div>

      <Separator orientation="vertical" className="hidden md:flex h-auto" />

      <InteractiveMapSection />
    </>
  );
}
