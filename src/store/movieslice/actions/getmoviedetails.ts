import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMovieDetails } from "../../../api/tmbd";

const fetchMovieDetails = createAsyncThunk(
  "/movie/${id}",
  async (id: number) => {
    const response = await getMovieDetails(id);
    return response.data;
  },
);

export default fetchMovieDetails;
