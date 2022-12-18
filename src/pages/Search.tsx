import React from 'react'
import PageTitle from '../components/PageTitle'
import SearchBar from '../components/SearchBar'
import HorizantalMovieCard from '../components/HorizantalMovieCard'
import NoSearchResult from '../components/NoSearchResult'
import Footer from '../components/Footer'
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { movieReducer } from '../features/Movie/movieSlice'
import { useEffect } from 'react'

function Search() {
  const result = useAppSelector((state: any) => {
    return state.movieReducer.searchResults
  })

  console.log(result)
  
  
  const condition = true
  return (
    <div className="bg-dark-gray min-h-screen ">
      <PageTitle title={"Search"}/>
      <SearchBar />

      <div className="mt-4">
        {condition ? result.map((movie: any) => {
          return <HorizantalMovieCard title={movie.title}  id={movie.id} poster_path={movie.poster_path} release_date={movie.release_date } vote_average={movie.vote_average}/> 
        }) : <NoSearchResult />}
      </div>

      <Footer />
    </div>
  )
}

export default Search
