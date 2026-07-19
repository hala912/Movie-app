import { createSlice } from "@reduxjs/toolkit";
import fetchSearchMovies from "./actions/searchformovie";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPopularMovies } from "../../api/tmbd";
import fetchTrendingWeek from "./actions/getTrendingthisweek";
import type { Movie } from "../../types/movie";
import fetchTopRatedmovies from "./actions/getTopRatedmovies";
import fetchMovieDetails from "./actions/getmoviedetails";
import fetchMovieGenre from "./actions/getMovieGenre";
import fetchMovieByGenre from "./actions/getMovieByGenre";

export const fetchPopularMovies = createAsyncThunk(
  "movies/fetchPopular",
  async () => {
    const res = await getPopularMovies();
    return res.data.results;
  },
);

const InitialState = {
  movies: [] as any[],
  SearchMovies: [] as Movie[],
  trendingMovies: [] as Movie[],
  topratedMovies :[] as Movie[],
  MoviesByGenre : [] as Movie[],
  MovieGenre: [] as { id: number; name: string }[],  
  movieDetails: null as Movie | null,
  loading: false,
  searchQuery: "",
};

const movieSlice = createSlice({
  name: "movies",
  initialState: InitialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    emptySearchResults: (state) => {
      state.SearchMovies = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSearchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.SearchMovies = action.payload;
      })
      .addCase(fetchPopularMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchTrendingWeek.fulfilled, (state, action) => {
        state.loading = false;
        state.trendingMovies = action.payload;
      })
      .addCase(fetchTrendingWeek.pending, (state) => {
        state.loading = true;
      })
       .addCase(fetchTopRatedmovies.fulfilled, (state, action) => {
        state.loading = false;
        state.topratedMovies = action.payload;
      })
      .addCase(fetchTopRatedmovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.movieDetails = action.payload;
      })
      .addCase(fetchMovieDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovieGenre.fulfilled, (state, action) => {
        state.loading = false;
        state.MovieGenre = action.payload;
      })
      .addCase(fetchMovieGenre.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovieByGenre.fulfilled, (state, action) => {
        state.loading = false;
        state.MoviesByGenre = action.payload;
      })
      .addCase(fetchMovieByGenre.pending, (state) => {
        state.loading = true;
      });
  },
});

export default movieSlice.reducer;
export const { setSearchQuery, emptySearchResults } = movieSlice.actions;