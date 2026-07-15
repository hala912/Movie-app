
import type { Series } from "../../../types/series";
import "./SeriesScroll.css";

interface Props {
  header: string;
  series: Series[];
  onClick: (series: Series) => void;
  postion?: "Horizontal" | "Vertical";
  className?: string;
  genreMap?: Record<number, string>;
}

const SeriesScroll = ({ header, series, onClick, postion, className, genreMap }: Props) => {
  return (
    <div className="seriesscroll-bg">
      <h3 className="series-header">{header}</h3>
      <div
        className={`series-list ${postion === "Vertical" ? "series-list--vertical" : ""} ${className || ""}`}
      >
        {series.map((item: Series) => (
          <div key={item.id} className="series-mini" onClick={() => onClick(item)}>
            <div className="series-poster-wrap">
              <img
                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                alt={item.name}
                loading="lazy"
              />
              <button className="series-play-btn">▶</button>
            </div>
            <p className="series-title">{item.name}</p>
            <div className="series-meta">
              <span>{item.first_air_date?.slice(0, 4) || "—"}</span>
              {genreMap && item.genre_ids?.[0] && (
                <>
                  <span className="series-dot">•</span>
                  <span>{genreMap[item.genre_ids[0]]}</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeriesScroll;