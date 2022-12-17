import { createSlice } from "@reduxjs/toolkit"
import { getAPI } from "../getAPI"

const initialState = {
    posts: []
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers:{
       
    },
    extraReducers: function (builder) {
        builder
            .addCase(getAPI.pending, (state, action) => {
         
            })
            .addCase(getAPI.fulfilled, (state, action) => {
                
                state.posts = action.payload
             
            })
            .addCase(getAPI.rejected, (state, action) => {
            
            })
        
    },
    
})
export const {} = postSlice.actions;
export const postsReducer = postSlice.reducer;