import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { setTheme } from 'next-themes';
import ThemeSwitcher from '../ThemeSwitcher';

describe('ThemeSwitcher', () => {
  it('changes the theme when the button is clicked', async () => {
    render(<ThemeSwitcher />);
    const user = userEvent.setup();

    // Wait until the component finishes the client mount and mounts the button;
    // ThemeSwitcher initially renders an <img> loading placeholder, then swaps
    // to the actual button once `mounted` is true. Use findByRole to wait.
    const button = await screen.findByRole('button');
    await user.click(button);

    expect(setTheme).toHaveBeenCalledTimes(1);
    expect(setTheme).toHaveBeenCalledWith('light');
  });
});
