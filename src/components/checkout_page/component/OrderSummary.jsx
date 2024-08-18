import React from 'react';

const OrderSummary = ({ cartItems, subtotal, shipping, total, billingInfo, onPlaceOrder }) => {

    const handlePayment = async () => {
        console.log("Order details:", {
            cartItems,
            subtotal,
            shipping,
            total,
            billingInfo
        });
        onPlaceOrder();
    };

    return (
        <div className="order-summary p-4 border rounded-md shadow-md max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <ul className="mb-4 space-y-2">
                {cartItems.map((item, index) => (
                    <li key={index} className="flex justify-between">
                        <span>{item.name}</span>
                        <span>₹{item.price}</span>
                    </li>
                ))}
            </ul>
            <div className="mb-4">
                <p className="flex justify-between">Subtotal: ₹{subtotal}</p>
                <p className="flex justify-between">Shipping: ₹{shipping}</p>
                <p className="flex justify-between font-bold">Total: ₹{total}</p>
            </div>
            <button onClick={handlePayment} className="mt-4 bg-green-500 text-white py-2 px-4 rounded w-full sm:w-auto">
                Place Order
            </button>
        </div>
    );
};

export default OrderSummary;
