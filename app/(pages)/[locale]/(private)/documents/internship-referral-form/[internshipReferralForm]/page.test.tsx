import { describe, expect, it } from '@jest/globals';
import '@testing-library/jest-dom/jest-globals';
import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import ptBRMessages from '@/i18n/messages/pt-BR.json';
import InternshipReferralFormPage from './page';

describe('InternshipReferralFormPage', () => {
  it('renders a paragraph with the title of the page', async () => {
    render(
      <NextIntlClientProvider locale="pt-BR" messages={ptBRMessages}>
        <InternshipReferralFormPage />
      </NextIntlClientProvider>
    );

    const t = await getTranslations({ locale: 'pt-BR' });
    const paragraph = screen.getByRole('paragraph');

    expect(paragraph).toBeInTheDocument();
    expect(t(paragraph.textContent.trim())).toBe(
      ptBRMessages.pages.internal.InternshipReferralFormPage.metadata.title
    );
  });
});
