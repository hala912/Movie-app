import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import MovieCard from "../../componants/moviecard/moviecard";
import fetchMovieDetails from "../../store/movieslice/actions/getmoviedetails";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const movie = useAppSelector((state) => state.movies.movieDetails);

  useEffect(() => {
    if (id) dispatch(fetchMovieDetails(Number(id)));
  }, [id, dispatch]);

  if (!movie) return <div>Loading...</div>;

  return <MovieCard movie={movie} />;
};

export default MovieDetailsPage;