import { useEffect, useState } from "react";
import { getPopularMovies } from "./api/tmbd";
import MovieCard from "./componants/moviecard/moviecard";
import Sidebar  from "./common/sidebar/sidebar";
import "./App.css"
import Navbar from "./common/navbar/navbar";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { fetchPopularMovies } from "./store/movieslice/movieslice";
import Home from "./pages/Home/Home";
function App() {
 

  return (
   <div className="app-layout">
      <Navbar />
      <div className="body-layout">
        <Sidebar />
        <main className="content">
       <Home/>
      </main>
      </div>
    </div>
  );
}
/*
         const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    getPopularMovies().then((res) => {
      setMovies(res.data.results);
    });
  }, []);
    const dispatch= useAppDispatch()
  const movies = useAppSelector((state) => state.movies.movies)

  useEffect(
    ()=>{
      dispatch(fetchPopularMovies())
    },
    []
  );

   <div>
          {movies.map((movie: any) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

*/
export default App;
