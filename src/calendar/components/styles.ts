import { StyleSheet, ViewStyle } from 'react-native';
import * as defaultStyle from '../../styles';
import type { Theme } from '../../types';

export const makeStyle = (theme: Theme = {}) => {
  const mergedStyles = { ...defaultStyle, ...theme };

  return StyleSheet.create({
    container: {
      backgroundColor: mergedStyles.backgroundColor,
      paddingHorizontal: 4,
    } as ViewStyle,
    daysWrapper: {
      flexDirection: 'row',
      paddingTop: 5,
      flexWrap: 'wrap',
    } as ViewStyle,
  });
};
