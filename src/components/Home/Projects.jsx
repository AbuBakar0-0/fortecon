import React, { useEffect } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Projects() {
    useEffect(() => {
        Aos.init()
      }, [])
    return (
        <div  data-aos="flip-left" data-aos-duration="10000">
            <div className="container mx-auto pt-32">
                <div class="text-center lg:mb-16 ">
                    <h1 class="sm:text-3xl text-2xl  title-font text-black font-bold mb-4">Our Recent Projects</h1>
                    <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400 text-opacity-80">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
                    <div class="flex mt-6 justify-center">
                        <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                    {/* Carousel for desktop and large size devices */}
                    <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={4} step={1} infinite={true}>
                        <div className="w-full relative flex items-center justify-center">
                            <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonBack>
                            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                <Slider>
                                    <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                        <Slide index={0}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 1</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={1}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={2}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={3}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={4}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={5}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={6}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={7}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={8}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={9}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={10}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={11}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                    </div>
                                </Slider>
                            </div>
                            <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonNext>
                        </div>
                    </CarouselProvider>

                    {/* Carousel for tablet and medium size devices */}
                    <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={2} step={1} infinite={true}>
                        <div className="w-full relative flex items-center justify-center">
                            <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonBack>
                            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                <Slider>
                                    <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                        <Slide index={0}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 1</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={1}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={2}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={3}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={4}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={5}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={6}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={7}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={8}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={9}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={10}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={11}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                    </div>
                                </Slider>
                            </div>
                            <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonNext>
                        </div>
                    </CarouselProvider>

                    {/* Carousel for mobile and Small size Devices */}
                    <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={1} step={1} infinite={true}>
                        <div className="w-full relative flex items-center justify-center">
                            <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonBack>
                            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                <Slider>
                                    <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                                        <Slide index={0}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 1</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={1}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={2}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={3}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={4}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={5}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={6}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={7}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={8}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={9}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={10}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={11}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                    </div>
                                </Slider>
                            </div>
                            <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonNext>
                        </div>
                    </CarouselProvider>
                </div>
            </div>

        </div>
    );
}
