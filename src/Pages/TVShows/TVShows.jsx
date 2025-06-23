import React from 'react';

// component import
import Tv_Hero from '../../Components/Tv_Hero/Tv_Hero';
import AiringTvShow from '../../Components/AiringTvShow/AiringTvShow';
import OnTvShow from '../../Components/OnTVShow/OnTvShow';
import PopularTVShows from '../../Components/PopularTVShows/PopularTVShows';
import TopRatedTvShows from '../../Components/TopRatedTvShows/TopRatedTvShows';

function TVShows() {
    return (
        <>
            <section className='bg-black container mx-auto pb-8'>
                <Tv_Hero />

                <div>
                    <div className='px-6 md:px-8 lg:px-11'>
                        <h1 className='text-2xl md:text-[28px] lg:text-[40px] font-bold tracking-[.02em] py-3 lg:py-4 text-white'>Top TV</h1>
                    </div>
                    <PopularTVShows />
                    <AiringTvShow />
                    <OnTvShow />
                    <TopRatedTvShows />
                </div>
            </section>
        </>
    )
}

export default TVShows