import React from 'react';

const OrderSummary = ({ cartItems, subtotal, shipping, total, onPlaceOrder, loading }) => {

    const handlePayment = async () => {
        onPlaceOrder();
    };
    return (
        <div className="order-summary p-4 rounded-md  max-w-md ">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <ul className="mb-8 space-y-2">
                {cartItems.map((item, index) => (
                    <li key={item.id} className="flex justify-between">
                        <span>{index + 1}. {item.product.productName}</span>
                        <span>₹{item.product.price}</span>
                    </li>
                ))}
            </ul>
            <div className="mb-4">
                <p className="flex justify-between border-b border-black py-3"><span>Subtotal:</span> <span>₹{subtotal}</span></p>
                <p className="flex justify-between border-b border-black py-3"><span>Shipping:</span> <span>₹{shipping}</span></p>
                <p className="flex justify-between py-3"><span>Total:</span> <span>₹{total}</span></p>
            </div>
            <button onClick={handlePayment} className="bg-[#754F23] text-white py-[16px] px-[48px] text-base font-normal rounded mb-4 w-full sm:w-auto"
            >
                {loading ? "Placing Order..." : "Place Order"}
            </button>
        </div>
    );
};

export default OrderSummary;
