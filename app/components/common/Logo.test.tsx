import { expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import Logo from './Logo';

// TODO: Increment tests.
describe('Logo', () => {
  it('renders the component', () => {
    render(<Logo />);

    const logo = screen.getByText('LOGO');

    expect(logo).toBeTruthy();
  });
});
