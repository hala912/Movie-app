import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTrendingMovies } from "../../../api/tmbd";

const fetchTrendingWeek = createAsyncThunk(
    '/trending/movie/week',
    async()=>{
        const res = await getTrendingMovies()
        return res.data.results
    }

)


export default fetchTrendingWeek;