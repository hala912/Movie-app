import { createSlice } from "@reduxjs/toolkit";
import { fetchPopularSeries } from "./actions/getpopularseries";


const initialState = {
  series: [] as any[],
  loading: false,
  error: null,
};


const seriesSlice = createSlice({
  name: "series",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularSeries.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPopularSeries.fulfilled, (state, action) => {
        state.loading = false;
        state.series = action.payload;
      })
    
  },
});

export default seriesSlice.reducer;