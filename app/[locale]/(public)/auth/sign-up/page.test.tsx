import { describe, expect, it } from '@jest/globals';
import '@testing-library/jest-dom/jest-globals';
import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
// import { getTranslations } from 'next-intl/server';

import ptBRMessages from '@/i18n/messages/pt-BR.json';
import SignUpPage from './page';

// TODO: Increment tests.
describe('SignUpPage', () => {
  it('renders a paragraph with the title of the page', async () => {
    render(
      <NextIntlClientProvider locale="pt-BR" messages={ptBRMessages}>
        <SignUpPage />
      </NextIntlClientProvider>
    );

    // const t = await getTranslations({ locale: 'pt-BR' });
    const text = screen.getByText('Crie sua conta');

    expect(text).toBeInTheDocument();
    // expect(t(paragraph.textContent.trim())).toBe('');
  });
});
