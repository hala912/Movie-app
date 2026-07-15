import { Search, Bell, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import fetchSearchMovies from "../../store/movieslice/actions/searchformovie";
import { emptySearchResults } from "../../store/movieslice/movieslice";

const navItems = [
  { id: "movies", label: "Movies" },
  { id: "series", label: "Series" },
  { id: "genres", label: "Genres" },
  { id: "mylist", label: "My List" },
];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("movies");
  const dispatch = useAppDispatch();

  const [searchquery, setsearchquery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchquery.trim()) {
        dispatch(fetchSearchMovies(searchquery));
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchquery]);

  const username = useAppSelector((state)=>state.auth.username)
  return (
    <header className="navbar-top">
      <div className="logo">CINEPLEX</div>
      <nav className="nav-links">
        {navItems.map((item) => (
          <a
            key={item.id}
            href="#"
            className={activeTab === item.id ? "active" : ""}
            onClick={() => setActiveTab(item.id)}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="nav-actions">
        <div className="search-box">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search movies..."
            value={searchquery}
            onChange={(e) => setsearchquery(e.target.value)}
          />

          <input
            type="text"
            placeholder="Search movies..."
            value={searchquery}
            onChange={(e) => setsearchquery(e.target.value)}
          />
        </div>
        <Bell size={20} />
        <div className="user-info">
          <User className="avatar" />
          <span>{username}</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
