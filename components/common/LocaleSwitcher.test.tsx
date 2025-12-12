import { describe, expect, it, jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import LocaleSwitcher from './LocaleSwitcher';

describe('LocaleSwitcher', () => {
  it('changes the application locale when a new option is selected', async () => {
    const replaceMock = jest.fn();
    jest
      .mocked(useRouter)
      .mockReturnValue({ replace: replaceMock } as unknown as ReturnType<
        typeof useRouter
      >);
    jest.mocked(usePathname).mockReturnValue('/pt-BR/dashboard');
    jest
      .mocked(useSearchParams)
      .mockReturnValue(
        new URLSearchParams('foo=bar') as unknown as ReturnType<
          typeof useSearchParams
        >
      );
    render(<LocaleSwitcher />);
    const user = userEvent.setup();
    const select = screen.getByRole('combobox');

    await user.click(select);
    await user.click(screen.getByAltText('flag-uk'));

    expect(replaceMock).toHaveBeenCalledTimes(1);
    expect(replaceMock).toHaveBeenCalledWith('/en/dashboard?foo=bar');
  });
});
