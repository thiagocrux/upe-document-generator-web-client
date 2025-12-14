import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import Image from 'next/image';

interface InteractiveMapProps {
  className?: string;
}

export default function InteractiveMapSection({
  className = '',
}: InteractiveMapProps) {
  return (
    <div
      className={`hidden md:flex flex-col justify-center items-center gap-y-8 sm:p-12 px-6 w-full text-center ${className}`}
    >
      <div className="">
        <Image src="/svgs/map.svg" width="500" height="500" alt="fsafds" />
      </div>
      <div className="flex flex-col gap-y-4">
        <p className="font-bold text-2xl">Explore escolas próximas</p>
        <p className="text-sm">
          Use nosso mapa interativo para encontrar as melhores instituições de
          ensino na sua região com apenas um clique.
        </p>
      </div>
      <Button size="lg" variant="outline" className="w-min">
        <MapPin />
        <span>Abrir Mapa</span>
      </Button>
    </div>
  );
}
