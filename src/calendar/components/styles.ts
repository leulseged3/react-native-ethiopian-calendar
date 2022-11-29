import { StyleSheet, ViewStyle } from 'react-native';
import * as defaultStyle from '../../styles';
import type { Theme } from '../../types';

export const makeStyle = (theme: Theme = {}) => {
  const mergedStyles = { ...defaultStyle, ...theme };

  return StyleSheet.create({
    container: {
      backgroundColor: mergedStyles.calendarBackground,
      paddingHorizontal: 4,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    } as ViewStyle,
    daysWrapper: {
      flexDirection: 'row',
      paddingTop: 5,
      flexWrap: 'wrap',
    } as ViewStyle,
  });
};
