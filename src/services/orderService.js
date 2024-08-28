import axios from "axios";
import serverUrl from "../config/serverUrl.js";

const API_URL = serverUrl;
// const token = localStorage.getItem('token');

export const createOrder = async (orderData) => {
    // console.log(orderData)
    const token = localStorage.getItem('token');
    
    const response = await axios.post(`${API_URL}/order`, orderData, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};


export const getOrder = async () => {
    const token = localStorage.getItem('token');

    const response = await axios.get(`${API_URL}/order`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};
