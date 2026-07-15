import "./seriescard.css";
import type { Series, SeriesDetails } from "../../types/series";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addToMyList } from "../../utils/mylistStorage";
import { addMovieToList } from "../../store/mylistslice/mylistslice";

interface SeriesCardProps {
  series: SeriesDetails;
}

const SeriesCard = ({ series }: SeriesCardProps) => {

  const username = useAppSelector((state) => state.auth.username);
  const dispatch = useAppDispatch();

  const handleAddToList = () => {
    console.log("username:", username);
    if (!username) return;
    console.log("adding series:", series.name);
    addToMyList(username, { ...series, media_type: "tv" });
    dispatch(addMovieToList(series));
  };

  return (
    <div className="card-bg">
      <div className="left-side">
        <img
          src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
          alt={series.name}
          loading="lazy"
        />
      </div>

      <div className="right-side">
        <h1 className="movie-title">{series.name}</h1>
        <div className="meta">
          <span className="rating">{series.vote_average} Rating</span>
          <span className="dot">•</span>
          <span>{series.first_air_date?.slice(0, 4) || "2024"}</span>
          <span className="dot">•</span>
          <span>{series.number_of_seasons} Season{series.number_of_seasons !== 1 ? "s" : ""}</span>
        </div>

        <div className="categories">
          {series.genres?.map((genre) => (
            <span key={genre.id} className="category-tag">
              {genre.name}
            </span>
          ))}
        </div>

        <p className="overview">{series.overview}</p>

        <div className="buttons">
          <button className="btn-watch">
            <span>▶</span> Watch Now
          </button>
          <button className="btn-list" onClick={handleAddToList}>
            <span>+</span> My List
          </button>
        </div>

        <div className="info-grid">
          <div className="info-box">
            <span className="info-label">CREATOR</span>
            <span className="info-value">
              {"Unknown"}
            </span>
          </div>
          <div className="info-box">
            <span className="info-label">NETWORK</span>
            <span className="info-value">
              {"Unknown"}
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

export default SeriesCard;