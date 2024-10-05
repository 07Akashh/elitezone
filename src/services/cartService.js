import axios from 'axios';
import serverUrl from "../config/serverUrl.js";

const API_URL = `${serverUrl}/user`;


export const getCartItems = async () => {
    const token = localStorage.getItem('token');
    // console.log(token)
    try {
        const response = await axios.get(`${API_URL}/cart`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error('Error response data:', error.response.data);
            console.error('Error response status:', error.response.status);
            console.error('Error response headers:', error.response.headers);
        } else if (error.request) {
            console.error('Error request:', error.request);
        } else {
            console.error('Error message:', error.message);
        }
        throw error;
    }
};

export const updateCartQuantity = async (productId, quantity ) => {
    
    const token = localStorage.getItem('token');
    try {
        const response = await axios.patch(`${API_URL}/cart/${productId}`, { quantity },{
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.error("Error updating cart quantity:", error);
        throw error;
    }
};

export const removeCartItem = async (productId) => {
    const token = localStorage.getItem('token');
    try {
        const response = await axios.delete(`${API_URL}/cart/${productId}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.error("Error removing cart item:", error);
        throw error;
    }
};

export const addItemToCart = async (productId, quantity, size) => {
    const token = localStorage.getItem('token');
    try {
        const response = await axios.post(`${API_URL}/cart`, { productId, quantity, size }, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error('Error response data:', error.response.data);
            console.error('Error response status:', error.response.status);
            console.error('Error response headers:', error.response.headers);
        } else if (error.request) {
            console.error('Error request:', error.request);
        } else {
            console.error('Error message:', error.message);
        }
        throw error;
    }
};