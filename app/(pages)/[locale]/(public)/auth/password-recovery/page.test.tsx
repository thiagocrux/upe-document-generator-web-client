import { describe, expect, it } from '@jest/globals';
import '@testing-library/jest-dom/jest-globals';
import { render } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
// import { getTranslations } from 'next-intl/server';

import ptBRMessages from '@/i18n/messages/pt-BR.json';
import PasswordRecoveryPage from './page';

// TODO: Increment tests.
describe('PasswordRecoveryPage', () => {
  it('renders a paragraph with the title of the page', async () => {
    const component = render(
      <NextIntlClientProvider locale="pt-BR" messages={ptBRMessages}>
        <PasswordRecoveryPage />
      </NextIntlClientProvider>
    );

    expect(component).toBeTruthy();
  });
});
