import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCategoryData, fetchProductById, fetchProductRating } from '../../services/productService';

const initialState = {
  products: [],
  selectedProduct: {
    id: null,
    name: '',
    rating: 0,
    price: 0,
    category: '',
    images: [],
    description: '',
    colors: [],
    sizes: [],
    reviews: [],
  },
  trending: {
    data: [],
    isLoading: false,
    error: null,
  },
  newarrivals: {
    data: [],
    isLoading: false,
    error: null,
  },
  embroideredAbaya: {
    data: [],
    isLoading: false,
    error: null,
  },
};

export const fetchCategory = createAsyncThunk(
  'products/fetchCategory',
  async (category) => {
    const response = await fetchCategoryData(category);
    return { category, data: response.data };
  }
);

export const fetchProduct = createAsyncThunk(
  'products/fetchProduct',
  async (id) => {
    const [productResponse, ratingResponse] = await Promise.all([
      fetchProductById(id),
      fetchProductRating(id),
    ]);
    
    const product = productResponse;
    const reviews = ratingResponse.data;
    const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
    
    return { ...product, reviews, averageRating };
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    selectProduct: (state, action) => {
      const productId = action.payload;
      let foundProduct = null;

      Object.keys(state).forEach(category => {
        if (state[category]?.data) {
          foundProduct = state[category].data.find(product => product.id === productId);
          if (foundProduct) {
            state.selectedProduct = {
              id: foundProduct.id,
              name: foundProduct.productName,
              rating: foundProduct.rating || 0,
              price: foundProduct.price,
              category: foundProduct.categoryId,
              images: [foundProduct.images],
              description: foundProduct.description,
              colors: [foundProduct.color],
              sizes: [],
              reviews: foundProduct.reviews || [],
            };
          }
        }
      });

      if (!foundProduct) {
        state.selectedProduct = {
          id: null,
          name: '',
          rating: 0,
          price: 0,
          category: '',
          images: [],
          description: '',
          colors: [],
          sizes: [],
          reviews: [],
        };
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state, action) => {
        const category = action.meta.arg;
        if (state[category]) {
          state[category].isLoading = true;
          state[category].error = null;
        }
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        const category = action.payload.category;
        if (state[category]) {
          state[category].isLoading = false;
          state[category].data = action.payload.data;
        }
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        const category = action.meta.arg;
        if (state[category]) {
          state[category].isLoading = false;
          state[category].error = action.error.message;
        }
      })
      .addCase(fetchProduct.pending, (state) => {
        state.selectedProduct = {
          id: null,
          name: '',
          rating: 0,
          price: 0,
          category: '',
          images: [],
          description: '',
          colors: [],
          sizes: [],
          reviews: [],
        };
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        const product = action.payload;
        state.selectedProduct = {
          id: product.data.product.id,
          name: product.data.product.productName,
          rating: product.data.averageRating || 0,
          price: product.data.product.price,
          category: product.data.product.categoryId,
          images: [product.data.images],
          description: product.data.product.description,
          colors: [product.data.colors],
          sizes: [],
          reviews: product.reviews || [],
        };
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.selectedProduct = {
          id: null,
          name: '',
          rating: 0,
          price: 0,
          category: '',
          images: [],
          description: '',
          colors: [],
          sizes: [],
          reviews: [],
        };
      });
  },
});

export const { setProducts, selectProduct } = productSlice.actions;
export default productSlice.reducer;
