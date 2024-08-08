import React from 'react';

const CartItem = ({ item, quantityInputs, handleQuantityChange, handleRemoveItem, updatingItemId }) => {
    const itemPrice = item.offer ? item.offer.discountPrice : item.product.price;

    return (
        <li key={item.id} className={`flex justify-around items-center py-3 my-5 border-b font-TenorSans bg-white ${updatingItemId === item.id ? 'opacity-50' : ''}`}>
            <div className='w-1/4 flex'>
                <div className="flex justify-between">
                    <img src={item.image || 'default-image-path.jpg'} alt={item.product.productName} className="ml-10 w-16 h-16 object-cover" />
                </div>
                <div className="w-1/2 text-center my-auto">{item.product.productName}</div>
            </div>
            <div className="w-1/4 text-center">
                ${item.product.price.toFixed(2)}
            </div>
            <div className="w-1/4 text-center">
                <input
                    type="number"
                    min="1"
                    value={quantityInputs[item.id] || item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    className="p-1 w-16 border rounded border-black"
                    disabled={updatingItemId === item.id}
                />
            </div>
            <div className="w-1/4 text-center flex justify-between px-28">
                <div> ${itemPrice.toFixed(2)}</div>
                <button onClick={() => handleRemoveItem(item.id)} className="bg-[#754f23] font-sans text-white h-6 w-6 ml-1 rounded-full text-center"> &#x2717; </button>
            </div>
        </li>
    );
};

export default CartItem;
