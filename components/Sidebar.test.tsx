import { describe, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  it('renders the component', () => {
    render(<Sidebar />);

    const sidebar = screen.getByRole('complementary');

    expect(sidebar).toBeTruthy();
  });
});
