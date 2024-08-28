import React from 'react';
import { Link } from 'react-router-dom';

const OrderItem = ({ productName, finalPrice, status, date, photo, id,  categoryId, subCategoryId }) => {
    return (
        <div className="flex flex-col md:flex-row items-center bg-[#754F23] p-4 mb-4">
            <img
                src={photo}
                alt={productName}
                className="w-full md:w-24 h-24 md:h-14 object-cover mb-4 md:mb-0 md:mr-4"
            />
            <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
                <Link to={`/${categoryId}/${subCategoryId}/${id}`}>
                <h3 className="text-lg sm:text-xl text-white font-semibold">{productName}</h3></Link>
                <p className="text-white">${finalPrice}</p>
            </div>
            <div className="text-center md:text-right">
                <p className="text-sm text-white">{status}</p>
                <p className="text-sm text-white">{date}</p>
            </div>
        </div>
    );
};

export default OrderItem;
