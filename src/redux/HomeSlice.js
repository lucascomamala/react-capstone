/* eslint-disable */
import axios from 'axios';

const DDRAGON_URI = `http://ddragon.leagueoflegends.com`;
const CHAMP_LIST_URI = `${DDRAGON_URI}/cdn/12.19.1/data/en_US/champion.json`;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// First, create the thunk
export const getChampions = createAsyncThunk(
  'champions/getChampions',
  async () => {
    const response = await axios.get(CHAMP_LIST_URI);
    const simple = response.data.data;
    
    const idList = Object.keys(simple);
    const uriList = idList.map((id) => `${DDRAGON_URI}/cdn/12.19.1/data/en_US/champion/${id}.json`);
    const detailed = [];
    for (let i = 0; i < uriList.length; i += 1) {
      const champResponse = await axios.get(uriList[i]);
      detailed.push(champResponse.data.data[idList[i]]);
    }

    const newState = {
      simple,
      detailed,
    };
    
    return newState;
  },
);

const initialState = [];

// Then, handle actions in your reducers:
const homeSlice = createSlice({
  name: 'champions',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getChampions.fulfilled, (state, action) => action.payload);
  },
});

// Action creators are generated for each case reducer function
export const { homeReducer } = homeSlice.actions;

export default homeSlice.reducer;
