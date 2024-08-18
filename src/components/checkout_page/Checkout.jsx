import React, { useState } from 'react';
import BillingDetails from './component/BillingDetails';
import OrderSummary from './component/OrderSummary';

const Checkout = () => {
    const [savedAddresses, setSavedAddresses] = useState([
        { firstName: "John", lastName: "Doe", streetAddress: "123 Main St", apartment: "Apt 1", city: "New York", phoneNumber: "1234567890", email: "john.doe@example.com" },
        // Add more demo addresses as needed
    ]);

    const [billingInfo, setBillingInfo] = useState(null);

    const handleSaveAddress = (newAddress) => {
        setSavedAddresses([...savedAddresses, newAddress]);
    };

    const handleProceed = (billingInfo) => {
        setBillingInfo(billingInfo);
    };

    const handlePlaceOrder = () => {
        console.log("Order placed with billing info:", billingInfo);
    };

    const cartItems = [
        { name: "Item 1", price: 100 },
        { name: "Item 2", price: 200 },
    ];

    const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
    const shipping = 50;
    const total = subtotal + shipping;

    return (
        <div className="checkout-page flex flex-col md:flex-row gap-4 p-4">
            <div className="left-side w-full md:w-1/3">
                <BillingDetails
                    savedAddresses={savedAddresses}
                    onSaveAddress={handleSaveAddress}
                    onProceed={handleProceed}
                />
            </div>
            <div className="right-side w-full md:w-2/3">
                <OrderSummary
                    cartItems={cartItems}
                    subtotal={subtotal}
                    shipping={shipping}
                    total={total}
                    billingInfo={billingInfo}
                    onPlaceOrder={handlePlaceOrder}
                />
            </div>
        </div>
    );
};

export default Checkout;
