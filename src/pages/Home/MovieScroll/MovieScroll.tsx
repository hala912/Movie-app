import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { fetchPopularMovies } from "../../../store/movieslice/movieslice";
import type { Movie } from "../../../types/movie";
import './MovieScroll.css'
import fetchTopRatedmovies from "../../../store/movieslice/actions/getTopRatedmovies";

interface Props {
  header: string;
  movies :Movie[];
}

const MovieScroll = ({header,movies}: Props, ) => {
  
  return (
    <div className="container">
      <h3 className="Header">{header}</h3>
      <div className="Movielist">
        {movies.map((movie: Movie) => (
          <div key={movie.id} className="movie-mini">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieScroll;
