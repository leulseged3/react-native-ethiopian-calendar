import type { LanguageCode } from './types';

export function getDaysNameOfTheWeek(language: LanguageCode) {
  switch (language) {
    case 'AMH':
      return ['እሁድ', 'ሰኞ', 'ማክሰኞ', 'ረቡዕ', 'ሀሙስ', 'አርብ', 'ቅዳሜ'];
    case 'ORM':
      return ['SAM', 'WIX', 'KIB', 'ROB', 'KAM', 'JIM', 'DIL'];
    case 'TIR':
      return ['ሰንበት', 'ሰኑይ', 'ሰሉስ', 'ረቡዕ', 'ሓሙስ', 'ዓርቢ', 'ቀዳም'];
    case 'ENG':
      return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fir', 'Sat'];
    default:
      return ['እሁድ', 'ሰኞ', 'ማክሰኞ', 'ረቡዕ', 'ሀሙስ', 'አርብ', 'ቅዳሜ'];
  }
}
