'use client';

import { useRouter } from 'next/navigation';
import * as React from 'react';

import {
  BadgeCheck,
  Command,
  Contact,
  FileText,
  Home,
  Info,
  Mail,
  Plus,
  School2,
  Settings2,
} from 'lucide-react';

import { AppSidebarContent } from './AppSidebarContent';
import { AppSidebarUser } from './AppSidebarUser';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '../ui/sidebar';

const data = {
  // TODO: Add user data dynamically on sign in; implement with Redux.
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  dashboard: [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: Home,
    },
  ],
  internArea: [
    {
      title: 'Estágios',
      url: '/internships',
      icon: School2,
      isActive: false,
      items: [
        {
          title: 'Novo estágio',
          url: '/internships/new',
          icon: Plus,
        },
      ],
    },
    {
      title: 'Documentos',
      url: '/documents',
      icon: FileText,
      isActive: false,
      items: [
        {
          title: 'Novo documento',
          url: '/documents/new',
          icon: Plus,
        },
      ],
    },
  ],
  // TODO: Show section only to users with admin role.
  adminArea: [
    {
      title: 'Usuários',
      url: '/users',
      icon: Contact,
      isActive: false,
      items: [
        {
          title: 'Novo usuário',
          url: '/users/new',
          icon: Plus,
        },
      ],
    },
  ],
  settings: [
    {
      title: 'Perfil',
      url: '#',
      icon: BadgeCheck,
    },
    {
      title: 'Configurações',
      url: '#',
      icon: Settings2,
    },
    {
      title: 'Suporte',
      url: '#',
      icon: Mail,
    },
    {
      title: 'Sobre',
      url: '#',
      icon: Info,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              {/* TODO: Decide if a click on this element redirects the page or if it is only a dumb component. */}
              <a onClick={() => {}} className="select-none">
                <div className="flex justify-center items-center bg-sidebar-primary rounded-lg size-8 aspect-square text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="flex-1 grid text-sm text-left leading-tight">
                  <span className="font-medium truncate">DOCGEN</span>
                  <span className="text-xs truncate">
                    Gerador de Documentos da UPE
                  </span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <AppSidebarContent items={data.dashboard} />
        <AppSidebarContent label="Área do estagiário" items={data.internArea} />
        <AppSidebarContent
          label="Área do administrador"
          items={data.adminArea}
        />
      </SidebarContent>
      <SidebarFooter>
        <AppSidebarUser user={data.user} dropdownItems={data.settings} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
