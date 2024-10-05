import axios from 'axios';
import serverUrl from '../config/serverUrl';


const API_URL = `${serverUrl}/categories`;
const token = localStorage.getItem('adminToken');

const createCategory = async (name) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await axios.post(API_URL, name, config);
        return response.data;
    } catch (error) {
        throw error.response.data
    }
};


const addSubCategory = async (categoryId, subCategoryName) => {
    const token = localStorage.getItem('adminToken')
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    try {
        const response = await axios.post(`${API_URL}/${categoryId}/subcategories`, { subCategoryName }, config);
        return response.data;
    } catch (error) {
        console.log(error)
        throw error.response.data
    }
};

const getCategories = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

const getCategoryById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

const getSubCategories = async () => {
    const response = await axios.get(`${API_URL}/subcategories`);
    return response.data;
};

const getSubCategoryById = async (subCategoryId) => {
    const response = await axios.get(`${API_URL}/subcategory/${subCategoryId}`);
    return response.data;
};

const categoryService = {
    createCategory,
    getSubCategories,
    addSubCategory,
    getCategories,
    getCategoryById,
    getSubCategoryById,
};

export default categoryService;