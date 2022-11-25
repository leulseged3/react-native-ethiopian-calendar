import type { LanguageCode } from './types';

export function getDaysNameOfTheWeek(language: LanguageCode) {
  switch (language) {
    case 'AMH':
      return ['እሁድ', 'ሰኞ', 'ማክሰኞ', 'ረቡዕ', 'ሀሙስ', 'አርብ', 'ቅዳሜ'];
    case 'ENG':
      return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fir', 'Sat'];
    default:
      return ['እሁድ', 'ሰኞ', 'ማክሰኞ', 'ረቡዕ', 'ሀሙስ', 'አርብ', 'ቅዳሜ'];
  }
}
