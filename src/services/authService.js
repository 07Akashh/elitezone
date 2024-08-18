import axios from 'axios';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword as signInWithEmailAndPasswordFirebase, signInWithPopup, googleProvider, auth, signOut } from './firebase-config';

const API_URL = 'http://18.204.217.233:4000/v1';

export const registerWithEmailAndPassword = async (formData) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        const user = userCredential.user;
        const fbToken = user.accessToken;
        try {
            const response = await axios.post(`${API_URL}/auth`, { 'fbToken':fbToken });
            const token = response.data.data.token;
            const updatedUser= await axios.patch(`${API_URL}/user`,{
                'firstName':formData.firstName,
                'lastName':formData.lastName,
                'pincode':formData.pincode,
                'address':formData.address,
                'phone':formData.phone
            }, {
                headers: { Authorization: `Bearer ${token}` }
            })
            if (token) {
                localStorage.setItem('token', token);
            }
            return updatedUser.data;
        } catch (error) {
            if (error.response) {
                console.error('Error response data:', error.response.data);
                console.error('Error response status:', error.response.status);
                console.error('Error response headers:', error.response.headers);
            } else if (error.request) {
                console.error('Error request:', error.request);
            } else {
                console.error('Error message:', error.message);
            }
            throw error;
        }
    } catch (error) {
        console.error('Registration error:', error.message);
        throw error;
    }
};

export const signInWithEmailAndPassword = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPasswordFirebase(auth, email, password);
        const user = userCredential.user;
        const token = await user.getIdToken();
        try {
            const response = await axios.post(`${API_URL}/auth`, { 'fbToken':token  });
            console.log(response)
            const jwtToken = response.data.data.token
            if (jwtToken) {
                localStorage.setItem('token', jwtToken);
            }
            return response.data;
        } catch (error) {
            if (error.response) {
                console.error('Error response data:', error.response.data);
                console.error('Error response status:', error.response.status);
                console.error('Error response headers:', error.response.headers);
            } else if (error.request) {
                console.error('Error request:', error.request);
            } else {
                console.error('Error message:', error.message);
            }
            throw error;
        }
    } catch (error) {
        console.error('Sign in error:', error.message);
        throw error;
    }
};

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
        const fbtoken = await user.getIdToken();
        try {
            const response = await axios.post(`${API_URL}/auth`, { 'fbToken':fbtoken  });
            const jwtToken = response.data.data.token
            if (jwtToken) {
                localStorage.setItem('token', jwtToken);
            }
            return response.data;
        } catch (error) {
            if (error.response) {
                console.error('Error response data:', error.response.data);
                console.error('Error response status:', error.response.status);
                console.error('Error response headers:', error.response.headers);
            } else if (error.request) {
                console.error('Error request:', error.request);
            } else {
                console.error('Error message:', error.message);
            }
            throw error;
        }
    } catch (error) {
        console.error('Google sign in error:', error.message);
        throw error;
    }
};

export const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error('Logout error:', error.message);
        throw error;
    }
};
