import { MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { Button } from '@/app/components/ui/button';

interface InteractiveMapProps {
  className?: string;
}

export default function InteractiveMapSection({
  className = '',
}: InteractiveMapProps) {
  const t = useTranslations('components.features.auth.InteractiveMapSection');

  return (
    <div
      className={`hidden md:flex flex-col justify-center items-center gap-y-8 sm:p-12 px-6 w-full text-center ${className}`}
    >
      <div className="">
        <Image src="/svgs/map.svg" width="500" height="500" alt="" />
      </div>
      <div className="flex flex-col gap-y-4">
        <p className="font-bold text-2xl">{t('title')}</p>
        <p className="text-sm">{t('subtitle')}</p>
      </div>
      <Button size="lg" variant="outline" className="w-min">
        <MapPin />
        <span>{t('openMapButton')}</span>
      </Button>
    </div>
  );
}
