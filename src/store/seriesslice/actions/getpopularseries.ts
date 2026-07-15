import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPopularSeries } from "../../../api/tmbd";

export const fetchPopularSeries = createAsyncThunk(
 "series/fetchPopularSeries",
  async () => {
    const res = await getPopularSeries() ;
    return res.data.results;
    
  }
);