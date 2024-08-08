import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProductRating } from '../../services/productService';

const initialState = {
    reviewsAndRatings: [],
    loading: false,
    error: null,
};

export const fetchRating = createAsyncThunk(
    'ratings/fetchRating',
    async (id) => {
        console.log(id)
        const response = await fetchProductRating(id);
        if (!response || !response.data) {
            throw new Error('Failed to fetch product ratings');
        }
        const reviews = response.data;
        const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
        return { id, reviews, rating: averageRating };
    }
);

const ratingSlice = createSlice({
    name: 'ratings',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRating.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRating.fulfilled, (state, action) => {
                const { id, reviews, rating } = action.payload;
                const existingIndex = state.reviewsAndRatings.findIndex(item => item.id === id);

                if (existingIndex >= 0) {
                    state.reviewsAndRatings[existingIndex] = { id, reviews, rating };
                } else {
                    state.reviewsAndRatings.push({ id, reviews, rating });
                }

                state.loading = false;
            })
            .addCase(fetchRating.rejected, (state, action) => {
                console.error('Failed to fetch rating:', action.error.message);
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default ratingSlice.reducer;
