import React from 'react';
import type { SelectedDate, Theme } from 'src/types';
import type { LanguageCode, Mode } from '../utils/locals/types';
import { EthiopianCalender } from './components/EthiopianCalendar';
import { GregorianCalendar } from './components/GregorianCalender';

type Props = {
  mode?: Mode;
  locale?: LanguageCode;
  hideInactiveDate?: boolean;
  theme?: Theme;
  initialDate?: Date; //default now
  onDatePress: (date: SelectedDate) => void;
  onModeChange?: (mode: Mode) => void;
  onLanguageChange?: (language: LanguageCode) => void;
  firstDayMonday?: boolean;
};

export const Calendar: React.FC<Props> = (props) => {
  const {
    mode = 'EC',
    locale = 'AMH',
    onDatePress,
    onModeChange,
    onLanguageChange,
    theme,
  } = props;
  if (mode === 'EC')
    return (
      <EthiopianCalender
        locale={locale}
        onDatePress={onDatePress}
        theme={theme}
        onModeChange={onModeChange}
        onLanguageChange={onLanguageChange}
      />
    );
  return (
    <GregorianCalendar
      onDatePress={onDatePress}
      theme={theme}
      onModeChange={onModeChange}
    />
  );
};
