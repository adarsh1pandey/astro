// src/store/journalSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface JournalState {
  entries: { [date: string]: string };
}

const initialState: JournalState = {
  entries: {},
};

const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    setEntry(state, action: PayloadAction<{ date: string; entry: string }>) {
      state.entries[action.payload.date] = action.payload.entry;
    },
    setEntries(state, action: PayloadAction<{ [date: string]: string }>) {
      state.entries = action.payload;
    },
  },
});

export const { setEntry, setEntries } = journalSlice.actions;
export default journalSlice.reducer;
