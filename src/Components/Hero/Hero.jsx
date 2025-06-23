import React from 'react';

// image import
import hero_img_1 from "../../assets/images/hero_img_1.jpg";
import mob_hero_1 from "../../assets/images/mob_hero_1.jpg";
import hero_img_2 from "../../assets/images/hero_img_2.jpg";
import mob_hero_2 from "../../assets/images/mob_hero_2.jpg";
import appletv from "../../assets/images/appletv.jpeg";
import crunchyroll from "../../assets/images/crunchyroll.jpeg";
import lgp from "../../assets/images/lgp.jpeg";
import discovery from "../../assets/images/discovery.jpeg";
import anime from "../../assets/images/anime.jpeg";
import manoramamax from "../../assets/images/manoramamax.jpeg";
import chaupal from "../../assets/images/chaupal.jpeg";
import bbc from "../../assets/images/bbc.jpeg";
import fancode from "../../assets/images/fancode.jpeg";

function Hero() {
    return (
        <>
            <section className='w-full h-screen relative hidden md:block'
                style={{
                    backgroundImage: `linear-gradient(to right, black 50%, transparent 58%), url(${hero_img_1})`,
                    backgroundPosition: 'right top',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}>
                <div className='p-6 md:p-8 lg:p-11 xl:p-[72px] absolute top-0'>
                    <div className='max-w-[342px] lg:max-w-[456px] xl:max-w-[546px]'>
                        <div className='mb-[30px] lg:mb-9 xl:mb-[42px]'>
                            <h1 className='text-[32px] lg:text-4xl xl:text-[50px] text-white leading-9 lg:leading-10 xl:leading-14 font-bold'>Welcome to Prime Video</h1>
                        </div>
                        <div className='mb-[30px] md:mb-9 xl:mb-[42px]'>
                            <p className='text-[18px] xl:text-xl text-white leading-[25px] xl:leading-7 font-medium'>Join Prime to watch the latest movies, TV shows and award-winning Amazon Originals</p>
                        </div>
                        <div className='mb-[30px] md:mb-9 xl:mb-[42px]'>
                            <a href="#" className='bg-white px-[15px] lg:px-[21px] py-[5px] lg:py-2 min-h-14 lg:min-h-[60px] xl:min-h-[62px] rounded-lg inline-flex items-center text-xl font-medium'>Sign in to join Prime</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* mobile */}
            <section className='w-full h-screen relative block md:hidden'
                style={{
                    backgroundImage: `linear-gradient(to top, black 50%, transparent 78%), url(${mob_hero_1})`,
                    backgroundPosition: '',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                }}>
                <div className='p-6 absolute bottom-0'>
                    <div className=''>
                        <div className='mb-6'>
                            <h1 className='text-[28px] text-white leading-9 lg:leading-10 xl:leading-14 font-bold'>Welcome to Prime Video</h1>
                        </div>
                        <div className='mb-6'>
                            <p className='text-[16px] text-white leading-[25px] xl:leading-7 font-medium'>Join Prime to watch the latest movies, TV shows and award-winning Amazon Originals</p>
                        </div>
                        <div className='mb-6'>
                            <a href="#" className='bg-white w-full min-h-12 px-3 py-[5px] rounded-lg inline-flex text-center items-center justify-center text-[16px] font-medium'>Sign in to join Prime</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-full h-screen relative hidden md:block'
                style={{
                    backgroundImage: `linear-gradient(to right, black 50%, transparent 58%), url(${hero_img_2})`,
                    backgroundPosition: 'right top',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}>
                <div className='p-6 md:p-8 lg:p-11 xl:p-[72px] absolute top-0'>
                    <div className='max-w-[342px] lg:max-w-[456px] xl:max-w-[546px]'>
                        <div className='mb-[30px] lg:mb-9 xl:mb-[42px]'>
                            <h1 className='text-[32px] lg:text-4xl xl:text-[50px] text-white leading-9 lg:leading-10 xl:leading-14 font-bold'>Welcome to Prime Video</h1>
                        </div>
                        <div className='mb-[30px] md:mb-9 xl:mb-[42px]'>
                            <p className='text-[18px] xl:text-xl text-white leading-[25px] xl:leading-7 font-medium'>Join Prime to watch the latest movies, TV shows and award-winning Amazon Originals</p>
                        </div>
                        <div className='mb-[30px] md:mb-9 xl:mb-[42px]'>
                            <a href="#" className='bg-white px-[15px] lg:px-[21px] py-[5px] lg:py-2 min-h-14 lg:min-h-[60px] xl:min-h-[62px] rounded-lg inline-flex items-center text-xl font-medium'>Sign in to join Prime</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* mobile */}
            <section className='w-full h-screen relative block md:hidden'
                style={{
                    backgroundImage: `linear-gradient(to top, black 50%, transparent 78%), url(${mob_hero_2})`,
                    backgroundPosition: '',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                }}>
                <div className='p-6 absolute bottom-0'>
                    <div className=''>
                        <div className='mb-6'>
                            <h1 className='text-[28px] text-white leading-9 lg:leading-10 xl:leading-14 font-bold'>Movie rentals on Prime Video</h1>
                        </div>
                        <div className='mb-6'>
                            <p className='text-[16px] text-white leading-[25px] xl:leading-7 font-medium'>Early Access to new movies, before digital subscription</p>
                        </div>
                        <div className='mb-6'>
                            <a href="#" className='bg-white w-full min-h-12 px-3 py-[5px] rounded-lg inline-flex text-center items-center justify-center text-[16px] font-medium'>Rent now</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-full min-h-[unset]  bg-[#00050d] hidden md:block'>
                <div className='p-6 md:p-8 lg:p-11 xl:p-[72px]'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6 xl:gap-7'>
                        <div>
                            <div className='mb-6 md:mb-[30px] lg:mb-9 xl:mb-[42px]'>
                                <h1 className='text-[28px] md:text-[32px] lg:text-4xl xl:text-[50px] text-white font-bold leading-[31px] md:leading-9 lg:leading-11 xl:leading-14'>Your favorite subscriptions all in one place</h1>
                            </div>
                            <div className='mb-6 md:mb-[30px] lg:mb-9 xl:mb-[42px]'>
                                <p className='text-[16px] md:text-[18px] xl:text-xl text-white leading-[22px] md:leading-[25px] xl:leading-7 font-medium'>Customers can subscribe to get access to a variety of premium and specialty content, easily accessible within the Prime Video app</p>
                            </div>
                        </div>
                        <div>
                            <div className='grid grid-cols-3 gap-1.5 md:gap-[7px] lg:gap-2 xl:gap-[9px]'>
                                <div>
                                    <a href="https://tv.apple.com/">
                                        <img src={appletv} alt="" className='rounded-xl' />
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.crunchyroll.com/">
                                        <img src={crunchyroll} alt="" className='rounded-xl' />
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.lionsgateplay.com/">
                                        <img src={lgp} alt="" className='rounded-xl' />
                                    </a>
                                </div>
                                <div>
                                    <a href="https://discoveryplus.in/">
                                        <img src={discovery} alt="" className='rounded-xl' />
                                    </a>
                                </div>
                                <div>
                                    <a href="https://animetimes-global.com/">
                                        <img src={anime} alt="" className='rounded-xl' />
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.manoramamax.com/">
                                        <img src={manoramamax} alt="" className='rounded-xl' />
                                    </a>
                                </div>
                                <div>
                                    <a href="https://chaupal.tv/menu-in-01pb-home-tab/a199d7ab-a176-4df9-8924-656ce5c03252">
                                        <img src={chaupal} alt="" className='rounded-xl' />
                                    </a>
                                </div>
                                <div>
                                    <a href="https://player.bbc.com/en/">
                                        <img src={bbc} alt="" className='rounded-xl' />
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.fancode.com/">
                                        <img src={fancode} alt="" className='rounded-xl' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* mobile */}
            <section className='w-full bg-[#00050d] block md:hidden'>
                <div className='p-6 '>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6 xl:gap-7'>
                        <div>
                            <div className='grid grid-cols-3 gap-1.5 md:gap-[7px] lg:gap-2 xl:gap-[9px]'>
                                <div>
                                    <a href="https://tv.apple.com/">
                                        <img src={appletv} alt="" className='rounded-xl' />
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.crunchyroll.com/">
                                        <img src={crunchyroll} alt="" className='rounded-xl' />
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.lionsgateplay.com/">
                                        <img src={lgp} alt="" className='rounded-xl' />
                                    </a>
                                </div>
                                <div>
                                    <a href="https://discoveryplus.in/">
                                        <img src={discovery} alt="" className='rounded-xl' />
                                    </a>
                                </div>
                                <div>
                                    <a href="https://animetimes-global.com/">
                                        <img src={anime} alt="" className='rounded-xl' />
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.manoramamax.com/">
                                        <img src={manoramamax} alt="" className='rounded-xl' />
                                    </a>
                                </div>
                                <div>
                                    <a href="https://chaupal.tv/menu-in-01pb-home-tab/a199d7ab-a176-4df9-8924-656ce5c03252">
                                        <img src={chaupal} alt="" className='rounded-xl' />
                                    </a>
                                </div>
                                <div>
                                    <a href="https://player.bbc.com/en/">
                                        <img src={bbc} alt="" className='rounded-xl' />
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.fancode.com/">
                                        <img src={fancode} alt="" className='rounded-xl' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='mb-6 md:mb-[30px] lg:mb-9 xl:mb-[42px]'>
                                <h1 className='text-[28px] md:text-[32px] lg:text-4xl xl:text-[50px] text-white font-bold leading-[31px] md:leading-9 lg:leading-11 xl:leading-14'>Your favorite subscriptions all in one place</h1>
                            </div>
                            <div className='mb-6 md:mb-[30px] lg:mb-9 xl:mb-[42px]'>
                                <p className='text-[16px] md:text-[18px] xl:text-xl text-white leading-[22px] md:leading-[25px] xl:leading-7 font-medium'>Customers can subscribe to get access to a variety of premium and specialty content, easily accessible within the Prime Video app</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero