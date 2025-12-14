'use client';

import { Separator } from '@/components/ui/separator';
import { BriefcaseBusiness, Cog, FilePlus, House } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

import { useTranslations } from 'next-intl';
import Logo from '../common/Logo';
import { Button } from '../ui/button';

interface SidebarProps {
  className?: string;
  children?: ReactNode;
}

export default function Sidebar({ className = '', children }: SidebarProps) {
  const t = useTranslations();

  return (
    <aside
      className={`flex flex-col flex-1 border-r border-border py-6 px-6 bg-background min-w-80 ${className}`}
    >
      <Logo />
      <Separator className="mt-4 mb-2" />
      <div className="flex flex-col flex-1 gap-y-2">
        <Link href="/me" className="flex items-center gap-x-1">
          <Button
            variant="ghost"
            className="justify-start w-full text-custom-gray hover:text-custom-gray transition-none"
          >
            <House /> <span>{t('components.layout.Sidebar.links.home')}</span>
          </Button>
        </Link>
        <Link href="/internships" className="flex items-center gap-x-1">
          <Button
            variant="ghost"
            className="justify-start w-full text-custom-gray hover:text-custom-gray transition-none"
          >
            <BriefcaseBusiness />{' '}
            <span>{t('components.layout.Sidebar.links.newInternship')}</span>
          </Button>
        </Link>
        <Link href="/documents" className="flex items-center gap-x-1">
          <Button
            variant="ghost"
            className="justify-start w-full text-custom-gray hover:text-custom-gray transition-none"
          >
            <FilePlus />{' '}
            <span>{t('components.layout.Sidebar.links.myDocuments')}</span>
          </Button>
        </Link>
        <Link href="/settings" className="flex items-center gap-x-1">
          <Button
            variant="ghost"
            className="justify-start w-full text-custom-gray hover:text-custom-gray transition-none"
          >
            <Cog /> <span>{t('components.layout.Sidebar.links.settings')}</span>
          </Button>
        </Link>
        <div className="flex flex-col gap-y-2 mt-auto w-full">{children}</div>
      </div>
    </aside>
  );
}
