import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import mobile from '../navbar/mediaReducer';

const reducer = configureStore({
  reducer: {
    counter: counterReducer,
    mobile,
  },
});

export default reducer;
