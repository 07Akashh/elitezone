import { useState, useRef, useCallback } from 'react';
import { updateQuantity, removeItem, addItem } from '../redux/slices/cartSlice';
import { updateCartQuantity, removeCartItem } from '../services/cartService';

export const useCartHandlers = (dispatch) => {
    const [updatingItemId, setUpdatingItemId] = useState(null);
    const debounceTimeoutRef = useRef({});

    const handleQuantityChange = useCallback((id, quantity, setQuantityInputs) => {
        setQuantityInputs((prev) => ({ ...prev, [id]: quantity }));

        if (debounceTimeoutRef.current[id]) {
            clearTimeout(debounceTimeoutRef.current[id]);
        }

        debounceTimeoutRef.current[id] = setTimeout(async () => {
            const quantityNumber = Number(quantity);
            dispatch(updateQuantity({ id, quantity: quantityNumber }));
            setUpdatingItemId(id);

            try {
                await updateCartQuantity(id, quantityNumber);
            } catch (error) {
                console.error("Error updating quantity:", error);
                dispatch(updateQuantity({ id, quantity: quantityNumber - 1 }));
            } finally {
                setUpdatingItemId(null);
            }
        }, 800);
    }, [dispatch]);

    const handleRemoveItem = useCallback(async (id) => {
        setUpdatingItemId(id);
        dispatch(removeItem({ id }));

        try {
            await removeCartItem(id);
        } catch (error) {
            console.error("Error removing item:", error);
            dispatch(addItem(id));
        } finally {
            setUpdatingItemId(null);
        }
    }, [dispatch]);

    return { handleQuantityChange, handleRemoveItem, updatingItemId };
};
