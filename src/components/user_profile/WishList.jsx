import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../product/ProductCard';

const Wishlist = () => {
    const { wishlistItems, loading, error } = useSelector((state) => state.wishlist);

    if (loading) return <div className='text-center font-TenorSans'>Loading...</div>;
    if (error) return <div className='text-center font-TenorSans'>Error: {error}</div>;

    // Check if the wishlist is empty
    if (wishlistItems.length === 0) {
        return <p className="text-center font-TenorSans">Your wishlist is empty.</p>;
    }

    // Render the wishlist items if they are available
    return (
        <div>
            <h2 className="text-5xl text-center font-thin font-BerkshireSwash pb-3">
                WishList
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-5 border-black mx-auto py-4">
                {wishlistItems.map((item) => (
                    <div key={item.id} className="mb-10 sm:mb-5 w-auto mx-auto">
                        <ProductCard product={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wishlist;
