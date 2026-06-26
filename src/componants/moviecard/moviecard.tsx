
import './moviecard.css';



interface moviedetails {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  overview:string;
}

interface Movie{
    movie:moviedetails
}


const MovieCard = ({movie}: Movie) => {
  return (
    <div className="card-bg">
      <div className="left-side">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <h3>{movie.title}</h3>
      </div>

      <div className="right-side">
        <div className="meta">
          <span className="rating">⭐ {movie.vote_average}</span>
          <span>•</span>
          <span>{movie.release_date?.slice(0, 4)}</span>
        </div>

        <div className="categories">
          <span className="category-tag">Action</span>
          <span className="category-tag">Adventure</span>
        </div>

        <p className="overview">{movie.overview}</p>

        <div className="buttons">
          <button className="btn-watch">▶ Watch Now</button>
          <button className="btn-list">+ My List</button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
