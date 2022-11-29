import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import type { Theme } from 'src/types';
import type { Mode } from 'src/utils/locals/types';
import { makeStyle } from './styles';

type SwitchModeProps = {
  theme?: Theme;
};

export const SwitchMode: React.FC<SwitchModeProps> = (props) => {
  const { theme } = props;
  const [mode, setMode] = useState<Mode>('EC');

  const styles = makeStyle(theme);

  const toggleMode = () => {
    switch (mode) {
      case 'EC':
        setMode('GC');
        break;
      case 'GC':
        setMode('EC');
    }
  };

  return (
    <Pressable style={styles.container} onPress={toggleMode}>
      {mode === 'EC' ? (
        <>
          <Text style={styles.text}>ኢት</Text>
          <View style={styles.toggleCircle} />
        </>
      ) : (
        <>
          <View style={styles.toggleCircle} />
          <Text style={styles.text}>{mode}</Text>
        </>
      )}
    </Pressable>
  );
};
