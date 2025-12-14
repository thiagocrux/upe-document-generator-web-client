import { expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import LockSection from './LockSection';

// TODO: Increment tests.
describe('LockSection', () => {
  it('', () => {
    render(<LockSection />);

    const section = screen.getByText('Segurança em primeiro lugar');

    expect(section).toBeTruthy();
  });
});
