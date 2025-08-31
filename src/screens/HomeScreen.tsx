// src/screens/HomeScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import ZodiacDropdown from '../components/ZodiacDropdown';
import { fetchHoroscope } from '../services/horoscopeService';
import { useCurrentDate } from '../hooks/useCurrentDate';


export default function HomeScreen() {
  const navigation = useNavigation<any>();
  const [selectedSign, setSelectedSign] = useState('aries');
  const [horoscope, setHoroscope] = useState('');
  const [loading, setLoading] = useState(false);
  const date = useCurrentDate();

  useEffect(() => {
    setLoading(true);
    fetchHoroscope(selectedSign)
      .then(data => setHoroscope(data.horoscope))
      .catch(() => Alert.alert('Error', 'Could not fetch horoscope'))
      .finally(() => setLoading(false));
  }, [selectedSign]);

  return (
    <LinearGradient colors={["#f7e8ff", "#e0eafc"]} style={styles.container}>
      <Text style={styles.date}>{date.toDateString()}</Text>
      <ZodiacDropdown selected={selectedSign} onChange={setSelectedSign} />
      {loading ? (
        <ActivityIndicator size="large" color="#7c3aed" />
      ) : (
        <Text style={styles.horoscope}>{horoscope}</Text>
      )}
      <TouchableOpacity
        style={styles.journalButton}
        activeOpacity={0.85}
        onPress={() => navigation.navigate('Journal', { date: date.toISOString().slice(0, 10) })}
      >
        <Text style={styles.journalButtonText}>Write Journal</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
  },
  date: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 18,
    color: '#7c3aed',
    letterSpacing: 1.2,
    textAlign: 'center',
    textShadowColor: '#e0eafc',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  horoscope: {
    fontSize: 18,
    marginVertical: 18,
    color: '#3a3a3a',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 2,
  },
  journalButton: {
    marginTop: 18,
    backgroundColor: '#7c3aed',
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: 'center',
    shadowColor: '#7c3aed',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 4,
  },
  journalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1.1,
  },
});
