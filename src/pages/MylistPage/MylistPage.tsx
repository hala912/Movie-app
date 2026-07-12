import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import fetchMovieDetails from "../../store/movieslice/actions/getmoviedetails";
import ContinueWatchingCard from "../../componants/continuewatchingCard/continuewatchingCard";
import type { Movie, MovieDetails } from "../../types/movie";

const MylistPage = () => {
  const movieslist = useAppSelector((state) => state.mylist.items);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovieDetails(550));
  }, [dispatch]);
 
  return (
    <div className="Mylist-container">
      <div className="ContinueWatching">
        {movieslist.map((movie:Movie) => (
          <ContinueWatchingCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="savedforlater"></div>
    </div>
  );
};

export default MylistPage;