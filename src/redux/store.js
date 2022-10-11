import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import main from './mainSlice';

const store = configureStore({
  reducer: {
    main,
  },
  middleware: [thunk, logger],
});

export default store;
