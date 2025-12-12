'use client';

import { Separator } from '@/components/ui/separator';
import { BriefcaseBusiness, Cog, FilePlus, House } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

import { useTranslations } from 'next-intl';
import Logo from './Logo';
import { Button } from './ui/button';

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
            className="w-full justify-start transition-none text-custom-gray hover:text-custom-gray"
          >
            <House /> <span>{t('Components.Sidebar.Links.Home')}</span>
          </Button>
        </Link>
        <Link href="/internships" className="flex items-center gap-x-1">
          <Button
            variant="ghost"
            className="w-full justify-start transition-none text-custom-gray hover:text-custom-gray"
          >
            <BriefcaseBusiness />{' '}
            <span>{t('Components.Sidebar.Links.NewInternship')}</span>
          </Button>
        </Link>
        <Link href="/documents" className="flex items-center gap-x-1">
          <Button
            variant="ghost"
            className="w-full justify-start transition-none text-custom-gray hover:text-custom-gray"
          >
            <FilePlus />{' '}
            <span>{t('Components.Sidebar.Links.MyDocuments')}</span>
          </Button>
        </Link>
        <Link href="/settings" className="flex items-center gap-x-1">
          <Button
            variant="ghost"
            className="w-full justify-start transition-none text-custom-gray hover:text-custom-gray"
          >
            <Cog /> <span>{t('Components.Sidebar.Links.Settings')}</span>
          </Button>
        </Link>
        <div className="flex flex-col gap-y-2 w-full mt-auto">{children}</div>
      </div>
    </aside>
  );
}
