import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import { Textarea } from '@/app/components/ui/textarea';

import { ArrowRight, ChevronUp, CircleCheck } from 'lucide-react';
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
    title: t('pages.internal.InternshipsPage.metadata.title'),
    description: t('pages.internal.InternshipsPage.metadata.description'),
  };
}

const Header = ({
  step,
  title,
  subtitle,
}: {
  step: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="flex items-center px-5 py-6 border-b">
      <p className="flex justify-center items-center bg-black mr-4 rounded-full size-8 text-white">
        {step}
      </p>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="font-thin text-gray-500 text-xs">{subtitle}</p>
      </div>
      <ChevronUp strokeWidth={1} className="ml-auto size-4 text-gray-500" />
    </div>
  );
};

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col bg-background mb-6 border rounded-lg overflow-hidden">
      {children}
    </div>
  );
};

const dailyHours = ['4 horas', '6 horas'];

export default function InternshipsPage() {
  const t = useTranslations('pages.internal.InternshipsPage');

  // return <p>{t('metadata.title')}</p>;

  return (
    <div className="">
      {/* TRANSFORMAR EM COMPONENTE CONTENDO TITLE E SUBTITLE */}
      <div className="mb-10">
        <p className="font-semibold text-2xl">Solicitação de Estágio</p>
        <p className="font-thin text-gray-500">
          Semestre 2025.1 - Preencha os dados para gerar seu contrato.
        </p>
      </div>

      <Container>
        <Header
          step="1"
          title="Dados do Estudante"
          subtitle="Preenchimento Automático"
        />

        <form className="space-y-8 p-6 pl-16">
          <div>
            <Label className="">Nome Completo</Label>
            <Input placeholder="Ana Souza" />
          </div>
          <div className="flex gap-4">
            <div>
              <Label className="">CPF</Label>
              <Input placeholder="123.456.789-00" />
            </div>
            <div>
              <Label className="">Matrícula</Label>
              <Input placeholder="20210045" />
            </div>
          </div>
          <div>
            <Label className="">Endereço Residencial (Editável)</Label>
            <Input placeholder="Rua das Flores, 123. Centro" />
          </div>
          <div className="flex justify-end">
            <Button>
              <p>Confirmar e Avançar</p>
              <ArrowRight />
            </Button>
          </div>
        </form>
      </Container>

      {/* Second Step */}
      <Container>
        <Header
          step="2"
          title="Dados da Unidade Concedente"
          subtitle="Pendente"
        />

        <form className="space-y-8 p-6 pl-16">
          <div>
            <Label className="">CNPJ da Empresa</Label>
            <Input placeholder="00.000.000/0001-00" />
          </div>
          <div>
            <Label className="">Razão Social</Label>
            <Input placeholder="Empresa Tech LTDA" />
          </div>
          <div>
            <Label className="">Edereço da Empresa</Label>
            <Input placeholder="Av. Comercial, 500 - Sala 3" />
          </div>
          <div className="flex gap-4">
            <div>
              <Label className="">CPF</Label>
              <Input placeholder="CPF" />
            </div>
            <div>
              <Label className="">Matrícula</Label>
              <Input placeholder="Matrícula" />
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <Button variant="outline">
              <p>Voltar</p>
            </Button>
            <Button>
              <p>Próximo</p>
            </Button>
          </div>
        </form>
      </Container>

      {/* Third Step */}
      <Container>
        <Header
          step="3"
          title="Dados do Professor Supervisor"
          subtitle="Pendente"
        />

        <form className="space-y-8 p-6 pl-16">
          <div>
            <Label className="">Nome do Supervisor (na Empresa)</Label>
            <Input placeholder="Nome Completo" />
          </div>
          <div className="flex gap-4">
            <div>
              <Label className="">Formação Acadêmica</Label>
              <Input placeholder="Ex: Eng. de Software" />
            </div>
            <div>
              <Label className="">Registro Profissional (CREA/CRM...)</Label>
              <Input placeholder="Opcional" />
            </div>
          </div>
          <div>
            <Label className="">E-mail do Supervisor</Label>
            <Input placeholder="supervisor@empresa.com" />
          </div>
          <div className="flex justify-end gap-4">
            <Button variant="outline">
              <p>Voltar</p>
            </Button>
            <Button>
              <p>Próximo</p>
            </Button>
          </div>
        </form>
      </Container>

      {/* Fourth Step */}
      <Container>
        <Header
          step="4"
          title="Dados do Campo de Estágio"
          subtitle="Pendente"
        />

        <form className="space-y-8 p-6 pl-16">
          <div className="flex gap-4">
            <div className="flex-1">
              <Label className="">Data de Início</Label>
              <Input type="date" />
            </div>
            <div className="flex-1">
              <Label className="">Data de Término</Label>
              <Input type="date" />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <Label className="">Carga Horária Diária (hs)</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Todos os Status" />
                </SelectTrigger>
                <SelectContent>
                  {dailyHours.map((hours) => (
                    <SelectItem
                      key={hours}
                      value={hours}
                      className="capitalize"
                    >
                      <span className="capitalize">{hours}</span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <Label className="">Seguradora (Apólice)</Label>
              <Input placeholder="Número da apólice" />
            </div>
          </div>
          <div>
            <Label className="">Atividades Previstas</Label>
            <Textarea placeholder="Descreva as Atividades" />
          </div>
          <div className="flex justify-end gap-4">
            <Button variant="outline">
              <p>Voltar</p>
            </Button>
            <Button>
              <CircleCheck className="size-4" />
              <p>Finalizar e Gerar Documentos</p>
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
}
