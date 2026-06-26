import { useEffect,useState } from "react";
import {getPopularMovies } from "./api/tmbd";
import MovieCard from "./componants/moviecard/moviecard";
function App() {

const [movies, setMovies] =  useState<any[]>([]);


  useEffect(() => {
    getPopularMovies().then((res) => {setMovies(res.data.results)
      console.log(res.data.results)
    });
  }, []);

   return <div>
    movie app 
      {movies.map((movie: any) => (
        <MovieCard key={movie.id} movie={movie}/>
      ))}
    </div>
;
}

export default App;