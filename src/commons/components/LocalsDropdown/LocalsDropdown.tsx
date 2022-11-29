import React, { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import type { LanguageCode } from 'src/utils/locals/types';
import type { Theme } from '../../../types';
import { getLocalLabel, languageNames } from '../../../utils/locals';
import { makeStyle } from './styles';

type LocalsDropdownProps = {
  theme?: Theme;
  locals: LanguageCode;
};

export const LocalsDropDown: React.FC<LocalsDropdownProps> = React.memo(
  (props) => {
    const { theme, locals } = props;
    const [showDropdown, setShowDropdown] = useState(false);
    const styles = makeStyle(theme);

    return (
      <View style={styles.container}>
        <Pressable
          style={styles.dropdownButtonStyle}
          onPress={() => setShowDropdown(!showDropdown)}
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
        </Pressable>
        {showDropdown && (
          <View style={styles.dropdownContainer}>
            {languageNames.map((item, index) => (
              <View key={index} style={styles.languageButtonContainer}>
                <Pressable style={styles.languageButton}>
                  <Text style={styles.languageTextStyle}>{item.name}</Text>
                </Pressable>
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
