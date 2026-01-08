import { documentMappers } from './mappers/document.mapper';
import { CreateDocumentInput } from './types/document';
import { httpClient } from './utils/httpClient';

// TODO: Check if there is any return.
export async function createDocument(
  input: CreateDocumentInput
): Promise<void> {
  const mapper = documentMappers[input.document_type];

  if (!mapper) {
    throw new Error('Unknown document type');
  }

  const { data } = await httpClient.post('/api/documents', mapper(input));
  return data;
}
