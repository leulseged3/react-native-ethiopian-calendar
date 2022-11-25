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
  const styles1 = makeStyle();

  const isToday = useMemo(() => {
    return isCurrentDay && isCurrentMonth && isCurrentYear;
  }, [isCurrentDay, isCurrentMonth, isCurrentYear]);

  return (
    <TouchableOpacity style={[styles1.day]} disabled={extraDays}>
      {/* <View style={isToday && styles.todayStyle}> */}
      <Text
        style={[
          styles1.dayText,
          extraDays && styles1.disabledText,
          isToday && styles1.today,
        ]}
      >
        {dayNumber}
      </Text>
      {/* </View> */}
    </TouchableOpacity>
  );
});
