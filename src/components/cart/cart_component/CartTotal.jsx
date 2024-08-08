import React from 'react';

const CartTotal = ({ subtotal, shippingCharge, total, navigate }) => (
    <>
        <div className="flex justify-between mt-6 ">
            <div className='font-TenorSans'>
                <form action="" className=' space-x-5'>
                <input type="text" name="couponCode" id="couponCode" placeholder='Coupon Code' className='border py-[16px] px-[24px] outline-none pr-14 border-black bg-transparent'/>
                <button className='py-[16px] px-[48px] text-lg leading-normal font-normal text-white bg-[#754f23]'>Apply Coupon</button>
                </form>
            </div>


            <div className="border px-[24px] py-[32px] rounded w-full md:w-1/3 border-black font-TenorSans">
                <h2 className="text-xl mb-3">Cart Total</h2>
                <div className="border-b py-3 font-normal border-black flex justify-between">
                    <p>Subtotal:</p>
                    <p>${subtotal.toFixed(2)}</p>
                </div>
                <div className="border-b py-3 font-normal border-black flex justify-between">
                    <p>Shipping:</p>
                    <p>{shippingCharge === 0 ? 'Free' : `$${shippingCharge.toFixed(2)}`}</p>
                </div>
                <div className="mb-4 py-3 font-normal flex justify-between">
                    <p>Total:</p>
                    <p>${total.toFixed(2)}</p>
                </div>
                <div className='text-center'>
                    <button
                        onClick={() => navigate('/checkout')}
                        className="bg-[#754f23] text-white py-3 px-4 rounded"
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    </>
);

export default CartTotal;
