import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import fetchMovieDetails from "../../store/movieslice/actions/getmoviedetails";
import type { Movie, MovieDetails } from "../../types/movie";
import "./MylistPage.css"
import { useNavigate } from "react-router-dom";
import { Link } from "lucide-react";

const MylistPage = () => {
  const movieslist = useAppSelector((state) => state.mylist.items);
  const loged = useAppSelector((state)=>state.auth.isAuthenticated)
  const dispatch = useAppDispatch();
const navigate = useNavigate()
  useEffect(() => {
    dispatch(fetchMovieDetails(550));
  }, [dispatch]);


if (!loged) return (
  <div className="unauth-message">
    <div className="unauth-icon">🔒</div>
    <h2>You need to log in first</h2>
    <p>This page is only available to signed-in users.</p>
  </div>
);
  return (
    <div className="Mylist-container">
      <div className="mylist-header">
        <div>
        
          <h1 className="mylist-title">Saved Treasures</h1>
        </div>
        <div className="header-actions">
          <button className="btn-edit">Edit</button>
          <button className="btn-clear" >
            Clear All
          </button>
        </div>
      </div>

      {/* Continue Watching: separate feature, not yet built (needs progress-tracking data) */}

      <div className="saved-section">
        <h2 className="section-title">Saved for Later</h2>
        <div className="saved-grid">
          {movieslist.map((movie: Movie) => (
            <div key={movie.id} className="saved-poster">
              <img
                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                alt={movie.title}
              />
              <button
                className="remove-btn"
                
              >
                ✕
              </button>
            </div>
          ))}

          <div className="add-more-tile" onClick={() => navigate("/")}>
            <span className="add-icon">＋</span>
            <span>Add more to your collection</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MylistPage;