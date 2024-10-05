import axios from "axios";
import serverUrl from "../config/serverUrl";



const API_URL = `${serverUrl}`;
const token = localStorage.getItem('adminToken');


export const upload = async (imageFiles) => {
    const formData = new FormData();

    imageFiles.forEach((file) => {
        formData.append('files', file);
    });

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
        },
    };

    try {
        const response = await axios.post(`${API_URL}/admin/upload`, formData, config);
        return response.data.images;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};


export const uploadPost = async (imageFiles) => {
    const userToken = localStorage.getItem('token');

    const formData = new FormData();

    imageFiles.forEach((file) => {
        formData.append('files', file);
    });

    const config = {
        headers: {
            Authorization: `Bearer ${userToken}`,
            'Content-Type': 'multipart/form-data',
        },
    };

    try {
        const response = await axios.post(`${API_URL}/products/upload`, formData, config);
        return response.data.images;

    } catch (error) {
        throw error.response?.data || error.message;
    }
};
