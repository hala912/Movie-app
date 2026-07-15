import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Series } from "../../../types/series";
import { getPopularSeries } from "../../../api/tmbd";

export const fetchPopularSeries = createAsyncThunk<Series[]>(
  "series/getPopularSeries",
  async () => {
    const res = await getPopularSeries() ;
    return res.data.result;
  }
);