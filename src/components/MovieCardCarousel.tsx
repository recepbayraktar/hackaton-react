import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";
import CarouselItem from './CarouselItem';
import { useAppSelector } from '../app/hooks';
import { movieReducer } from '../features/Movie/movieSlice';



function CarouselItemCarousel() {

    const movieList = useAppSelector((state: any) => { return state.movieReducer.categories.popularMovies})
    
    return (
        <>
            <Swiper
                slidesPerView={2.1}
                centeredSlides={true}
                spaceBetween={5}
                grabCursor={true}
                initialSlide={0}
                slidesPerGroup={1}
                slidesOffsetBefore={-90}

                modules={[Pagination]}
                className="mySwiper"
            >

                {movieList.map((movie: any, index: number) => {
                    return <SwiperSlide><CarouselItem index={index} id={movie.id} poster_path={movie.poster_path}/></SwiperSlide>
                })}
                
                

            </Swiper>
        </>
    );
}

export default CarouselItemCarousel;