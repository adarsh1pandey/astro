// src/screens/HomeScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator, Alert } from 'react-native';
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
    <View style={styles.container}>
      <Text style={styles.date}>{date.toDateString()}</Text>
      <ZodiacDropdown selected={selectedSign} onChange={setSelectedSign} />
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Text style={styles.horoscope}>{horoscope}</Text>
      )}
      <Button
        title="Write Journal"
  onPress={() => navigation.navigate('Journal', { date: date.toISOString().slice(0, 10) })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#f7f7f7' },
  date: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
  horoscope: { fontSize: 16, marginVertical: 16, color: '#333' },
});
