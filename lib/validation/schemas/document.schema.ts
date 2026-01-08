/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import * as z from 'zod';
import { getValidationMessages } from '../messages';

/* Internship Agreement (TERMO_COMPROMISSO_ESTAGIO) */

export function internshipAgreementSchema(
  locale: string,
  translatedMessages: any
) {
  const fieldTranslations =
    translatedMessages.components.features.documents.InternshipAgreementForm
      .fields;

  const validationMessages = getValidationMessages(locale, translatedMessages);

  return z.object({
    // es_nome
    studentName: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(fieldTranslations.studentName.label)
      ),
    // es_disciplina
    studentSubject: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(
          fieldTranslations.studentSubject.label
        )
      ),
    // es_cpf
    studentCpf: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(fieldTranslations.studentCpf.label)
      ),
    // es_curso
    studentCourse: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(fieldTranslations.studentCourse.label)
      ),
    // es_email
    studentEmail: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(fieldTranslations.studentEmail.label)
      ),
    // es_telefone
    studentPhone: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(fieldTranslations.studentPhone.label)
      ),
    // es_data_inicial
    internshipStartDate: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(
          fieldTranslations.internshipStartDate.label
        )
      ),
    // es_data_final
    internshipEndDate: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(
          fieldTranslations.internshipEndDate.label
        )
      ),
    // es_horario_estagio
    internshipSchedule: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(
          fieldTranslations.internshipSchedule.label
        )
      ),
    // es_total_hora_semana
    internshipWeeklyWorkload: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(
          fieldTranslations.internshipWeeklyWorkload.label
        )
      ),
    // es_bairro
    studentNeighborhood: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(
          fieldTranslations.studentNeighborhood.label
        )
      ),
    // es_endereco
    studentAddress: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(
          fieldTranslations.studentAddress.label
        )
      ),
    // es_numero
    studentHouseNumber: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(
          fieldTranslations.studentHouseNumber.label
        )
      ),
    // es_complemento
    studentAddressComplement: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(
          fieldTranslations.studentAddressComplement.label
        )
      ),
    // es_cep
    studentZipCode: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(
          fieldTranslations.studentZipCode.label
        )
      ),
    // es_periodo
    studentStudyShift: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(
          fieldTranslations.studentStudyShift.label
        )
      ),
    // ps_nome
    professorName: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(fieldTranslations.professorName.label)
      ),
    // ps_cargo
    professorPosition: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(
          fieldTranslations.professorPosition.label
        )
      ),
    // ps_cpf
    professorCpf: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(fieldTranslations.professorCpf.label)
      ),
    // ps_email
    professorEmail: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(
          fieldTranslations.professorEmail.label
        )
      ),
    // ps_telefone
    professorPhone: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(
          fieldTranslations.professorPhone.label
        )
      ),
    // ps_formacao
    professorAcademicBackground: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(
          fieldTranslations.professorAcademicBackground.label
        )
      ),
    // pu_comp_curric
    curricularComponentAdvisor: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(
          fieldTranslations.curricularComponentAdvisor.label
        )
      ),
  });
}

export interface CreateInternshipAgreementInput extends z.infer<
  ReturnType<typeof internshipAgreementSchema>
> {}

/* Internship Referral Form (TERMO_ENCAMINHAMENTO_ESTAGIO) */

export function internshipReferralFormSchema(
  locale: string,
  translatedMessages: any
) {
  const fieldTranslations =
    translatedMessages.components.features.documents.InternshipReferralForm
      .fields;

  const validationMessages = getValidationMessages(locale, translatedMessages);

  return z.object({
    //  uc_nome
    schoolName: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(fieldTranslations.schoolName.label)
      ),
    // es_nome
    studentName: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(fieldTranslations.studentName.label)
      ),
    // es_periodo
    studentStudyPeriod: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(
          fieldTranslations.studentStudyPeriod.label
        )
      ),
    // es_curso
    studentDegreeProgram: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(
          fieldTranslations.studentDegreeProgram.label
        )
      ),
    // ce_ano_etapa
    schoolYearStage: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(
          fieldTranslations.schoolYearStage.label
        )
      ),
    // ce_modalidade
    schoolModality: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(
          fieldTranslations.schoolModality.label
        )
      ),
    // es_disciplina
    studentSubject: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(
          fieldTranslations.studentSubject.label
        )
      ),
    // es_data_inicial
    internshipStartDate: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(
          fieldTranslations.internshipStartDate.label
        )
      ),
    // es_data_final
    internshipEndDate: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(
          fieldTranslations.internshipEndDate.label
        )
      ),
    // yyyy
    year: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(fieldTranslations.year.label)
      ),
    // ie_campus
    universityCampus: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(
          fieldTranslations.universityCampus.label
        )
      ),
    // ddmmyyyy
    documentDate: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(fieldTranslations.documentDate.label)
      ),
  });
}

export interface CreateInternshipReferralFormInput extends z.infer<
  ReturnType<typeof internshipReferralFormSchema>
> {}

/* Internship Supervision Statement (DECLARACAO_SUPERVISAO) */

export function internshipSupervisionStatementSchema(
  locale: string,
  translatedMessages: any
) {
  const fieldTranslations =
    translatedMessages.components.features.documents
      .InternshipSupervisionStatementForm.fields;

  const validationMessages = getValidationMessages(locale, translatedMessages);

  return z.object({
    // es_nome
    studentName: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(fieldTranslations.studentName.label)
      ),
    // es_disciplina
    courseSubject: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(fieldTranslations.courseSubject.label)
      ),
    // ps_nome
    professorName: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(fieldTranslations.professorName.label)
      ),
    // ps_formacao
    professorAcademicBackground: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(
          fieldTranslations.professorAcademicBackground.label
        )
      ),
    // ps_cpf
    professorCpf: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(fieldTranslations.professorCpf.label)
      ),
    // ps_telefone
    professorPhone: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(
          fieldTranslations.professorPhone.label
        )
      ),
    // ps_email
    professorEmail: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(
          fieldTranslations.professorEmail.label
        )
      ),
    // uc_nome
    internshipProviderName: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(
          fieldTranslations.internshipProviderName.label
        )
      ),
    // uc_cidade
    internshipProviderCity: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(
          fieldTranslations.internshipProviderCity.label
        )
      ),
    // ddmmyyyy
    date: z
      .string()
      .nonempty(
        validationMessages.REQUIRED_FIELD(fieldTranslations.date.label)
      ),
  });
}

export interface CreateInternshipSupervisionStatementInput extends z.infer<
  ReturnType<typeof internshipSupervisionStatementSchema>
> {}
