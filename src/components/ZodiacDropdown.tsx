// src/components/ZodiacDropdown.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ZODIAC_SIGNS, capitalize } from '../utils/zodiac';

type Props = {
  selected: string;
  onChange: (sign: string) => void;
};

export default function ZodiacDropdown({ selected, onChange }: Props) {
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selected}
        onValueChange={onChange}
        style={styles.picker}
      >
        {ZODIAC_SIGNS.map(sign => (
          <Picker.Item key={sign} label={capitalize(sign)} value={sign} />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 8, height: 100, borderWidth: 1 },
  picker: { height: 44, width: '100%' },
});
