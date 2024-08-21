import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCartItems } from '../../../redux/slices/cartSlice';

const CartItem = ({ item, quantityInputs, handleQuantityChange, handleRemoveItem, updatingItemId, index }) => {
    const dispatch = useDispatch();

    const [itemPrice, setItemPrice] = useState(item.product.price);


    useEffect(() => {
        // Update itemPrice when discountPrice is available
        if (item.offer && Array.isArray(item.offer) && item.offer[0]?.discountPrice !== null) {
            setItemPrice(item.offer[0]?.discountPrice || item.product.price);
        } else {
            setItemPrice(item.product.price);
        }
    }, [item.offer, item.product.price]);
    const totalPrice = itemPrice * (quantityInputs[item.id] || item.quantity);



    const handleRemove = async (itemId) => {
        await handleRemoveItem(itemId);
        dispatch(fetchCartItems())
    };


    return (
        <li key={item.id} className={`flex px-5 flex-row items-center py-3 my-5 border-b font-TenorSans bg-white ${updatingItemId === item.id ? 'opacity-50' : ''}`}>
            <div className='w-full sm:w-1/4 flex items-center justify-between sm:justify-start'>
                {/* <img src={item.image || 'default-image-path.jpg'} alt={item.product.productName} className="w-12 h-12 sm:w-16 sm:h-16 object-fit" /> */}
                <div className="text-center sm:text-left ml-2 text-sm sm:text-base">{index + 1}. {item.product.productName}</div>
            </div>
            <div className="w-full sm:w-1/4 text-center text-sm sm:text-base">
                &#8377;{item.product.price.toFixed(2)}
            </div>
            <div className="w-full sm:w-1/4 text-center text-sm sm:text-base">
                <input
                    type="number"
                    min="1"
                    value={quantityInputs[item.id] || item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    className="p-1 w-16 border rounded border-black text-center text-sm sm:text-base"
                    disabled={updatingItemId === item.id}
                />
            </div>
            <div className="w-full sm:w-1/4 text-center sm:gap-x-2 flex flex-row items-center justify-center text-sm sm:text-base">
                <div>&#8377;{totalPrice.toFixed(2)}</div>
                <button onClick={() => handleRemove(item.id)} className="bg-[#754f23] font-sans text-white h-6 w-6 sm:h-8 sm:w-8 ml-1 rounded-full text-center text-sm sm:text-base"> &#x2717; </button>
            </div>
        </li>

    );
};

export default CartItem;
