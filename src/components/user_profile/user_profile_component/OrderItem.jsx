import React from 'react';

const OrderItem = ({ order }) => {
    return (
        <div className="flex flex-col md:flex-row items-center bg-[#754F23] p-4 mb-4">
            <img
                src={order.photo}
                alt={order.name}
                className="w-full md:w-24 h-24 md:h-14 object-cover mb-4 md:mb-0 md:mr-4"
            />
            <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
                <h3 className="text-lg sm:text-xl text-white font-semibold">{order.name}</h3>
                <p className="text-white">${order.price}</p>
            </div>
            <div className="text-center md:text-right">
                <p className="text-sm text-white">{order.status}</p>
                <p className="text-sm text-white">{order.date}</p>
            </div>
        </div>
    );
};

export default OrderItem;
