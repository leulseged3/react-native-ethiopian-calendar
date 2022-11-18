import React from 'react';
import type { LanguageCode, Mode } from '../utils/locals/types';
import { EthiopianCalender } from './components/EthiopianCalendar';
import { GregorianCalendar } from './components/GregorianCalender';

type Props = {
  mode?: Mode;
  locale?: LanguageCode;
};

export const Calendar: React.FC<Props> = (props) => {
  const { mode = 'EC', locale = 'AMH' } = props;
  if (mode === 'EC') return <EthiopianCalender locale={locale} />;
  return <GregorianCalendar />;
};
