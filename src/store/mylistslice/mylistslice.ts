// store/mylistSlice.ts
import { createSlice} from "@reduxjs/toolkit";

interface MyListState {
  items: any[];
}

const initialState: MyListState = {
  items: [],
};

const mylistSlice = createSlice({
  name: "mylist",
  initialState,
  reducers: {
    setMyList: (state, action) => {
      state.items = action.payload;
    },
    addMovieToList: (state, action) => {
      const exists = state.items.some((m) => m.id === action.payload.id);
      if (!exists) state.items.push(action.payload);
    },
    removeMovieFromList: (state, action) => {
      state.items = state.items.filter((m) => m.id !== action.payload);
    },
    clearlist:(state)=>{
      state.items = []
    }
  },
});

export const { setMyList, addMovieToList, removeMovieFromList,clearlist } = mylistSlice.actions;
export default mylistSlice.reducer;