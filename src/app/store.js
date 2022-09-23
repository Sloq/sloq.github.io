import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import mediaReducer from '../navbar/mediaReducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    mobile: mediaReducer,
  },
});
