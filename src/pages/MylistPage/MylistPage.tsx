import { useAppDispatch, useAppSelector } from "../../store/hooks";
import "./MylistPage.css";
import { useNavigate } from "react-router-dom";
import {
  clearlist,
  removeMovieFromList,
} from "../../store/mylistslice/mylistslice";
import { removeFromMyList, type MyListItem } from "../../utils/mylistStorage";

const MylistPage = () => {
  const list = useAppSelector((state) => state.mylist.items);
  const username = useAppSelector((state) => state.auth.username);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div className="Mylist-container">
      <div className="mylist-header">
        <div>
          <h1 className="mylist-title">Saved Treasures</h1>
        </div>
        <div className="header-actions">
          
          <button className="btn-clear" onClick={() => dispatch(clearlist())}>
            Clear All
          </button>
        </div>
      </div>

      <div className="saved-section">
        <h2 className="section-title">Saved for Later</h2>
        <div className="saved-grid">
          {list.map((item: MyListItem) => (
            <div key={`${item.id}-${item.media_type}`} className="saved-poster">
              <img
                src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
                alt={item.media_type}
              />
              <button
                className="remove-btn"
                onClick={() => {
                  if (!username) return;
                  removeFromMyList(username, item.id, item.media_type);
                  dispatch(removeMovieFromList(item.id));
                }}
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
