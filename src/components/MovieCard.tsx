import React from 'react'
import { Link } from 'react-router-dom'

function MovieCard({  poster_path, id }: any) {
  console.log( id, poster_path)
  return (
    <Link to={`/movie/${id}`}>
      <img
            className="rounded-[16px] w-[100px] h-[145px] mt-3"
            src={ `https://image.tmdb.org/t/p/w500${poster_path}`}
            alt=""
          />
    </Link>
  )
}

export default MovieCard
