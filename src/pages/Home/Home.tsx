import { useEffect } from "react";
import HeroBanner from "./HeroBanner/HeroBanner";
import MovieScroll from "./MovieScroll/MovieScroll";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import fetchTrendingWeek from "../../store/movieslice/actions/getTrendingthisweek";
import fetchTopRatedmovies from "../../store/movieslice/actions/getTopRatedmovies";
import { Navigate, useNavigate } from "react-router-dom";
import MovieDetailsPage from "../MovieDetailsPage/MovieDetailsPage";

const Home = () => {
 
  const Topratedmovies = useAppSelector((state) => state.movies.topratedMovies);
  const trendingmovies = useAppSelector((state)=>state.movies.trendingMovies)
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTopRatedmovies());
    dispatch(fetchTrendingWeek())
  }, []);


  const TopMovie = trendingmovies[0];

  if (!TopMovie) return <div>Loading...</div>;

  return (<>
    <HeroBanner movie={TopMovie} />
    <MovieScroll header={"Top Rated"} movies={Topratedmovies} onClick={(movie) => navigate(`/movie/${movie.id}`)} />
    <MovieScroll header="Trending" movies={trendingmovies} onClick={(movie) => navigate(`/movie/${movie.id}`)} />
  </>
  );
};

export default Home;
