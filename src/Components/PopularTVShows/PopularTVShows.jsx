import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// react skeleton
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Mousewheel, Keyboard } from 'swiper/modules';

// the movie DB api key
const API_KEY = "110d18c3a7a47b2f8739f8c719ff1aef";
const TMDB_URL = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`;

function PopularTVShows() {

    const [popularTvShows, setPopularTvShows] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(TMDB_URL)
            .then((res) => res.json())
            .then((data) => {
                setPopularTvShows(data.results || []);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Failed to fetch movies:", error);
                setLoading(false);
            });
    }, []);

    const skeletonCount = 5;

    return (
        <>
            <section className='mb-9'>
                <div className='mx-6 md:mx-8 lg:mx-11 pb-2 lg:pb-3 flex items-center justify-between'>
                    <h2 className='text-[16px] md:text-lg xl:text-xl font-bold text-white'>Popular Tv Show</h2>
                    <Link to="allTvShow">
                        <a href="#" className='text-[16px] md:text-lg xl:text-xl font-bold text-white flex items-center'>
                            <span>See more</span>
                            <svg viewBox="0 0 24 24" height="24" width="24" role="img" aria-hidden="true">
                                <title>Link Arrow</title>
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                    <title>Link Arrow</title>
                                    <path stroke="currentColor" strokeWidth="2" d="M9.5 17.5l5-5-5-5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    </path>
                                </svg>
                            </svg>
                        </a>
                    </Link>
                </div>
                <div>
                    <ul className='pl-6 md:pl-8 lg:pl-11'>
                        <Swiper
                            cssMode={true}
                            mousewheel={true}
                            keyboard={true}
                            modules={[Mousewheel, Keyboard]}
                            breakpoints={{
                                320: { slidesPerView: 1.5, spaceBetween: 12, },
                                375: { slidesPerView: 1.5, spaceBetween: 12, },
                                425: { slidesPerView: 1.5, spaceBetween: 12, },
                                768: { slidesPerView: 3.1, spaceBetween: 16, },
                                1024: { slidesPerView: 4.2, spaceBetween: 24 },
                                1440: { slidesPerView: 5.2, spaceBetween: 24 },
                            }}
                            className="w-full h-full"
                        >
                            {loading ? (
                                Array(skeletonCount).fill(0).map((_, index) => (
                                    <SwiperSlide key={index} className='relative w-[280px]'>
                                        <div className='bg-[#111] rounded-md overflow-hidden'>
                                            <Skeleton
                                                height={158}
                                                width="100%"
                                                baseColor="#333"
                                                highlightColor="#444"
                                            />
                                            <div className='px-3 py-2'>
                                                <Skeleton
                                                    width="80%"
                                                    height={20}
                                                    baseColor="#333"
                                                    highlightColor="#444"
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            ) : (
                                popularTvShows.map((tv) => (
                                    <SwiperSlide key={tv.id} className="group relative text-white w-[280px] cursor-pointer">
                                        <Link to={`/tv/${tv.id}`}>
                                            <div className="bg-[#111] rounded-md overflow-hidden transition-transform duration-300 ease-in-out shadow-lg">
                                                <div className="relative">
                                                    <img
                                                        src={`https://image.tmdb.org/t/p/w500${tv.backdrop_path}`}
                                                        alt={tv ? tv.name : ""}
                                                        className="w-full h-full object-cover rounded-md"
                                                    />
                                                    <img
                                                        src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png"
                                                        alt="Prime"
                                                        className="absolute bottom-2 right-2 w-16"
                                                    />
                                                </div>

                                                <div className="px-3 py-2">
                                                    <h3 className="text-sm font-semibold truncate">{tv ? tv.name : ""}</h3>
                                                </div>

                                                <div className="absolute inset-0 bg-black/75 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-md">
                                                    <div className="text-center mb-2">
                                                        <div className="mb-1 text-3xl font-bold flex justify-center">
                                                            <svg class="fbl-icon _30dE3d _1a_Ljt" viewBox="0 0 24 24" height="24" width="24" role="img" aria-hidden="true">
                                                                <title>Add</title>
                                                                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M11.664 2.063 C 11.436 2.146,11.257 2.297,11.131 2.511 L 11.020 2.700 11.009 6.850 L 10.999 11.000 6.924 11.000 C 2.491 11.000,2.677 10.991,2.374 11.222 C 2.301 11.277,2.192 11.408,2.131 11.511 C 2.036 11.672,2.020 11.744,2.020 12.000 C 2.020 12.256,2.036 12.328,2.131 12.489 C 2.192 12.592,2.301 12.723,2.374 12.778 C 2.677 13.009,2.491 13.000,6.925 13.000 L 11.000 13.000 11.000 17.070 C 11.000 19.750,11.015 21.191,11.042 21.289 C 11.103 21.509,11.315 21.762,11.531 21.874 C 11.932 22.080,12.390 22.012,12.700 21.702 C 13.018 21.385,13.000 21.656,13.000 17.073 L 13.000 13.000 17.073 13.000 C 21.654 13.000,21.385 13.017,21.701 12.701 C 22.092 12.310,22.092 11.690,21.701 11.299 C 21.385 10.983,21.654 11.000,17.073 11.000 L 13.000 11.000 13.000 6.927 C 13.000 2.346,13.017 2.615,12.701 2.299 C 12.429 2.027,12.018 1.933,11.664 2.063 " fill="currentColor" stroke="none" fillRule="evenodd">
                                                                    </path>
                                                                </svg>
                                                            </svg>
                                                        </div>
                                                        <p className="text-sm opacity-90">Watch with a 30 day free Prime trial, auto renews at €4.99/month</p>
                                                    </div>
                                                    <div className="flex gap-2 flex-wrap justify-center items-center text-sm mt-2">
                                                        <span className="bg-white text-black px-2 py-0.5 rounded-full text-xs font-semibold">{tv ? tv.popularity : ""}</span>
                                                        <span className="bg-[#333] px-2 py-0.5 rounded-full">{tv ? tv.first_air_date : ""}</span>
                                                        <span className="bg-yellow-500 text-black text-xs font-semibold rounded-full px-2 py-0.5">{tv ? tv.vote_average : ""}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                ))
                            )}
                        </Swiper>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default PopularTVShows