import { useAppSelector } from "../../store/hooks";
import MovieScroll from "../Home/MovieScroll/MovieScroll";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const movies = useAppSelector((state) => state.movies.SearchMovies);
  const navigate = useNavigate();


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
