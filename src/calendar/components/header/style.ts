import type { Theme } from '../../../types';
import * as defaultStyles from '../../../styles';
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

export const makeStyle = (theme: Theme = {}) => {
  const mergedStyles = { ...defaultStyles, ...theme };

  return StyleSheet.create({
    mainHeader: {
      backgroundColor: mergedStyles.headerBackgroundColor,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    } as ViewStyle,
    headerButtonsWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 15,
      backgroundColor: mergedStyles.headerBackgroundColor,
      padding: 10,
      zIndex: 9999,
    } as ViewStyle,
    daysHeader: {
      flexDirection: 'row',
      backgroundColor: mergedStyles.headerBackgroundColor,
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 20,
      paddingBottom: 5,
    } as ViewStyle,
    headerTitle: {
      flexDirection: 'row',
    } as ViewStyle,
    todayButton: {
      backgroundColor: mergedStyles.localsDropdownBackgroundColor,
      alignItems: 'center',
      padding: 5,
      paddingHorizontal: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    } as ViewStyle,
    todayText: {
      color: mergedStyles.todayTextColor,
      fontSize: mergedStyles.textMonthFontSize,
    } as ViewStyle,
    titleText: {
      fontSize: mergedStyles.textMonthFontSize,
      fontFamily: mergedStyles.textMonthFontFamily,
      fontWeight: mergedStyles.textMonthFontWeight,
      color: mergedStyles.titleTextColor,
    } as TextStyle,
    dayText: {
      width: '14.2857143%',
      textAlign: 'center',
      fontSize: mergedStyles.textDayHeaderFontSize,
      fontFamily: mergedStyles.textDayHeaderFontFamily,
      fontWeight: mergedStyles.textDayHeaderFontWeight,
      color: mergedStyles.textSectionTitleColor,
    } as TextStyle,
    arrow: {
      paddingHorizontal: 15,
      paddingVertical: 10,
    } as ViewStyle,
    arrowImage: {
      width: mergedStyles.arrowWidth,
      height: mergedStyles.arrowHeight,
      tintColor: mergedStyles.arrowColor,
    } as ImageStyle,
    space: {
      paddingHorizontal: 4,
    } as ViewStyle,
  });
};
