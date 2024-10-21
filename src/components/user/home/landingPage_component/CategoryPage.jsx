import React, { useRef } from 'react';
import { GoArrowRight, GoArrowLeft } from 'react-icons/go';
import { FaShoePrints, FaTshirt, FaShoppingBag, FaHandHolding } from 'react-icons/fa';
import { PiPantsThin, PiDressThin, PiBeltThin, PiTShirtThin } from "react-icons/pi";
import { GiSleevelessJacket, GiSkirt, GiSunglasses, GiWatch } from "react-icons/gi";
import { Link } from 'react-router-dom';



const CategoryPage = ({ title, subtitle }) => {
    const scrollContainerRef = useRef(null);

    const categories = [
        { name: 'Pants', icon: <PiPantsThin />, link: '/66f05bff7540dd76b4347c26/66f05c3e7540dd76b4347c57' },
        { name: 'Frocks', icon: <PiDressThin />, link: '/66f05c077540dd76b4347c2a/6714b71ce01f6977e2202818' },
        { name: 'Dresses', icon: <PiDressThin />, link: '/66f05c077540dd76b4347c2a/66f728a8e6c4ed7ebcae5410' },
        { name: 'Tops', icon: <PiTShirtThin />, link: '/66f05c077540dd76b4347c2a/66f71dec5121941c84230b39' },
        { name: 'Accessories', icon: <FaShoppingBag />, link: '/671616df17fc5f1bd6b68e95' },
        { name: 'T-shirts', icon: <FaTshirt />, link: '/66f05bff7540dd76b4347c26/6700e5f5fd42daee87d25df0' },
        { name: 'Jeans', icon: <PiPantsThin />, link: '/66f05bff7540dd76b4347c26/66f05c257540dd76b4347c39' },
        // { name: 'Jackets', icon: <GiSleevelessJacket /> },
        // { name: 'Shoes', icon: <FaShoePrints /> },
        // { name: 'Skirts', icon: <GiSkirt /> },
        // { name: 'Belts', icon: <PiBeltThin /> },
        // { name: 'Bags', icon: <FaHandHolding /> },
        // { name: 'Sunglasses', icon: <GiSunglasses /> },
        // { name: 'Watches', icon: <GiWatch /> }
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
                        <Link to={category.link} key={index}>
                            <div className="text-center border border-black/30 hover:bg-[#DB4444] hover:border-[#DB4444] hover:text-white rounded transition-all duration-200 ease-in-out">
                                <div className="text-sm font-normal w-[170px] pt-6 h-[145px]">
                                    <div className="text-6xl text-center w-14 h-14 mx-auto mb-5">
                                        {category.icon}
                                    </div>
                                    <p className="font-Poppins">{category.name}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
