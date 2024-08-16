import axios from 'axios';

const API_URL = 'http://44.201.127.209:4000/v1/user';
const token = localStorage.getItem('token');


export const getCartItems = async () => {
    const token = localStorage.getItem('token');
    // console.log(token)
    try {
        const response = await axios.get(`${API_URL}/cart`, {
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

export const updateCartQuantity = async (productId, quantity) => {
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

export const addItemToCart = async (productId, quantity) => {
    try {
        const response = await axios.post(`${API_URL}/cart`, { productId, quantity }, {
            headers: { Authorization: `Bearer ${token}` }
        });;
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