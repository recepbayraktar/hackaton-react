import React from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks';

import Footer from '../components/Footer'
import { Tab, Tabs } from '../components/Tabs'
import Categories from '../components/Categories'
import { useEffect } from 'react';
import { getPopularMovies } from '../features/Movie/actions/getPopularMovies';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import MovieCardCarousel from '../components/MovieCardCarousel';
import { getNowPlaying } from '../features/Movie/actions/getNowPlaying';
import { getTopRated } from '../features/Movie/actions/getTopRated';
import { getUpcoming } from '../features/Movie/actions/getUpcoming';

function Home() {
    const dispatch = useAppDispatch()
  useEffect(() => {
      dispatch(getPopularMovies())
      dispatch(getNowPlaying())
      dispatch(getTopRated())
      dispatch(getUpcoming())
  }, [])
  return (
    <div className="bg-dark-gray min-h-screen px-4">
      <section className="pt-4">
        <h1 className="section-title text-white">What do you want to watch?</h1>
        <SearchBar />
      </section>

      <MovieCardCarousel />
     

      <Categories />

      <Footer />
    </div>
  )
}

export default Home
