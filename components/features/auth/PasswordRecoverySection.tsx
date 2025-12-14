'use client';

import { ArrowLeft, CircleAlert, CircleCheckBig } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface PasswordRecoverySectionProps {
  variant?: 'solicitation' | 'success' | 'expired-link' | 'new-password-form';
}

export default function PasswordRecoverySection({
  variant = 'solicitation',
}: PasswordRecoverySectionProps) {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col gap-y-8 p-6 sm:p-12 w-full">
        {variant === 'solicitation' && (
          <>
            <div className="flex flex-col gap-y-2">
              <p className="font-bold text-2xl">Esqueceu a senha?</p>
              <p className="text-gray-500 text-sm">
                Não se preocupe, acontece. Digite seu e-mail abaixo para receber
                as instruções de recuperação.
              </p>
            </div>
            <div className="flex flex-col gap-y-6">
              <div>
                <Label>E-mail cadastrado</Label>
                <Input
                  placeholder="exemplo@escola.com"
                  className="mt-1 placeholder:text-sm"
                />
              </div>
              <Button size="lg" className="w-full">
                Enviar instruções
              </Button>
              <Button
                variant="link"
                className="p-0 w-min cursor-pointer"
                onClick={() => router.push('/auth/sign-in')}
              >
                <ArrowLeft />
                <span>Voltar para o login</span>
              </Button>
            </div>
          </>
        )}

        {variant === 'success' && (
          <>
            <div className="bg-green-100 p-6 border-2 border-green-600 rounded-full w-min">
              <CircleCheckBig size={32} className="text-green-600" />
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="font-bold text-2xl">Verifique o seu e-mail</p>
              <p className="text-sm">
                Enviamos um link de recuperação para{' '}
                <strong>seu@email.com</strong>.
              </p>
            </div>
            <p className="text-sm">
              Não recebeu? Verifique sua caixa de spam ou tente novamente.
            </p>
            <Button
              size="lg"
              className="w-full"
              onClick={() => router.push('/auth/sign-in')}
            >
              Voltar ao login
            </Button>
          </>
        )}

        {variant === 'expired-link' && (
          <>
            <div className="bg-red-100 p-6 border-2 border-red-600 rounded-full w-min">
              <CircleAlert size={32} className="text-red-600" />
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="font-bold text-2xl">Link expirado</p>
              <p className="text-sm">
                O link de recuperação perdeu a validade ou já foi utilizado. Por
                favor, solicite uma nova troca de senha.
              </p>
            </div>
            <div className="flex flex-col gap-y-4">
              <Button size="lg" className="w-full">
                Solicitar novamente
              </Button>
              <Button variant="link" className="p-0 w-min cursor-pointer">
                <ArrowLeft />
                <span>Voltar para o login</span>
              </Button>
            </div>
          </>
        )}

        {variant === 'new-password-form' && (
          <>
            <div className="flex flex-col gap-y-2">
              <p className="font-bold text-2xl">Criar nova senha</p>
              <p className="text-sm">
                Sua nova senha deve ser diferente das senhas utilizadas
                anteriormente.
              </p>
            </div>
            <div className="flex flex-col gap-y-4">
              <div>
                <Label>Nova senha</Label>
                <Input
                  placeholder="Insira o seu e-mail"
                  className="mt-1 placeholder:text-sm"
                />
              </div>
              <div>
                <Label>Confirmar senha</Label>
                <Input
                  placeholder="Insira o seu e-mail"
                  className="mt-1 placeholder:text-sm"
                />
              </div>
            </div>
            <Button size="lg" className="w-full">
              Redefinir senha
            </Button>
            <Button variant="link" className="p-0 w-min cursor-pointer">
              <ArrowLeft />
              <span>Voltar para o login</span>
            </Button>
          </>
        )}
      </div>
    </>
  );
}
