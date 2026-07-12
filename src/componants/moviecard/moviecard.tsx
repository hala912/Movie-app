import "./moviecard.css";
import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../../api/tmbd";
import type { Movie, MovieDetails } from "../../types/movie";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addToMyList } from "../../utils/mylistStorage";
import { addMovieToList } from "../../store/mylistslice/mylistslice";

interface MovieCardProps {
  movie: MovieDetails;
}

const MovieCard = ({ movie }: MovieCardProps) => {

  const username = useAppSelector((state) => state.auth.username);
const dispatch = useAppDispatch()



const handleAddToList = () => {
  console.log("username:", username); // is this even a real value?
  if (!username) return;
  console.log("adding movie:", movie.title);
  addToMyList(username, movie);
  dispatch(addMovieToList(movie));
};

  return (
    <div className="card-bg">
      <div className="left-side">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          loading="lazy"
        />
      </div>

      <div className="right-side">
        <h1 className="movie-title">{movie.title}</h1>
        <div className="meta">
          <span className="rating">{movie.vote_average} Rating</span>
          <span className="dot">•</span>
          <span>{movie.release_date?.slice(0, 4) || "2024"}</span>
          <span className="dot">•</span>
          <span>{movie.runtime} min</span>
        </div>

        <div className="categories">
          {movie.genres?.map((genre) => (
            <span key={genre.id} className="category-tag">
              {genre.name}
            </span>
          ))}
        </div>

        <p className="overview">{movie.overview}</p>

        <div className="buttons">
          <button className="btn-watch">
            <span>▶</span> Watch Now
          </button>
          <button className="btn-list" onClick={handleAddToList}>
            <span>+</span> My List
          </button>
        </div>

        {/* New sections matching the image layout */}
        <div className="info-grid">
          <div className="info-box">
            <span className="info-label">DIRECTOR</span>
            <span className="info-value">
              {movie.credits.crew.find((member) => member.job === "Director")
                ?.name || "Unknown"}
            </span>
          </div>
          <div className="info-box">
            <span className="info-label">STUDIO</span>
            <span className="info-value">
              {movie.credits.crew.find(
                (member) => member.department === "Production",
              )?.name || "Unknown"}
            </span>
          </div>
        </div>

        <div className="trailer-preview">
          <div className="trailer-thumb"></div>
          <div className="trailer-info">
            <div className="trailer-header">
              <span className="trailer-title">Trailer Preview</span>
              <span className="trailer-time">2:30</span>
            </div>
            <div className="progress-container">
              <div className="progress-bar"></div>
            </div>
          </div>
          <button className="btn-play-circle">▶</button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
