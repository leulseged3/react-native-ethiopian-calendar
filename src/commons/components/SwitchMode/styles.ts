import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import * as defaultStyle from '../../../styles';
import type { Theme } from '../../../types';

export const makeStyle = (theme: Theme = {}) => {
  const mergedStyles = { ...defaultStyle, ...theme };

  return StyleSheet.create({
    container: {
      width: 40,
      height: 22,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: mergedStyles.switchButtonColor,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 4,
    } as ViewStyle,
    toggleCircle: {
      width: 15,
      height: 15,
      backgroundColor: mergedStyles.switchButtonColor,
      borderRadius: 10,
    } as ViewStyle,
    text: {
      color: mergedStyles.switchButtonColor,
      fontSize: 10,
    } as TextStyle,
  });
};
