import { expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import ptBRMessages from '@/i18n/messages/pt-BR.json';
import InteractiveMapSection from './InteractiveMapSection';

describe('PasswordRecoverySection', () => {
  beforeEach(() => {
    render(
      <NextIntlClientProvider locale="pt-BR" messages={ptBRMessages}>
        <InteractiveMapSection />
      </NextIntlClientProvider>
    );
  });

  it('renders the .svg image', () => {
    const image = screen.getByAltText('');
    expect(image).toHaveAttribute('src', '/icons/map.svg');
  });

  it('renders the title and subtitle of the page', async () => {
    const paragraphs = screen.getAllByRole('paragraph');

    expect(paragraphs).toHaveLength(2);

    const title = paragraphs[0];
    const subtitle = paragraphs[1];

    expect(title).toHaveTextContent('Explore escolas próximas');
    expect(subtitle).toHaveTextContent(
      'Use nosso mapa interativo para encontrar as melhores instituições de ensino na sua região com apenas um clique.'
    );
  });
});
