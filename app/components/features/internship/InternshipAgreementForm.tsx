'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { FileDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { createInternshipAgreementDocument } from '@/app/actions/document.actions';
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
  CreateInternshipAgreementInput,
  internshipAgreementSchema,
} from '@/lib/validation/schemas/document.schema';

interface InternshipAgreementFormProps {
  locale: string;
  className?: string;
}

export function InternshipAgreementForm({
  locale = DEFAULT_LOCALE,
  className,
}: InternshipAgreementFormProps) {
  const router = useRouter();
  const messages = getMessages(locale);
  const schema = internshipAgreementSchema(locale, messages);

  const t = useTranslations(
    'components.features.documents.InternshipAgreementForm'
  );

  const {
    register,
    control,
    handleSubmit,
    formState: { errors: formErrors, isSubmitting },
  } = useForm<CreateInternshipAgreementInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      studentName: '',
      studentSubject: '',
      studentCpf: '',
      studentCourse: '',
      studentEmail: '',
      studentPhone: '',
      internshipStartDate: '',
      internshipEndDate: '',
      internshipSchedule: '',
      internshipWeeklyWorkload: '',
      studentNeighborhood: '',
      studentAddress: '',
      studentHouseNumber: '',
      studentAddressComplement: '',
      studentZipCode: '',
      studentStudyShift: '',
      professorName: '',
      professorPosition: '',
      professorCpf: '',
      professorEmail: '',
      professorPhone: '',
      professorAcademicBackground: '',
      curricularComponentAdvisor: '',
    },
  });

  const observationMutation = useMutation({
    mutationFn: (input: CreateInternshipAgreementInput) =>
      createInternshipAgreementDocument(input),
    onSuccess: () => {
      // TODO: Implement success case
    },
    onError: (error: unknown) => {
      console.error('Submit error:', error);
    },
  });

  async function onSubmit(input: CreateInternshipAgreementInput) {
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
                placeholder="Ex: Maria da Silva"
                aria-invalid={!!formErrors.studentName}
              />
              {formErrors.studentName && (
                <FieldError message={formErrors.studentName.message} />
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="studentSubject">
                {t('fields.studentSubject.label')}
              </FieldLabel>
              <Input
                {...register('studentSubject')}
                name="studentSubject"
                placeholder="Ex: Matemática"
                aria-invalid={!!formErrors.studentSubject}
              />
              {formErrors.studentSubject && (
                <FieldError message={formErrors.studentSubject.message} />
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="studentCpf">
                {t('fields.studentCpf.label')}
              </FieldLabel>
              <Input
                {...register('studentCpf')}
                name="studentCpf"
                placeholder="Ex: 123.456.789-00"
                aria-invalid={!!formErrors.studentCpf}
              />
              {formErrors.studentCpf && (
                <FieldError message={formErrors.studentCpf.message} />
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="studentCourse">
                {t('fields.studentCourse.label')}
              </FieldLabel>
              <Input
                {...register('studentCourse')}
                name="studentCourse"
                placeholder="Ex: Engenharia Civil"
                aria-invalid={!!formErrors.studentCourse}
              />
              {formErrors.studentCourse && (
                <FieldError message={formErrors.studentCourse.message} />
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="studentEmail">
                {t('fields.studentEmail.label')}
              </FieldLabel>
              <Input
                {...register('studentEmail')}
                name="studentEmail"
                placeholder="Ex: maria@email.com"
                aria-invalid={!!formErrors.studentEmail}
              />
              {formErrors.studentEmail && (
                <FieldError message={formErrors.studentEmail.message} />
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="studentPhone">
                {t('fields.studentPhone.label')}
              </FieldLabel>
              <Input
                {...register('studentPhone')}
                name="studentPhone"
                placeholder="Ex: (81) 91234-5678"
                aria-invalid={!!formErrors.studentPhone}
              />
              {formErrors.studentPhone && (
                <FieldError message={formErrors.studentPhone.message} />
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="studentStudyShift">
                {t('fields.studentStudyShift.label')}
              </FieldLabel>
              <Input
                {...register('studentStudyShift')}
                name="studentStudyShift"
                placeholder="Ex: Manhã"
                aria-invalid={!!formErrors.studentStudyShift}
              />
              {formErrors.studentStudyShift && (
                <FieldError message={formErrors.studentStudyShift.message} />
              )}
            </Field>
          </div>

          <FieldGroupHeading text="Endereço do estudante" />

          <div className="gap-4 grid grid-cols-2 lg:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="studentNeighborhood">
                {t('fields.studentNeighborhood.label')}
              </FieldLabel>
              <Input
                {...register('studentNeighborhood')}
                name="studentNeighborhood"
                placeholder="Ex: Boa Viagem"
                aria-invalid={!!formErrors.studentNeighborhood}
              />
              {formErrors.studentNeighborhood && (
                <FieldError message={formErrors.studentNeighborhood.message} />
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="studentAddress">
                {t('fields.studentAddress.label')}
              </FieldLabel>
              <Input
                {...register('studentAddress')}
                name="studentAddress"
                placeholder="Ex: Rua das Flores"
                aria-invalid={!!formErrors.studentAddress}
              />
              {formErrors.studentAddress && (
                <FieldError message={formErrors.studentAddress.message} />
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="studentHouseNumber">
                {t('fields.studentHouseNumber.label')}
              </FieldLabel>
              <Input
                {...register('studentHouseNumber')}
                name="studentHouseNumber"
                placeholder="Ex: 123"
                aria-invalid={!!formErrors.studentHouseNumber}
              />
              {formErrors.studentHouseNumber && (
                <FieldError message={formErrors.studentHouseNumber.message} />
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="studentAddressComplement">
                {t('fields.studentAddressComplement.label')}
              </FieldLabel>
              <Input
                {...register('studentAddressComplement')}
                name="studentAddressComplement"
                placeholder="Ex: Apto 101"
                aria-invalid={!!formErrors.studentAddressComplement}
              />
              {formErrors.studentAddressComplement && (
                <FieldError
                  message={formErrors.studentAddressComplement.message}
                />
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="studentZipCode">
                {t('fields.studentZipCode.label')}
              </FieldLabel>
              <Input
                {...register('studentZipCode')}
                name="studentZipCode"
                placeholder="Ex: 51000-000"
                aria-invalid={!!formErrors.studentZipCode}
              />
              {formErrors.studentZipCode && (
                <FieldError message={formErrors.studentZipCode.message} />
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

            <Field>
              <FieldLabel htmlFor="internshipSchedule">
                {t('fields.internshipSchedule.label')}
              </FieldLabel>
              <Input
                {...register('internshipSchedule')}
                name="internshipSchedule"
                placeholder="Ex: 08:00 às 12:00"
                aria-invalid={!!formErrors.internshipSchedule}
              />
              {formErrors.internshipSchedule && (
                <FieldError message={formErrors.internshipSchedule.message} />
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="internshipWeeklyWorkload">
                {t('fields.internshipWeeklyWorkload.label')}
              </FieldLabel>
              <Input
                {...register('internshipWeeklyWorkload')}
                name="internshipWeeklyWorkload"
                placeholder="Ex: 20 horas"
                aria-invalid={!!formErrors.internshipWeeklyWorkload}
              />
              {formErrors.internshipWeeklyWorkload && (
                <FieldError
                  message={formErrors.internshipWeeklyWorkload.message}
                />
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
                placeholder="Ex: João Pereira"
                aria-invalid={!!formErrors.professorName}
              />
              {formErrors.professorName && (
                <FieldError message={formErrors.professorName.message} />
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="professorPosition">
                {t('fields.professorPosition.label')}
              </FieldLabel>
              <Input
                {...register('professorPosition')}
                name="professorPosition"
                placeholder="Ex: Coordenador"
                aria-invalid={!!formErrors.professorPosition}
              />
              {formErrors.professorPosition && (
                <FieldError message={formErrors.professorPosition.message} />
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="professorCpf">
                {t('fields.professorCpf.label')}
              </FieldLabel>
              <Input
                {...register('professorCpf')}
                name="professorCpf"
                placeholder="Ex: 987.654.321-00"
                aria-invalid={!!formErrors.professorCpf}
              />
              {formErrors.professorCpf && (
                <FieldError message={formErrors.professorCpf.message} />
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="professorEmail">
                {t('fields.professorEmail.label')}
              </FieldLabel>
              <Input
                {...register('professorEmail')}
                name="professorEmail"
                placeholder="Ex: joao@email.com"
                aria-invalid={!!formErrors.professorEmail}
              />
              {formErrors.professorEmail && (
                <FieldError message={formErrors.professorEmail.message} />
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="professorPhone">
                {t('fields.professorPhone.label')}
              </FieldLabel>
              <Input
                {...register('professorPhone')}
                name="professorPhone"
                placeholder="Ex: (81) 99876-5432"
                aria-invalid={!!formErrors.professorPhone}
              />
              {formErrors.professorPhone && (
                <FieldError message={formErrors.professorPhone.message} />
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="professorAcademicBackground">
                {t('fields.professorAcademicBackground.label')}
              </FieldLabel>
              <Input
                {...register('professorAcademicBackground')}
                name="professorAcademicBackground"
                placeholder="Ex: Doutorado em Educação"
                aria-invalid={!!formErrors.professorAcademicBackground}
              />
              {formErrors.professorAcademicBackground && (
                <FieldError
                  message={formErrors.professorAcademicBackground.message}
                />
              )}
            </Field>
          </div>

          <FieldGroupHeading text="Metadados do documento" />
          <div className="gap-4 grid grid-cols-2 lg:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="curricularComponentAdvisor">
                {t('fields.curricularComponentAdvisor.label')}
              </FieldLabel>
              <Input
                {...register('curricularComponentAdvisor')}
                name="curricularComponentAdvisor"
                placeholder="Ex: Prof. Ana Lima"
                aria-invalid={!!formErrors.curricularComponentAdvisor}
              />
              {formErrors.curricularComponentAdvisor && (
                <FieldError
                  message={formErrors.curricularComponentAdvisor.message}
                />
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
