import React from 'react'
import { Link } from 'react-router-dom'

function MovieCard({ index, poster_path, id }: any) {
  console.log(index, id, poster_path)
  return (
    <Link to={`/movie/${id}`}>
      <div className="relative overflow-visible my-8 mx-2">
        <img
          src={ `https://image.tmdb.org/t/p/w500${poster_path}`}
          className="object-cover rounded-[16px]"
          alt=""
        />
        <span className="absolute  text-dark-blue movie-order  text-[96px]  -left-2 -translate-y-20 drop-shadow-md movie-order-outline">
          {index}
        </span>
      </div>
    </Link>
  )
}

export default MovieCard
