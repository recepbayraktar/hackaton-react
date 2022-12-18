import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios"

export const getSearchResult = createAsyncThunk(
    "Movies/getSearchResult",
    async (url:string,thunkAPI) => {
        try {
           
            const response = await axios.get(url);
        
            return response.data.results;
        } catch (error: any ) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    });