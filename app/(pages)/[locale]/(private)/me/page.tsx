import { Button } from '@/app/components/ui/button';
import { Folder, GraduationCap, Plus, Sprout } from 'lucide-react';
import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t('pages.internal.MePage.metadata.title'),
    description: t('pages.internal.MePage.metadata.description'),
  };
}

export default function MePage() {
  const t = useTranslations('pages.internal.MePage');

  return (
    <div className="flex flex-col space-y-8 w-full h-full">
      <div className="relative bg-linear-to-r from-emerald-600 via-emerald-500 to-emerald-400 shadow-md p-10 rounded-3xl min-h-[180px] overflow-hidden text-white">
        <p className="mb-2 font-bold text-[32px]">Olá, Ana!</p>
        <p className="mb-4 font-thin">Bem-vinda ao Portal do Estagiário.</p>
        <div className="bg-white/20 px-3 py-1 rounded-full w-fit">
          <span className="flex items-center gap-2 text-[12px] text-center capitalize tracking-[.5px]">
            <GraduationCap className="size-4" /> <p>Ciências Biológicas</p>
          </span>
        </div>
        <div className="right-[-50] bottom-[-80] absolute">
          <Sprout strokeWidth={1.2} className="size-[250px] text-white/30" />
        </div>
      </div>
      <div className="p-10 border-2 border-dashed rounded-3xl text-center">
        <Folder
          strokeWidth={1.2}
          className="mx-auto mb-6 size-16 text-gray-300"
        />
        <p className="mb-2 font-semibold text-xl">
          Nenhum documento encontrado neste semestre
        </p>
        <p className="mx-auto mb-8 max-w-[400px] font-thin text-gray-600 text-center">
          Parece que você ainda não iniciou nenhum processo de estágio para
          2025.1. Vamos começar?
        </p>
        <Button className="px-8 py-6 rounded-full">
          <div className="flex items-center gap-2">
            <Plus />
            <p>Criar Novo Estágio</p>
          </div>
        </Button>
      </div>
    </div>
  );
}
