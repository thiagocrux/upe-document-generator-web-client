import { describe, expect, it, jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import LocaleSwitcher from './LocaleSwitcher';

describe('LocaleSwitcher', () => {
  it('changes the language when a new option is selected', async () => {
    // -- ARRANGE --
    const replaceMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ replace: replaceMock });
    (usePathname as jest.Mock).mockReturnValue('/pt-BR/dashboard');

    (useSearchParams as jest.Mock).mockReturnValue(
      new URLSearchParams('foo=bar')
    );

    render(<LocaleSwitcher />);
    const user = userEvent.setup();
    const select = screen.getByRole('combobox');

    // -- ACT --
    await user.selectOptions(select, 'en');

    // -- ASSERT --
    expect(replaceMock).toHaveBeenCalledTimes(1);
    expect(replaceMock).toHaveBeenCalledWith('/en/dashboard?foo=bar');
  });
});
