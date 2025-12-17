import { describe, expect, it } from '@jest/globals';
import '@testing-library/jest-dom/jest-globals';
import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import ptBRMessages from '@/i18n/messages/pt-BR.json';
import NotFoundPage from './page';

describe('NotFoundPage', () => {
  it('renders a paragraph with the title of the page', async () => {
    render(
      <NextIntlClientProvider locale="pt-BR" messages={ptBRMessages}>
        <NotFoundPage />
      </NextIntlClientProvider>
    );

    const paragraphs = screen.getAllByRole('paragraph');

    expect(paragraphs).toHaveLength(3);

    const errorCode = paragraphs[0];
    const title = paragraphs[1];
    const description = paragraphs[2];

    expect(errorCode).toHaveTextContent('404');
    expect(title).toHaveTextContent('Ops! Parece que nos perdemos.');
    expect(description).toHaveTextContent(
      'A página que você está procurando não existe ou foi movida para outro endereço.'
    );
  });
});
