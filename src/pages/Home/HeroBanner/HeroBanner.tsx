import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addMovieToList } from "../../../store/mylistslice/mylistslice";
import type { MovieDetails } from "../../../types/movie";
import { addToMyList, type MyListItem } from "../../../utils/mylistStorage";
import "./HeroBanner.css";
interface MovieCardProps {
  movie: MovieDetails;
}
const HeroBanner = ({ movie }: MovieCardProps) => {
  const username = useAppSelector((state) => state.auth.username);
  const dispatch = useAppDispatch();

 
  const handleAddToList = () => {
    if (!username) return;

    const listItem: MyListItem = { ...movie, media_type: "movie" };

    addToMyList(username, listItem);
    dispatch(addMovieToList(listItem));
   
  };


 
  return (
    <div
      className="Banner_ing"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
      }}
    >
      <div className="meta">
        <span className="MainCategory">
          SOON
        </span>
        <span className="dot">•</span>
        <span>{movie.release_date?.slice(0, 4) || "2024"}</span>
      </div>
      <div>
        <h1 className="title">{movie.title}</h1>
        <h3 className="overview">{movie.overview}</h3>
      </div>
      <div className="buttons">
        <button className="btn-watch">
          <span>▶</span> Watch Now
        </button>
        <button className="btn-list" onClick={handleAddToList}>
          <span>+</span> My List
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
