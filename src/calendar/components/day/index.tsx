import React, { useMemo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { makeStyle } from './style';

type DayProps = {
  dayNumber: number;
  isCurrentDay: boolean;
  isCurrentMonth: boolean;
  isCurrentYear: boolean;
  extraDays?: boolean;
};

export const Day: React.FC<DayProps> = React.memo((props) => {
  const { dayNumber, isCurrentDay, isCurrentMonth, isCurrentYear, extraDays } =
    props;
  const styles = makeStyle();

  const isToday = useMemo(() => {
    return isCurrentDay && isCurrentMonth && isCurrentYear;
  }, [isCurrentDay, isCurrentMonth, isCurrentYear]);

  return (
    <TouchableOpacity style={[styles.day]} disabled={extraDays}>
      {/* <View style={isToday && styles.todayStyle}> */}
      <Text
        style={[
          styles.dayText,
          extraDays && styles.disabledText,
          isToday && styles.today,
        ]}
      >
        {dayNumber}
      </Text>
      {/* </View> */}
    </TouchableOpacity>
  );
});
