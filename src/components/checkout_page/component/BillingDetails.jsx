import React, { useState } from 'react';

const BillingDetails = ({ savedAddresses, onSaveAddress, onProceed }) => {
    const [billingInfo, setBillingInfo] = useState({
        firstName: '',
        lastName: '',
        streetAddress: '',
        apartment: '',
        city: '',
        phoneNumber: '',
        email: '',
    });

    const [saveToAddressList, setSaveToAddressList] = useState(false);
    const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);
    const [isAddingNewAddress, setIsAddingNewAddress] = useState(false);

    const handleChange = (e) => {
        setBillingInfo({ ...billingInfo, [e.target.name]: e.target.value });
    };


    const handleAddressSelect = (index) => {
        const selectedAddress = savedAddresses[index];
        console.log(selectedAddress)
        setBillingInfo(selectedAddress);
        setSelectedAddressIndex(index);
        setIsAddingNewAddress(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (saveToAddressList) {
            onSaveAddress(billingInfo);
        }
        onProceed(billingInfo);
    };

    const handleNewAddress = () => {
        setIsAddingNewAddress(!isAddingNewAddress);
        setSelectedAddressIndex(null);
        setBillingInfo({
            firstName: '',
            lastName: '',
            streetAddress: '',
            apartment: '',
            city: '',
            phoneNumber: '',
            email: '',
        });
    };

    return (
        <div className="billing-details p-4 border rounded-md shadow-md max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
            <ul className="mb-4 space-y-2">
                {savedAddresses.map((address, index) => (
                    <li
                        key={index}
                        className={`cursor-pointer p-2 ${selectedAddressIndex === index ? 'bg-gray-200' : ''}`}
                        onClick={() => handleAddressSelect(index)}
                    >
                        {address.streetAddress}, {address.city}
                    </li>
                ))}
            </ul>
            <button
                className="bg-blue-500 text-white py-2 px-4 rounded mb-4 w-full sm:w-auto"
                onClick={handleNewAddress}
            >
                {isAddingNewAddress ? 'Cancel' : 'Add New Billing Address'}
            </button>
            {isAddingNewAddress && (
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        required
                        value={billingInfo.firstName}
                        onChange={handleChange}
                        className="p-2 border rounded"
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        required
                        value={billingInfo.lastName}
                        onChange={handleChange}
                        className="p-2 border rounded"
                    />
                    <input
                        type="text"
                        name="streetAddress"
                        placeholder="Street Address"
                        required
                        value={billingInfo.streetAddress}
                        onChange={handleChange}
                        className="p-2 border rounded"
                    />
                    <input
                        type="text"
                        name="apartment"
                        placeholder="Apartment, floor, etc. (optional)"
                        value={billingInfo.apartment}
                        onChange={handleChange}
                        className="p-2 border rounded"
                    />
                    <input
                        type="text"
                        name="city"
                        placeholder="Town/City"
                        required
                        value={billingInfo.city}
                        onChange={handleChange}
                        className="p-2 border rounded"
                    />
                    <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        required
                        value={billingInfo.phoneNumber}
                        onChange={handleChange}
                        className="p-2 border rounded"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        value={billingInfo.email}
                        onChange={handleChange}
                        className="p-2 border rounded"
                    />
                    <label className="mt-2 flex items-center space-x-2">
                        <input
                            type="checkbox"
                            checked={saveToAddressList}
                            onChange={() => setSaveToAddressList(!saveToAddressList)}
                        />
                        <span>Save to address list</span>
                    </label>
                    <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded w-full sm:w-auto">
                        {isAddingNewAddress ? 'Save Address' : 'Proceed'}
                    </button>
                </form>
            )}
        </div>
    );
};

export default BillingDetails;
