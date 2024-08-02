import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity, removeItem, addItem } from '../redux/slices/cartSlice';
import Breadcrumbs from '../shared/Breadcrumbs';
import { updateCartQuantity, removeCartItem } from '../services/cartService';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    const handleQuantityChange = async (id, quantity) => {
        const quantityNumber = Number(quantity);
        dispatch(updateQuantity({ id, quantity: quantityNumber }));

        try {
            await updateCartQuantity(id, quantityNumber);
        } catch (error) {
            console.error("Error updating quantity:", error);
            dispatch(updateQuantity({ id, quantity: quantityNumber - 1 }));
        }
    };

    const handleRemoveItem = async (id) => {
        dispatch(removeItem({ id }));

        try {
            await removeCartItem(id);
        } catch (error) {
            console.error("Error removing item:", error);
            dispatch(addItem(id));
        }
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => {
            const itemPrice = item.offer ? item.offer.discountPrice : item.product.price;
            return total + itemPrice * item.quantity;
        }, 0).toFixed(2);
    };

    return (
        <div className="py-10 pl-10 pr-6">
            <Breadcrumbs />
            <div className='mb-5 font-TenorSans'>
                <div className="flex justify-center py-5 bg-white">
                    <div className="w-1/4 text-center">Product</div>
                    <div className="w-1/4 text-center">Price</div>
                    <div className="w-1/4 text-center">Quantity</div>
                    <div className="w-1/4 text-center">Subtotal</div>
                </div>
                <ul className="mb-4">
                    {cartItems.map((item) => (
                        <li key={item.id} className="flex justify-around items-center py-3 my-5 border-b font-TenorSans bg-white">
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
                                    value={item.quantity}
                                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                    className="p-1 w-16 border rounded border-black"
                                />
                            </div>
                            <div className="w-1/4 text-center pl-14">
                                ${item.offer ? item.offer.discountPrice.toFixed(2) : item.product.price.toFixed(2)}
                                <button
                                    onClick={() => handleRemoveItem(item.id)}
                                    className="bg-red-500 text-white h-6 w-6 ml-1 rounded-full text-center"
                                >
                                    x
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="text-right text-xl">Subtotal: ${calculateSubtotal()}</div>
            </div>
        </div>
    );
};

export default Cart;
