import React, { useEffect, forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { fetchCategory } from '../../../../redux/slices/productSlice';


const ProductList = forwardRef(({ category }, ref) => {
    const dispatch = useDispatch();
    const categoryState = useSelector((state) => state.products['trending']);
    const { data, isLoading, error } = categoryState || {};

    useEffect(() => {
        dispatch(fetchCategory(category));
    }, [dispatch, category]);

    return (
        <div className="mx-auto">
            {isLoading ? (
                <div className="text-center py-10">Loading...</div>
            ) : error ? (
                <div className="text-center py-10">Error: {error}</div>
            ) : (
                <>
                    {category === 'trending' ? (
                        <>
                            <div className="relative block ">
                                <div
                                    className="flex overflow-x-auto  no-scrollbar space-x-[30px] xl:px-[135px] lg:px-[100px] md:px-[60px] px-[20px]"
                                    ref={ref}
                                >
                                    {data && data.map((product) => (
                                        <div key={product._id} className="min-w-max ">
                                            <ProductCard product={product} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 border-black py-4 xl:px-[135px] lg:px-[100px] md:px-[60px] px-[20px]">
                            {data && data.length > 0 ? (
                                data.map((product) => (
                                    <div key={product._id} className="mb-5 sm:mb-5 border-black  mx-auto">
                                        <ProductCard product={product} />
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-10 col-span-full font-TenorSans">No Products Available Please Check Your Internet Connection!</div>
                            )}
                        </div>
                    )}
                </>
            )}
        </div>
    );
});

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