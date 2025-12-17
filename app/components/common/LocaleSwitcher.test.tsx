import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import LocaleSwitcher from './LocaleSwitcher';

describe('LocaleSwitcher', () => {
  it('changes the application locale when a new option is selected', async () => {
    jest.mocked(usePathname).mockReturnValue('/pt-BR/dashboard');
    jest
      .mocked(useSearchParams)
      .mockReturnValue(
        new URLSearchParams('foo=bar') as ReturnType<typeof useSearchParams>
      );

    render(<LocaleSwitcher />);
    const user = userEvent.setup();
    const select = screen.getByRole('combobox');

    await user.click(select);
    await user.click(screen.getByAltText('flag-uk'));
    const router = useRouter();

    expect(router.replace).toHaveBeenCalledTimes(1);
    expect(router.replace).toHaveBeenCalledWith('/en/dashboard?foo=bar');
  });
});
