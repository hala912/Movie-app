import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchPopularMovies } from "../../store/movieslice/movieslice";
import MovieScroll from "../Home/MovieScroll/MovieScroll";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const movies = useAppSelector((state) => state.movies.movies);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, []);

  return (
    <div>
      <MovieScroll
        header="Results "
        movies={movies}
        onClick={(movie) => navigate(`/movie/${movie.id}`)}
        postion="Vertical"
      />
    </div>
  );
};

export default SearchPage;
