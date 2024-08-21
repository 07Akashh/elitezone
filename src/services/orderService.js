import axios from "axios";

const API_URL = 'http://18.204.217.233:4000/v1';
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

    const response = await axios.post(`${API_URL}/order`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};
