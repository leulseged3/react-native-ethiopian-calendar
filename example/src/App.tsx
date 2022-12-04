import * as React from 'react';

import { SafeAreaView, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Calendar } from 'react-native-ethiopian-calendar';
import type { SelectedDate } from 'src/types';
import type { LanguageCode, Mode } from 'src/utils/locals/types';

export default function App() {
  const [mode, setMode] = React.useState<Mode>('EC');
  const [locals, setLocals] = React.useState<LanguageCode>('AMH');
  const [selectedDate, setSelectedDate] = React.useState<SelectedDate>();

  return (
    <SafeAreaView style={styles.container}>
      <Calendar
        mode={mode}
        onDatePress={(date) => setSelectedDate(date)}
        onModeChange={(selectedMode) => setMode(selectedMode)}
        onLanguageChange={(lang) => setLocals(lang)}
        locale={locals}
      />
      {
        <View style={styles.selectedDateWrapper}>
          <Text>Calendar Output</Text>
          {selectedDate && (
            <>
              <Text>
                Ethiopian: {selectedDate?.ethiopian.date}/
                {selectedDate?.ethiopian.month}/{selectedDate?.ethiopian.year}
              </Text>
              <Text>
                Gregorian: {selectedDate?.gregorian.date}/
                {selectedDate?.gregorian.month}/{selectedDate?.gregorian.year}
              </Text>
            </>
          )}
        </View>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  } as ViewStyle,
  selectedDateWrapper: {
    alignItems: 'center',
    marginTop: 15,
  },
});
