import type { Movie } from "../../../types/movie";
import './HeroBanner.css'
interface MovieCardProps {
  movie: Movie;
}
const HeroBanner = ({ movie }: MovieCardProps) => {
  return (
    <div 
      className="Banner_ing"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
      }}
    >
      <div className="meta">
        <span className="MainCategory">Category</span>
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
          <button className="btn-list">
            <span>+</span> My List
          </button>
        </div>
    </div>
  );
};

export default HeroBanner;
