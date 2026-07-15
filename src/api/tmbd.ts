import axios from "axios";

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
});

export const getPopularMovies = () => tmdb.get("/movie/popular");

export const searchMovies = (query: string) =>
  tmdb.get("/search/movie", { params: { query } });

export const getMovieDetails = (id: number) =>
  tmdb.get(`/movie/${id}`, {
    params: { append_to_response: "credits,videos,recommendations" },
  });

export const getTrendingMovies = () => tmdb.get("/trending/movie/week");
export const getTopRatedMovies = () => tmdb.get("/movie/top_rated");
export const getGenres = () => tmdb.get("/genre/movie/list");

export const getMoviesByGenre = (genreId: number) =>
  tmdb.get("/discover/movie", { params: { with_genres: genreId } });

export const getPopularSeries = () => tmdb.get("/tv/popular");

export const searchSeries = (query: string) =>
  tmdb.get("/search/tv", { params: { query } });

export const getSeriesDetails = (id: number) =>
  tmdb.get(`/tv/${id}`, {
    params: { append_to_response: "credits,videos,recommendations" },
  });

export const getTrendingSeries = () => tmdb.get("/trending/tv/week");
export const getTopRatedSeries = () => tmdb.get("/tv/top_rated");
export const getOnTheAirSeries = () => tmdb.get("/tv/on_the_air");
export const getSeriesGenres = () => tmdb.get("/genre/tv/list");

export const getSeriesByGenre = (genreId: number) =>
  tmdb.get("/discover/tv", { params: { with_genres: genreId } });

export default tmdb;