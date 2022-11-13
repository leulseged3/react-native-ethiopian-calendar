import React, { Fragment } from 'react';
import {
  Image,
  ImageStyle,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { getDaysNameOfTheWeek, getMonthsName } from '../../../utils/locals';

type DayProps = {
  prev: () => void;
  next: () => void;
  month: number;
  year: number;
};

export const Header: React.FC<DayProps> = React.memo((props) => {
  const { prev, next, month, year } = props;
  return (
    <Fragment>
      <View style={styles.calendarHeader}>
        {/* BACKWARD THE MONTH */}
        <TouchableOpacity onPress={prev} style={styles.arrowWrapper}>
          <Image
            source={require('../../images/left_icon.png')}
            style={styles.arrowStyle}
          />
        </TouchableOpacity>

        <View style={styles.monthAndYearTextWrapper}>
          <Text style={styles.monthTextStyle}>
            {getMonthsName()[month - 1]}
          </Text>
          <Text style={styles.yearTextStyle}>{year}</Text>
        </View>

        {/* FORWARD THE MONTH */}
        <TouchableOpacity onPress={next} style={styles.arrowWrapper}>
          <Image
            source={require('../../images/right_icon.png')}
            style={styles.arrowStyle}
          />
        </TouchableOpacity>
      </View>

      {/* LIST OF DAYS OF THE WEEK */}
      <View style={styles.daysOfTheWeekWapper}>
        {getDaysNameOfTheWeek().map((item, i) => (
          <Text style={styles.dayTextStyle} key={i} numberOfLines={1}>
            {item}
          </Text>
        ))}
      </View>
    </Fragment>
  );
});

const styles = StyleSheet.create({
  calendarHeader: {
    backgroundColor: '#004E79',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  } as ViewStyle,
  daysOfTheWeekWapper: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    paddingTop: 20,
  } as ViewStyle,
  dayTextStyle: {
    width: '14.2857143%',
    textAlign: 'center',
    color: '#FF7A00',
    fontWeight: 'bold',
  } as TextStyle,
  monthTextStyle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  } as TextStyle,
  yearTextStyle: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
    paddingTop: 5,
  } as TextStyle,
  monthAndYearTextWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  arrowWrapper: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  } as ViewStyle,
  arrowStyle: {
    width: 12,
    height: 24,
    tintColor: '#FFFFFF',
  } as ImageStyle,
});
