// src/components/JournalInput.tsx
import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

type Props = {
  value: string;
  onChange: (text: string) => void;
  placeholder?: string;
};

export default function JournalInput({ value, onChange, placeholder }: Props) {
  return (
    <View>
      <TextInput
        style={styles.input}
        multiline
        value={value}
        onChangeText={onChange}
        placeholder={placeholder || 'Write your thoughts...'}
        textAlignVertical="top"
        maxLength={1000}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 120,
    maxHeight: 200,
  },
  input: {
    minHeight: 120,
    maxHeight: 160,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    marginVertical: 8,
  },
});
