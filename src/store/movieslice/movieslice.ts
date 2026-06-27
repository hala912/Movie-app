import { createSlice } from '@reduxjs/toolkit';
import fetchSearchMovies from './actions/searchformovie'
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPopularMovies } from '../../api/tmbd';

export const fetchPopularMovies = createAsyncThunk(
  'movies/fetchPopular',
  async () => {
    const res = await getPopularMovies();
    return res.data.results;
  }
);
const InitialState = {
    movies: [] as any[],
    loading: false,
    searchQuery: '',
}

const movieSlice = createSlice({ 
    name: 'movies',
    initialState:InitialState ,
    reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers:( builder )=>{
    builder
      .addCase(fetchSearchMovies.pending, (state) => { 
        state.loading = true; 
      })
      .addCase(fetchSearchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchPopularMovies.pending, (state) => { 
        state.loading = true; 
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
},
})

export default movieSlice.reducer;
