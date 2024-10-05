import axios from "axios";
import serverUrl from "../config/serverUrl.js";


const API_URL = serverUrl;
const token = localStorage.getItem('token');

export const fetchProductReview = async (productId) => {
    try {
        const response = await axios.get(`${API_URL}/products/${productId}/reviews`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        return error
    }
};

export const postProductReview = async (productId, data, imageFiles) => {
    const formData = new FormData();

    if (imageFiles.length > 0) {
        imageFiles.forEach((file) => {
            formData.append('files', file);
        });
    }

    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            formData.append(key, data[key]);
        }
    }

    const response = await axios.post(`${API_URL}/products/${productId}/reviews`, formData, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        }
    });

    return response.data;
};
