import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSeriesDetails } from "../../../api/tmbd";

const fetchSeriesDetails = createAsyncThunk(
    "/tv/${id}",
    async (id : number)=>{
        const response = await getSeriesDetails(id)
        return response.data
    },

);

export default fetchSeriesDetails ;