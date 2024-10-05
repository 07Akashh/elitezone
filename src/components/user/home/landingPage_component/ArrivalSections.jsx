import React from 'react';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';

const ArrivalCards = () => {
    const product1 = useSelector((state) => state.products?.newarrivals?.data[0]);
    const product2 = useSelector((state) => state.products?.newarrivals?.data[1]);
    const product3 = useSelector((state) => state.products?.newarrivals?.data[2]);
    const product4 = useSelector((state) => state.products?.newarrivals?.data[3]);
    // const error = useSelector((state) => state.products?.newarrivals.error)
    
    return (
        <div className="w-full h-full xl:px-28 lg:px-24 md:px-16 px-[20px] py-10 flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2 sm:h-[600px] h-[300px]">
                <ProductCard
                    image={product1?.images[0].url}
                    title={product1?.productName}
                    description={product1?.description}
                    Link ={`/${product1?.categoryId}/${product1?.subCategoryId}/${product1?._id}`}
                />
            </div>
            <div className="w-full md:w-1/2 flex sm:h-[600px] flex-col gap-4">
                <div className="h-[290px] sm:h-[300px]">
                    <ProductCard
                        image={product2?.images[0].url}
                        title={product2?.productName}
                        description={product2?.description}
                        Link ={`/${product2?.categoryId}/${product2?.subCategoryId}/${product2?._id}`}
                    />
                </div>
                <div className='flex w-full gap-4 flex-col sm:flex-row'>
                    <div className="h-[295px] w-full sm:w-1/2">
                        <ProductCard
                            image={product3?.images[0].url}
                            title={product3?.productName}
                            description={product3?.description}
                            Link ={`/${product3?.categoryId}/${product3?.subCategoryId}/${product3?._id}`}
                        />
                    </div>
                    <div className="h-[295px] w-full sm:w-1/2">
                        <ProductCard
                            image={product4?.images[0].url}
                            title={product4?.productName}
                            description={product4?.description}
                            Link ={`/${product4?.categoryId}/${product4?.subCategoryId}/${product4?._id}`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArrivalCards;

