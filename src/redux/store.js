import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import champions from './HomeSlice';
import search from './SearchSlice';

const store = configureStore({
  reducer: {
    champions,
    search,
  },
  middleware: [thunk, logger],
});

export default store;
