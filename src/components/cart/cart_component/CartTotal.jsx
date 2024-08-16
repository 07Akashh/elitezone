import React from 'react';

const CartTotal = ({ subtotal, shippingCharge, total, navigate }) => (
    <>
        <div className="flex flex-col md:flex-row justify-between mt-6 space-y-6 md:space-y-0">
            {/* Coupon Code Section */}
            <div className="w-full md:w-1/2 font-TenorSans">
                <form action="" className="space-y-4 md:space-y-0 md:space-x-5 flex flex-col md:flex-row items-center">
                    <input
                        type="text"
                        name="couponCode"
                        id="couponCode"
                        placeholder="Coupon Code"
                        className="border py-3 px-4 outline-none w-full md:w-auto border-black bg-transparent"
                    />
                    <button
                        className="py-3 px-6 text-lg font-normal text-white bg-[#754f23] w-full md:w-auto"
                    >
                        Apply Coupon
                    </button>
                </form>
            </div>

            {/* Cart Total Section */}
            <div className="border px-6 py-8 rounded w-full md:w-1/3 border-black font-TenorSans">
                <h2 className="text-xl mb-3">Cart Total</h2>
                <div className="border-b py-3 font-normal border-black flex justify-between">
                    <p>Subtotal:</p>
                    <p>&#8377;{subtotal.toFixed(2)}</p>
                </div>
                <div className="border-b py-3 font-normal border-black flex justify-between">
                    <p>Shipping:</p>
                    <p>{shippingCharge === 0 ? 'Free' : `${shippingCharge.toFixed(2)}`}</p>
                </div>
                <div className="mb-4 py-3 font-normal flex justify-between">
                    <p>Total:</p>
                    <p>&#8377;{total.toFixed(2)}</p>
                </div>
                <div className="text-center">
                    <button
                        onClick={() => navigate('/checkout')}
                        className="bg-[#754f23] text-white py-3 px-4 rounded w-full md:w-auto"
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    </>
);

export default CartTotal;
