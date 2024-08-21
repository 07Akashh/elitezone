import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import productReducer from './slices/productSlice';
import cartReducer from './slices/cartSlice';
import authReducer from './slices/authSlice';
import wishListReducer from './slices/wishListSlice'
import addressReducer from './slices/addressSlice';
import orderReducer from './slices/orderSlice'

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    auth: authReducer,
    wishlist: wishListReducer,
    addresses: addressReducer,
    orders: orderReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
