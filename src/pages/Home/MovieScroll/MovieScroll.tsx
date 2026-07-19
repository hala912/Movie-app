import type { Movie } from "../../../types/movie";
import './MovieScroll.css'
interface Props {
  header: string;
  movies :Movie[];
  onClick: (movie: Movie) => void;
  postion? : "Horizontal" | "Vertical";
  className?: string;
}

const MovieScroll = ({header,movies, onClick, postion, className}: Props, ) => {
  
  return (
    <div className="moviescroll-bg">
      <h3 className="Header">{header}</h3>
      <div className={`Movielist ${postion === "Vertical" ? 'Movielist--vertical' : ''} ${className || ''}`}>
        {movies.map((movie: Movie) => (
          <div key={movie.id} className="movie-mini" onClick={() => onClick(movie)}>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              loading="lazy"
            />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieScroll;
