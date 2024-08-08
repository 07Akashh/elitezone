import React from 'react';
import StarRatings from 'react-star-ratings'
const calculateAverageRating = (reviews) => {
    if (reviews.length === 0) return 0;

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return totalRating / reviews.length;
};

const ProductReviews = ({ reviews }) => {
    const averageRating = calculateAverageRating(reviews);

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center' }} className='text-lg flex'>
                <StarRatings
                    rating={averageRating}
                    starRatedColor="orange"
                    numberOfStars={5}
                    name='rating'
                    starDimension="15px"
                    starSpacing="1px"
                />
            </div>

        </div>
    );
};

export default ProductReviews;
