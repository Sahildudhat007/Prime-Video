import React, { useEffect, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import required modules
import { EffectFade, Navigation, Autoplay } from 'swiper/modules';

// react icons
import { TiStarFullOutline } from "react-icons/ti";

function Tv_Hero() {

    const [popularTv, setPopularTv] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/tv/popular?api_key=110d18c3a7a47b2f8739f8c719ff1aef&language=en-US")
            .then(res => res.json())
            .then(data => setPopularTv(data.results))
            .catch(err => console.error("Failed to fetch popular TV shows:", err));
    }, []);

    return (
        <>
            <section className="w-full h-screen bg-black relative overflow-hidden">
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    navigation={true}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    modules={[EffectFade, Navigation, Autoplay]}
                    className="w-full h-full"
                >
                    {popularTv.map((tv) => (
                        <SwiperSlide key={tv.id} className="relative w-full h-full">
                            {/* Background image with consistent size and gradient overlay */}
                            <div className="relative w-full h-full">
                                <div className="absolute inset-0 w-full h-full">
                                    <img
                                        src={`https://image.tmdb.org/t/p/original${tv.backdrop_path}`}
                                        alt=""
                                        className="w-full h-screen max-w-full object-cover bg-center"
                                    />
                                    {/* Gradient overlay at bottom for all images */}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"
                                        style={{
                                            background:
                                                'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0) 100%)',
                                        }}
                                    ></div>
                                </div>
                            </div>

                            {/* Content container */}
                            <div className="absolute bottom-9 left-4 w-full px-4 sm:px-6 lg:px-8">
                                <div className="max-w-lg pb-3 lg:pb-3.4 relative z-10">
                                    <div className='mb-3 xl:mb-3.5'>
                                        <h1 className='text-white text-3xl font-bold'>{tv ? tv.original_name : ""}</h1>
                                    </div>
                                    <div>
                                        <div className="mb-3 xl:mb-3.5">
                                            <p className="text-white text-sm xl:text-[16px] font-bold hidden lg:flex items-center space-x-3">
                                                <span>
                                                    {tv.first_air_date}
                                                </span>
                                                <span>
                                                    {tv.vote_average}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mb-3 xl:mb-3.5 text-lg xl:text-xl text-white font-medium leading-[25px] xl:leading-7 hidden lg:block" style={{display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: "2", overflow: "hidden"}}>{tv ? tv.overview : ""}</div>
                                    <div className="flex items-center mb-3 xl:mb-3.5">
                                        <button
                                            className="bg-[#fff3] w-12 h-12 sm:w-14 sm:h-14 rounded-full hover:text-black hover:bg-white group cursor-pointer mr-2 hidden lg:block"
                                        >
                                            <div className="flex justify-center items-center text-white group-hover:text-black">
                                                <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" height="24" width="24" role="img" aria-hidden="true">
                                                    <title>Trailer</title>
                                                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4.503 3.042 C 3.487 3.214,2.556 3.976,2.202 4.925 C 1.994 5.481,2.001 5.233,2.001 11.992 C 2.000 18.878,1.989 18.550,2.234 19.151 C 2.521 19.857,3.143 20.479,3.849 20.766 C 4.453 21.012,4.024 21.000,12.000 21.000 C 19.974 21.000,19.547 21.012,20.150 20.767 C 20.850 20.482,21.482 19.850,21.767 19.150 C 22.011 18.551,22.000 18.876,22.000 12.000 C 22.000 5.123,22.011 5.449,21.766 4.849 C 21.499 4.193,20.964 3.633,20.296 3.312 C 19.636 2.994,20.412 3.023,12.120 3.015 C 8.039 3.012,4.611 3.024,4.503 3.042 M19.340 5.066 C 19.455 5.105,19.603 5.201,19.701 5.299 C 20.023 5.621,20.000 5.097,20.000 12.000 C 20.000 18.903,20.023 18.379,19.701 18.701 C 19.377 19.025,20.023 19.000,12.000 19.000 C 3.977 19.000,4.623 19.025,4.299 18.701 C 3.977 18.379,4.000 18.903,4.000 12.000 C 4.000 5.096,3.976 5.621,4.300 5.298 C 4.616 4.982,3.975 5.007,11.983 5.003 C 18.550 5.000,19.162 5.006,19.340 5.066 M5.660 6.652 C 5.495 6.817,5.467 6.980,5.486 7.649 C 5.501 8.185,5.537 8.291,5.749 8.429 C 5.840 8.489,5.953 8.500,6.500 8.500 C 7.047 8.500,7.160 8.489,7.251 8.429 C 7.463 8.291,7.499 8.185,7.514 7.649 C 7.533 6.980,7.505 6.817,7.340 6.652 L 7.208 6.520 6.500 6.520 L 5.792 6.520 5.660 6.652 M16.660 6.652 C 16.495 6.817,16.467 6.980,16.486 7.649 C 16.501 8.185,16.537 8.291,16.749 8.429 C 16.840 8.489,16.953 8.500,17.500 8.500 C 18.047 8.500,18.160 8.489,18.251 8.429 C 18.463 8.291,18.499 8.185,18.514 7.649 C 18.533 6.980,18.505 6.817,18.340 6.652 L 18.208 6.520 17.500 6.520 L 16.792 6.520 16.660 6.652 M10.208 9.081 C 9.955 9.235,9.960 9.175,9.960 12.000 C 9.960 14.825,9.955 14.763,10.208 14.921 C 10.473 15.088,10.486 15.081,12.720 13.687 C 14.134 12.806,14.808 12.363,14.870 12.276 C 14.974 12.128,14.986 11.927,14.901 11.761 C 14.856 11.675,14.332 11.328,12.831 10.389 C 11.725 9.698,10.762 9.103,10.692 9.066 C 10.522 8.978,10.369 8.983,10.208 9.081 M5.768 11.067 C 5.534 11.182,5.500 11.301,5.500 12.000 C 5.500 12.952,5.548 13.000,6.500 13.000 C 7.452 13.000,7.500 12.952,7.500 12.000 C 7.500 11.047,7.452 10.999,6.494 11.001 C 6.028 11.002,5.872 11.016,5.768 11.067 M16.768 11.067 C 16.534 11.182,16.500 11.301,16.500 12.000 C 16.500 12.952,16.548 13.000,17.500 13.000 C 18.452 13.000,18.500 12.952,18.500 12.000 C 18.500 11.047,18.452 10.999,17.494 11.001 C 17.028 11.002,16.872 11.016,16.768 11.067 M5.660 15.652 C 5.495 15.817,5.467 15.980,5.486 16.649 C 5.501 17.185,5.537 17.291,5.749 17.429 C 5.840 17.489,5.953 17.500,6.500 17.500 C 7.047 17.500,7.160 17.489,7.251 17.429 C 7.463 17.291,7.499 17.185,7.514 16.649 C 7.533 15.980,7.505 15.817,7.340 15.652 L 7.208 15.520 6.500 15.520 L 5.792 15.520 5.660 15.652 M16.660 15.652 C 16.495 15.817,16.467 15.980,16.486 16.649 C 16.501 17.185,16.537 17.291,16.749 17.429 C 16.840 17.489,16.953 17.500,17.500 17.500 C 18.047 17.500,18.160 17.489,18.251 17.429 C 18.463 17.291,18.499 17.185,18.514 16.649 C 18.533 15.980,18.505 15.817,18.340 15.652 L 18.208 15.520 17.500 15.520 L 16.792 15.520 16.660 15.652 " fill="currentColor" stroke="none" fillRule="evenodd">
                                                        </path>
                                                    </svg>
                                                </svg>
                                            </div>
                                        </button>
                                        <button
                                            className="bg-[#fff3] w-12 h-12 sm:w-14 sm:h-14 rounded-full hover:text-black hover:bg-white group cursor-pointer mr-2 hidden lg:block"
                                        >
                                            <div className="flex justify-center items-center text-white group-hover:text-black">
                                                <svg
                                                    className="w-6 h-6 sm:w-8 sm:h-8"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <title>Add</title>
                                                    <path
                                                        d="M11.664 2.063 C 11.436 2.146,11.257 2.297,11.131 2.511 L 11.020 2.700,11.009 6.850 L 10.999 11.000,6.924 11.000 C 2.491 11.000,2.677 10.991,2.374 11.222 C 2.301 11.277,2.192 11.408,2.131 11.511 C 2.036 11.672,2.020 11.744,2.020 12.000 C 2.020 12.256,2.036 12.328,2.131 12.489 C 2.192 12.592,2.301 12.723,2.374 12.778 C 2.677 13.009,2.491 13.000,6.925 13.000 L 11.000 13.000,11.000 17.070 C 11.000 19.750,11.015 21.191,11.042 21.289 C 11.103 21.509,11.315 21.762,11.531 21.874 C 11.932 22.080,12.390 22.012,12.700 21.702 C 13.018 21.385,13.000 21.656,13.000 17.073 L 13.000 13.000,17.073 13.000 C 21.654 13.000,21.385 13.017,21.701 12.701 C 22.092 12.310,22.092 11.690,21.701 11.299 C 21.385 10.983,21.654 11.000,17.073 11.000 L 13.000 11.000,13.000 6.927 C 13.000 2.346,13.017 2.615,12.701 2.299 C 12.429 2.027,12.018 1.933,11.664 2.063 "
                                                        fill="currentColor"
                                                        stroke="none"
                                                        fillRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        </button>
                                        <button
                                            className="bg-[#fff3] w-12 h-12 sm:w-14 sm:h-14 rounded-full hover:text-black hover:bg-white group cursor-pointer hidden xl:block"
                                        >
                                            <div className="flex justify-center items-center text-white group-hover:text-black">
                                                <svg
                                                    className="w-6 h-6 sm:w-8 sm:h-8"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <title>Info</title>
                                                    <path
                                                        d="M11.120 2.039 C 8.641 2.287,6.414 3.362,4.761 5.107 C 1.806 8.228,1.158 12.819,3.137 16.623 C 3.620 17.552,4.164 18.288,4.938 19.061 C 5.930 20.051,7.038 20.789,8.272 21.278 C 11.634 22.610,15.313 22.080,18.200 19.845 C 18.637 19.507,19.507 18.637,19.845 18.200 C 21.256 16.378,22.000 14.236,22.000 12.000 C 22.000 7.432,18.842 3.387,14.430 2.303 C 13.446 2.062,12.028 1.948,11.120 2.039 M12.740 4.041 C 15.525 4.302,17.953 5.983,19.182 8.500 C 20.655 11.514,20.091 15.104,17.765 17.530 C 16.248 19.111,14.175 19.999,12.000 19.999 C 8.235 19.999,4.948 17.331,4.177 13.648 C 3.426 10.057,5.201 6.431,8.501 4.817 C 9.822 4.170,11.277 3.904,12.740 4.041 M11.000 8.000 L 11.000 9.000,12.000 9.000 L 13.000 9.000,13.000 8.000 L 13.000 7.000,12.000 7.000 L 11.000 7.000,11.000 8.000 M11.000 13.570 C 11.000 15.217,11.015 16.194,11.042 16.289 C 11.103 16.509,11.315 16.762,11.531 16.874 C 11.932 17.080,12.390 17.012,12.700 16.702 C 13.008 16.394,13.000 16.478,13.000 13.573 L 13.000 11.000,12.000 11.000 L 11.000 11.000,11.000 13.570 "
                                                        fill="currentColor"
                                                        stroke="none"
                                                        fillRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    )
}

export default Tv_Hero