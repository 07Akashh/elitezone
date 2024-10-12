import axios from 'axios';
import serverUrl from '../config/serverUrl';


const API_URL = `${serverUrl}/admin`;
const token = localStorage.getItem('adminToken');

const config = {
    headers: {
        Authorization: `Bearer ${token}`
    }
};

export const getStats = async() =>{
    try {
        const response = await axios.get(`${API_URL}/stats`,config);
        return response.data;
    } catch (error) {
        console.log(error)
        throw error.response.data
    }
}

export const getOrders = async() =>{
    try {
        const response = await axios.get(`${API_URL}/orders`,config);
        return response.data;
    } catch (error) {
        console.log(error)
        throw error.response.data
    }
}

export const getProducts = async() =>{
    try {
        const response = await axios.get(`${API_URL}/products`,config);
        return response.data;
    } catch (error) {
        console.log(error)
        throw error.response.data
    }
}

export const getUsers = async() =>{
    try {
        const response = await axios.get(`${API_URL}/users`,config);
        return response.data;
    } catch (error) {
        console.log(error)
        throw error.response.data
    }
}