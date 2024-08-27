import React, { useRef } from 'react';
import HeroSection from './landingPage_component/HeroSection';
import CategorySection from './landingPage_component/CategorySection';
import Banner from '../../shared/Banner';

const LandingPage = () => {
    const trendingRef = useRef(null);

    const handleExploreClick = () => {
        if (trendingRef.current) {
            trendingRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
        <div className="sm:py-20 mx-5 text-[#2F2F2F] no-scrollbar">
            <HeroSection handleExploreClick={handleExploreClick} />
            <div ref={trendingRef}>
                <CategorySection
                    title="Trending"
                    subtitle="Collections"
                    category="trending"
                    description="Explore the styles everyone's talking about!"
                />
            </div>

            <CategorySection
                title="New"
                subtitle="Arrivals"
                category='newarrivals'
                description="Be the first to wear the latest designs!"
            />

            <CategorySection
                title="Embroidered"
                subtitle="Abaya"
                category="embroidered-abaya"
                description="Elegant details that define your style!"
            />
            
        </div>
        <Banner />
        </>
    );
};

export default LandingPage;
