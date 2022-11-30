import type { LanguageCode } from './types';

export const getLocalLabel = (language: LanguageCode) => {
  switch (language) {
    case 'AMH':
      return 'ቋንቋ';
    case 'ENG':
      return 'Locals';
    case 'ORM':
      return 'Afaan';
    case 'TIR':
      return 'ቋንቋ';
    case 'SOM':
      return 'Luqadda';
    case 'AAR':
      return 'Luqadda';
    default:
      return 'Locals';
  }
};
