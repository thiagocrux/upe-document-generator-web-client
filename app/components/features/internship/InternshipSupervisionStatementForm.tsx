'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { FileDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { createInternshipSupervisionStatementDocument } from '@/app/actions/document.actions';
import { DEFAULT_LOCALE } from '@/config/constants';
import { getMessages } from '@/lib/utils';
import { FieldError } from '../../common/FieldError';
import { FieldGroupHeading } from '../../common/FieldGroupHeading';
import { Button } from '../../ui/button';
import { Card } from '../../ui/card';
import { Field, FieldGroup, FieldLabel } from '../../ui/field';
import { Input } from '../../ui/input';
import { Spinner } from '../../ui/spinner';

import {
  CreateInternshipSupervisionStatementInput,
  internshipSupervisionStatementSchema,
} from '@/lib/validation/schemas/document.schema';

interface InternshipSupervisionStatementFormProps {
  locale: string;
  className?: string;
}

export function InternshipSupervisionStatementForm({
  locale = DEFAULT_LOCALE,
  className,
}: InternshipSupervisionStatementFormProps) {
  const router = useRouter();
  const messages = getMessages(locale);
  const schema = internshipSupervisionStatementSchema(locale, messages);

  const t = useTranslations(
    'components.features.documents.InternshipSupervisionStatementForm'
  );

  const {
    register,
    control,
    handleSubmit,
    formState: { errors: formErrors, isSubmitting },
  } = useForm<CreateInternshipSupervisionStatementInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      studentName: '',
      courseSubject: '',
      professorName: '',
      professorAcademicBackground: '',
      professorCpf: '',
      professorPhone: '',
      professorEmail: '',
      internshipProviderName: '',
      internshipProviderCity: '',
      date: '',
    },
  });

  const observationMutation = useMutation({
    mutationFn: (input: CreateInternshipSupervisionStatementInput) =>
      createInternshipSupervisionStatementDocument(input),
    onSuccess: () => {
      // TODO: Implement success case
    },
    onError: (error: unknown) => {
      console.error('Submit error:', error);
    },
  });

  async function onSubmit(input: CreateInternshipSupervisionStatementInput) {
    observationMutation.mutate(input);
  }

  return (
    <Card className="flex flex-col px-4 sm:px-8 py-8 sm:py-12">
      <form onSubmit={handleSubmit(onSubmit)} className={className}>
        <FieldGroup className="gap-8 grid grid-cols-1">
          <FieldGroupHeading text="Informações do estudante" />

          <div className="gap-4 grid grid-cols-2 lg:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="studentName">
                {t('fields.studentName.label')}
              </FieldLabel>
              <Input
                {...register('studentName')}
                name="studentName"
                placeholder="Ex: João Silva"
                aria-invalid={!!formErrors.studentName}
              />
              {formErrors.studentName && (
                <FieldError message={formErrors.studentName.message} />
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="subject">
                {t('fields.courseSubject.label')}
              </FieldLabel>
              {/* TODO: Change to a select */}
              <Input
                {...register('courseSubject')}
                name="courseSubject"
                placeholder="Ex: Estágio supervisionado"
                aria-invalid={!!formErrors.courseSubject}
              />
              {formErrors.courseSubject && (
                <FieldError message={formErrors.courseSubject.message} />
              )}
            </Field>
          </div>

          <FieldGroupHeading text="Informações do professor" />

          <div className="gap-4 grid grid-cols-2 lg:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="professorName">
                {t('fields.professorName.label')}
              </FieldLabel>
              <Input
                {...register('professorName')}
                name="professorName"
                placeholder="Ex: Maria Oliveira"
                aria-invalid={!!formErrors.professorName}
              />
              {formErrors.professorName && (
                <FieldError message={formErrors.professorName.message} />
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="professorAcademicBackground">
                {t('fields.professorAcademicBackground.label')}
              </FieldLabel>
              <Input
                {...register('professorAcademicBackground')}
                name="professorAcademicBackground"
                placeholder="Ex: Doutora em engenharia"
                aria-invalid={!!formErrors.professorAcademicBackground}
              />
              {formErrors.professorAcademicBackground && (
                <FieldError
                  message={formErrors.professorAcademicBackground.message}
                />
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="professorCpf">
                {t('fields.professorCpf.label')}
              </FieldLabel>
              {/* TODO: Add a mask */}
              <Input
                {...register('professorCpf')}
                name="professorCpf"
                placeholder="Ex: 123.456.789-00"
                aria-invalid={!!formErrors.professorCpf}
              />
              {formErrors.professorCpf && (
                <FieldError message={formErrors.professorCpf.message} />
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="professorPhone">
                {t('fields.professorPhone.label')}
              </FieldLabel>
              {/* TODO: Add a mask */}
              <Input
                {...register('professorPhone')}
                name="professorPhone"
                placeholder="Ex: (11) 99999-9999"
                aria-invalid={!!formErrors.professorPhone}
              />
              {formErrors.professorPhone && (
                <FieldError message={formErrors.professorPhone.message} />
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="professorEmail">
                {t('fields.professorEmail.label')}
              </FieldLabel>
              <Input
                {...register('professorEmail')}
                name="professorEmail"
                placeholder="Ex: maria.oliveira@universidade.edu.br"
                aria-invalid={!!formErrors.professorEmail}
              />
              {formErrors.professorEmail && (
                <FieldError message={formErrors.professorEmail.message} />
              )}
            </Field>
          </div>

          <FieldGroupHeading text="Informações da unidade concedente" />

          <div className="gap-4 grid grid-cols-2 lg:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="internshipProviderName">
                {t('fields.internshipProviderName.label')}
              </FieldLabel>
              <Input
                {...register('internshipProviderName')}
                name="internshipProviderName"
                placeholder="Ex: Universidade de Pernambuco"
                aria-invalid={!!formErrors.internshipProviderName}
              />
              {formErrors.internshipProviderName && (
                <FieldError
                  message={formErrors.internshipProviderName.message}
                />
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="internshipProviderCity">
                {t('fields.internshipProviderCity.label')}
              </FieldLabel>
              <Input
                {...register('internshipProviderCity')}
                name="internshipProviderCity"
                placeholder="Ex: Recife"
                aria-invalid={!!formErrors.internshipProviderCity}
              />
              {formErrors.internshipProviderCity && (
                <FieldError
                  message={formErrors.internshipProviderCity.message}
                />
              )}
            </Field>
          </div>

          <FieldGroupHeading text="Metadados do documento" />

          <div className="gap-4 grid grid-cols-2 lg:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="date">{t('fields.date.label')}</FieldLabel>
              {/* TODO: Change input type */}
              <Input
                {...register('date')}
                name="date"
                placeholder="Ex: 01/01/2023"
                aria-invalid={!!formErrors.date}
              />
              {formErrors.date && (
                <FieldError message={formErrors.date.message} />
              )}
            </Field>
          </div>
        </FieldGroup>

        <Button
          type="submit"
          size="lg"
          className="mt-8 w-full cursor-pointer"
          disabled={isSubmitting}
        >
          {isSubmitting ? <Spinner /> : <FileDown />}
          {'Gerar documento'}
        </Button>
      </form>
    </Card>
  );
}
