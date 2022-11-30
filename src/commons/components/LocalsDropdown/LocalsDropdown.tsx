import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import type { LanguageCode } from 'src/utils/locals/types';
import type { Theme } from '../../../types';
import { getLocalLabel, languageNames } from '../../../utils/locals';
import { makeStyle } from './styles';

type LocalsDropdownProps = {
  theme?: Theme;
  locals: LanguageCode;
  onLanguageChange?: (language: LanguageCode) => void;
};

export const LocalsDropDown: React.FC<LocalsDropdownProps> = React.memo(
  (props) => {
    const { theme, locals, onLanguageChange } = props;
    const [showDropdown, setShowDropdown] = useState(false);
    const styles = makeStyle(theme);

    const handleLanguageChange = (lang: LanguageCode) => {
      if (onLanguageChange) {
        onLanguageChange(lang);
        setShowDropdown(false);
      }
    };

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.dropdownButtonStyle}
          onPress={() => setShowDropdown(!showDropdown)}
          activeOpacity={0.9}
        >
          <Text style={styles.labelText}>{getLocalLabel(locals)}</Text>
          <Image
            source={
              showDropdown
                ? require('./images/dropdown_up.png')
                : require('./images/dropdown_down.png')
            }
            style={styles.dropdownIconStyle}
          />
        </TouchableOpacity>
        {showDropdown && (
          <View style={styles.dropdownContainer}>
            {languageNames.map((item, index) => (
              <View key={index} style={styles.languageButtonContainer}>
                <TouchableOpacity
                  style={[
                    styles.languageButton,
                    item.code === locals && styles.languageButtonSelected,
                  ]}
                  activeOpacity={0.7}
                  onPress={() => handleLanguageChange(item.code)}
                >
                  <Text
                    style={[
                      styles.languageTextStyle,
                      locals === item.code && styles.languageTextSelected,
                    ]}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
                {index < languageNames.length - 1 && (
                  <View style={styles.dividerStyle} />
                )}
              </View>
            ))}
          </View>
        )}
      </View>
    );
  }
);
