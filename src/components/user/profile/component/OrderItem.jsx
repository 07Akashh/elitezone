import React from 'react';
import { Link } from 'react-router-dom';

const OrderItem = ({ productName, finalPrice, status, date, photo, id, categoryId, subCategoryId }) => {
    function capitalizeStatus(status) {
        return status
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    }

    return (
        <div className="flex flex-row bg-[#db4444] p-2 sm:p-4 mb-4">
            <Link to={`/${categoryId}/${subCategoryId}/${id}`}>
                <img
                    src={photo}
                    alt={productName}
                    className="sm:h-16 rounded sm:w-16 h-10 w-10 mr-2 md:mr-4"
                />
            </Link>
            <div className="flex-1 text-left">
                <h3 className="text-xs sm:text-lg text-white font-medium line-clamp-1">{productName}</h3>
                <p className="text-xs sm:text-base text-white">&#8377;{finalPrice}</p>
            </div>
            <div className="text-right">
                <p className="text-xs sm:text-base text-white">{capitalizeStatus(status)}</p>
                <p className="text-xs sm:text-base text-white">{date}</p>
            </div>
        </div>
    );
};

export default OrderItem;