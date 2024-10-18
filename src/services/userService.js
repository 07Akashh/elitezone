import axios from "axios";
import serverUrl from "../config/serverUrl.js";

const API_URL = serverUrl;
const token = localStorage.getItem('token');

export const fetchUser = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_URL}/user`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data.data;
};

export const updateUser = (formData) => {
    const token = localStorage.getItem('token');
try {
    const response = axios.patch(`${API_URL}/user`, {
        'firstName': formData.firstName,
        'lastName': formData.lastName,
        'pincode': formData.pincode,
        'address': formData.address,
        'phone': formData.phone,
        'email': formData.email
    }, {
        headers: { Authorization: `Bearer ${token}` }
    })
    return response;
} catch (error) {
    throw error;
}
}

export const fetchWishlists = async () => {
    const token = localStorage.getItem('token');
    try {
        const response = await axios.get(`${API_URL}/user/wishlist`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            console.log('Server responded with a status other than 2xx:', error.response.status);
            console.log('Data:', error.response.data);
            console.log('Headers:', error.response.headers);
        } else if (error.request) {
            console.log('Request made but no response received:', error.request);
        } else {
            console.log('Error setting up the request:', error.message);
        }
        console.log('Config:', error.config);
    }
};

export const addWishlistItem = async (id) => {
    try {
        const response = await axios.put(`${API_URL}/user/wishlist/${id}`, {}, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.error('Error adding item to wishlist:', error);
        throw error;
    }
};
export const deleteWishlistItem = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/user/wishlist/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.error('Error adding item to wishlist:', error);
        throw error;
    }

};