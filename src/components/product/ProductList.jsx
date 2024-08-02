import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

const ProductList = ({ category }) => {
    const products = useSelector((state) => state.products.products);
    const filteredProducts = products.filter((product) => product.category === category);
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <div className="mx-5">
            {category === 'trending' ? (
                <div className="relative">
                    <button
                        className="absolute left-[-50px] top-[35%] z-10 p-2"
                        onClick={scrollLeft}
                    >
                        <GoArrowLeft className=' h-[24px] w-[24px]'/>
                    </button>
                    <div
                        className="flex overflow-x-auto no-scrollbar space-x-7"
                        ref={scrollContainerRef}
                    >
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="min-w-max">
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                    <button
                        className="absolute right-[-50px] z-10 top-[35%] p-2"
                        onClick={scrollRight}
                    >
                        <GoArrowRight className=' h-[24px] w-[24px]'/>
                    </button>
                </div>
            ) : (
                <div className="grid justify-center mx-auto w-auto grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductList;
