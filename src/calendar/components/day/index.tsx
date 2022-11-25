import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { makeStyle } from './style';

type DayProps = {
  dayNumber: number;
  today?: boolean;
  extraDays?: boolean;
  selected?: boolean;
  onPress?: () => void;
};

export const Day: React.FC<DayProps> = React.memo((props) => {
  const { dayNumber, today, extraDays, onPress, selected } = props;
  const styles = makeStyle();

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
