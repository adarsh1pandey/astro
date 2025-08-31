// src/utils/zodiac.ts
export const ZODIAC_SIGNS = [
  'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo',
  'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces',
];

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
