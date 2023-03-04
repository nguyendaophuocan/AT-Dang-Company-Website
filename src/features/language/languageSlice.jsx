import { createSlice } from '@reduxjs/toolkit';

const languageSlice = createSlice({
  name: 'language',
  initialState: { languageValue: 'en-US' },
  reducers: {
    updateLanguageValue: (state, action) => {
      state.languageValue = action.payload;
    },
  },
});

export const { updateLanguageValue } = languageSlice.actions;

export default languageSlice.reducer;

export const selectLanguageValue = (state) => state.language.languageValue;
