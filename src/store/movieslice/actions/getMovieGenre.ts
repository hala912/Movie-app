import { createAsyncThunk } from "@reduxjs/toolkit";
import { getGenres } from "../../../api/tmbd";

const fetchMovieGenre = createAsyncThunk(
    '/genre/movie/list',
    async()=>{
        const response = await getGenres();
        return response.data.genres;
    }
)

export default fetchMovieGenre;