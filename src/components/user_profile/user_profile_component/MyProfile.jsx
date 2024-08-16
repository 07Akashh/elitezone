import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData, updateUserData } from '../../../redux/slices/authSlice';

const MyProfile = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);


    const [formData, setFormData] = useState({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        phone: user.phone || '',
        pincode: user.pincode || '',
        address: user.address || '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'pincode' ? parseInt(value, 10) || '' : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting form data:', formData);
    
        try {
            await dispatch(updateUserData(formData)).unwrap();
            await dispatch(fetchUserData()).unwrap();
        } catch (error) {
            console.error('Error during user data update or fetch:', error);
        }
    };
    

    const handleReset = () => {
        setFormData({
            firstName: user.firstName || '',
            lastName: user.lastName || '',
            email: user.email || '',
            phone: user.phone || '',
            pincode: user.pincode || '',
            address: user.address || '',
        });
    };


    return (
        <div className='bg-white w-full px-5 sm:px-[40px] md:px-[80px] py-[20px] md:py-[40px] font-TenorSans'>
        <h2 className="text-xl sm:text-2xl mb-5 text-[#754F23] font-extralight">Edit Your Profile</h2>
        <div className="space-y-3">
            <form className='gap-5' onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    <div className='flex flex-col'>
                        <label htmlFor="firstName" className='mb-1'>First Name</label>
                        <input
                            placeholder={user.firstName}
                            type="text"
                            name="firstName"
                            id="firstName"
                            className='bg-[#F5F5F5] text-[#4f4f4fd6] w-full h-[40px] sm:h-[50px] px-3 sm:px-5 outline-none'
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="lastName" className='mb-1'>Last Name</label>
                        <input
                            placeholder={user.lastName}
                            type="text"
                            name="lastName"
                            id="lastName"
                            className='bg-[#F5F5F5] text-[#4f4f4fd6] w-full h-[40px] sm:h-[50px] px-3 sm:px-5 outline-none'
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="email" className='mb-1'>E-mail</label>
                        <input
                            placeholder={user.email}
                            type="email"
                            name="email"
                            id="email"
                            className='bg-[#F5F5F5] text-[#4f4f4fd6] w-full h-[40px] sm:h-[50px] px-3 sm:px-5 outline-none'
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="phone" className='mb-1'>Phone</label>
                        <input
                            placeholder={user.phone}
                            type="tel"
                            name="phone"
                            id="phone"
                            className='bg-[#F5F5F5] text-[#4f4f4fd6] w-full h-[40px] sm:h-[50px] px-3 sm:px-5 outline-none'
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="pincode" className='mb-1'>Pincode</label>
                        <input
                            placeholder={user.pincode}
                            type="number"
                            name="pincode"
                            id="pincode"
                            className='bg-[#F5F5F5] text-[#4f4f4fd6] w-full h-[40px] sm:h-[50px] px-3 sm:px-5 outline-none'
                            value={formData.pincode}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="address" className='mb-1'>Address</label>
                        <input
                            placeholder={user.address}
                            type="text"
                            name="address"
                            id="address"
                            className='bg-[#F5F5F5] text-[#4f4f4fd6] w-full h-[40px] sm:h-[50px] px-3 sm:px-5 outline-none'
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                   {/* Uncomment if password fields are needed */}
                    {/* <div className='grid grid-cols-1 md:grid-cols-1 gap-5 mt-5'>
                        <div className='flex flex-col'>
                            <label htmlFor="password" className='mb-1'>Password Changes</label>
                            <input
                                type="password"
                                name="currentPassword"
                                placeholder='Current Password'
                                id="currentPassword"
                                className='bg-[#F5F5F5] text-[#4f4f4fd6] w-full h-[50px] px-5 outline-none'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <input
                                type="password"
                                name="newPassword"
                                placeholder='New Password'
                                id="newPassword"
                                className='bg-[#F5F5F5] text-[#4f4f4fd6] w-full h-[50px] px-5 outline-none'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <input
                                type="password"
                                name="confirmNewPassword"
                                placeholder='Confirm New Password'
                                id="confirmNewPassword"
                                className='bg-[#F5F5F5] text-[#4f4f4fd6] w-full h-[50px] px-5 outline-none'
                            />
                        </div>
                    </div> */}
                <div className='mt-5 justify-end flex gap-5'>
                    <button type="button" onClick={handleReset} className=' text-base font-normal leading-normal'>Cancel</button>
                    <button type="submit" className='h-[48px] sm:h-[56px] w-[150px] sm:w-[204px] bg-[#754F23] text-white text-base font-normal leading-normal rounded-md'>Save Changes</button>
                </div>
            </form>
        </div>
    </div>
    
    );
};

export default MyProfile;
