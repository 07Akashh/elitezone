import axios from "axios";




const API_URL = 'http://44.201.127.209:4000/v1';
const token = localStorage.getItem('token');

export const fetchCategoryData = async (category) => {
    const response = await axios.get(`${API_URL}/products/${category}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};


export const fetchProductById = async (id) => {
    const response = await axios.get(`${API_URL}/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data
};

export const fetchProductRating = async (productId) => {
    const response = await axios.get(`${API_URL}/products/${productId}/reviews`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

export const fetchProducts = async ({ categoryId, subCategoryId, color, size, priceRange, page, sorting }) => {
    const params = new URLSearchParams();

    if (priceRange && priceRange.length > 0) {
        const { lowPrice, highPrice } = priceRange[0];

        if (lowPrice !== undefined) {
            params.append('lowPrice', lowPrice);
        }

        if (highPrice !== undefined) {
            params.append('highPrice', highPrice);
        }
    }
    const cleanedCategoryId = categoryId.trim().replace(/\s+/g, '');    


    if (cleanedCategoryId) params.append('categoryId', categoryId);
    if (subCategoryId) params.append('subCategoryId', subCategoryId);
    if (color) params.append('color', color);
    if (sorting) params.append('sorting', sorting)
    if (size && size.length > 0) params.append('size', size.join(','));
    if (priceRange && priceRange.length > 0) params.append('priceRange', priceRange.join(','));
    if (page !== undefined) params.append('page', page);

    try {
        const response = await axios.get(`${API_URL}/products`, { params });
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};