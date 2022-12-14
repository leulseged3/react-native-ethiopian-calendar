import type { Theme } from '../../../types';
import * as defaultStyle from '../../../styles';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export const makeStyle = (theme: Theme = {}) => {
  const mergedStyles = { ...defaultStyle, ...theme };

  return StyleSheet.create({
    day: {
      width: '14.2857143%',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 11,
      height: 50,
    } as ViewStyle,
    dayText: {
      fontSize: mergedStyles.textDayFontSize,
      fontFamily: mergedStyles.textDayFontFamily,
      fontWeight: mergedStyles.textDayFontWeight,
      color: mergedStyles.dayTextColor,
      ...mergedStyles.textDayStyle,
    } as TextStyle,
    disabledText: {
      color: mergedStyles.textDisabledColor,
    } as TextStyle,
    today: {
      color: mergedStyles.todayTextColor,
    } as TextStyle,
    selectedText: {
      color: mergedStyles.selectedDayTextColor,
    } as TextStyle,
    selected: {
      width: 35,
      height: 35,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: mergedStyles.selectedDayBackgroundColor,
    } as ViewStyle,
  });
};
