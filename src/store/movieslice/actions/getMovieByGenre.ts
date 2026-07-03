import { createAsyncThunk } from "@reduxjs/toolkit"
import { getMoviesByGenre } from "../../../api/tmbd"

const fetchMovieByGenre = createAsyncThunk(
    '/discover/movie',
    async(genreId: number)=>{
        const res = await getMoviesByGenre(genreId)
        return res.data.results
    }
)


export default fetchMovieByGenre