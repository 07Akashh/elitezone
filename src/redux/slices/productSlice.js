// src/redux/slices/productSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { demoProducts } from '../../demo';

const initialState = {
  products: demoProducts,
  selectedProduct: {
    id: null,
    colors: [],
    sizes: [],
  },
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    selectProduct: (state, action) => {
      const selectedProduct = state.products.find(product => product.id === action.payload);
      if (selectedProduct) {
        state.selectedProduct = {
          name: selectedProduct.name,
          rating:selectedProduct.rating,
          price:selectedProduct.price,
          category:selectedProduct.category,
          images:selectedProduct.images,
          description:selectedProduct.description,
          id: selectedProduct.id,
          colors: selectedProduct.colors || [],
          sizes: selectedProduct.sizes || [],
        };
      } else {
        state.selectedProduct = {
          id: null,
          colors: [],
          sizes: [],
        };
      }
    },
  },
});

export const { setProducts, selectProduct } = productSlice.actions;
export default productSlice.reducer;
