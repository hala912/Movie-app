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

export default tmdb;
