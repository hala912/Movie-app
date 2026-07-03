import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import fetchMovieGenre from "../../store/movieslice/actions/getMovieGenre";
import "./categoryoption.css"

interface CategoryOptionProps {
  onClick: (id: number) => void;
}   

const CategoryOption  = ({ onClick }: CategoryOptionProps) => {

    const genres = useAppSelector((state)=>(state.movies.MovieGenre))
   const dispatch = useAppDispatch();
    const [activetab, setActiveTab] = useState<string | null>(null);
   useEffect(()=>{
    dispatch(fetchMovieGenre())
   },[])
   
return(
    <div className="category-options">
    {genres?.map((MovieGenre:any) => (
      <button key={MovieGenre.id}
        className={activetab === MovieGenre.id ? "active" : ""}
        onClick={() => {
          setActiveTab(MovieGenre.id);
          onClick(MovieGenre.id);
        }}
      >
        {MovieGenre.name}
      </button>
    ))}
  </div>
)

}

export default CategoryOption ;