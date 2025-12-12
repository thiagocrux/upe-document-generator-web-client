'use client';

import { Moon, Sun } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';

import { Button } from '../ui/button';

interface ThemeSwitcherProps {
  showLabel?: boolean;
  className?: string;
}

export default function ThemeSwitcher({
  showLabel = false,
  className = '',
}: ThemeSwitcherProps) {
  const t = useTranslations();
  const { setTheme, resolvedTheme } = useTheme();

  function handleClick() {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  }

  return (
    <Button
      variant="outline"
      className={`text-custom-gray hover:text-custom-gray bg-transparent transition-none ${className}`}
      onClick={handleClick}
    >
      <Sun className="hidden dark:block" />
      <Moon className="dark:hidden block" />
      {resolvedTheme === 'dark' && showLabel && (
        <span>{t('Components.ThemeSwitcher.lightTheme')}</span>
      )}
      {resolvedTheme === 'light' && showLabel && (
        <span>{t('Components.ThemeSwitcher.darkTheme')}</span>
      )}
    </Button>
  );
}
