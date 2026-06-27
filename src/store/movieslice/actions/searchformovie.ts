import {createAsyncThunk}from '@reduxjs/toolkit'
import { searchMovies } from '../../../api/tmbd';

const fetchSearchMovies = createAsyncThunk(
  'movies/search',
  async (query: string) => {
    const res = await searchMovies(query);
    return res.data.results;
  }
);

export default fetchSearchMovies;