import React, { useEffect, useRef, useState } from 'react';
import HeroSection from '../landingPage_component/HeroSection';
import CategorySection from '../landingPage_component/CategorySection';
import Banner from '../../../../shared/Banner';
import CategoryPage from '../landingPage_component/CategoryPage';
import NewArrivalSection from '../landingPage_component/NewArrivalSection';
import { useDispatch } from 'react-redux';
import { fetchCategory } from '../../../../redux/slices/productSlice';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const trendingRef = useRef(null);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);

        setTimeout(() => {
            navigate('/product');
        }, 300);
    };

    useEffect(() => {
        dispatch(fetchCategory('newarrivals'))
    }, [dispatch])

    return (
        <>
            <div className="sm:pb-20 text-[#2F2F2F] no-scrollbar">
                <HeroSection />
                <div ref={trendingRef}>
                    <CategorySection
                        title="Flash Sales"
                        subtitle="Today's"
                        category="trending"
                        description="Explore the styles everyone's talking about!"
                    />
                </div>
                <div className='text-center py-[60px] border-black/30 border-b xl:mx-[135px] lg:mx-[100px] md:mx-[60px] mx-[20px] mb-[60px]'>
                    <button
                        className={`border rounded py-[10px] px-[30px] text-md font-Poppins bg-[#DB4444] hover:bg-[#DB4444]/80 text-white
                        ${isClicked ? 'animate-click' : ''}`}
                        onClick={handleClick}
                        onAnimationEnd={() => setIsClicked(false)}
                    >
                        View All Products
                    </button>
                </div>
                <CategoryPage
                    title="Browse By Category"
                    subtitle="Categories" />
                <hr className='my-[70px] border-black/30 xl:mx-[135px] lg:mx-[100px] md:mx-[60px] mx-[20px]' />
                <CategorySection
                    title="Best Selling Products"
                    subtitle="This Month"
                    category='trendinng'
                    description="Be the first to wear the latest designs!"
                />
                <div className='xl:px-[135px] sm:mt-[80px] lg:px-[100px] md:px-[60px] px-[20px]'>
                    <img src="https://media.istockphoto.com/id/1091153112/vector/valentines-day-sale-banner-with-shiny-hearts.jpg?s=612x612&w=0&k=20&c=itw5mNUSjlhFZploNLqtTYQ9NA0zqP_PxZfzwypaWvU=" alt="banner"
                        className='w-full'
                    />
                </div>
                <CategorySection
                    title="Explore Our Products"
                    subtitle="Our Products"
                    category="trendig"
                    description="Elegant details that define your style!"
                />
                <div className='text-center py-[60px] xl:mx-[135px] lg:mx-[100px] md:mx-[60px] mx-[20px] mb-[60px]'>
                    <button
                        className={`border rounded py-[10px] px-[30px] text-md font-Poppins hover:bg-[#DB4444]/80 bg-[#DB4444] text-white
                        ${isClicked ? 'animate-click' : ''}`}
                        onClick={handleClick}
                        onAnimationEnd={() => setIsClicked(false)}
                    >
                        View All Products
                    </button>
                </div>
                <NewArrivalSection title='New Arrival' subtitle="Featured" />
                <Banner />
            </div>
        </>
    );
};

export default LandingPage;
