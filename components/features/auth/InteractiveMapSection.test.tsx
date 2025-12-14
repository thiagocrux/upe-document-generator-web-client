import { expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import InteractiveMapSection from './InteractiveMapSection';

// TODO: Increment tests.
describe('InteractiveMapSection', () => {
  it('', () => {
    render(<InteractiveMapSection />);

    const section = screen.getByText('Explore escolas próximas');

    expect(section).toBeTruthy();
    // expect(t(paragraph.textContent.trim())).toBe('');
  });
});
