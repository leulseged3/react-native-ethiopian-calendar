import type { LanguageCode, Mode } from './types';

type GetMonthsNameParams = {
  locals: LanguageCode;
  mode: Mode;
};
export function getMonthsName({ locals, mode }: GetMonthsNameParams) {
  if (mode === 'EC') {
    switch (locals) {
      case 'AMH':
        return [
          'መስከረም',
          'ጥቅምት',
          'ሕዳር',
          'ታህሳስ',
          'ጥር',
          'የካቲት',
          'መጋቢት',
          'ሚያዝያ',
          'ግንቦት',
          'ሰኔ',
          'ሐምሌ',
          'ነሐሴ',
          'ጳጉሜ',
        ];
      case 'ORM':
        return [
          'FUL',
          'ONK',
          'SAD',
          'MUD',
          'AMA',
          'GUR',
          'BIT',
          'EBL',
          'CAM',
          'WAX',
          'ADO',
          'HAG',
          'PHAA',
        ];
      case 'TIR':
        return [
          'መስከረም',
          'ጥቕምቲ',
          'ሕዳር',
          'ታሕሳስ',
          'ጥሪ',
          'ለካቲት',
          'መጋቢት',
          'ሚያዝያ',
          'ጉንበት',
          'ሰነ',
          'ሓምለ',
          'ነሓሰ',
          'ጳጉሜ',
        ];
      case 'ENG':
        return [
          'September',
          'October',
          'November',
          'December',
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
        ];
      default:
        return [
          'መስከረም',
          'ጥቅምት',
          'ሕዳር',
          'ታህሳስ',
          'ጥር',
          'የካቲት',
          'መጋቢት',
          'ሚያዝያ',
          'ግንቦት',
          'ሰኔ',
          'ሐምሌ',
          'ነሐሴ',
          'ጳጉሜ',
        ];
    }
  } else {
    switch (locals) {
      case 'AMH':
        return [
          'ጥር',
          'የካቲት',
          'መጋቢት',
          'ሚያዝያ',
          'ግንቦት',
          'ሰኔ',
          'ሐምሌ',
          'ነሐሴ',
          'መስከረም',
          'ጥቅምት',
          'ሕዳር',
          'ታህሳስ',
        ];
      case 'ENG':
        return [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ];
      default:
        return [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ];
    }
  }
}
