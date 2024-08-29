import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createOrder, getOrder } from '../../services/orderService';
import { getCartItems } from '../../services/cartService';


export const fetchCartForOrder = createAsyncThunk('order/fetchCart', async () => {
    const response = await getCartItems();
    return response.data;
});


export const placeOrder = createAsyncThunk('order/placeOrder', async (orderData) => {
    const response = await createOrder(orderData);
    return response.data;
});

export const getOrders = createAsyncThunk('order/getOrders', async () => {
    const response = await getOrder();
    return response;
})
const orderSlice = createSlice({
    name: 'order',
    initialState: {
        orderItems: [],
        cartSubtotal: 0,
        shipingCharge: 0,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCartForOrder.pending, (state) => {
                return state
            })
            .addCase(fetchCartForOrder.fulfilled, (state, action) => {
                const { items, subtotal, shipingCharges } = action.payload;

                const formattedItems = items.map(item => {
                    const product = item.product;
                    const offer = item.offer[0];

                    return {
                        productId: product.id,
                        originalPrice: product.price,
                        finalPrice: offer ? offer.discountPrice : product.price,
                        quantity: item.quantity,
                        offerId: offer ? offer.id : null,
                    };
                });

                state.orderItems = formattedItems;
                state.cartSubtotal = subtotal;
                state.shippingCharge = shipingCharges;
            })
            .addCase(fetchCartForOrder.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(placeOrder.pending, (state) => {
                state.orderStatus = 'loading';
            })
            .addCase(placeOrder.fulfilled, (state, action) => {
                state.orderStatus = 'succeeded';
                state.orderResponse = action.payload;
            })
            .addCase(placeOrder.rejected, (state, action) => {
                state.orderStatus = 'failed';
                state.error = action.error.message;
            })
            .addCase(getOrders.pending, (state) => {
                state.getOrderStatus = 'loading';
            })
            .addCase(getOrders.fulfilled, (state, action) => {
                state.getOrderStatus = 'succeeded';
                state.getOrders = action.payload;
            })
            .addCase(getOrders.rejected, (state, action) => {
                state.getOrderStatus = 'failed';
                state.error = action.error.message;
            });
    },
});

export default orderSlice.reducer;
