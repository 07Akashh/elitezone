import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './product/ProductCard';

const CategoryProducts = ({ category }) => {
    const products = useSelector((state) => state.products.products);
    const filteredProducts = products.filter((product) => product.category === category);

    return (
        <div className="grid justify-center mx-auto w-auto grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default CategoryProducts;
