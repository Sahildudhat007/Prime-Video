import React from 'react';

// image import
import logo_min_remaster from "../../assets/svg_png/logo_min_remaster.png";
import user from "../../assets/svg_png/user.svg";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <section className='w-full'>
                <header className='text-white sticky top-0'>
                    <nav className='px-2 md:px-3 lg:px-[26px] xl:px-[23px] bg-[#00050d] h-12 lg:h-[60px]'>
                        <div className='lg:px-[18px] xl:px-[21px] flex items-center justify-between h-full '>
                            <div className='flex items-center'>
                                <Link to="/" className='mr-9 lg:mr-[42px] hidden lg:block'>
                                    <img src={logo_min_remaster} alt="" className='w-20 xl:w-24' />
                                </Link>
                                <div className='block xl:hidden'>
                                    <div className='lg:px-3 w-full'>
                                        <button className='px md:px-5 lg:px-3 rounded-lg hover:text-[#00050d] hover:bg-white/90 h-[42px] flex items-center justify-center md:text-[18px] lg:text-sm font-medium'>
                                            <span className='flex items-center gap-1'>
                                                Menu
                                                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" height="24" width="24" role="img" aria-hidden="true">
                                                    <title>Caret Down</title>
                                                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.643 9.069 C 6.113 9.256,5.857 9.918,6.113 10.444 C 6.174 10.570,6.942 11.363,8.829 13.245 C 11.219 15.629,11.478 15.876,11.657 15.935 C 11.906 16.017,12.094 16.017,12.343 15.935 C 12.522 15.876,12.781 15.629,15.171 13.245 C 18.046 10.377,18.001 10.429,17.999 9.982 C 17.998 9.669,17.903 9.462,17.661 9.249 C 17.449 9.062,17.278 9.000,16.980 9.001 C 16.582 9.002,16.576 9.008,14.210 11.371 L 12.000 13.579 9.770 11.354 C 7.753 9.343,7.521 9.124,7.343 9.065 C 7.101 8.985,6.876 8.986,6.643 9.069 " fill="currentColor" stroke="none" fillRule="evenodd">
                                                        </path>
                                                    </svg>
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className='hidden xl:block'>
                                    <div className='flex items-center h-6'>
                                        <ul className='text-white flex items-center flex-nowrap gap-[5px]'>
                                            <Link to="/">
                                                <li className='mr-[5px] rounded-lg hover:text-[#00050d] hover:bg-white/90  h-[42px] flex items-center justify-center'>
                                                    <span className='text-sm font-medium px-3.5 '>Home</span>
                                                </li>
                                            </Link>
                                            <Link to="movies">
                                                <li className='mx-[5px] rounded-lg hover:text-[#00050d] hover:bg-white/90  h-[42px] flex items-center justify-center'>
                                                    <span className='text-sm font-medium px-3.5'>Movies</span>
                                                </li>
                                            </Link>
                                            <Link to="tvShows">
                                                <li className='mx-[5px] rounded-lg hover:text-[#00050d] hover:bg-white/90  h-[42px] flex items-center justify-center'>
                                                    <span className='text-sm font-medium px-3.5'>TV shows</span>
                                                </li>
                                            </Link>
                                        </ul>
                                        <div className='mx-3.5 bg-[#fff6] w-0.5 h-full'></div>
                                        <div className='ml-[5px] px-3.5'>
                                            <a href="#" className='text-sm font-medium tracking-[0.49px] flex items-center gap-[5px] px-3.5 h-[42px] rounded-lg justify-center hover:text-[#00050d] hover:bg-white/90'>
                                                <svg className="w-[19px] h-[19px]" viewBox="0 0 24 24" height="24" width="24" role="img" aria-hidden="true">
                                                    <title>Channels</title>
                                                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.664 2.063 C 2.436 2.146,2.257 2.297,2.131 2.511 L 2.020 2.700 2.020 6.500 L 2.020 10.300 2.131 10.489 C 2.192 10.592,2.301 10.723,2.374 10.778 C 2.675 11.008,2.531 11.000,6.498 11.000 C 10.604 11.000,10.387 11.015,10.701 10.701 C 11.015 10.387,11.000 10.604,11.000 6.500 C 11.000 2.396,11.015 2.613,10.701 2.299 C 10.386 1.984,10.606 2.000,6.483 2.003 C 3.408 2.005,2.795 2.015,2.664 2.063 M13.664 2.063 C 13.436 2.146,13.257 2.297,13.131 2.511 L 13.020 2.700 13.020 6.500 L 13.020 10.300 13.131 10.489 C 13.192 10.592,13.301 10.723,13.374 10.778 C 13.675 11.008,13.531 11.000,17.498 11.000 C 21.604 11.000,21.387 11.015,21.701 10.701 C 22.015 10.387,22.000 10.604,22.000 6.500 C 22.000 2.396,22.015 2.613,21.701 2.299 C 21.386 1.984,21.606 2.000,17.483 2.003 C 14.408 2.005,13.795 2.015,13.664 2.063 M9.000 6.500 L 9.000 9.000 6.500 9.000 L 4.000 9.000 4.000 6.500 L 4.000 4.000 6.500 4.000 L 9.000 4.000 9.000 6.500 M20.000 6.500 L 20.000 9.000 17.500 9.000 L 15.000 9.000 15.000 6.500 L 15.000 4.000 17.500 4.000 L 20.000 4.000 20.000 6.500 M2.664 13.063 C 2.436 13.146,2.257 13.297,2.131 13.511 L 2.020 13.700 2.020 17.500 L 2.020 21.300 2.131 21.489 C 2.192 21.592,2.301 21.723,2.374 21.778 C 2.675 22.008,2.531 22.000,6.498 22.000 C 10.604 22.000,10.387 22.015,10.701 21.701 C 11.015 21.387,11.000 21.604,11.000 17.500 C 11.000 13.396,11.015 13.613,10.701 13.299 C 10.386 12.984,10.606 13.000,6.483 13.003 C 3.408 13.005,2.795 13.015,2.664 13.063 M17.240 13.035 C 16.941 13.133,16.694 13.350,16.572 13.620 C 16.508 13.762,16.499 13.933,16.488 15.150 L 16.475 16.520 15.116 16.520 C 13.625 16.520,13.618 16.521,13.341 16.765 C 12.904 17.148,12.897 17.822,13.325 18.228 C 13.605 18.494,13.637 18.499,15.128 18.512 L 16.475 18.525 16.488 19.872 C 16.499 21.067,16.508 21.238,16.572 21.380 C 16.732 21.736,17.127 21.999,17.500 21.999 C 17.873 21.999,18.268 21.736,18.428 21.380 C 18.492 21.238,18.501 21.067,18.512 19.872 L 18.525 18.525 19.872 18.512 C 21.363 18.499,21.395 18.494,21.675 18.228 C 22.103 17.822,22.096 17.148,21.659 16.765 C 21.382 16.521,21.375 16.520,19.884 16.520 L 18.525 16.520 18.512 15.150 C 18.501 13.933,18.492 13.762,18.428 13.620 C 18.337 13.417,18.145 13.216,17.943 13.112 C 17.771 13.024,17.399 12.983,17.240 13.035 M9.000 17.500 L 9.000 20.000 6.500 20.000 L 4.000 20.000 4.000 17.500 L 4.000 15.000 6.500 15.000 L 9.000 15.000 9.000 17.500 " fill="currentColor" stroke="none" fillRule="evenodd">
                                                        </path>
                                                    </svg>
                                                </svg>
                                                <span>Subscriptions</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className='block lg:hidden'>
                                <img src={logo_min_remaster} alt="" className='w-20' />
                            </a>
                            <div className='ml-[27px]'>
                                <ul className='flex items-center'>
                                    <li className='hover:bg-white/90 hover:text-[#00050d] rounded-full h-[42px] flex items-center justify-center'>
                                        <Link to="/searchbar">
                                            <button className='flex items-center justify-center rounded-full h-[calc(var(--fable-size-200)-2px)] max-h-[calc(var(--fable-size-200)-2px)] w-11 max-w-11 min-w-11 cursor-pointer'>
                                                <svg className="w-[18px] md:w-5 lg:w-[18px] xl:w-[19px] h-[18px] md:h-5 lg:h-[18px] xl:h-[19px]" viewBox="0 0 24 24" height="24" width="24" role="img" aria-hidden="true">
                                                    <title>Search</title>
                                                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.360 2.025 C 7.466 2.198,5.790 2.960,4.446 4.259 C 3.730 4.951,3.257 5.602,2.817 6.500 C 1.479 9.228,1.809 12.458,3.674 14.900 C 3.949 15.260,4.616 15.933,5.000 16.239 C 6.430 17.378,8.196 17.999,10.000 17.999 C 11.567 17.999,13.170 17.508,14.465 16.632 L 14.911 16.331 17.645 19.066 C 19.449 20.870,20.434 21.828,20.540 21.879 C 20.942 22.074,21.370 22.002,21.686 21.686 C 22.002 21.370,22.074 20.942,21.879 20.540 C 21.828 20.434,20.870 19.449,19.066 17.645 L 16.331 14.911 16.632 14.465 C 18.219 12.120,18.436 9.087,17.200 6.529 C 16.809 5.718,16.392 5.120,15.761 4.464 C 14.541 3.195,12.996 2.388,11.240 2.100 C 10.865 2.039,9.711 1.992,9.360 2.025 M11.041 4.097 C 12.371 4.333,13.638 5.046,14.506 6.045 C 15.229 6.879,15.707 7.879,15.909 8.980 C 15.999 9.468,15.999 10.532,15.909 11.020 C 15.805 11.587,15.653 12.064,15.423 12.545 C 14.584 14.296,13.102 15.462,11.174 15.887 C 10.603 16.013,9.397 16.013,8.826 15.887 C 6.341 15.339,4.548 13.496,4.090 11.020 C 4.000 10.531,4.000 9.469,4.090 8.980 C 4.394 7.335,5.309 5.928,6.660 5.025 C 7.725 4.313,8.873 3.981,10.140 4.019 C 10.448 4.029,10.853 4.063,11.041 4.097 " fill="currentColor" stroke="none" fillRule="evenodd">
                                                        </path>
                                                    </svg>
                                                </svg>
                                            </button>
                                        </Link>
                                    </li>
                                    <li className='hover:bg-white/90 hover:text-[#00050d] rounded-lg h-[42px] flex items-center justify-center'>
                                        <button className='px-3 xl:px-3.5 flex items-center justify-center gap-[5px] cursor-pointer'>
                                            <span className='flex items-center gap-1 xl:gap-[5px] md:text-[18px] lg:text-sm font-medium tracking-[0.49px]'>
                                                EN
                                                <svg className="w-[18px] md:w-5 lg:w-[22px] xl:w-6 h-[18px] md:h-5 lg:h-[22px] xl:h-6" viewBox="0 0 24 24" height="24" width="24" role="img" aria-hidden="true">
                                                    <title>Caret Down</title>
                                                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.643 9.069 C 6.113 9.256,5.857 9.918,6.113 10.444 C 6.174 10.570,6.942 11.363,8.829 13.245 C 11.219 15.629,11.478 15.876,11.657 15.935 C 11.906 16.017,12.094 16.017,12.343 15.935 C 12.522 15.876,12.781 15.629,15.171 13.245 C 18.046 10.377,18.001 10.429,17.999 9.982 C 17.998 9.669,17.903 9.462,17.661 9.249 C 17.449 9.062,17.278 9.000,16.980 9.001 C 16.582 9.002,16.576 9.008,14.210 11.371 L 12.000 13.579 9.770 11.354 C 7.753 9.343,7.521 9.124,7.343 9.065 C 7.101 8.985,6.876 8.986,6.643 9.069 " fill="currentColor" stroke="none" fillRule="evenodd">
                                                        </path>
                                                    </svg>
                                                </svg>
                                            </span>
                                        </button>
                                    </li>
                                    <li className='hidden lg:flex hover:bg-white/90 hover:text-[#00050d] rounded-full h-[42px]  items-center justify-center'>
                                        <a href="#" className='px-3 xl:px-3.5 flex items-center justify-center gap-[5px] rounded-full h-[calc(var(--fable-size-200)-2px)] max-h-[calc(var(--fable-size-200)-2px)] w-11 max-w-11 min-w-11'>
                                            <svg className="w-[18px] lg:w-[19px] h-[18px] lg:h-[19px]" viewBox="0 0 24 24" height="24" width="24" role="img" aria-hidden="true">
                                                <title>Categories Remaster</title>
                                                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.580 3.047 C 3.859 3.185,3.199 3.848,3.044 4.592 C 2.905 5.257,3.105 5.912,3.596 6.404 C 4.393 7.200,5.607 7.200,6.404 6.404 C 7.200 5.607,7.200 4.393,6.404 3.596 C 5.913 3.106,5.277 2.914,4.580 3.047 M11.580 3.047 C 10.859 3.185,10.199 3.848,10.044 4.592 C 9.789 5.816,10.751 7.000,12.000 7.000 C 13.080 7.000,14.000 6.080,14.000 5.000 C 14.000 4.477,13.790 3.983,13.404 3.596 C 12.913 3.106,12.277 2.914,11.580 3.047 M18.580 3.047 C 17.859 3.185,17.199 3.848,17.044 4.592 C 16.789 5.816,17.751 7.000,19.000 7.000 C 19.920 7.000,20.768 6.310,20.956 5.408 C 21.095 4.743,20.895 4.088,20.404 3.596 C 19.913 3.106,19.277 2.914,18.580 3.047 M4.580 10.047 C 4.236 10.113,3.883 10.310,3.596 10.596 C 2.800 11.393,2.800 12.607,3.596 13.404 C 4.393 14.200,5.607 14.200,6.404 13.404 C 7.200 12.607,7.200 11.393,6.404 10.596 C 5.913 10.106,5.277 9.914,4.580 10.047 M11.580 10.047 C 10.707 10.214,10.000 11.087,10.000 12.000 C 10.000 12.920,10.690 13.768,11.592 13.956 C 12.816 14.211,14.000 13.249,14.000 12.000 C 14.000 11.477,13.790 10.983,13.404 10.596 C 12.913 10.106,12.277 9.914,11.580 10.047 M18.580 10.047 C 17.707 10.214,17.000 11.087,17.000 12.000 C 17.000 12.920,17.690 13.768,18.592 13.956 C 19.816 14.211,21.000 13.249,21.000 12.000 C 21.000 11.477,20.790 10.983,20.404 10.596 C 19.913 10.106,19.277 9.914,18.580 10.047 M4.580 17.047 C 3.859 17.185,3.199 17.848,3.044 18.592 C 2.789 19.816,3.751 21.000,5.000 21.000 C 5.920 21.000,6.768 20.310,6.956 19.408 C 7.095 18.743,6.895 18.088,6.404 17.596 C 5.913 17.106,5.277 16.914,4.580 17.047 M11.580 17.047 C 10.859 17.185,10.199 17.848,10.044 18.592 C 9.789 19.816,10.751 21.000,12.000 21.000 C 13.080 21.000,14.000 20.080,14.000 19.000 C 14.000 18.477,13.790 17.983,13.404 17.596 C 12.913 17.106,12.277 16.914,11.580 17.047 M18.580 17.047 C 17.859 17.185,17.199 17.848,17.044 18.592 C 16.789 19.816,17.751 21.000,19.000 21.000 C 20.080 21.000,21.000 20.080,21.000 19.000 C 21.000 18.477,20.790 17.983,20.404 17.596 C 19.913 17.106,19.277 16.914,18.580 17.047 " fill="currentColor" stroke="none" fillRule="evenodd">
                                                    </path>
                                                </svg>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className='hover:bg-white/90 rounded-full h-[42px] flex items-center justify-center'>
                                        <button className='flex items-center justify-center gap-[5px] rounded-full h-[calc(var(--fable-size-200)-2px)] max-h-[calc(var(--fable-size-200)-2px)] w-11 max-w-11 min-w-11 cursor-pointer'>
                                            <img src={user} alt="" className='w-8 md:w-9 lg:w-[30px] xl:w-[33px] h-8 md:h-9 lg:h-[30px] xl:h-[33px]' />
                                        </button>
                                    </li>
                                    <li className='hidden lg:flex rounded-lg h-[38px] xl:h-[42px] items-center justify-center ml-3 xl:ml-3.5 px-3 xl:px-3.5 bg-[rgb(26,152,255)] text-white text-sm font-medium text-nowrap'>
                                        <a href="#" className=''>Join Prime</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </section>
        </>
    )
}

export default Header