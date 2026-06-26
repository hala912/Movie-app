import axios from "axios";

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
});

export const getPopularMovies = () =>
  tmdb.get("/movie/popular");

export const searchMovies = (query: string) =>
  tmdb.get("/search/movie", { params: { query } });

export const getMovieDetails = (id: number) =>
  tmdb.get(`/movie/${id}`);

export default tmdb;