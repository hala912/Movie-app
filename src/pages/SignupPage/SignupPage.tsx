import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import fetchTrendingWeek from "../../store/movieslice/actions/getTrendingthisweek";
import './SignupPage.css'
import { addUser } from "../../utils/authStorage";
import type { User } from "../../utils/authStorage";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [fullname, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const randomMovie = useAppSelector((state) => state.movies.trendingMovies);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTrendingWeek());
  }, [dispatch]);

  const randomMovieId = useMemo(() => {
    return Math.floor(Math.random() * randomMovie.length);
  }, [randomMovie]);

  const posterUrl = randomMovie[randomMovieId]?.poster_path
    ? `https://image.tmdb.org/t/p/w1280${randomMovie[randomMovieId].poster_path}`
    : undefined;

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!fullname || !username || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const newUser: User = { username, fullname, password };
    
    addUser(newUser);
  };


  return (
    <div className="signup-container">
      <div className="signup-left-side">
        <img
          src={posterUrl}
          alt={randomMovie[randomMovieId]?.title}
          className="signup-hero-image"
        />
        <div className="signup-now-streaming">
          <p className="signup-label">Experience Every Story.</p>
          <div className="signup-tags">
            Join the world's most immersive streaming platform. High- fidelity
            audio, 4K HDR visuals, and curated collections for the true
            cinephile.
          </div>
        </div>
      </div>

      <div className="signup-right-side">
        <span className="signuppage-header">CINEPLEX</span>
        <span className="signup-page-sub-header">
          Create your account
        </span>

        <form className="signup-form" onSubmit={handleSignup}>
          <div className="signup-form-group">
            <label htmlFor="fullname">Fullname</label>
            <input
              type="text"
              id="fullname"
              className="signup-form-control"
              placeholder="Enter your Fullname"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="signup-form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="signup-form-control"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="signup-form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="signup-form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="signup-form-group">
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              type="password"
              id="confirmpassword"
              className="signup-form-control"
              placeholder="Enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {error && <p className="signup-error-text">{error}</p>}

          <div className="signup-buttons">
            <button type="submit" className="signup-btn-signup">
              Sign In
            </button>
          </div>
        </form>

        <hr className="signup-divider" />
        <div className="signup-social-login">
          <span>Or sign in with</span>
        </div>
        <div className="signup-social-buttons">
          <button className="signup-btn-google">Google</button>
          <button className="signup-btn-facebook">Facebook</button>
        </div>

        <p className="signup-join-text">
          Don't have an account? <a href="#">Join Cineplex Plus</a>
        </p>
      </div>
    </div>
  );
};


  console.log(JSON.parse(localStorage.getItem("users") || "[]"));
  
export default SignupPage;