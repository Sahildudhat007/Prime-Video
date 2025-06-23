import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// the movie DB api key
const API_KEY = "110d18c3a7a47b2f8739f8c719ff1aef";
const TMDB_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

function AllMovies() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(TMDB_URL)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results || []);
            })
            .catch((error) => {
                console.error("Failed to fetch movies:", error);
            });
    }, []);

    return (
        <>
            <section className='pb-9 bg-black container mx-auto'>
                <div className='px-6 md:px-8 lg:px-11 pb-9 flex justify-between items-center'>
                    <div>
                        <h2 className='text-white py-4 text-[40px] font-bold'>All Movies</h2>
                    </div>
                    <div>
                        <button className='text-xl text-white font-medium px-[21px] py-2 bg-[#33373d] rounded-lg flex items-center cursor-pointer hover:bg-white hover:text-black min-h-[60px]'>
                            Content Type
                            <span className='ml-5'>
                                <svg className="" viewBox="0 0 15 10" height="10" width="15" role="img" aria-hidden="true">
                                    <title>Expander Down</title>
                                    <svg width="15" height="10" xmlns="http://www.w3.org/2000/svg">
                                        <title>Expander Down</title>
                                        <path stroke="currentColor" strokeWidth="2" d="M2 2l5.5 6L13 2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        </path>
                                    </svg>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6 mx-11'>
                    {movies.map((movie) => (
                        <Link to={`/movie/${movie.id}`} key={movie.id}>
                            <div className='rounded-lg bg-[#33373d] relative group overflow-hidden hover:scale-105 transition-transform duration-300'>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className='w-full h-full object-cover' />

                                <div className="absolute inset-0 bg-black/75 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-md">
                                    <div className="mb-2 text-center">
                                        <div className="mb-1 text-3xl font-bold flex justify-center">
                                            <svg className="text-white" viewBox="0 0 24 24" height="24" width="24" role="img" aria-hidden="true">
                                                <title>Add</title>
                                                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.664 2.063 C 11.436 2.146,11.257 2.297,11.131 2.511 L 11.020 2.700 11.009 6.850 L 10.999 11.000 6.924 11.000 C 2.491 11.000,2.677 10.991,2.374 11.222 C 2.301 11.277,2.192 11.408,2.131 11.511 C 2.036 11.672,2.020 11.744,2.020 12.000 C 2.020 12.256,2.036 12.328,2.131 12.489 C 2.192 12.592,2.301 12.723,2.374 12.778 C 2.677 13.009,2.491 13.000,6.925 13.000 L 11.000 13.000 11.000 17.070 C 11.000 19.750,11.015 21.191,11.042 21.289 C 11.103 21.509,11.315 21.762,11.531 21.874 C 11.932 22.080,12.390 22.012,12.700 21.702 C 13.018 21.385,13.000 21.656,13.000 17.073 L 13.000 13.000 17.073 13.000 C 21.654 13.000,21.385 13.017,21.701 12.701 C 22.092 12.310,22.092 11.690,21.701 11.299 C 21.385 10.983,21.654 11.000,17.073 11.000 L 13.000 11.000 13.000 6.927 C 13.000 2.346,13.017 2.615,12.701 2.299 C 12.429 2.027,12.018 1.933,11.664 2.063 " fill="currentColor" stroke="none" fillRule="evenodd">
                                                    </path>
                                                </svg>
                                            </svg>
                                        </div>
                                        <p className="text-sm opacity-90 text-white">Watch with a 30 day free Prime trial, auto renews at €4.99/month</p>
                                    </div>
                                    <div className="flex gap-2 flex-wrap justify-center items-center text-sm mt-2">
                                        <span className="bg-white text-black px-2 py-0.5 rounded-full text-xs font-semibold">{movie ? movie.popularity : ""}</span>
                                        <span className="bg-[#333] text-white px-2 py-0.5 rounded-full">{movie ? movie.release_date : ""}</span>
                                        <span className="bg-yellow-500 text-black text-xs font-semibold rounded-full px-2 py-0.5">{movie ? movie.vote_average : ""}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}

                </div>
            </section>
        </>
    )
}

export default AllMovies