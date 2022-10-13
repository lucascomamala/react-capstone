/* eslint-disable */
import axios from 'axios';

const DDRAGON_URI = `http://ddragon.leagueoflegends.com`;
const CHAMP_LIST_URI = `${DDRAGON_URI}/cdn/12.19.1/data/en_US/champion.json`;

import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';

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
      filtered: detailed,
    };

    return newState;
  },
);

const sliceKey = 'champions';
const initialState = { simple: {}, detailed: [], filtered: [] };

// Then, handle actions in your reducers:
const homeSlice = createSlice({
  name: sliceKey,
  initialState,
  reducers: {
    filterChamps: (state, { payload }) => {
      if (payload) {
        let newList = current(state.detailed);
        if (payload.name) {
          newList = newList.filter((champ) => champ.name.toLowerCase().includes(payload.name.toLowerCase()));
        }
        if (payload.role) {
          newList = newList.filter((champ) => champ.tags.includes(payload.role));
        }
        if (payload.difficulty) {
          if (payload.difficulty === 'Low') {
            newList = newList.filter((champ) => 0 <= champ.info.difficulty && champ.info.difficulty <= 3);
          }
          else if (payload.difficulty === 'Moderate') {
            newList = newList.filter((champ) => 4 <= champ.info.difficulty && champ.info.difficulty <= 7);
          }
          else if (payload.difficulty === 'High') {
            newList = newList.filter((champ) => 8 <= champ.info.difficulty);
          }
        }
        state.filtered = newList
      }
      else {
        state.filtered = state.detailed;
      }
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getChampions.fulfilled, (state, action) => action.payload);
  },
});

// Action creators are generated for each case reducer function
export const { filterChamps, homeReducer } = homeSlice.actions;

export default homeSlice.reducer;
