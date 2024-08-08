import React from 'react';
import ProductList from '../../product/ProductList';

const CategorySection = ({ title, subtitle, category }) => {
    return (
        <div className="mt-12">
            <div className='flex sm:ml-5'>
                <div>
                    <h2 className="text-5xl font-thin font-BerkshireSwash border-b pb-3 border-[#2F2F2F]">
                        {title} <span className='text-2xl font-BerkshireSwash'>{subtitle}</span>
                    </h2>
                    {category !== "new-arrivals" && (
                        <p className='text-[14px] mt-1 font-PlayfairDisplay'>Have a look on what’s trending now!</p>
                    )}
                </div>
            </div>
            <div className='mx-1 sm:mx-10 mt-[36px]'>
                <ProductList  category={category}/>
            </div>
        </div>
    );
};

export default CategorySection;
