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
            <div className="flex flex-wrap gap-5 px-10 justify-center md:justify-between mx-auto w-full py-4">
                {uniqueWishlistItems.map((item) => (
                    <div key={item.id} className="md:flex-shrink-0  xl:w-[340px] mb-20 sm:mb-5">
                        <ProductCard product={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wishlist;
