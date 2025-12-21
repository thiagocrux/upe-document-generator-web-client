import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import {
  Calendar,
  CheckCircle2,
  CircleAlert,
  Clock,
  Download,
  Eye,
  Plus,
  Search,
} from 'lucide-react';
import Image from 'next/image';
import { ReactNode } from 'react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t('pages.internal.DocumentsPage.metadata.title'),
    description: t('pages.internal.DocumentsPage.metadata.description'),
  };
}

const semesters = ['2024.1', '2024.2', '2025.1', '2025.2'];
const status = ['Pendentes', 'Aprovados', 'Reprovados'];
const cardData = [
  {
    id: '1',
    title: 'Estágio - Empresa Tech LTDA',
    semester: '2025.1',
    date: 'Criado em 25/11/2025',
    badgeMessage: 'Aguardando Professor',
  },
  {
    id: '2',
    title: 'Estágio - SoftHouse Solutions',
    semester: '2024.2',
    date: 'Finalizado em 15/12/2024',
    badgeMessage: 'Finalizado',
  },
  {
    id: '3',
    title: 'Estágio - Startup Inovação',
    semester: '2024.1',
    date: 'Atualizado há 2 dias',
    badgeMessage: 'Correção Necessária',
  },
];

const CardIcon = ({ type }: { type: string }): ReactNode => {
  let icon;
  if (type === 'Finalizado') {
    icon = (
      <CheckCircle2
        width={24}
        height={24}
        className="text-green-800"
        strokeWidth="1.5px"
      />
    );
  } else if (type === 'Correção Necessária') {
    icon = (
      <CircleAlert
        width={24}
        height={24}
        className="text-red-800"
        strokeWidth="1.5px"
      />
    );
  } else {
    icon = (
      <Image
        src="/icons/file-pdf.svg"
        width="24"
        height="24"
        alt="PDF file icon"
      />
    );
  }

  return icon;
};

const CardBadge = ({ type }: { type: string }): ReactNode => {
  let badge;
  if (type === 'Finalizado') {
    badge = (
      <div className="bg-green-100 px-3 py-1 rounded-full w-fit text-green-900">
        <span className="flex font-semibold text-[12px] text-center uppercase tracking-[.5px]">
          {type}
        </span>
      </div>
    );
  } else if (type === 'Correção Necessária') {
    badge = (
      <div className="bg-red-100 px-3 py-1 rounded-full w-fit text-red-900">
        <span className="flex font-semibold text-[12px] text-center uppercase tracking-[.5px]">
          {type}
        </span>
      </div>
    );
  } else {
    badge = (
      <div className="bg-orange-100 px-3 py-1 rounded-full w-fit text-orange-900">
        <span className="flex font-semibold text-[12px] text-center uppercase tracking-[.5px]">
          {type}
        </span>
      </div>
    );
  }

  return badge;
};

export default function DocumentsPage() {
  const t = useTranslations('pages.internal.DocumentsPage');

  return (
    <div className="space-y-8">
      <div className="flex justify-between w-full">
        <p className="font-semibold text-2xl capitalize">
          {t('metadata.title')}
        </p>
        <Button variant="outline">
          <Plus /> <span>Nova Solicitação</span>
        </Button>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-1 items-center px-4 border rounded-lg">
          <Search className="size-4 text-gray-400" />
          <Input
            placeholder="Buscar por empresa ou semestre...."
            className="shadow-none border-none outline-none focus-visible:ring-0 text-sm"
          />
        </div>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Todos os Status" />
          </SelectTrigger>
          <SelectContent>
            {status.map((status) => (
              <SelectItem key={status} value={status} className="capitalize">
                <span className="capitalize">{status}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="2025.1" />
          </SelectTrigger>
          <SelectContent>
            {semesters.map((status) => (
              <SelectItem key={status} value={status} className="capitalize">
                <span className="capitalize">{status}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {cardData.map((card) => (
        <Card
          key={card.id}
          className="flex items-center gap-8 shadow-md p-6 hover:ring ring-gray-400 transition-all hover:-translate-y-0.5 duration-75"
        >
          <div className="flex justify-center items-center bg-gray-50 rounded-lg size-[50px]">
            <CardIcon type={card.badgeMessage} />
          </div>

          <div className="flex-1 space-y-1">
            <p className="font-semibold">{card.title}</p>
            <div className="flex gap-4 text-gray-500">
              <span className="flex items-center gap-1">
                <Calendar className="size-3.5" />
                <p className="text-[14px]">{card.semester}</p>
              </span>
              <span className="flex items-center gap-1">
                <Clock className="size-3.5" />
                <p className="text-[14px]">{card.date}</p>
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <CardBadge type={card.badgeMessage} />
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                className="flex justify-center items-center rounded-md size-9"
              >
                <Eye className="size-4 text-gray-400" />
              </Button>
              <Button
                variant="outline"
                className="flex justify-center items-center rounded-md size-9"
              >
                <Download className="size-4 text-gray-400" />
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
