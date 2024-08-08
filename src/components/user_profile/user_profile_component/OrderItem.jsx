import React from 'react';

const OrderItem = ({ order }) => {
    return (
        <div className="flex items-center bg-[#754F23] p-4 mb-4 ">
            <img src={order.photo} alt={order.name} className="w-24 h-14 object-cover mr-4" />
            <div className="flex-1">
                <h3 className="text-xl text-white font-semibold">{order.name}</h3>
                <p className="text-[white]">${order.price}</p>
            </div>
            <div className="text-right">
                <p className="text-sm text-white">{order.status}</p>
                <p className="text-sm text-white ">{order.date}</p>
            </div>
        </div>
    );
};

export default OrderItem;
