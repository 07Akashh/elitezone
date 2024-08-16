import React from 'react';
import { GoArrowRight } from 'react-icons/go';

const HeroSection = ({ handleExploreClick }) => {
    return (
        <div className="relative">
            <div className="flex justify-center flex-col md:flex-row items-center md:gap-x-24 lg:gap-x-0 xl:gap-x-24 2xl:gap-x-48 md:mx-8  md:max-h-screen md:mb-5 lg:mb-20">
                <div className="w-full md:w-[200px] mr-2 lg:mr-0 z-10 xl:w-3/5 lg:w-[480px] mb-10 md:mb-0 ">
                    <h1 className="hidden md:block text-[40px] w-[350px] lg:text-[45px] lg:w-auto xl:text-[80px] mb-5 text-left font-BerkshireSwash">
                        Empowering Your Modesty with Fashion!
                    </h1>
                    <p className="hidden lg:block text-[16px] md:text-[18px] font-PlayfairDisplay ml-2 md:ml-10 lg:ml-0 xl:ml-10 mb-10 md:mb-20 text-left">
                        We provide the largest clothing collection for any season. You can choose trendy or classy design according to your preferences. Our services are super fast and we update within 24 hours.
                    </p>
                    <button
                        onClick={handleExploreClick}
                        className="hidden lg:flex bg-[#754F23] text-white font-PlayfairDisplay py-2 px-4 ml-2 md:ml-20 rounded-xl mb-8 text-center items-center justify-start"
                    >
                        Explore <GoArrowRight className="ml-2 h-[24px] w-[24px] arrow-auto-animate" />
                    </button>
                </div>

                <div className="relative border-black">
                    <div className="xl:w-[350px] h-full xl:h-[550px] border border-[#754F23] rounded-t-[250px] rotate-[-8.13deg] z-10 flex">
                        <div className="top-0 left-0 hidden sm:block sm:w-full sm:h-full -translate-x-[120px] before:absolute before:content-[''] before:w-[251px] before:h-[523px] before:bg-[#c0aea062] before:blur-[40px] rotate-[8.13deg] before:rounded-full z-[-100] border-black"></div>
                        <div className="sm:relative">
                            <div className="lg:w-[350px] w-[250px] h-[400px] md:w-[280px] rotate-[8.13deg] md:h-[400px] lg:h-[550px] flex justify-center md:justify-end bg-[#754F23] rounded-t-[250px] pl-40px overflow-visible border-black">
                                <img src='https://res.cloudinary.com/dmao0koo4/image/upload/v1722575805/Rectangle_325-removebg-preview_1_fisyyq.png' alt="Fashion" className="md:absolute translate-x-10 sm:translate-x-0 bottom-0 h-[400px] md:h-[500px] lg:h-[635px] w-[160px] sm:w-[530px] object-cover" />
                                <h1 className="sm:hidden absolute bottom-[25%] left-1/2 transform -translate-x-1/2 text-white text-[24px] w-[90%] text-left font-BerkshireSwash">
                                    Empowering Your Modesty with Fashion!
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p className="lg:hidden text-[12px] mt-5 sm:mt-0 sm:text-[18px] mb-5 font-PlayfairDisplay ml-2 sm:ml-10 md:mb-5 text-left">
                We provide the largest clothing collection for any season. You can choose trendy or classy design according to your preferences. Our services are super fast and we update within 24 hours.
            </p>
            <div className='flex justify-center sm:justify-start'>
            <button
                onClick={handleExploreClick}
                className="lg:hidden flex bg-[#754F23] text-white font-PlayfairDisplay py-2 px-4 ml-2 sm:ml-20 rounded-xl md:mb-36 text-center items-center justify-center sm:justify-start"
            >
                Explore <GoArrowRight className="ml-2 h-[24px] w-[24px] arrow-auto-animate" />
            </button>
            </div>
        </div>
    );
};

export default HeroSection;
