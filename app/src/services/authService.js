// services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:5050/';

export const register = async (userData) => {
    return await axios.post(API_URL + 'register', userData);
};

export const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData);
    return response.data;
};
