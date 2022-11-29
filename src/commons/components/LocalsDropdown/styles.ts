import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import * as defaultStyle from '../../../styles';
import type { Theme } from '../../../types';

export const makeStyle = (theme: Theme = {}) => {
  const mergedStyles = { ...defaultStyle, ...theme };

  return StyleSheet.create({
    container: {
      backgroundColor: mergedStyles.localsDropdownBackgroundColor,
      alignItems: 'center',
    } as ViewStyle,
    dropdownContainer: {
      position: 'absolute',
      backgroundColor: mergedStyles.localsDropdownBackgroundColor,
      marginTop: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
      width: '100%',
      paddingBottom: 5,
    },
    labelText: {
      fontSize: mergedStyles.textDayFontSize,
      fontFamily: mergedStyles.textDayFontFamily,
      fontWeight: 'bold',
      color: mergedStyles.dayTextColor,
    } as TextStyle,
    dropdownButtonStyle: {
      paddingHorizontal: 30,
      paddingVertical: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: mergedStyles.localsDropdownBackgroundColor,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    } as ViewStyle,
    dropdownIconStyle: {
      width: 15,
      height: 8,
      marginLeft: 20,
      tintColor: mergedStyles.dayTextColor,
    } as ImageStyle,
    dividerStyle: {
      borderBottomWidth: 1,
      borderColor: mergedStyles.textDisabledColor,
      width: '88%',
      marginBottom: 5,
    } as ViewStyle,
    languageButton: {
      paddingVertical: 5,
      width: '100%',
      alignItems: 'center',
    } as ViewStyle,
    languageButtonSelected: {
      backgroundColor: mergedStyles.selectedDayBackgroundColor,
    } as ViewStyle,
    languageButtonContainer: {
      width: '100%',
      alignItems: 'center',
    } as ViewStyle,
    languageTextStyle: {
      fontSize: mergedStyles.textDayFontSize,
      fontFamily: mergedStyles.textDayFontFamily,
      fontWeight: mergedStyles.textDayFontWeight,
      color: mergedStyles.dayTextColor,
    } as TextStyle,
    languageTextSelected: {
      color: mergedStyles.selectedDayTextColor,
    } as TextStyle,
  });
};
