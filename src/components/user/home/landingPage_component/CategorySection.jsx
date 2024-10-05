import React, { useRef } from 'react';
import ProductList from '../../product/component/ProductList';
import { GoArrowRight, GoArrowLeft } from 'react-icons/go';


const CategorySection = ({ title, subtitle, category }) => {
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <div className="mt-5 sm:mt-12">
            <div className="h-10 justify-start items-center gap-4 inline-flex xl:px-[135px] lg:px-[100px] md:px-[60px] px-[20px]">
                <div className="w-5 h-10 relative">
                    <div className="w-5 h-10 left-0 top-0 absolute bg-[#db4444] rounded" />
                </div>
                <div className="text-[#db4444] text-base font-semibold font-Poppins leading-tight">{subtitle}</div>
            </div>
            <div className='flex mt-[16px]'>
                <div className='flex  justify-between w-full xl:px-[135px] lg:px-[100px] md:px-[60px] px-[20px]'>
                    <h2 className="text-black text-xl sm:text-3xl md:text-4xl font-semibold font-Inter sm:leading-[48px] tracking-wider">
                        {title}
                    </h2>
                    {category === 'trending' && (
                        <div className="flex gap-x-2 mb-[10px]">
                            <button
                                className="bg-neutral-100 rounded-full p-2"
                                onClick={scrollLeft}
                            >
                                <GoArrowLeft className='h-[24px] w-[24px]' />
                            </button>
                            <button
                                className="bg-neutral-100 rounded-full p-2"
                                onClick={scrollRight}
                            >
                                <GoArrowRight className='h-[24px] w-[24px]' />
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className='sm:mt-[30px]'>
                <ProductList category={category} ref={scrollContainerRef} />
            </div>
        </div>
    );
};

export default CategorySection;
