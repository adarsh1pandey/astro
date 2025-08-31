// src/screens/JournalScreen.tsx
import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import JournalInput from '../components/JournalInput';
import {
  saveJournalEntry,
  getJournalEntry,
  getAllJournalEntries,
} from '../services/storageService';

export default function JournalScreen() {
  const route = useRoute();
  const { date } = route.params as { date: string };
  const [entry, setEntry] = useState('');
  const [saved, setSaved] = useState(false);
  const [allEntries, setAllEntries] = useState<
    { date: string; entry: string }[]
  >([]);

  useEffect(() => {
    getJournalEntry(date).then(text => {
      if (text) setEntry(text);
    });
    getAllJournalEntries().then(setAllEntries);
  }, [date]);

  // No auto-save. Only save on button click.

  const handleSave = async () => {
    try {
      await saveJournalEntry(date, entry);
      setSaved(true);
      setTimeout(() => setSaved(false), 1500);
      getAllJournalEntries().then(setAllEntries);
    } catch {
      Alert.alert('Error', 'Failed to save entry');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{date}</Text>
      <JournalInput value={entry} onChange={setEntry} />
      <Button title="Save" onPress={handleSave} />
      {saved && <Text style={styles.saved}>Saved!</Text>}
      <View style={styles.entriesScrollContainer}>
        <ScrollView
          style={styles.entriesList}
          contentContainerStyle={styles.entriesContent}
        >
          {allEntries.length > 0 && (
            <View style={styles.entriesListContainer}>
              <Text style={styles.entriesTitle}>Saved Journals:</Text>
              {allEntries
                .sort((a, b) => b.date.localeCompare(a.date))
                .map(e => (
                  <View key={e.date} style={styles.entryItem}>
                    <Text style={styles.entryDate}>{e.date}</Text>
                    <Text style={styles.entryText}>{e.entry}</Text>
                  </View>
                ))}
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#f7f7f7' },
  date: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  entriesList: { flex: 1, backgroundColor: '#fff', borderRadius: 8 },
  entriesContent: { padding: 12, paddingBottom: 24 },
  entriesListContainer: {},
  entriesTitle: { fontWeight: 'bold', fontSize: 16, marginBottom: 8 },
  entryItem: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 6,
  },
  entryDate: { fontWeight: 'bold', color: '#555', fontSize: 13 },
  entryText: { color: '#222', fontSize: 15 },
  saved: { color: 'green', marginTop: 8, fontWeight: 'bold' },
  entriesScrollContainer: { flex: 1, marginTop: 16 },
});
