import { Search, Bell, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import fetchSearchMovies from "../../store/movieslice/actions/searchformovie";
import { emptySearchResults } from "../../store/movieslice/movieslice";

const navItems = [
  { id: "movies", label: "Movies", path: "/" },
  { id: "Library", label: "Library", path: "/Library" },
  { id: "drama", label: "Drama", path: "/drama" },
  { id: "mylist", label: "My List", path: "/mylist" },
];

const Navbar = () => {
  const username = useAppSelector((state) => state.auth.username);

  const [activeTab, setActiveTab] = useState("movies");
  const dispatch = useAppDispatch();

  const [searchquery, setsearchquery] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchquery.trim()) {
        dispatch(fetchSearchMovies(searchquery));
        navigate("/search");
      } else {
        dispatch(emptySearchResults());
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchquery]);

  const location = useLocation();

  const hideOnRoutes = ["/Login", "/signup"]; // add any auth pages here
  if (hideOnRoutes.includes(location.pathname)) {
    return null; // don't render the navbar
  }

  return (
    <header className="navbar-top">
      <div className="logo">CINEPLEX</div>
      <nav className="nav-links">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={activeTab === item.id ? "active" : ""}
            onClick={() => {
              setActiveTab(item.id);
            }}
          >
            {item.label}
          </Link>
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
