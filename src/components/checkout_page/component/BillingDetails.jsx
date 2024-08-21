import React, { useState } from 'react';


const BillingDetails = ({ savedAddresses, onSaveAddress, onProceed }) => {
    const [billingInfo, setBillingInfo] = useState({
        firstName: '',
        lastName: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        code: '',
    });

    const [saveToAddressList, setSaveToAddressList] = useState(false);
    const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);
    const [isAddingNewAddress, setIsAddingNewAddress] = useState(false);

    const handleChange = (e) => {
        setBillingInfo({ ...billingInfo, [e.target.name]: e.target.value });
    };


    const handleAddressSelect = (index) => {
        const selectedAddress = savedAddresses[index];
        setBillingInfo(selectedAddress);
        onProceed(selectedAddress);
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
            addressLine1: '',
            addressLine2: '',
            city: '',
            state: '',
            code: '',
        });
    };



    return (
        <>
            <div className="billing-details rounded-md max-w-md">
                <h2 className="sm:text-4xl text-2xl m-2 sm:m-5 leading-[30px] tracking-wider mb-5 sm:mb-10">Billing Details</h2>
                <ul className="mb-4 space-y-2">
                    {savedAddresses.map((address, index) => (
                        <li
                            key={index}
                            className={`cursor-pointer px-4 p-2 ${selectedAddressIndex === index ? 'bg-[#754f23] text-white rounded' : ''}`}
                            onClick={() => handleAddressSelect(index)}
                        >
                            <h4 className='font-semibold'>{address.firstName} {address.lastName}</h4>
                            <p className='text-sm'>
                                {address.addressLine1}, {address.addressLine2 ? `${address.addressLine2}, ` : ''} {address.city}, {address.state}, {address.code}
                            </p>

                        </li>
                    ))}
                </ul>
                <button
                    className="bg-[#754F23] text-white py-[16px] px-[48px] text-base font-normal rounded mb-4 w-full sm:w-auto"
                    onClick={handleNewAddress}
                >
                    {isAddingNewAddress ? 'Cancel' : 'Add New Billing Address'}
                </button>
                {isAddingNewAddress && (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            required
                            value={billingInfo.firstName}
                            onChange={handleChange}
                            className="p-2 rounded w-full h-[50px] relative bg-neutral-100 outline-none"
                        />
                        <label htmlFor="firstName">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            required
                            value={billingInfo.lastName}
                            onChange={handleChange}
                            className="p-2 rounded w-full h-[50px] relative bg-neutral-100 outline-none"
                        />
                        <label htmlFor="firstName">Street Address</label>
                        <input
                            type="text"
                            name="addressLine1"
                            required
                            value={billingInfo.addressLine1}
                            onChange={handleChange}
                            className="p-2 rounded w-full h-[50px] relative bg-neutral-100 outline-none"
                        />
                        <label htmlFor="firstName">Apartment, floor, etc. (optional)</label>
                        <input
                            type="text"
                            name="addressLine2"
                            value={billingInfo.addressLine2}
                            onChange={handleChange}
                            className="p-2 rounded w-full h-[50px] relative bg-neutral-100 outline-none"
                        />
                        <label htmlFor="firstName">Town/City</label>
                        <input
                            type="text"
                            name="city"
                            required
                            value={billingInfo.city}
                            onChange={handleChange}
                            className="p-2 rounded w-full h-[50px] relative bg-neutral-100 outline-none"
                        />
                        <label htmlFor="firstName">State</label>
                        <input
                            type="text"
                            name="state"
                            required
                            value={billingInfo.state}
                            onChange={handleChange}
                            className="p-2 rounded w-full h-[50px] relative bg-neutral-100 outline-none"
                        />
                        <label htmlFor="firstName">Pincode</label>
                        <input
                            type="text"
                            name="code"
                            required
                            value={billingInfo.code}
                            onChange={handleChange}
                            className="p-2 rounded w-full h-[50px] relative bg-neutral-100 outline-none"
                        />
                        {/* <input
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
                    /> */}
                        <label className="mt-2 flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={saveToAddressList}
                                onChange={() => setSaveToAddressList(!saveToAddressList)}
                                required
                            />
                            <span>Save to address list</span>
                        </label>
                        <button type="submit" className="mt-4 bg-[#754F23] text-base font-normal text-white py-[16px] px-[48px] rounded w-full sm:w-auto">
                            {isAddingNewAddress ? 'Save Address' : 'Proceed'}
                        </button>
                    </form>
                )}
            </div>
        </>
    );
};

export default BillingDetails;
