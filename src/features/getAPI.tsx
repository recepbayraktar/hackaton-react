import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios"

export const getAPI = createAsyncThunk(
    "post/getPosts",
    async (args,thunkAPI) => {
        try {
            const response = await axios.get("https://dummyjson.com/posts");
            console.log(response.data, "response")
            return response.data;
        } catch (error: any ) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    });