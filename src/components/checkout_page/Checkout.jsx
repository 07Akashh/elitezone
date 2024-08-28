import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BillingDetails from './component/BillingDetails';
import OrderSummary from './component/OrderSummary';

import { addAddresses, fetchAddresses } from '../../redux/slices/addressSlice';
import { fetchCartForOrder, placeOrder } from '../../redux/slices/orderSlice';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);
    const addresses = useSelector((state) => state.addresses.data);
    const orderData = useSelector((state) => state.orders);

    const [billingInfo, setBillingInfo] = useState(null);
    // const [orderId, setOrderId] = useState(null);
    const [loading, setLoading] = useState(false);

    const createOrder = async (orderSummary) => {
        setLoading(true);
        try {
            const response = await dispatch(placeOrder(orderSummary));
            // setOrderId(response.payload.orderId.id);
            setLoading(false);
            // console.log(response)
            return response.payload.orderId;
        } catch (error) {
            console.error("Error creating order:", error);
            setLoading(false);
        }
    };

    const handleSaveAddress = async (newAddress) => {
        const response = await dispatch(addAddresses(newAddress)).unwrap();
        dispatch(fetchAddresses());
        return response.data;
    };

    useEffect(() => {
        dispatch(fetchCartForOrder());
    }, [dispatch]);

    const handleProceed = (billingInfo) => {
        setBillingInfo(billingInfo);
    };

    const handlePlaceOrder = async () => {
        if (billingInfo) {
            const orderSummary = {
                ...orderData,
                addressId: billingInfo.id,
            };
            setLoading(true);
    
            try {
                const response = await createOrder(orderSummary);
                if (response && response.id) {
                    // setOrderId(response.id);
                    const options = {
                        key: "rzp_test_5ureH41rm3YjF3",
                        amount: response.amount,
                        currency: 'INR',
                        name: "Humaira Abayas",
                        description: "Your destination for elegant and modest fashion.",
                        order_id: response.id,
                        image: "https://www.svgrepo.com/show/530597/hat.svg",
                        prefill: {
                            name: "Sachin Minde",
                            email: "sachinminde9359@gmail.com",
                            contact: "9359313945",
                        },
                        callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
                        handler: function (response){
                            console.log(response)
                            alert(response.razorpay_payment_id);
                            alert(response.razorpay_order_id);
                            alert(response.razorpay_signature)
                        },
                        // notes: {
                        //     address: "Humaira Abayas Office",
                        //     userId: "510f7de5-14de-4cd0-b6f6-2ee5528329d4",
                        //     planId: "17977236-dd0b-4ea0-b3ef-524a2e850b26",
                        // },
                        theme: {
                            color: "#3399cc",
                        },
                    };

                    const rzp1 = new window.Razorpay(options);
                    rzp1.open();
                } else {
                    console.error("Order ID not received");
                    toast.error("Failed to create order. Please try again.");
                }
            } catch (error) {
                console.error("Error creating order:", error);
                toast.error("An error occurred while placing the order.");
            } finally {
                setLoading(false);
            }
        } else {
            toast.error("Please select an address!");
        }
    };
    

    return (
        <>
            <ToastContainer />
            <div className="checkout-page font-TenorSans sm:flex w-full border-black md:justify-between px-2 sm:px-10">
                <div className="left-side border-black">
                    <BillingDetails
                        savedAddresses={addresses}
                        onSaveAddress={handleSaveAddress}
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
        </>
    );
};

export default Checkout;
