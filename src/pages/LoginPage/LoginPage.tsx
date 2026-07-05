import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchPopularMovies } from "../../store/movieslice/movieslice";
import "./LoginPage.css";
import fetchMovieDetails from "../../store/movieslice/actions/getmoviedetails";
import type { MovieDetails } from "../../types/movie";
import fetchTrendingWeek from "../../store/movieslice/actions/getTrendingthisweek";
import { useNavigate } from "react-router";

const LoginPage = () => {

    const randomMovie = useAppSelector((state) => state.movies.trendingMovies);
    const randomMovieId = Math.floor(Math.random() * randomMovie.length) + 1; // Generate a random movie ID
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchTrendingWeek());
    }, [dispatch]);


    const posterUrl = randomMovie[randomMovieId]?.poster_path
  ? `https://image.tmdb.org/t/p/w1280${randomMovie[randomMovieId].poster_path}`
  : undefined;

 
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
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
            />
          </div>
          <div className="buttons">
            <button type="submit" className="btn-signup" >
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
