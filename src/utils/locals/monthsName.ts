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
      case 'AAR':
        return [
          'Waysu',
          'Diteli',
          'Ximoli',
          'Kaxxa-Garablu',
          'Qunxa-Garablu',
          'Naharsi-Kudo',
          'Ciggilta-Kudo',
          'Agda-Baxisso',
          'Caxah-Alsa',
          'Qasa-Dirri',
          'Qado-Dirri',
          'Laqeeni',
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
