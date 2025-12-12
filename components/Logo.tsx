import { FileStack } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface LogoProps {
  isMinimized?: boolean;
  className?: string;
  onClick?: () => void;
}

// TODO: Update placeholders with real logos.
export default function Logo({
  isMinimized = false,
  className = '',
  onClick,
}: LogoProps) {
  const t = useTranslations();

  return isMinimized ? (
    <p className={`text-custom-gray ${className}`} onClick={onClick}>
      <FileStack />
    </p>
  ) : (
    <p
      className={`flex items-center gap-x-2 text-custom-gray ${className}`}
      onClick={onClick}
    >
      <FileStack />
      <span className="font-medium">{t('applicationTitle')}</span>
    </p>
  );
}
