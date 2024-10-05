import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BillingDetails from '../component/BillingDetails';
import OrderSummary from '../component/OrderSummary';
import Breadcrumbs from '../../../../shared/Breadcrumbs'

import { fetchCartForOrder, placeOrder } from '../../../../redux/slices/orderSlice';

import toast from 'react-hot-toast';
import serverUrl from '../../../../config/serverUrl';
import { useNavigate } from 'react-router-dom';
import { fetchCartItems } from '../../../../redux/slices/cartSlice';

const Checkout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart);
    const orderData = useSelector((state) => state.orders);

    const [billingInfo, setBillingInfo] = useState(null);
    // const [orderId, setOrderId] = useState(null);
    const [loading, setLoading] = useState(false);

    const createOrder = async (orderSummary) => {

        try {
            setLoading(true);
            const response = await dispatch(placeOrder(orderSummary)).unwrap();
            // setOrderId(response.payload.orderId.id);
            setLoading(false);
            return response;
        } catch (error) {
            console.error("Error creating order:", error);
            setLoading(false);
        }
    };


    useEffect(() => {
        dispatch(fetchCartForOrder());
    }, [dispatch]);

    const handleProceed = (billingInfo) => {
        setBillingInfo(billingInfo);
    };


    const handlePlaceOrder = async (method) => {
        if (billingInfo) {
            const orderSummary = {
                ...orderData,
                shippingAddress: billingInfo._id,
                paymentMethod: method
            };
            setLoading(true);
            try {
                const response = await createOrder(orderSummary);
                console.log(response)
                    if (response.data && response.data.id) {
                        if (method === 'Prepaid') {
                        // setOrderId(response.id);
                        const options = {
                            key: "rzp_test_5ureH41rm3YjF3",
                            amount: response.amount,
                            currency: 'INR',
                            name: "Exclusive",
                            description: "Your destination for elegant and modest fashion.",
                            order_id: response.id,
                            image: "https://www.svgrepo.com/show/530597/hat.svg",
                            prefill: {
                                name: "Rahul k",
                                email: "rahulk.softdev@gmail.com",
                                contact: "9026478761",
                            },
                            callback_url: `${serverUrl}/order/callback`,
                            // handler: function (response){
                            //     console.log(response)
                            //     alert(response.razorpay_payment_id);
                            //     alert(response.razorpay_order_id);
                            //     alert(response.razorpay_signature)
                            // },
                            // notes: {
                            //     address: "Humaira Abayas Office",
                            //     userId: "510f7de5-14de-4cd0-b6f6-2ee5528329d4",
                            //     planId: "17977236-dd0b-4ea0-b3ef-524a2e850b26",
                            // },
                            theme: {
                                color: "#DB4444",
                            },
                        };
                        const rzp1 = new window.Razorpay(options);
                        rzp1.open();
                    } else {
                        dispatch(fetchCartItems())
                        navigate('/my-account/orders');
                        toast.success(response.message)
                    }
                } else {
                    console.error("Order ID not received");
                    toast.error("Failed to create order. Please try again.");
                }
            } catch (error) {
                console.error("Error creating order:", error);
                toast.error("An error occurred while placing the order.");
            } finally {
                dispatch(fetchCartItems())
                navigate('/my-account/orders');
                setLoading(false);
            }
        } else {
            toast.error("Please select an address!");
        }
    };

    useEffect(() => {
        dispatch(fetchCartForOrder());
        if (cartItems.items.length === 0) {
            navigate('/product');
        }
    }, [dispatch, cartItems.items.length, navigate]);

    return (
        <>
            <div className='xl:px-[135px] lg:px-[100px] md:px-[60px] mb-[70px] sm:mb-[140px] px-[20px]'>
                <div className="sm:my-[80px] my-[40px]">
                    <Breadcrumbs />
                </div>
                <h2 className="sm:text-4xl text-2xl leading-[30px] font-Inter tracking-wider mb-[48px] sm:mb-[48px]">Billing Details</h2>
                <div className="checkout-page font-TenorSans  gap-4 lg:flex w-full border-black md:justify-between ">
                    <div className="left-side  border-black">
                        <BillingDetails
                            onProceed={handleProceed}
                        />
                    </div>
                    <div className="right-side sm:min-w-[350px] xl:min-w-[460px] lg:min-w-[400px] border-black">
                        <OrderSummary
                            cartItems={cartItems.items}
                            subtotal={cartItems.subtotal}
                            shipping={cartItems.shippingCharges}
                            total={cartItems.total}
                            billingInfo={billingInfo}
                            onPlaceOrder={handlePlaceOrder}
                            loading={loading}
                        />
                    </div>
                </div>
            </div>

        </>
    );
};

export default Checkout;
