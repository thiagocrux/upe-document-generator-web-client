'use server';

import { mockApiCall } from '@/lib/mock';

import {
  CreateInternshipAgreementInput,
  CreateInternshipReferralFormInput,
  CreateInternshipSupervisionStatementInput,
  internshipAgreementSchema,
  internshipReferralFormSchema,
  internshipSupervisionStatementSchema,
} from '@/lib/validation/schemas/document.schema';

export async function createInternshipAgreementDocument(
  input: CreateInternshipAgreementInput
) {
  try {
    const parsed = internshipAgreementSchema.safeParse({
      ...input,
    });

    if (!parsed.success) {
      return { success: false, errors: parsed.error.flatten().fieldErrors };
    }

    // TODO: Replace with the real request and increment logic if needed.
    const response = await mockApiCall();
    return response;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return { success: false, ...error.response?.data.error };
  }
}

export async function createInternshipReferralFormDocument(
  input: CreateInternshipReferralFormInput
) {
  try {
    const parsed = internshipReferralFormSchema.safeParse({
      ...input,
    });

    if (!parsed.success) {
      return { success: false, errors: parsed.error.flatten().fieldErrors };
    }

    // TODO: Replace with the real request and increment logic if needed.
    const response = await mockApiCall();
    return response;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return { success: false, ...error.response?.data.error };
  }
}

export async function createInternshipSupervisionStatementDocument(
  input: CreateInternshipSupervisionStatementInput
) {
  try {
    const parsed = internshipSupervisionStatementSchema.safeParse({
      ...input,
    });

    if (!parsed.success) {
      return { success: false, errors: parsed.error.flatten().fieldErrors };
    }

    // TODO: Replace with the real request and increment logic if needed.
    const response = await mockApiCall();
    return response;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return { success: false, ...error.response?.data.error };
  }
}
