import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios"

export const getMovieDetails = createAsyncThunk(
    "Movies/getMovieDetails",
    async (url:string,thunkAPI) => {
        try {
           
            const response = await axios.get(url);
        
            return response.data;
        } catch (error: any ) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    });