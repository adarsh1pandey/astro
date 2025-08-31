// Get all saved journal entries as { date, entry }[]
export async function getAllJournalEntries(): Promise<{ date: string; entry: string }[]> {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const journalKeys = keys.filter(k => k.startsWith(JOURNAL_KEY_PREFIX));
    const stores = await AsyncStorage.multiGet(journalKeys);
    return stores.map(([key, value]) => ({
      date: key.replace(JOURNAL_KEY_PREFIX, ''),
      entry: value || '',
    }));
  } catch (e) {
    throw new Error('Failed to load all journal entries');
  }
}
// src/services/storageService.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

const JOURNAL_KEY_PREFIX = 'journal_';

export async function saveJournalEntry(date: string, entry: string) {
  try {
    await AsyncStorage.setItem(JOURNAL_KEY_PREFIX + date, entry);
  } catch (e) {
    throw new Error('Failed to save journal entry');
  }
}

export async function getJournalEntry(date: string): Promise<string | null> {
  try {
    return await AsyncStorage.getItem(JOURNAL_KEY_PREFIX + date);
  } catch (e) {
    throw new Error('Failed to load journal entry');
  }
}
