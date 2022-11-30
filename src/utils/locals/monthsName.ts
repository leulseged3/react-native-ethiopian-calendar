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
          'Fuulbana',
          'Onkololeessa',
          'Sadaasa',
          'Muddee',
          'Amajjii',
          'Guraandhala',
          'Bitooteessa',
          'Elba',
          'Caamsa',
          'Waxabajjii',
          'Adooleessa',
          'Hagayya',
          'Phaagumee',
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
      case 'SOM':
        return [
          'Setembar',
          'Oktoobar',
          'November',
          'December',
          'Janaayo',
          'Febraayo',
          'Maarso',
          'Abriil',
          'Maye',
          'Juun',
          'Julay',
          'Ogost',
          'Pagume',
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
