import { describe, expect, it } from '@jest/globals';
import '@testing-library/jest-dom/jest-globals';
import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
// import { getTranslations } from 'next-intl/server';

import ptBRMessages from '@/i18n/messages/pt-BR.json';
import PasswordRecoveryPage from './page';

// TODO: Increment tests.
describe('PasswordRecoveryPage', () => {
  it('renders a paragraph with the title of the page', async () => {
    render(
      <NextIntlClientProvider locale="pt-BR" messages={ptBRMessages}>
        <PasswordRecoveryPage />
      </NextIntlClientProvider>
    );

    // const t = await getTranslations({ locale: 'pt-BR' });
    const text = screen.getByText('Esqueceu a senha?');

    expect(text).toBeInTheDocument();
    // expect(t(paragraph.textContent.trim())).toBe('');
  });
});
