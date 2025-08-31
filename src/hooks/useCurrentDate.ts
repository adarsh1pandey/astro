// src/hooks/useCurrentDate.ts
import { useState, useEffect } from 'react';

export function useCurrentDate() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  return date;
}
