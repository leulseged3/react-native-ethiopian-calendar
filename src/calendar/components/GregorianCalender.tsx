import React, { useCallback, useMemo, useState } from 'react';
import { View } from 'react-native';
import type { SelectedDate, Theme } from 'src/types';
import type { Mode } from '../../utils/locals/types';
import { iterator } from '../../utils/generics/array';
import { Day } from './day';
import { Header } from './header';
import { makeStyle } from './styles';

type GregorianCalendar = {
  onDatePress: (date: SelectedDate) => void;
  onModeChange?: (mode: Mode) => void;
  theme?: Theme;
};

export const GregorianCalendar: React.FC<GregorianCalendar> = (props) => {
  const { onDatePress, theme, onModeChange } = props;

  const [date, _setDate] = useState(1);
  const [month, setMonth] = useState(() => new Date().getMonth() + 1);
  const [year, setYear] = useState(() => new Date().getFullYear());

  const [selectedDate, setSelectedDate] = useState<SelectedDate>();

  const styles = makeStyle(theme);

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

  const selected = (iDate: number) => {
    if (selectedDate) {
      return (
        selectedDate.date === iDate &&
        selectedDate.month === month &&
        selectedDate.year === year
      );
    }
    return false;
  };

  const handleDayPress = (pressedDay: number) => {
    setSelectedDate({ date: pressedDay, month: month, year: year });
    onDatePress({ date: pressedDay, month: month, year: year });
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
        theme={theme}
        onModeChange={onModeChange}
      />
      <View style={[styles.daysWrapper]}>
        {/* EXTRA DAYS IN THE CALENDAR */}
        {iterator(firstDayOfTheMonthIndex).map((_item, i) => (
          <Day
            key={i}
            dayNumber={lastDayOfPreviousMonth - firstDayOfTheMonthIndex + i - 1}
            extraDays
            theme={theme}
          />
        ))}
        {/* DAYS OF THE MONTH*/}
        {iterator(lastDayOfTheCurrentMonth).map((_item, i) => (
          <Day
            key={i}
            dayNumber={i + 1}
            today={today(i + 1)}
            selected={selected(i + 1)}
            onPress={() => handleDayPress(i + 1)}
            theme={theme}
          />
        ))}
        {/* EXTRA DAYS IN THE CALENDAR */}
        {iterator(nextDays).map((_item, i) => (
          <Day key={i} dayNumber={i + 1} extraDays theme={theme} />
        ))}
      </View>
    </View>
  );
};
