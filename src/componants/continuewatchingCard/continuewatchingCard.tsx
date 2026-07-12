import type { Movie, MovieDetails } from "../../types/movie";
import "./continuewatchingCard.css"

interface CardProps {
  movie: Movie;
  episodeLabel?: string; // e.g. "S2:E4"
  currentTime?: string;  // e.g. "42:10"
  totalTime?: string;    // e.g. "58:00"
  progressPercent?: number; // 0-100
}

const ContinueWatchingCard = ({
  movie,
  episodeLabel,
  currentTime,
  totalTime,
  progressPercent = 0,
}: CardProps) => {
  return (
    <div className="conWat-pg">
      <div className="img-container">
        <img src={movie.poster_path} alt={movie.title} />
        <div className="img-overlay" />

        {episodeLabel && <span className="episode-badge">{episodeLabel}</span>}

        {currentTime && totalTime && (
          <span className="time-label">
            {currentTime} / {totalTime}
          </span>
        )}

        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <div className="card-titles">
        <span className="card-header">{movie.title}</span>
        <span className="card-info">{movie.overview}</span>
      </div>
    </div>
  );
};

export default ContinueWatchingCard;