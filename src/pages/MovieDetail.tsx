/* import React from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { movieReducer } from '../features/Movie/movieSlice';
import { useEffect } from 'react'
import { getMovieDetails } from '../features/Movie/actions/getMovieDetails'
import { useParams } from 'react-router-dom'
import MovieHeader from '../components/MovieHeader';


function MovieDetail() {
  const movie = useAppSelector((state: any) => {
    return state.movieReducer.selectedMovie
  })
  const dispatch = useAppDispatch()
  let { id } = useParams()
  console.log(movie, "movie")
  useEffect(() => {
    dispatch(
      getMovieDetails(
        `https://api.themoviedb.org/3/movie/${id}?api_key=466b0e29dbd5c11d6821c50afe76d920`
      )
    )
  }, [])
  return (
    <div>
      <MovieHeader backdrop_path={movie.backdrop_path} />
    </div>
  ) */

  import React, {useEffect, useState} from 'react';
import {Link, useLocation, useParams} from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { getMovieDetails } from '../features/Movie/actions/getMovieDetails';
import { Tabs, Tab } from '../components/Tabs';
import PageTitle from '../components/PageTitle';

function MovieDetail() {
  const movie = useAppSelector((state: any) => {
    return state.movieReducer.selectedMovie
  })
  const dispatch = useAppDispatch()
  let { id } = useParams()
  console.log(movie, "movie")
  useEffect(() => {
    dispatch(
      getMovieDetails(
        `https://api.themoviedb.org/3/movie/${id}?api_key=466b0e29dbd5c11d6821c50afe76d920`
      )
    )
  }, [])

    const location = useLocation()
    console.log(location)

    return (
        <div className='bg-dark-gray min-h-screen'>
            <PageTitle title={movie.title} />
            <img className="w-full " src={ `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt=""/>
            <div className="grid grid-cols-3 px-[24px]">
                <div className="col-span-1 -mt-16">
                    <img src={ `https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="w-full object-contain" alt=""/>
                </div>
                <h2 className="col-span-2 font-poppins text-xl text-white pl-4 py-2">{movie.title}</h2>
            </div>
            <div className="grid-cols-3 px-[24px] flex place-items-center py-5 text-light-gray text-sm">
                <div className="inline-flex space-x-5 gap-x-2 mx-2 place-items-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 2.5H3C2.72386 2.5 2.5 2.72386 2.5 3V13C2.5 13.2761 2.72386 13.5 3 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V3C13.5 2.72386 13.2761 2.5 13 2.5Z" stroke="#92929D" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11 1.5V3.5" stroke="#92929D" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5 1.5V3.5" stroke="#92929D" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2.5 5.5H13.5" stroke="#92929D" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    {movie.release_date}

                </div>
                <div className="inline-flex space-x-5 gap-x-2 mx-2 place-items-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="#92929D" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 4.5V8H11.5" stroke="#92929D" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    148 Minutes

                </div>
                <div className="inline-flex space-x-5 gap-x-2 mx-2 place-items-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 3.5V12.5" stroke="#92929D" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1.5 10.4494C1.49998 10.3342 1.53979 10.2225 1.61268 10.1334C1.68557 10.0442 1.78706 9.98292 1.89995 9.96C2.35166 9.86772 2.75763 9.62224 3.04919 9.26509C3.34075 8.90794 3.5 8.46104 3.5 8C3.5 7.53896 3.34075 7.09206 3.04919 6.73491C2.75763 6.37776 2.35166 6.13228 1.89995 6.04C1.78706 6.01708 1.68557 5.95584 1.61268 5.86664C1.53979 5.77745 1.49998 5.6658 1.5 5.55061V4C1.5 3.86739 1.55268 3.74021 1.64645 3.64645C1.74021 3.55268 1.86739 3.5 2 3.5H14C14.1326 3.5 14.2598 3.55268 14.3536 3.64645C14.4473 3.74021 14.5 3.86739 14.5 4V5.55061C14.5 5.6658 14.4602 5.77745 14.3873 5.86665C14.3144 5.95584 14.2129 6.01708 14.1001 6.04C13.6483 6.13229 13.2424 6.37777 12.9508 6.73492C12.6592 7.09207 12.5 7.53896 12.5 8C12.5 8.46105 12.6592 8.90794 12.9508 9.26509C13.2424 9.62224 13.6483 9.86772 14.1001 9.96001C14.2129 9.98292 14.3144 10.0442 14.3873 10.1334C14.4602 10.2225 14.5 10.3342 14.5 10.4494V12C14.5 12.1326 14.4473 12.2598 14.3536 12.3536C14.2598 12.4473 14.1326 12.5 14 12.5H2C1.86739 12.5 1.74021 12.4473 1.64645 12.3536C1.55268 12.2598 1.5 12.1326 1.5 12V10.4494Z" stroke="#92929D" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    Action

                </div>


            </div>

            <Tabs>
            <Tab component={<div>
              {movie.overview}
            </div>} >About Movie</Tab>
            <Tab component={<div>
              recep
            </div>} >Revievs</Tab>
            <Tab component={<div>
              recep
            </div>}>Cast</Tab>
        </Tabs>
            
        </div>
    );
}

export default MovieDetail;


