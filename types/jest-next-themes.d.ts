import { jest } from '@jest/globals';
import 'next-themes';

// Module Augmentation:
// Reabre o módulo 'next-themes' para adicionar a definição do setTheme
// que nosso mock (__mocks__/next-themes.js) exporta explicitamente para testes.
declare module 'next-themes' {
  export const setTheme: jest.Mock;
}
