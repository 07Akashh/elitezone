import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteAddress, fetchAddresses } from '../../../redux/slices/addressSlice';
import { ImBin } from "react-icons/im";

const AddressBook = () => {
    const dispatch = useDispatch();
    const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);

    const addresses = useSelector((state) => state.addresses.data) || [];
    const error = useSelector((state) => state.addresses.error);
    const loading = useSelector((state) => state.addresses.loading);

    useEffect(() => {
        dispatch(fetchAddresses());
    }, [dispatch]);

    const handleDeleteAddress = async (e, addressId) => {
        e.stopPropagation();
        try {
            const response = await dispatch(deleteAddress(addressId)).unwrap();
            toast.success(response.message);
            dispatch(fetchAddresses());
        } catch (error) {
            console.log(error);
            dispatch(fetchAddresses());
            toast.error("Failed to delete address. Please try again.");
        }
    };

    const handleAddressSelect = (index) => {
        setSelectedAddressIndex(index);
    };

    return (
        <>
            <ToastContainer />
            <div className='bg-white w-full py-[40px] font-TenorSans'>
                <h2 className="mx-5 text-2xl mb-5 text-[#754F23] font-extralight">My Address</h2>
                <div>
                    {loading ? (
                        <p className='text-center'>Loading...</p>
                    ) : error ? (
                        <p className="text-red-500">Error: {error}</p>
                    ) : addresses.length > 0 ? (
                        <ul className="mb-4 space-y-2 text-white">
                            {addresses.map((address, index) => (
                                <li
                                    key={index}
                                    className={`cursor-pointer bg-[#754F23] flex justify-between py-5  px-4 ${selectedAddressIndex === index ? 'bg-[#754f23] text-white rounded' : ''}`}
                                    onClick={() => handleAddressSelect(index)}
                                >
                                    <div>
                                        <h4 className='font-semibold mb-2'>{address.firstName} {address.lastName}</h4>
                                        <p className='text-sm'>
                                            {address.addressLine1}, {address.addressLine2 ? `${address.addressLine2}, ` : ''} {address.city}, {address.state}, {address.code}
                                        </p>
                                    </div>
                                    <button
                                        className="bg-transparent text-[white] px-2 py-1 rounded mt-2 float-end"
                                        onClick={(e) => handleDeleteAddress(e, address.id)}
                                    >
                                        <ImBin />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className='font-TenorSans text-center'>No addresses found.</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default AddressBook;
