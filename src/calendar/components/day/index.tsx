import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import type { Theme } from 'src/types';
import { makeStyle } from './style';

type DayProps = {
  dayNumber: number;
  today?: boolean;
  extraDays?: boolean;
  selected?: boolean;
  onPress?: () => void;
  theme?: Theme;
};

export const Day: React.FC<DayProps> = React.memo((props) => {
  const { dayNumber, today, extraDays, onPress, selected, theme } = props;
  const styles = makeStyle(theme);

  return (
    <TouchableOpacity
      style={[styles.day]}
      disabled={extraDays}
      onPress={onPress}
    >
      <View style={selected && styles.selected}>
        <Text
          style={[
            styles.dayText,
            extraDays && styles.disabledText,
            today && styles.today,
            selected && styles.selectedText,
          ]}
        >
          {dayNumber}
        </Text>
      </View>
    </TouchableOpacity>
  );
});
