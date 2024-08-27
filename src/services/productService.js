import axios from "axios";
import serverUrl from "../config/serverUrl.js";

const API_URL = serverUrl;
const token = localStorage.getItem('token');

export const fetchCategoryData = async (category) => {
    try {
        const response = await axios.get(`${API_URL}/products/${category}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
        
    } catch (error) {
        return error
    }
};


export const fetchProductById = async (id) => {
    const response = await axios.get(`${API_URL}/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data
};

export const fetchProductsByColor = async (color, productName ) => {

    const params = new URLSearchParams();
    if (color) params.append('color', color);
    if (productName) params.append('productName', productName);

    try {
        const response = await axios.get(`${API_URL}/products/name`, {
            params,
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching product by color:', error);
        throw error; // Optionally, rethrow the error or handle it differently
    }
};



export const fetchProductRating = async (productId) => {
    const response = await axios.get(`${API_URL}/products/${productId}/reviews`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};



export const fetchProducts = async ({ categoryId, subCategoryId, color, size, priceRange, page, sorting }) => {
    const token = localStorage.getItem('token');
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
    if (sorting) params.append('sorting', sorting);
    if (size && size.length > 0) params.append('size', size.join(','));
    if (page !== undefined) params.append('page', page);

    try {
        const response = await axios.get(`${API_URL}/products`, {
            params,
            headers: { Authorization: `Bearer ${token}` }
        });
        
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};
