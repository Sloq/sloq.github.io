import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import layoutReducer from '../features/layout/layoutSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    layout: layoutReducer,
  },
});
