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
    borderColor: 'rgba(60,60,60,0.08)',
    borderWidth: 1,
    borderRadius: 16,
    padding: 18,
    fontSize: 18,
    backgroundColor: '#f9f9fb',
    marginVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 3,
  },
});
