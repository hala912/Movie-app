import { createSlice } from "@reduxjs/toolkit";
import { fetchPopularSeries } from "./actions/getpopularseries";
import fetchSeriesDetails from "./actions/getseriesdetails";
import type { Series } from "../../types/series";


const initialState = {
  series: [] as any[],
  SeriesDetails : null as Series | null ,
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
       .addCase(fetchSeriesDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSeriesDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.SeriesDetails = action.payload;
      })
    
  },
});

export default seriesSlice.reducer;