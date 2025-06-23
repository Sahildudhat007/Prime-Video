import React from 'react';

// component import
import Movie_Hero from '../../Components/Movie_Hero/Movie_Hero';
import PopularMovies from "../../Components/PopularMovies/PopularMovies";
import NowPlayingMovies from "../../Components/NowPlayingMovies/NowPlayingMovies";
import UpcomingMovies from "../../Components/UpcomingMovies/UpcomingMovies";
import ToprateMovies from "../../Components/ToprateMovies/ToprateMovies";

function Movies() {
    return (
        <>
            <section className='bg-black container mx-auto pb-8'>
                <Movie_Hero />

                <div>
                    <div className='px-6 md:px-8 lg:px-11'>
                        <h1 className='text-2xl md:text-[28px] lg:text-[40px] font-bold tracking-[.02em] py-3 lg:py-4 text-white'>Movies</h1>
                    </div>
                    <PopularMovies />
                    <NowPlayingMovies />
                    <UpcomingMovies />
                    <ToprateMovies />
                </div>
            </section>
        </>
    )
}

export default Movies