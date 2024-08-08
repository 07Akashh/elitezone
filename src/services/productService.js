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
    const response=await axios.get(`${API_URL}/products/${id}`, {
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