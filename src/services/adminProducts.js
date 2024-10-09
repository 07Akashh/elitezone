import axios from 'axios';
import serverUrl from '../config/serverUrl';


const API_URL = `${serverUrl}/admin`;
const token = localStorage.getItem('adminToken');


export const addProduct = async(data) =>{

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    try {
        const response = await axios.post(`${API_URL}/products`,data, config);
        return response.data;
    } catch (error) {
        console.log(error)
        throw error.response.data
    }
}

export const createOffer = async(data) =>{
    const token = localStorage.getItem('adminToken');
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    try {
        const response = await axios.post(`${API_URL}/offer`,data, config);
        return response.data;
    } catch (error) {
        console.log(error)
        throw error.response.data
    }
}

export const getOffer = async() =>{
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    try {
        const response = await axios.get(`${API_URL}/offer`, config);
        return response.data;
    } catch (error) {
        console.log(error)
        throw error.response.data
    }
}