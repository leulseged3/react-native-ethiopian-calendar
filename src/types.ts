import type { TextStyle, ViewStyle } from 'react-native';

export type Theme = {
  todayTextColor?: string;
  calendarBackground?: string;
  textSectionTitleColor?: string;
  dayTextColor?: string;
  selectedDayTextColor?: string;
  titleTextColor?: string;
  selectedDayBackgroundColor?: string;
  arrowColor?: string;
  textDisabledColor?: string;
  textInactiveColor?: string;
  backgroundColor?: string;
  disabledArrowColor?: string;
  textDayFontFamily?: TextStyle['fontFamily'];
  textMonthFontFamily?: TextStyle['fontFamily'];
  textDayHeaderFontFamily?: TextStyle['fontFamily'];
  textDayFontWeight?: TextStyle['fontWeight'];
  textMonthFontWeight?: TextStyle['fontWeight'];
  textDayHeaderFontWeight?: TextStyle['fontWeight'];
  headerBackgroundColor?: string;
  textDayFontSize?: number;
  textMonthFontSize?: number;
  textDayHeaderFontSize?: number;
  todayButtonFontFamily?: TextStyle['fontFamily'];
  todayButtonFontWeight?: TextStyle['fontWeight'];
  todayButtonFontSize?: number;
  textDayStyle?: TextStyle;
  arrowStyle?: ViewStyle;
  todayBackgroundColor?: string;
  todayButtonTextColor?: string;
  todayButtonPosition?: string;
  arrowHeight?: number;
  arrowWidth?: number;

  switchButtonColor?: string;
  localsDropdownBackgroundColor?: string;
};

export type SelectedDate = {
  ethiopian: {
    date: number;
    month: number;
    year: number;
  };
  gregorian: {
    date: number;
    month: number;
    year: number;
  };
};

export * from './utils/locals/types';
