import { useEffect, useState } from "react";
import { getPopularMovies } from "./api/tmbd";
import MovieCard from "./componants/moviecard/moviecard";
import Sidebar  from "./common/sidebar/sidebar";
import "./App.css"
import Navbar from "./common/navbar/navbar";
import AppRoutes from "./router/router";

function App() {
 

  return (
   <div className="app-layout">
      <Navbar />
      <div className="body-layout">
        <main className="content">
        <AppRoutes />
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
