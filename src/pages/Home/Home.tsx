import { useEffect, useState } from "react";
import HeroBanner from "./HeroBanner/HeroBanner";
import { getMovieDetails, getTrendingMovies } from "../../api/tmbd";
import type { Movie } from "../../types/movie";
import MovieScroll from "./MovieScroll/MovieScroll";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import fetchTrendingWeek from "../../store/movieslice/actions/getTrendingthisweek";
import fetchTopRatedmovies from "../../store/movieslice/actions/getTopRatedmovies";

const Home = () => {
 
  const Topratedmovies = useAppSelector((state) => state.movies.topratedMovies);
  const trendingmovies = useAppSelector((state)=>state.movies.trendingMovies)


  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTopRatedmovies());
    dispatch(fetchTrendingWeek())
  }, []);


  const TopMovie = trendingmovies[0];

  if (!TopMovie) return <div>Loading...</div>;

  return (<>
    <HeroBanner movie={TopMovie} />
    <MovieScroll header={"Top Rated"} movies={Topratedmovies} />
    <MovieScroll header="Trending" movies={trendingmovies}/>
  

  </>

   
  );
};

export default Home;
