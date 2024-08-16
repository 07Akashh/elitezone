import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../product/ProductCard';

const Wishlist = () => {
    const { wishlistItems, loading, error } = useSelector((state) => state.wishlist);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const uniqueWishlistItems = wishlistItems.filter((item, index, self) =>
        index === self.findIndex((t) => (
            t.id === item.id
        ))
    );

    return (
        <div>
            <h2 className="text-5xl text-center font-thin font-BerkshireSwash pb-3">
                WishList
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-5 border-black mx-auto py-4">
                {uniqueWishlistItems.map((item) => (
                    <div key={item.id} className="mb-10 sm:mb-5  w-auto mx-auto">
                        <ProductCard product={item} />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Wishlist;
