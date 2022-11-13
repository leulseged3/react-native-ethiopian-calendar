import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

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
  return (
    <TouchableOpacity style={[styles.dayButton]} disabled={extraDays}>
      <View
        style={
          isCurrentDay && isCurrentMonth && isCurrentYear && styles.todayStyle
        }
      >
        <Text style={extraDays ? styles.inactiveDate : styles.dayText}>
          {dayNumber}
        </Text>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  dayText: {
    color: '#004E79',
    fontWeight: 'bold',
    fontSize: 15,
  } as TextStyle,
  dayButton: {
    width: '14.2857143%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 11,
    height: 50,
  } as ViewStyle,
  inactiveDate: {
    fontSize: 15,
    color: 'gray',
  } as TextStyle,
  todayStyle: {
    width: '70%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#004E79',
  } as ViewStyle,
});
