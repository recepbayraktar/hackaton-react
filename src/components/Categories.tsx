import React from 'react'
import { useAppSelector } from '../app/hooks';
import { movieReducer } from '../features/Movie/movieSlice';
import useState from 'react';
import MovieCard from './MovieCard';

function Categories() {
  const categories = useAppSelector((state: any) => {return state.movieReducer.categories})
  console.log(categories, "sas")

  const [selected, setSelected] = React.useState("nowPlaying")

  return (
    <div>
      <div className="scrolling-wrapper">
        <div className="card mx-4 my-4">
          <button onClick={() => {setSelected("nowPlaying")}} className="text-white">Now Playing</button>
        </div>
        <div className="card mx-4 my-4">
          <button onClick={() => {setSelected("upcoming")}} className="text-white">Upcoming</button>
        </div>
        <div className="card mx-4 my-4">
          <button onClick={() => {setSelected("topRated")}} className="text-white">Top Rated</button>
        </div>
        <div className="card mx-4 my-4">
          <button onClick={() => {setSelected("popularMovies")}} className="text-white">Popular</button>
        </div>
        
        
       
      </div>
      <div className="grid grid-cols-3 mt-4 justify-items-center">
        {
          categories[selected].map((movie: any) => {
            return <MovieCard poster_path={movie.poster_path} id={movie.id} />
          })
        }
       
       
      </div>
    </div>
  )
}

export default Categories
