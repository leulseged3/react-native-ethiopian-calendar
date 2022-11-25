import React from 'react';
import type { SelectedDate } from 'src/types';
import type { LanguageCode, Mode } from '../utils/locals/types';
import { EthiopianCalender } from './components/EthiopianCalendar';
import { GregorianCalendar } from './components/GregorianCalender';

type Props = {
  mode?: Mode;
  locale?: LanguageCode;
  hideInactiveDate?: boolean;
  // theme?: Theme
  initialDate?: Date; //default now
  onDatePress: (date: SelectedDate) => void;
  firstDayMonday?: boolean;
};

export const Calendar: React.FC<Props> = (props) => {
  const { mode = 'EC', locale = 'AMH', onDatePress } = props;
  if (mode === 'EC')
    return <EthiopianCalender locale={locale} onDatePress={onDatePress} />;
  return <GregorianCalendar onDatePress={onDatePress} />;
};
