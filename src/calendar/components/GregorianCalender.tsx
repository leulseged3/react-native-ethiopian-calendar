import React, { Fragment, useCallback, useMemo, useState } from 'react';
import { StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import { iterator } from '../../utils/generics/array';
import { Day } from './day';
import { Header } from './header';

type GregorianCalendar = {
  //
};

export const GregorianCalendar: React.FC<GregorianCalendar> = (props) => {
  const {} = props;

  const [date, _setDate] = useState(1);
  const [month, setMonth] = useState(() => new Date().getMonth() + 1);
  const [year, setYear] = useState(() => new Date().getFullYear());

  const lastDayOfTheCurrentMonth = useMemo(() => {
    return new Date(year, month, 0).getDate();
  }, [month, year]);

  const lastDayOfPreviousMonth = useMemo(() => {
    return new Date(year, month - 1, 0).getDate();
  }, [month, year]);

  const firstDayOfTheMonthIndex = useMemo(() => {
    return new Date(year, month - 1, date).getDay();
  }, [date, month, year]);

  const lastDayOfTheMonthIndex = useMemo(() => {
    return new Date(year, month, 0).getDay();
  }, [month, year]);

  const nextDays = useMemo(() => {
    return 7 - lastDayOfTheMonthIndex - 1;
  }, [lastDayOfTheMonthIndex]);

  const next = useCallback(() => {
    const newMonth = month + 1;
    if (newMonth > 12) {
      setMonth(1);
      setYear((previous) => previous + 1);
    } else {
      setMonth(newMonth);
    }
  }, [month]);

  const prev = useCallback(() => {
    const newMonth = month - 1;
    if (newMonth < 1) {
      setMonth(12);
      setYear((previous) => previous - 1);
    } else {
      setMonth(newMonth);
    }
  }, [month]);

  const currentMonthIndex = useMemo(() => {
    return new Date().getMonth() + 1;
  }, []);

  const currentYear = useMemo(() => {
    return new Date().getFullYear();
  }, []);

  const currentDay = useMemo(() => {
    return new Date().getDate();
  }, []);

  return (
    <Fragment>
      <Header
        next={next}
        prev={prev}
        month={month}
        year={year}
        locals={'ENG'}
        mode="GC"
      />
      <View style={styles.calenderBody}>
        <View style={[styles.daysWrapper]}>
          {/* EXTRA DAYS IN THE CALENDAR */}
          {iterator(firstDayOfTheMonthIndex).map((_item, i) => (
            <Day
              key={i}
              dayNumber={
                lastDayOfPreviousMonth - firstDayOfTheMonthIndex + i - 1
              }
              //BELOW FIELD(isCurrentDay) IS ALWAYS FALSE
              isCurrentDay={false}
              isCurrentMonth={false}
              isCurrentYear={false}
              extraDays
            />
          ))}
          {/* DAYS OF THE MONTH*/}
          {iterator(lastDayOfTheCurrentMonth).map((_item, i) => (
            <Day
              key={i}
              dayNumber={i + 1}
              //BELOW FIELD(isCurrentDay) IS ALWAYS FALSE
              isCurrentDay={i + 1 === currentDay}
              isCurrentMonth={month === currentMonthIndex}
              isCurrentYear={year === currentYear}
            />
          ))}
          {/* EXTRA DAYS IN THE CALENDAR */}
          {iterator(nextDays).map((_item, i) => (
            <Day
              key={i}
              dayNumber={i + 1}
              //BELOW FIELD(isCurrentDay) IS ALWAYS FALSE
              isCurrentDay={false}
              isCurrentMonth={false}
              isCurrentYear={false}
              extraDays
            />
          ))}
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  calendarHeader: {
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  } as ViewStyle,
  calenderBody: {
    backgroundColor: '#fff',
    paddingHorizontal: 5,
  } as ViewStyle,
  daysWrapper: {
    flexDirection: 'row',
    paddingTop: 5,
    flexWrap: 'wrap',
  } as ViewStyle,
  date: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 15,
  } as TextStyle,
  dateWrapper: {
    width: '14.2857143%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 11,
  } as ViewStyle,
  todayDateWrapper: {
    borderWidth: 1,
    borderColor: 'blue',
  } as ViewStyle,

  inactiveDate: {
    fontSize: 15,
    color: 'gray',
  } as TextStyle,
  today: {
    borderBottomColor: 'blue',
    borderBottomWidth: 3,
    width: '14.2857143%',
    marginTop: 22,
  } as TextStyle,
});
