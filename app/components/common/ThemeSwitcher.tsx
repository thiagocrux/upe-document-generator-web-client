'use client';

import { Moon, Sun } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { Button } from '../ui/button';

interface ThemeSwitcherProps {
  showLabel?: boolean;
  className?: string;
}

export default function ThemeSwitcher({
  showLabel = false,
  className = '',
}: ThemeSwitcherProps) {
  const t = useTranslations('components.common.ThemeSwitcher');
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Schedule the mounted flag to avoid calling setState synchronously inside the effect
    const animationFrameId = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

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
      {mounted && resolvedTheme === 'dark' && showLabel && (
        <span>{t('lightTheme')}</span>
      )}
      {mounted && resolvedTheme === 'light' && showLabel && (
        <span>{t('darkTheme')}</span>
      )}
    </Button>
  );
}
