import type { LanguageCode } from './types';

export type LanguageNameType = {
  name: string;
  code: LanguageCode;
};

export const languageNames: Array<LanguageNameType> = [
  { name: 'አማርኛ', code: 'AMH' },
  { name: 'English', code: 'ENG' },
  { name: 'Afaan Oromoo', code: 'ORM' },
  { name: 'ትግርኛ', code: 'TIR' },
  { name: 'Af Somali', code: 'SOM' },
  { name: 'Qafar Af', code: 'AAR' },
];
