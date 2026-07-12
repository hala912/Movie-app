import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import fetchTrendingWeek from "../../store/movieslice/actions/getTrendingthisweek";
import { useNavigate } from "react-router";
  import { getMyList } from "../../utils/mylistStorage";
import { setMyList } from "../../store/mylistslice/mylistslice"
import { login } from "../../store/authslice/authslice";
import { findUser } from "../../utils/authStorage";
import "./LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();  

  const randomMovie = useAppSelector((state) => state.movies.trendingMovies);

  useEffect(() => {
    dispatch(fetchTrendingWeek());
  }, [dispatch]);



  const randomMovieId = useMemo(() => {
    return Math.floor(Math.random() * randomMovie.length);
  }, [randomMovie]);

  const posterUrl = randomMovie[randomMovieId]?.poster_path
    ? `https://image.tmdb.org/t/p/w1280${randomMovie[randomMovieId].poster_path}`
    : undefined;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = findUser(username, password);
  
    if (user) {
  console.log("logged in as:", user.username);
  dispatch(login({ username: user.username }));
  dispatch(setMyList(getMyList(user.username)));
  navigate("/");
} else {
      setError("Invalid username or password");
    }
  };

 
  return (
    <div className="container">
      <div className="left-side">
        <img
          src={posterUrl}
          alt={randomMovie[randomMovieId]?.title}
          className="hero-image"
        />
        <div className="now-streaming">
          <p className="label">NOW STREAMING</p>
          <p className="movie-name">{randomMovie[randomMovieId]?.title}</p>
          <div className="tags">
            <span>{randomMovie[randomMovieId]?.genre}</span>
            <span>{randomMovie[randomMovieId]?.runtime}</span>
          </div>
        </div>
      </div>

      <div className="right-side">
        <span className="page-header">Welcome Back</span>
        <span className="page-sub-header">
          Sign in to access your cinematic library.
        </span>

        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="form-control"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="error-text">{error}</p>}

          <div className="buttons">
            <button type="submit" className="btn-signup">
              Sign In
            </button>
          </div>
        </form>

        <hr className="divider" />
        <div className="social-login">
          <span>Or sign in with</span>
        </div>
        <div className="social-buttons">
          <button className="btn btn-google">Google</button>
          <button className="btn btn-facebook">Facebook</button>
        </div>

        <p className="join-text">
          Don't have an account? <a href="#">Join Cineplex Plus</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;