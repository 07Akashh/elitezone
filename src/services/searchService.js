import axios from "axios";


const API_URL = 'http://18.204.217.233:4000/v1';

/**
 * Fetch products based on search query
 * @param {string} query - The search query string
 * @returns {Promise<Object>} - The response from the API
 */
export const fetchProductsByQuery = async (query) => {
    try {
        const response = await axios.get(`${API_URL}/products/search`, {
            params: {
                query,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};