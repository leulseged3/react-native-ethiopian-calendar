import React, { Fragment } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import type { LanguageCode, Mode } from '../../../utils/locals/types';
import { getDaysNameOfTheWeek, getMonthsName } from '../../../utils/locals';
import { makeStyle } from './style';
import type { Theme } from 'src/types';

type DayProps = {
  prev: () => void;
  next: () => void;
  month: number;
  year: number;
  locals: LanguageCode;
  mode: Mode;
  theme?: Theme;
};

export const Header: React.FC<DayProps> = React.memo((props) => {
  const { prev, next, month, year, locals = 'AMH', mode, theme } = props;
  const styles = makeStyle(theme);

  return (
    <Fragment>
      <View style={styles.header}>
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
    </Fragment>
  );
});
