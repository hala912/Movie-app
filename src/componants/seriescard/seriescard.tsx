import "./seriescard.css";
import type { SeriesDetails } from "../../types/series";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addToMyList } from "../../utils/mylistStorage";
import type { MyListItem } from "../../utils/mylistStorage";
import { addMovieToList } from "../../store/mylistslice/mylistslice";

interface SeriesCardProps {
  series: SeriesDetails;
}

const SeriesCard = ({ series }: SeriesCardProps) => {
  const username = useAppSelector((state) => state.auth.username);
  const dispatch = useAppDispatch();

  const handleAddToList = () => {
    if (!username) return;

    const listItem: MyListItem = { ...series, media_type: "tv" };

    addToMyList(username, listItem);
    dispatch(addMovieToList(listItem));
  };


  return (
    <div className="series-card-bg">
      <div className="series-left-side">
        <img
          src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
          alt={series.name}
          loading="lazy"
        />
        
      </div>

      <div className="series-right-side">
        <h1 className="series-title">{series.name}</h1>
        <div className="series-meta">
          <span className="series-rating">{series.vote_average} Rating</span>
          <span className="series-dot">•</span>
          <span>{series.first_air_date?.slice(0, 4) || "2024"}</span>
          <span className="series-dot">•</span>
          <span>{series.number_of_seasons} Season{series.number_of_seasons !== 1 ? "s" : ""}</span>
        </div>

        <div className="series-categories">
          {series.genres?.map((genre) => (
            <span key={genre.id} className="series-category-tag">
              {genre.name}
            </span>
          ))}
        </div>

        <p className="series-overview">{series.overview}</p>

        <div className="series-buttons">
          <button className="series-btn-watch">
            <span>▶</span> Watch Now
          </button>
          <button className="series-btn-list" onClick={handleAddToList}>
            <span>+</span> My List
          </button>
        </div>

        <div className="series-info-grid">
          <div className="series-info-box">
            <span className="series-info-label">CREATOR</span>
            <span className="series-info-value">{"Unknown"}</span>
          </div>
          <div className="series-info-box">
            <span className="series-info-label">NETWORK</span>
            <span className="series-info-value">{"Unknown"}</span>
          </div>
        </div>

        <div className="series-trailer-preview">
          <div className="series-trailer-thumb"></div>
          <div className="series-trailer-info">
            <div className="series-trailer-header">
              <span className="series-trailer-title">Trailer Preview</span>
              <span className="series-trailer-time">2:30</span>
            </div>
            <div className="series-progress-container">
              <div className="series-progress-bar"></div>
            </div>
          </div>
          <button className="series-btn-play-circle">▶</button>
        </div>
      </div>
    </div>
  );
};

export default SeriesCard;