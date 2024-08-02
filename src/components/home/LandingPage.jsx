import React, { useRef } from 'react';
import ProductList from '../product/ProductList';
import { GoArrowRight } from 'react-icons/go';

const LandingPage = () => {
    const trendingRef = useRef(null);

    const handleExploreClick = () => {
        if (trendingRef.current) {
            trendingRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className=" py-20 ml-10 text-[#2F2F2F]">
            <div className="flex flex-col md:flex-row items-center w-full max-h-screen mb-20">
                <div className="w-full md:w-3/5 mb-10 md:mb-0">
                    <h1 className="text-[40px] md:text-[80px] mb-5 text-left font-BerkshireSwash">
                        Empowering Your Modesty with Fashion!
                    </h1>
                    <p className="text-[16px] md:text-[18px] font-PlayfairDisplay ml-2 md:ml-10 mb-10 md:mb-20 text-left">
                        We provide the largest clothing collection for any season. You can choose trendy or classy design according to your preferences. Our services are super fast and we update within 24 hours.
                    </p>
                    <button
                        onClick={handleExploreClick}
                        className="bg-[#754F23] text-white font-PlayfairDisplay py-2 px-4 ml-2 md:ml-20 rounded-xl mb-8 text-center flex items-center button"
                    >
                        Explore <GoArrowRight className="ml-2 h-[24px] w-[24px] arrow-auto-animate" />
                    </button>
                </div>

                <div>
                <div className='relative w-[380px] h-[550px] border border-[#754F23] rounded-t-[250px] rotate-[-8.13deg] translate-x-[80px] z-10'>
                    {/* Ellipse */}
                    <div className="absolute top-0 left-0 w-full h-full -translate-x-[120px]  before:absolute before:content-[''] before:w-[251px] before:h-[523px] before:bg-[#c0aea04e] before:blur-[80px] rotate-[8.13deg] before:rounded-full z-[-100]"></div>
                    <div>
                        <div className="relative w-[380px] rotate-[8.13deg] h-[550px] flex justify-center md:justify-end bg-[#754F23] rounded-t-[250px] translate-x-[20px] overflow-visible">
                        <img src='https://res.cloudinary.com/dmao0koo4/image/upload/v1722575805/Rectangle_325-removebg-preview_1_fisyyq.png' alt="Fashion" className="absolute bottom-0 h-[635px] w-[530px] object-cover" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div ref={trendingRef}>
                <div className='flex ml-5 '>
                    <div>
                        <h2 className="text-5xl font-thin font-BerkshireSwash border-b pb-3 border-[#2F2F2F]">Trending <span className='text-2xl font-BerkshireSwash'>Collections</span></h2>
                        <p className='text-[14px] mt-1 font-PlayfairDisplay'>Have a look on what’s trending now!</p>
                    </div>
                </div>
                <div className='ml-10 mr-10 mt-[36px]'>
                    <ProductList category="trending" />
                </div>
            </div>
            <div className="mt-12">
                <div className='flex ml-5'>
                    <div>
                        <h2 className="text-5xl font-thin font-BerkshireSwash border-b pb-3 border-[#2F2F2F]">New <span className='text-2xl font-BerkshireSwash'>Arrivals</span></h2>
                    </div>
                </div>
                <div className='ml-10 mr-10 mt-[36px]'>
                    <ProductList category="new-arrivals" />
                </div>
            </div>
            <div className="mt-12">
                <div className='flex ml-5'>
                    <div>
                        <h2 className="text-5xl font-thin font-BerkshireSwash border-b pb-3 border-[#2F2F2F]">Embroidered <span className='text-2xl font-BerkshireSwash'>Abaya</span></h2>
                        <p className='text-[14px] mt-1 font-PlayfairDisplay'>Have a look on what’s trending now!</p>
                    </div>
                </div>
                <div className='ml-10 mr-10 mt-[36px]'>
                    <ProductList category="embroidered-abaya" />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;

