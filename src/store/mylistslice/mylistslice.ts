// store/mylistSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Movie } from "../../types/movie";

interface MyListState {
  items: Movie[];
}

const initialState: MyListState = {
  items: [],
};

const mylistSlice = createSlice({
  name: "mylist",
  initialState,
  reducers: {
    setMyList: (state, action: PayloadAction<Movie[]>) => {
      state.items = action.payload;
    },
    addMovieToList: (state, action: PayloadAction<Movie>) => {
      const exists = state.items.some((m) => m.id === action.payload.id);
      if (!exists) state.items.push(action.payload);
    },
    removeMovieFromList: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((m) => m.id !== action.payload);
    },
  },
});

export const { setMyList, addMovieToList, removeMovieFromList } = mylistSlice.actions;
export default mylistSlice.reducer;