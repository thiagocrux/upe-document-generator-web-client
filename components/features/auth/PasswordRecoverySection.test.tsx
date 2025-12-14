import { expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import PasswordRecoverySection from './PasswordRecoverySection';

// TODO: Increment tests.
describe('PasswordRecoverySection', () => {
  it('', () => {
    render(<PasswordRecoverySection variant="solicitation" />);

    const section = screen.getByText('Esqueceu a senha?');

    expect(section).toBeTruthy();
  });
});
