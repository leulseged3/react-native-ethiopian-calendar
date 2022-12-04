import type { LanguageCode } from './types';

export function getDaysNameOfTheWeek(language: LanguageCode) {
  switch (language) {
    case 'AMH':
      return ['እሁድ', 'ሰኞ', 'ማክሰኞ', 'ረቡዕ', 'ሀሙስ', 'አርብ', 'ቅዳሜ'];
    case 'ORM':
      return ['SAM', 'WIX', 'KIB', 'ROB', 'KAM', 'JIM', 'DIL'];
    case 'SOM':
      return ['AXA', 'ISN', 'TAL', 'ARB', 'KHA', 'JIM', 'SAB'];
    case 'TIR':
      return ['ሰንበት', 'ሰኑይ', 'ሰሉስ', 'ረቡዕ', 'ሓሙስ', 'ዓርቢ', 'ቀዳም'];
    case 'AAR':
      return ['ACA', 'ETL', 'TAL', 'ARB', 'KAM', 'GUM', 'SAB'];
    case 'ENG':
      return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fir', 'Sat'];
    default:
      return ['እሁድ', 'ሰኞ', 'ማክሰኞ', 'ረቡዕ', 'ሀሙስ', 'አርብ', 'ቅዳሜ'];
  }
}
