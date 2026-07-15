import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movieslice/movieslice';
import authReducer from "./authslice/authslice"; 
import mylistReducer from "./mylistslice/mylistslice"
import seriesReducer from "./seriesslice/seriesslice"
export const store = configureStore({
  reducer: {
    movies: movieReducer,
    mylist :mylistReducer,
    auth :authReducer,
    series: seriesReducer,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;