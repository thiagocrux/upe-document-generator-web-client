'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { FileDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { createInternshipReferralFormDocument } from '@/app/actions/document.actions';
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
  CreateInternshipReferralFormInput,
  internshipReferralFormSchema,
} from '@/lib/validation/schemas/document.schema';

interface InternshipReferralFormProps {
  locale: string;
  className?: string;
}

export function InternshipReferralForm({
  locale = DEFAULT_LOCALE,
  className,
}: InternshipReferralFormProps) {
  const router = useRouter();
  const messages = getMessages(locale);
  const schema = internshipReferralFormSchema(locale, messages);

  const t = useTranslations(
    'components.features.documents.InternshipReferralForm'
  );

  const {
    register,
    control,
    handleSubmit,
    formState: { errors: formErrors, isSubmitting },
  } = useForm<CreateInternshipReferralFormInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      schoolName: '',
      studentName: '',
      studentStudyPeriod: '',
      studentDegreeProgram: '',
      schoolYearStage: '',
      schoolModality: '',
      studentSubject: '',
      internshipStartDate: '',
      internshipEndDate: '',
      year: '',
      universityCampus: '',
      documentDate: '',
    },
  });

  const observationMutation = useMutation({
    mutationFn: (input: CreateInternshipReferralFormInput) =>
      createInternshipReferralFormDocument(input),
    onSuccess: () => {
      // TODO: Implement success case
    },
    onError: (error: unknown) => {
      console.error('Submit error:', error);
    },
  });

  async function onSubmit(input: CreateInternshipReferralFormInput) {
    observationMutation.mutate(input);
  }

  return (
    <Card className="flex flex-col px-4 sm:px-8 py-8 sm:py-12">
      <form onSubmit={handleSubmit(onSubmit)} className={className}>
        <FieldGroup className="gap-8 grid grid-cols-1">
          <FieldGroupHeading text="Informações da escola" />

          <div className="gap-4 grid grid-cols-2 lg:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="schoolName">
                {t('fields.schoolName.label')}
              </FieldLabel>
              <Input
                {...register('schoolName')}
                name="schoolName"
                placeholder="Ex: Escola Estadual Central"
                aria-invalid={!!formErrors.schoolName}
              />
              {formErrors.schoolName && (
                <FieldError message={formErrors.schoolName.message} />
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="schoolYearStage">
                {t('fields.schoolYearStage.label')}
              </FieldLabel>
              <Input
                {...register('schoolYearStage')}
                name="schoolYearStage"
                placeholder="Ex: 2º ano do ensino médio"
                aria-invalid={!!formErrors.schoolYearStage}
              />
              {formErrors.schoolYearStage && (
                <FieldError message={formErrors.schoolYearStage.message} />
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="schoolModality">
                {t('fields.schoolModality.label')}
              </FieldLabel>
              {/* TODO: Check with stakeholder if this should be a select */}
              <Input
                {...register('schoolModality')}
                name="schoolModality"
                placeholder="Ex: Ensino regular"
                aria-invalid={!!formErrors.schoolModality}
              />
              {formErrors.schoolModality && (
                <FieldError message={formErrors.schoolModality.message} />
              )}
            </Field>
          </div>

          <FieldGroupHeading text="Informações do estudante" />

          <div className="gap-4 grid grid-cols-2 lg:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="studentName">
                {t('fields.studentName.label')}
              </FieldLabel>
              <Input
                {...register('studentName')}
                name="studentName"
                placeholder="Ex: Maria da Silva"
                aria-invalid={!!formErrors.studentName}
              />
              {formErrors.studentName && (
                <FieldError message={formErrors.studentName.message} />
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="studentStudyPeriod">
                {t('fields.studentStudyPeriod.label')}
              </FieldLabel>
              {/* TODO: Change type to number */}
              <Input
                {...register('studentStudyPeriod')}
                name="studentStudyPeriod"
                placeholder="Ex: 3º período"
                aria-invalid={!!formErrors.studentStudyPeriod}
              />
              {formErrors.studentStudyPeriod && (
                <FieldError message={formErrors.studentStudyPeriod.message} />
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="studentDegreeProgram">
                {t('fields.studentDegreeProgram.label')}
              </FieldLabel>
              <Input
                {...register('studentDegreeProgram')}
                name="studentDegreeProgram"
                placeholder="Ex: Engenharia Civil"
                aria-invalid={!!formErrors.studentDegreeProgram}
              />
              {formErrors.studentDegreeProgram && (
                <FieldError message={formErrors.studentDegreeProgram.message} />
              )}
            </Field>
          </div>

          <FieldGroupHeading text="Detalhes do estágio" />

          <div className="gap-4 grid grid-cols-2 lg:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="internshipStartDate">
                {t('fields.internshipStartDate.label')}
              </FieldLabel>
              <Input
                {...register('internshipStartDate')}
                name="internshipStartDate"
                placeholder="Ex: 01/02/2024"
                aria-invalid={!!formErrors.internshipStartDate}
              />
              {formErrors.internshipStartDate && (
                <FieldError message={formErrors.internshipStartDate.message} />
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="internshipEndDate">
                {t('fields.internshipEndDate.label')}
              </FieldLabel>
              <Input
                {...register('internshipEndDate')}
                name="internshipEndDate"
                placeholder="Ex: 30/06/2024"
                aria-invalid={!!formErrors.internshipEndDate}
              />
              {formErrors.internshipEndDate && (
                <FieldError message={formErrors.internshipEndDate.message} />
              )}
            </Field>
          </div>

          <FieldGroupHeading text="Metadados do documento" />

          <div className="gap-4 grid grid-cols-2 lg:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="year">{t('fields.year.label')}</FieldLabel>
              <Input
                {...register('year')}
                name="year"
                placeholder="Ex: 2024"
                aria-invalid={!!formErrors.year}
              />
              {formErrors.year && (
                <FieldError message={formErrors.year.message} />
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="universityCampus">
                {t('fields.universityCampus.label')}
              </FieldLabel>
              {/* TODO: Check with stakeholder if this should be a select */}
              <Input
                {...register('universityCampus')}
                name="universityCampus"
                placeholder="Ex: Campus Recife"
                aria-invalid={!!formErrors.universityCampus}
              />
              {formErrors.universityCampus && (
                <FieldError message={formErrors.universityCampus.message} />
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="documentDate">
                {t('fields.documentDate.label')}
              </FieldLabel>
              <Input
                {...register('documentDate')}
                name="documentDate"
                placeholder="Ex: 15/03/2024"
                aria-invalid={!!formErrors.documentDate}
              />
              {formErrors.documentDate && (
                <FieldError message={formErrors.documentDate.message} />
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
