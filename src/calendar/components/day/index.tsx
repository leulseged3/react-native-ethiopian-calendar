import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { makeStyle } from './style';

type DayProps = {
  dayNumber: number;
  today?: boolean;
  extraDays?: boolean;
};

export const Day: React.FC<DayProps> = React.memo((props) => {
  const { dayNumber, today, extraDays } = props;
  const styles = makeStyle();

  return (
    <TouchableOpacity style={[styles.day]} disabled={extraDays}>
      {/* <View style={isToday && styles.todayStyle}> */}
      <Text
        style={[
          styles.dayText,
          extraDays && styles.disabledText,
          today && styles.today,
        ]}
      >
        {dayNumber}
      </Text>
      {/* </View> */}
    </TouchableOpacity>
  );
});
