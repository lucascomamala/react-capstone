import { createSlice } from '@reduxjs/toolkit';

const initialState = { name: '', role: '', difficulty: '' };

// Then, handle actions in your reducers:
const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
});

// Action creators are generated for each case reducer function
export const { searchReducer } = searchSlice.actions;

export default searchSlice.reducer;
