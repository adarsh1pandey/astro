// src/services/horoscopeService.ts
import axios from 'axios';

const API_URL = 'https://api.api-ninjas.com/v1/horoscope?zodiac=';


// You must set your API key here or use a .env or config file for production
const API_KEY = 'YOUR_API_KEY_HERE'; // <-- Replace with your actual API Ninjas key

export async function fetchHoroscope(sign: string) {
  try {
    const response = await axios.get(`${API_URL}${sign}`, {
      headers: { 'X-Api-Key': API_KEY },
    });
    // Response: { date, sign, horoscope }
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch horoscope');
  }
}
