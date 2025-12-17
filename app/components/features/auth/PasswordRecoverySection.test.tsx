import { expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import { useRouter } from 'next/navigation';

import ptBRMessages from '@/i18n/messages/pt-BR.json';
import PasswordRecoverySection from './PasswordRecoverySection';

describe('PasswordRecoverySection', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('"password-solicitation" variant', () => {
    beforeEach(() => {
      render(
        <NextIntlClientProvider locale="pt-BR" messages={ptBRMessages}>
          <PasswordRecoverySection variant="password-solicitation" />
        </NextIntlClientProvider>
      );
    });

    it('renders the texts', async () => {
      const paragraphs = screen.getAllByRole('paragraph');

      expect(paragraphs).toHaveLength(2);

      const title = paragraphs[0];
      const subtitle = paragraphs[1];

      expect(title).toHaveTextContent('Esqueceu a senha?');
      expect(subtitle).toHaveTextContent(
        'Não se preocupe, acontece. Digite seu e-mail abaixo para receber as instruções de recuperação.'
      );
    });

    it('redirects to login page when back button is clicked', async () => {
      const user = userEvent.setup();

      const button = screen.getByRole('button', {
        name: /voltar para o login/i,
      });

      await user.click(button);

      const router = useRouter();
      expect(router.push).toHaveBeenCalledWith('/auth/sign-in');
    });
  });

  describe('"generated-link" variant', () => {
    it('renders the texts', async () => {
      render(
        <NextIntlClientProvider locale="pt-BR" messages={ptBRMessages}>
          <PasswordRecoverySection variant="generated-link" />
        </NextIntlClientProvider>
      );

      const paragraphs = screen.getAllByRole('paragraph');

      expect(paragraphs).toHaveLength(3);

      const title = paragraphs[0];
      const subtitle = paragraphs[1];
      const linkNotReceivedText = paragraphs[2];

      expect(title).toHaveTextContent('Verifique o seu e-mail');
      expect(subtitle).toHaveTextContent(
        'Enviamos um link de recuperação para seu@email.com.'
      );
      expect(linkNotReceivedText).toHaveTextContent(
        'Não recebeu? Verifique sua caixa de spam ou tente novamente.'
      );
    });
  });

  describe('"expired-links" variant', () => {
    it('renders the texts', async () => {
      render(
        <NextIntlClientProvider locale="pt-BR" messages={ptBRMessages}>
          <PasswordRecoverySection variant="expired-link" />
        </NextIntlClientProvider>
      );

      const paragraphs = screen.getAllByRole('paragraph');

      expect(paragraphs).toHaveLength(2);

      const title = paragraphs[0];
      const subtitle = paragraphs[1];

      expect(title).toHaveTextContent('Link expirado');
      expect(subtitle).toHaveTextContent(
        'O link de recuperação perdeu a validade ou já foi utilizado. Por favor, solicite uma nova troca de senha.'
      );
    });
  });

  describe('"new-password-form" variant', () => {
    it('renders the texts', async () => {
      render(
        <NextIntlClientProvider locale="pt-BR" messages={ptBRMessages}>
          <PasswordRecoverySection variant="new-password-form" />
        </NextIntlClientProvider>
      );

      const paragraphs = screen.getAllByRole('paragraph');

      expect(paragraphs).toHaveLength(2);

      const title = paragraphs[0];
      const subtitle = paragraphs[1];

      expect(title).toHaveTextContent('Criar nova senha');
      expect(subtitle).toHaveTextContent(
        'Sua nova senha deve ser diferente das senhas utilizadas anteriormente.'
      );
    });
  });
});
