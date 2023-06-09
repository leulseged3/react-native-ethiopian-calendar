import React, { useCallback, useMemo, useState } from 'react';
import { View } from 'react-native';
import type { SelectedDate, Theme } from 'src/types';
import type { Mode } from '../../utils/locals/types';
import { iterator } from '../../utils/generics/array';
import { Day } from './day';
import { Header } from './header';
import { makeStyle } from './styles';
import { toEthiopic } from '../../utils/Calendar';

type GregorianCalendar = {
  onDatePress: (date: SelectedDate) => void;
  onModeChange?: (mode: Mode) => void;
  theme?: Theme;
  hideHeaderButtons?: boolean;
  date?: { year: number; month: number; day: number };
  selectedDate: SelectedDate | undefined;
  setSelectedDate: React.Dispatch<
    React.SetStateAction<SelectedDate | undefined>
  >;
};

export const GregorianCalendar: React.FC<GregorianCalendar> = (props) => {
  const {
    date = {
      day: new Date().getDate(),
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
    },
    onDatePress,
    theme,
    onModeChange,
    hideHeaderButtons,
    selectedDate,
    setSelectedDate,
  } = props;

  const [day, _setDate] = useState(1);
  const [month, setMonth] = useState(
    selectedDate ? selectedDate.gregorian.month : date.month
  );
  const [year, setYear] = useState(
    selectedDate ? selectedDate.gregorian.year : date.year
  );

  const styles = makeStyle(theme);

  const lastDayOfTheCurrentMonth = useMemo(() => {
    return new Date(year, month, 0).getDate();
  }, [month, year]);

  const lastDayOfPreviousMonth = useMemo(() => {
    return new Date(year, month - 1, 0).getDate();
  }, [month, year]);

  const firstDayOfTheMonthIndex = useMemo(() => {
    return new Date(year, month - 1, day).getDay();
  }, [day, month, year]);

  const lastDayOfTheMonthIndex = useMemo(() => {
    return new Date(year, month, 0).getDay();
  }, [month, year]);

  const nextDays = useMemo(() => {
    return 7 - lastDayOfTheMonthIndex - 1;
  }, [lastDayOfTheMonthIndex]);

  const currentYear = useMemo(() => {
    return new Date().getFullYear();
  }, []);

  const currentMonthIndex = useMemo(() => {
    return new Date().getMonth() + 1;
  }, []);

  const gotoToday = useCallback(() => {
    setMonth(currentMonthIndex);
    setYear(currentYear);
  }, [currentMonthIndex, currentYear]);

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
        selectedDate.gregorian.date === iDate &&
        selectedDate.gregorian.month === month &&
        selectedDate.gregorian.year === year
      );
    }
    return false;
  };

  const handleDayPress = (pressedDay: number) => {
    const convertToEthiopic = toEthiopic(year, month, pressedDay);

    setSelectedDate({
      ethiopian: {
        date: convertToEthiopic.day as number,
        month: convertToEthiopic.month as number,
        year: convertToEthiopic.year as number,
      },
      gregorian: {
        date: pressedDay,
        month: month,
        year: year,
      },
    });

    onDatePress({
      ethiopian: {
        date: convertToEthiopic.day as number,
        month: convertToEthiopic.month as number,
        year: convertToEthiopic.year as number,
      },
      gregorian: {
        date: pressedDay,
        month: month,
        year: year,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Header
        currentDay={currentDay}
        today={gotoToday}
        next={next}
        prev={prev}
        month={month}
        year={year}
        locals={'ENG'}
        mode="GC"
        theme={theme}
        onModeChange={onModeChange}
        hideHeaderButtons={hideHeaderButtons}
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
