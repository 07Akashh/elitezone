import React, { useState } from 'react';

const UserDetailsModal = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        pincode: '',
        address: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: name === 'pincode' ? parseInt(value, 10) || '' : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className='text-black text-4xl font-PlayfairDisplay font-extrabold text-center pb-2'>Additional Details</h2>
                <form onSubmit={handleSubmit} className='text-xl text-center'>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className='w-full border-b mt-[15px] outline-none'
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className='w-full border-b mt-[15px] outline-none'
                        required
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                        className='w-full border-b mt-[15px] outline-none'
                        required
                    />
                    <input
                        type="number"
                        name="pincode"
                        placeholder="Pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        className='w-full border-b mt-[15px] outline-none'
                        required
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className='w-full border-b mt-[15px] outline-none'
                        required
                    />
                    <div className="text-center">
                        <button type="submit" className='mt-[23px] text-lg font-semibold bg-[#754F23] text-white rounded-xl px-10 py-1'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserDetailsModal;
