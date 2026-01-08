import {
  CreateInternshipAgreementInput,
  CreateInternshipReferralFormInput,
  CreateInternshipSupervisionStatementInput,
} from '@/lib/validation/schemas/document.schema';

export type DocumentType =
  | 'TERMO_COMPROMISSO_ESTAGIO'
  | 'TERMO_ENCAMINHAMENTO_ESTAGIO'
  | 'DECLARACAO_SUPERVISAO';

export type DocumentFields =
  | CreateInternshipAgreementInput
  | CreateInternshipReferralFormInput
  | CreateInternshipSupervisionStatementInput;

export interface CreateDocumentInput {
  document_type: DocumentType;
  fields: DocumentFields;
}
