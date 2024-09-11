import axios from "axios";
import serverUrl from "../config/serverUrl.js";


const API_URL = serverUrl;

// const token = localStorage.getItem('token');

export const fetchAddress = async () => {
    const token = localStorage.getItem('token');

    const response = await axios.get(`${API_URL}/order/address`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

export const addAddress = async (formData) => {
    const token = localStorage.getItem('token');
    
    try {
        const response = await axios.post(`${API_URL}/order/address`, formData, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const removeAddress = async (id) => {
    const token = localStorage.getItem('token');
    
    try {
        const response = await axios.delete(`${API_URL}/order/address/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
