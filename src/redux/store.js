import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import champions from './HomeSlice';

const store = configureStore({
  reducer: {
    champions,
  },
  middleware: [thunk, logger],
});

export default store;
