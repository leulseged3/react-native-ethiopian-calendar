import * as React from 'react';

import { SafeAreaView, StyleSheet, ViewStyle } from 'react-native';
import { Calendar } from 'react-native-ethiopian-calendar';
import type { LanguageCode, Mode } from 'src/utils/locals/types';

export default function App() {
  const [mode, setMode] = React.useState<Mode>('EC');
  const [locals, setLocals] = React.useState<LanguageCode>('AMH');

  return (
    <SafeAreaView style={styles.container}>
      <Calendar
        mode={mode}
        onDatePress={(date) => console.log(date)}
        onModeChange={(selectedMode) => setMode(selectedMode)}
        onLanguageChange={(lang) => setLocals(lang)}
        locale={locals}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  } as ViewStyle,
});
