import { DocumentType } from '../types/document';

import {
  CreateInternshipAgreementInput,
  CreateInternshipReferralFormInput,
  CreateInternshipSupervisionStatementInput,
} from '@/lib/validation/schemas/document.schema';

export function mapInternshipAgreementToBackend(
  input: CreateInternshipAgreementInput
) {
  return {
    es_nome: input.studentName,
    es_disciplina: input.studentSubject,
    es_cpf: input.studentCpf,
    es_curso: input.studentCourse,
    es_email: input.studentEmail,
    es_telefone: input.studentPhone,
    es_data_inicial: input.internshipStartDate,
    es_data_final: input.internshipEndDate,
    es_horario_estagio: input.internshipSchedule,
    es_total_hora_semana: input.internshipWeeklyWorkload,
    es_bairro: input.studentNeighborhood,
    es_endereco: input.studentAddress,
    es_numero: input.studentHouseNumber,
    es_complemento: input.studentAddressComplement,
    es_cep: input.studentZipCode,
    es_periodo: input.studentStudyShift,
    ps_nome: input.professorName,
    ps_cargo: input.professorPosition,
    ps_cpf: input.professorCpf,
    ps_email: input.professorEmail,
    ps_telefone: input.professorPhone,
    ps_formacao: input.professorAcademicBackground,
    pu_comp_curric: input.curricularComponentAdvisor,
  };
}

export function mapInternshipReferralFormToBackend(
  input: CreateInternshipReferralFormInput
) {
  return {
    uc_nome: input.schoolName,
    es_nome: input.studentName,
    es_periodo: input.studentStudyPeriod,
    es_curso: input.studentDegreeProgram,
    ce_ano_etapa: input.schoolYearStage,
    ce_modalidade: input.schoolModality,
    es_disciplina: input.studentSubject,
    es_data_inicial: input.internshipStartDate,
    es_data_final: input.internshipEndDate,
    yyyy: input.year,
    ie_campus: input.universityCampus,
    ddmmyyyy: input.documentDate,
  };
}

export function mapInternshipSupervisionStatementToBackend(
  input: CreateInternshipSupervisionStatementInput
) {
  return {
    es_nome: input.studentName,
    es_disciplina: input.courseSubject,
    ps_nome: input.professorName,
    ps_formacao: input.professorAcademicBackground,
    ps_cpf: input.professorCpf,
    ps_telefone: input.professorPhone,
    ps_email: input.professorEmail,
    uc_nome: input.internshipProviderName,
    uc_cidade: input.internshipProviderCity,
    ddmmyyyy: input.date,
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MapperFn = (input: any) => any;

export const documentMappers: Record<DocumentType, MapperFn> = {
  TERMO_COMPROMISSO_ESTAGIO: mapInternshipAgreementToBackend,
  TERMO_ENCAMINHAMENTO_ESTAGIO: mapInternshipReferralFormToBackend,
  DECLARACAO_SUPERVISAO: mapInternshipSupervisionStatementToBackend,
};
