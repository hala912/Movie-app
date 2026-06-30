import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTopRatedMovies } from "../../../api/tmbd";

const fetchTopRatedmovies = createAsyncThunk(
    '/movie/top_rated',
    async()=>{
        const res= await getTopRatedMovies()
        return res.data.results

    }
)

export default fetchTopRatedmovies;