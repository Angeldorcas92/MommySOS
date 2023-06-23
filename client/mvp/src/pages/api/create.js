import axios from 'axios';

export const createUser = async (formData) => {
  try {
    const response = await axios.post('http://localhost:3000/createUser', formData);

    if (response.status === 201) {
      console.log('User created successfully');
    } else {
      console.log('Failed to create user');
    }

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
