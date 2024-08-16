import axios from "axios";

const API_URL = 'http://44.201.127.209:4000/v1';
const token = localStorage.getItem('token');

export const fetchUser = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_URL}/user`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data.data.dataValues;
};

export const updateUser = (formData) => {
    const token = localStorage.getItem('token');
    console.log(formData)
    const response = axios.patch(`${API_URL}/user`, {
        'firstName': formData.firstName,
        'lastName': formData.lastName,
        'pincode': formData.pincode,
        'address': formData.address,
        'phone': formData.phone
    }, {
        headers: { Authorization: `Bearer ${token}` }
    })
    return response.data;
}

export const fetchWishlists = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_URL}/user/wishlist`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
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
    const response = await axios.delete(`${API_URL}/user/wishlist/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};