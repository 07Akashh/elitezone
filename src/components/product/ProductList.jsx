import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { GoArrowRight, GoArrowLeft } from 'react-icons/go';
// import { fetchCategory } from '../../redux/slices/productSlice';

const ProductList = ({ category }) => {
    const dispatch = useDispatch();
    const categoryState = useSelector((state) => state.products['newarrivals']);
    const { data, isLoading, error } = categoryState || {};

    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    useEffect(() => {
        // dispatch(fetchCategory(category));
    }, [dispatch, category]);

    return (
        <div className=" mx-auto md:px-10 ">
            {isLoading ? (
                <div className="text-center py-10">Loading...</div>
            ) : error ? (
                <div className="text-center py-10">Error: {error}</div>
            ) : (
                <>
                    {category === 'trending' ? (
                        <>
                        <div className="relative hidden sm:block">
                            <button
                                className="absolute hidden sm:block left-[-50px] top-[35%] z-10 p-2"
                                onClick={scrollLeft}
                            >
                                <GoArrowLeft className='h-[24px] w-[24px]' />
                            </button>
                            <div
                                className="flex overflow-x-auto no-scrollbar space-x-12 xl:space-x-48"
                                ref={scrollContainerRef}
                            >
                                {data && data.map((product) => (
                                    <div key={product.id} className="min-w-max">
                                        <ProductCard product={product} />
                                    </div>
                                ))}
                            </div>
                            <button
                                className="absolute right-[-50px] top-[35%] hidden sm:block z-10 p-2"
                                onClick={scrollRight}
                            >
                                <GoArrowRight className='h-[24px] w-[24px]' />
                            </button>
                        </div>
                        <div className="sm:hidden grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 border-black py-4">
                        {data && data.length > 0 ? (
                            data.map((product) => (
                                <div key={product.id} className=" mb-10 sm:mb-5 border-black mx-auto">
                                    <ProductCard product={product} />
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-10 col-span-full">No products available</div>
                        )}
                    </div>
                        </>
                    ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 border-black py-4">
                        {data && data.length > 0 ? (
                            data.map((product) => (
                                <div key={product.id} className=" mb-10 sm:mb-5 border-black mx-auto">
                                    <ProductCard product={product} />
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-10 col-span-full">No products available</div>
                        )}
                    </div>
                    
                    )}
                </>
            )}
        </div>
    );
};

export default ProductList;




//  <div >
//     {data ? (
//         <div className="text-center py-10">Loading...</div>
//     ) : (
//         <div className="grid justify-center mx-auto w-auto grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
//             {data ? (
//                 data.map((product) => (
//                     <div key={product.id} >
//                         <ProductCard product={product} />
//                     </div>
//                 ))
//             ) : (
//                 <div className="text-center py-10">No products available</div>
//             )}
//         </div>
//     )}
// </div>