import React, { useRef } from 'react';
import { GoArrowRight, GoArrowLeft } from 'react-icons/go';
import { FaShoePrints, FaTshirt, FaShoppingBag, FaUserTie, FaHandHolding } from 'react-icons/fa';
import { PiPantsThin, PiDressThin, PiBeltThin } from "react-icons/pi";
import { GiSleevelessJacket, GiSkirt, GiSunglasses, GiWatch } from "react-icons/gi";


const CategoryPage = ({ title, subtitle }) => {
    const scrollContainerRef = useRef(null);

    const categories = [
        { name: 'Shoes', icon: <FaShoePrints /> },
        { name: 'Pants', icon: <PiPantsThin /> },
        { name: 'Frocks', icon: <PiDressThin /> },
        { name: 'Dresses', icon: <PiDressThin /> },
        { name: 'Tops', icon: <FaUserTie /> },
        { name: 'Accessories', icon: <FaShoppingBag /> },
        { name: 'T-shirts', icon: <FaTshirt /> },
        { name: 'Jeans', icon: <PiPantsThin /> },
        { name: 'Jackets', icon: <GiSleevelessJacket /> },
        { name: 'Skirts', icon: <GiSkirt /> },
        { name: 'Belts', icon: <PiBeltThin /> },
        { name: 'Bags', icon: <FaHandHolding /> },
        { name: 'Sunglasses', icon: <GiSunglasses /> },
        { name: 'Watches', icon: <GiWatch /> }
    ];

    const scrollLeft = () => {
        scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <div className="mt-12 xl:px-[135px] lg:px-[100px] font-Poppins md:px-[60px] px-[20px]">
            <div className="h-10 justify-start items-center gap-4 inline-flex ">
                <div className="w-5 h-10 relative">
                    <div className="w-5 h-10 left-0 top-0 absolute bg-[#db4444] rounded" />
                </div>
                <div className="text-[#db4444] text-base font-semibold font-Poppins leading-tight">{subtitle}</div>
            </div>
            <div className='flex mt-[16px]'>
                <div className='flex justify-between w-full'>
                    <h2 className="text-black my-auto  text-lg sm:text-3xl md:text-4xl font-semibold font-Inter sm:leading-[48px] sm:tracking-wider">
                        {title}
                    </h2>
                    <div className="flex gap-x-2 ">
                        <button
                            className="bg-neutral-100  rounded-full p-2 "
                            onClick={scrollLeft}
                        >
                            <GoArrowLeft className='h-[24px] w-[24px]' />
                        </button>
                        <button
                            className="bg-neutral-100 rounded-full p-2 "
                            onClick={scrollRight}
                        >
                            <GoArrowRight className='h-[24px]  w-[24px]' />
                        </button>
                    </div>
                </div>
            </div>
            <div className='mt-[30px] overflow-x-auto no-scrollbar' ref={scrollContainerRef}>
                <div className='flex gap-x-[30px]'>
                    {categories.map((category, index) => (
                        <div key={index} className="text-center border border-black/30 hover:bg-[#DB4444] hover:border-[#DB4444] hover:text-white rounded transition-all duration-200 ease-in-out">
                            <div className="text-sm font-normal w-[170px] pt-6 h-[145px]">
                                <div className="text-6xl text-center w-14 h-14 mx-auto mb-5">
                                    {category.icon}
                                </div>
                                <p className="font-Poppins">{category.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
