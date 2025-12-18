import { expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import LockSection from './LockSection';

import ptBRMessages from '@/i18n/messages/pt-BR.json';

describe('PasswordRecoverySection', () => {
  beforeEach(() => {
    render(
      <NextIntlClientProvider locale="pt-BR" messages={ptBRMessages}>
        <LockSection />
      </NextIntlClientProvider>
    );
  });

  it('renders the .svg image', () => {
    const image = screen.getByAltText('');
    expect(image).toHaveAttribute('src', '/icons/lock.svg');
  });

  it('renders the title and subtitle of the page', async () => {
    const paragraphs = screen.getAllByRole('paragraph');

    expect(paragraphs).toHaveLength(2);

    const title = paragraphs[0];
    const subtitle = paragraphs[1];

    expect(title).toHaveTextContent('Segurança em primeiro lugar');
    expect(subtitle).toHaveTextContent(
      'Utilizamos criptografia de ponta para garantir que seus documentos e dados escolares estejam sempre protegidos.'
    );
  });
});
