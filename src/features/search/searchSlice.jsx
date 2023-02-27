import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: { searchValue: '' },
  reducers: {
    updateSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { updateSearchValue } = searchSlice.actions;

export default searchSlice.reducer;

export const selectSearchValue = (state) => state.search.searchValue;
