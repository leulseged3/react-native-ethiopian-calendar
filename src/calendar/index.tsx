import React from 'react';
import type { LanguageCode, Mode } from '../utils/locals/types';
import { EthiopianCalender } from './components/EthiopianCalendar';
import { GregorianCalendar } from './components/GregorianCalender';

type Props = {
  mode?: Mode;
  locale?: LanguageCode;
  hideInactiveDate?: boolean;
  // theme?: Theme
  initialDate?: Date; //default now
  onDayPress?: (day: number, month: number, year: number) => void;
  firstDayMonday?: boolean;
};

export const Calendar: React.FC<Props> = (props) => {
  const { mode = 'EC', locale = 'AMH' } = props;
  if (mode === 'EC') return <EthiopianCalender locale={locale} />;
  return <GregorianCalendar />;
};
