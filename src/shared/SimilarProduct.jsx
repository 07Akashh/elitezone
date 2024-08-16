import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllProducts } from '../redux/slices/productSlice';
import ProductCard from '../components/product/ProductCard';

const SimilarProductsPage = ({ categoryId, subCategoryId }) => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (categoryId && subCategoryId) {
            dispatch(fetchAllProducts({ categoryId, subCategoryId }))
                .unwrap()
                .then(response => {
                    setProducts(response.products);
                })
                .catch(error => {
                    console.error('Error fetching similar products:', error);
                });
        }
    }, [categoryId, subCategoryId, dispatch]);

    return (
        <div className="md:px-10 py-5">
            <div className='text-start mb-5'>
                <h2 className="text-5xl font-thin font-BerkshireSwash border-b pb-3 border-[#2F2F2F] inline-block">
                    Similar <span className='text-2xl font-BerkshireSwash'>Items</span>
                </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-5 border-black mx-auto py-4">
    {products.length > 0 ? (
        products.map(product => (
            <div key={product.id} className="mb-10 sm:mb-5  w-auto mx-auto">
                <ProductCard product={product} />
            </div>
        ))
    ) : (
        <p>No similar products found.</p>
    )}
</div>

        </div>
    );
};

export default SimilarProductsPage;
