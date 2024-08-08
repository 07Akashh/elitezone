import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Breadcrumbs from '../../shared/Breadcrumbs';
import { useCartHandlers } from '../../hooks/useCartHandler';
import CartItem from './cart_component/CartItem';
import CartTotal from './cart_component/CartTotal';



const SHIPPING_THRESHOLD = 0;
const SHIPPING_CHARGE = 0;

const Cart = () => {
    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.cart.items);
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();

    const [quantityInputs, setQuantityInputs] = useState({});
    const { handleQuantityChange, handleRemoveItem, updatingItemId } = useCartHandlers(dispatch);

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => {
            const itemPrice = item.offer ? item.offer.discountPrice : item.product.price;
            return total + itemPrice * item.quantity;
        }, 0).toFixed(2);
    };

    if (!user) {
        return <p className='font-TenorSans text-center'>Please login first to see your Cart</p>;
    }

    const subtotal = parseFloat(calculateSubtotal());
    const shippingCharge = subtotal >= SHIPPING_THRESHOLD ? 0 : SHIPPING_CHARGE;
    const total = subtotal + shippingCharge;

    return (
        <div className="py-10 pl-10 pr-6">
            <Breadcrumbs />
            {cartItems.length === 0 ? (
                <div className="text-center text-lg font-TenorSans">
                    No cart items. Please add to cart first.
                </div>
            ) : (
                <div className='mb-5 font-TenorSans'>
                    <div className="flex justify-center py-5 bg-white">
                        <div className="w-1/4 text-center">Product</div>
                        <div className="w-1/4 text-center">Price</div>
                        <div className="w-1/4 text-center">Quantity</div>
                        <div className="w-1/4 text-center">Subtotal</div>
                    </div>
                    <ul className="mb-4">
                        {cartItems.map((item) => (
                            <CartItem
                                key={item.id}
                                item={item}
                                quantityInputs={quantityInputs}
                                handleQuantityChange={(id, value) => handleQuantityChange(id, value, setQuantityInputs)}
                                handleRemoveItem={handleRemoveItem}
                                updatingItemId={updatingItemId}
                            />
                        ))}
                    </ul>
                </div>
            
            )}
            <div>
                <button onClick={() => navigate('/')} className='bg-transparent border border-black rounded py-[16px] px-[48px] text-lg font-TenorSans focus:bg-[#754F23] focus:text-white focus::border-[#754F23]'>Return To Shop</button>
            </div>
            {cartItems.length > 0 && (
                <CartTotal
                    subtotal={subtotal}
                    shippingCharge={shippingCharge}
                    total={total}
                    navigate={navigate}
                />
            )}
        </div>
    );
};

export default Cart;







    // useEffect(() => {
    //     if (user) {
    //         const fetchCart = async () => {
    //             try {
    //                 const items = await getCartItems();
    //                 items.data.items.forEach(item => dispatch(addItem(item)));
    //             } catch (error) {
    //                 console.error("Error fetching cart items:", error);
    //             }
    //         };

    //         fetchCart();
    //     }
    // }, [user, dispatch]);
