import Sidebar from '.layout/Sidebar';
import { describe, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';

describe('Sidebar', () => {
  it('renders the component', () => {
    render(<Sidebar />);

    const sidebar = screen.getByRole('complementary');

    expect(sidebar).toBeTruthy();
  });
});
