import { createSlice } from '@reduxjs/toolkit'
import { getPopularMovies } from './actions/getPopularMovies'
import { getNowPlaying } from './actions/getNowPlaying'
import { getTopRated } from './actions/getTopRated'
import { getUpcoming } from './actions/getUpcoming'
import { getMovieDetails } from './actions/getMovieDetails';
import { getSearchResult } from './actions/getSearchResult';

const initialState: any = {
  categories: {
    popularMovies: [],
    nowPlaying: [],
    topRated: [],
    upcoming: [],
  },
  selectedMovie: {

  },
  searchResults: [],
  status: false,
}

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder

      .addCase(getPopularMovies.pending, (state, action) => {
        state.status = true
      })
      .addCase(getPopularMovies.fulfilled, (state, action) => {
        state.categories.popularMovies = action.payload
        state.status = false
      })
      .addCase(getPopularMovies.rejected, (state, action) => {
        state.status = true
      })
      .addCase(getNowPlaying.pending, (state, action) => {
        state.status = true
      })
      .addCase(getNowPlaying.fulfilled, (state, action) => {
        state.categories.nowPlaying = action.payload
        state.status = false
      })
      .addCase(getNowPlaying.rejected, (state, action) => {
        state.status = true
      })
      .addCase(getTopRated.pending, (state, action) => {
        state.status = true
      })
      .addCase(getTopRated.fulfilled, (state, action) => {
        state.categories.topRated = action.payload
        state.status = false
      })
      .addCase(getTopRated.rejected, (state, action) => {
        state.status = true
      })
      .addCase(getUpcoming.pending, (state, action) => {
        state.status = true
      })
      .addCase(getUpcoming.fulfilled, (state, action) => {
        state.categories.upcoming = action.payload
        state.status = false
      })
      .addCase(getUpcoming.rejected, (state, action) => {
        state.status = true
      })
      .addCase(getMovieDetails.pending, (state, action) => {
        state.status = true
      })
      .addCase(getMovieDetails.fulfilled, (state, action) => {
        state.selectedMovie = action.payload
        state.status = false
      })
      .addCase(getMovieDetails.rejected, (state, action) => {
        state.status = true
      })
      .addCase(getSearchResult.pending, (state, action) => {
        state.status = true
      })
      .addCase(getSearchResult.fulfilled, (state, action) => {
        state.searchResults = action.payload
        state.status = false
      })
      .addCase(getSearchResult.rejected, (state, action) => {
        state.status = true
      })
  },
})

export const {} = movieSlice.actions
export const movieReducer = movieSlice.reducer
