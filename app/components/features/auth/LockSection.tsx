import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface LockSectionProps {
  className?: string;
}

export default function LockSection({ className = '' }: LockSectionProps) {
  const t = useTranslations('components.features.auth.LockSection');

  return (
    <div
      className={`hidden md:flex flex-col justify-center items-center sm:p-12 px-6 w-full text-center ${className}`}
    >
      <div className="w-60">
        <Image src="/icons/lock.svg" width="500" height="500" alt="" />
      </div>
      <div className="flex flex-col gap-y-4">
        <p className="font-bold text-xl">{t('title')}</p>
        <p className="text-gray-500 text-sm">{t('subtitle')}</p>
      </div>
    </div>
  );
}
