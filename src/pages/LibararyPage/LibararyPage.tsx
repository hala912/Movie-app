import { useNavigate } from "react-router-dom";
import CategoryOption from "../../componants/categoryoption/categoryoption";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import MovieScroll from "../Home/MovieScroll/MovieScroll";
import "./LibabaryPage.css"
import { useEffect, useState } from "react";
import fetchMovieByGenre from "../../store/movieslice/actions/getMovieByGenre";
const LibararyPage = () => {
    const moviesByGenre = useAppSelector((state) => state.movies.MoviesByGenre);
    const navigate = useNavigate();
    const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (selectedGenre !== null) {
            dispatch(fetchMovieByGenre(selectedGenre));
        }
    }, [selectedGenre, dispatch]);

    return (
        <div className="library-page">
            <h1 className="page-title">Library Page</h1>
            <CategoryOption onClick={(genreId) => setSelectedGenre(genreId)} />
            <MovieScroll header="" movies={moviesByGenre} onClick={(movie)=>navigate(`/movie/${movie.id}`)} postion="Vertical" className="library-override" />
        </div>
    );
};

export default LibararyPage;