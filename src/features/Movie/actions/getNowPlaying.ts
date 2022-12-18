import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios"

export const getNowPlaying = createAsyncThunk(
    "Movies/getNowPlaying",
    async (args,thunkAPI) => {
        try {
           
            const response = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=466b0e29dbd5c11d6821c50afe76d920");
  
            return response.data.results;
        } catch (error: any ) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    });