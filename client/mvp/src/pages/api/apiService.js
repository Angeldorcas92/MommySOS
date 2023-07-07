import axios from 'axios';

export const getData = async () => {
  try {
    const response = await axios.post('http://localhost:3000/getData');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


//Base URL of your backend API
const API_BASE_URL = 'http://localhost:3000';

//Function to create a new user
export const createUser = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/createUser`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to login a user
export const loginUser = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/loginUser`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logOut = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/logout`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
