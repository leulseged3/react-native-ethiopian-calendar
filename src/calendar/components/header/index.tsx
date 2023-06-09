import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import type { LanguageCode, Mode } from '../../../utils/locals/types';
import { getDaysNameOfTheWeek, getMonthsName } from '../../../utils/locals';
import { makeStyle } from './style';
import type { Theme } from '../../../types';
import { LocalsDropDown, SwitchMode } from '../../../commons/components';

type DayProps = {
  currentDay: number;
  today: () => void;
  prev: () => void;
  next: () => void;
  month: number;
  year: number;
  locals: LanguageCode;
  mode: Mode;
  theme?: Theme;
  onModeChange?: (mode: Mode) => void;
  onLanguageChange?: (language: LanguageCode) => void;
  hideHeaderButtons?: boolean;
};

export const Header: React.FC<DayProps> = React.memo((props) => {
  const {
    currentDay,
    today,
    prev,
    next,
    month,
    year,
    locals = 'AMH',
    mode,
    theme,
    onModeChange,
    onLanguageChange,
    hideHeaderButtons,
  } = props;
  const styles = makeStyle(theme);

  return (
    <View>
      {/* EXTRA HEADER */}
      {!hideHeaderButtons && (
        <View style={styles.headerButtonsWrapper}>
          <SwitchMode theme={theme} mode={mode} onModeChange={onModeChange} />
          <View style={styles.todayButton}>
            <TouchableOpacity onPress={today} activeOpacity={0.9}>
              <Text style={styles.todayText}>{currentDay}</Text>
            </TouchableOpacity>
          </View>
          {mode === 'EC' && (
            <LocalsDropDown
              theme={theme}
              locals={locals}
              onLanguageChange={onLanguageChange}
            />
          )}
        </View>
      )}

      <View style={styles.mainHeader}>
        {/* BACKWARD THE MONTH */}
        <TouchableOpacity onPress={prev} style={styles.arrow}>
          <Image
            source={require('../../images/left_icon.png')}
            style={styles.arrowImage}
          />
        </TouchableOpacity>

        <View style={styles.headerTitle}>
          <Text style={styles.titleText}>
            {getMonthsName({ locals, mode })[month - 1]}
          </Text>
          <View style={styles.space} />
          <Text style={styles.titleText}>{year}</Text>
        </View>

        {/* FORWARD THE MONTH */}
        <TouchableOpacity onPress={next} style={styles.arrow}>
          <Image
            source={require('../../images/right_icon.png')}
            style={styles.arrowImage}
          />
        </TouchableOpacity>
      </View>

      {/* LIST OF DAYS OF THE WEEK */}
      <View style={styles.daysHeader}>
        {getDaysNameOfTheWeek(locals).map((item, i) => (
          <Text style={styles.dayText} key={i} numberOfLines={1}>
            {item}
          </Text>
        ))}
      </View>
    </View>
  );
});
