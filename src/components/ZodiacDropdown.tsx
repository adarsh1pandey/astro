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
  container: {
    marginVertical: 12,
    borderRadius: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  picker: {
    height: 56,
    width: '100%',
    color: '#3a3a3a',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
});
