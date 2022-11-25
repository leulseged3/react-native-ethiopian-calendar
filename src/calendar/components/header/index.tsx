import React, { Fragment } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import type { LanguageCode, Mode } from '../../../utils/locals/types';
import { getDaysNameOfTheWeek, getMonthsName } from '../../../utils/locals';
import { makeStyle } from './style';

type DayProps = {
  prev: () => void;
  next: () => void;
  month: number;
  year: number;
  locals: LanguageCode;
  mode: Mode;
};

export const Header: React.FC<DayProps> = React.memo((props) => {
  const { prev, next, month, year, locals = 'AMH', mode } = props;
  const styles1 = makeStyle();

  return (
    <Fragment>
      <View style={styles1.header}>
        {/* BACKWARD THE MONTH */}
        <TouchableOpacity onPress={prev} style={styles1.arrow}>
          <Image
            source={require('../../images/left_icon.png')}
            style={styles1.arrowImage}
          />
        </TouchableOpacity>

        <View style={styles1.headerTitle}>
          <Text style={styles1.titleText}>
            {getMonthsName({ locals, mode })[month - 1]}
          </Text>
          <View style={styles1.space} />
          <Text style={styles1.titleText}>{year}</Text>
        </View>

        {/* FORWARD THE MONTH */}
        <TouchableOpacity onPress={next} style={styles1.arrow}>
          <Image
            source={require('../../images/right_icon.png')}
            style={styles1.arrowImage}
          />
        </TouchableOpacity>
      </View>

      {/* LIST OF DAYS OF THE WEEK */}
      <View style={styles1.daysHeader}>
        {getDaysNameOfTheWeek(locals).map((item, i) => (
          <Text style={styles1.dayText} key={i} numberOfLines={1}>
            {item}
          </Text>
        ))}
      </View>
    </Fragment>
  );
});
