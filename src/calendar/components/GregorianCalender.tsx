import React, { useCallback, useMemo, useState } from 'react';
import { View } from 'react-native';
import { iterator } from '../../utils/generics/array';
import { Day } from './day';
import { Header } from './header';
import { makeStyle } from './styles';

type GregorianCalendar = {
  //
};

export const GregorianCalendar: React.FC<GregorianCalendar> = (props) => {
  const {} = props;

  const [date, _setDate] = useState(1);
  const [month, setMonth] = useState(() => new Date().getMonth() + 1);
  const [year, setYear] = useState(() => new Date().getFullYear());
  const styles = makeStyle();

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

  const today = (iDate: number) => {
    return (
      iDate === currentDay &&
      month === currentMonthIndex &&
      year === currentYear
    );
  };

  return (
    <View style={styles.container}>
      <Header
        next={next}
        prev={prev}
        month={month}
        year={year}
        locals={'ENG'}
        mode="GC"
      />
      <View style={[styles.daysWrapper]}>
        {/* EXTRA DAYS IN THE CALENDAR */}
        {iterator(firstDayOfTheMonthIndex).map((_item, i) => (
          <Day
            key={i}
            dayNumber={lastDayOfPreviousMonth - firstDayOfTheMonthIndex + i - 1}
            //BELOW FIELD(isCurrentDay) IS ALWAYS FALSE
            extraDays
          />
        ))}
        {/* DAYS OF THE MONTH*/}
        {iterator(lastDayOfTheCurrentMonth).map((_item, i) => (
          <Day
            key={i}
            dayNumber={i + 1}
            //BELOW FIELD(isCurrentDay) IS ALWAYS FALSE
            today={today(i + 1)}
          />
        ))}
        {/* EXTRA DAYS IN THE CALENDAR */}
        {iterator(nextDays).map((_item, i) => (
          <Day
            key={i}
            dayNumber={i + 1}
            //BELOW FIELD(isCurrentDay) IS ALWAYS FALSE
            extraDays
          />
        ))}
      </View>
    </View>
  );
};
