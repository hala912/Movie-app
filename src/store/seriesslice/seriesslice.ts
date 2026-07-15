import { createSlice } from "@reduxjs/toolkit";
import type { Series } from "../../types/series";
import { fetchPopularSeries } from "./actions/getpopularseries";

interface SeriesState {
  series: Series[];
  loading: boolean;
  error: string | null;
}

const initialState: SeriesState = {
  series: [],
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
        state.error = null;
      })
      .addCase(fetchPopularSeries.fulfilled, (state, action) => {
        state.loading = false;
        state.series = action.payload;
      })
      .addCase(fetchPopularSeries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to load series";
      });
  },
});

export default seriesSlice.reducer;