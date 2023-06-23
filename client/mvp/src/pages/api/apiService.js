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

// Other API service functions...

// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebase/firebase';
// import axios from 'axios';

// const API_BASE_URL = 'http://localhost:3000';

// // Get the authentication instance
// const authInstance = getAuth();

// // Function to create a new user
// export const createUser = async (formData) => {
//   const { email, password } = formData;

//   try {
//     const userCredential = await createUserWithEmailAndPassword(authInstance, email, password);
//     const user = userCredential.user;

//     // Send email verification
//     await user.sendEmailVerification();

//     // Make an API call using Axios for user creation
//     await axios.post(`${API_BASE_URL}/createUser`, formData);
//     // Additional logic or handling of the API response

//     return user;
//   } catch (error) {
//     throw error;
//   }
// };

// // Function to sign in a user
// export const signInUser = async (email, password) => {
//   try {
//     const userCredential = await signInWithEmailAndPassword(authInstance, email, password);
//     const user = userCredential.user;

//     // Additional logic or handling after successful sign-in

//     return user;
//   } catch (error) {
//     throw error;
//   }
// };


// //const createUser = async (formData) => {
// //   const { email, password } = formData;
  
// //   try {
// //     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// //     const user = userCredential.user;
    
// //     // Make an API call using Axios for user creation
// //     const response = await axios.post(`${API_BASE_URL}/createUser`, formData);
// //     // Additional logic or handling of the API response
    
// //     return user;
// //   } catch (error) {
// //     throw error;
// //   }
// // };

// // Function to login a user
// export const loginUser = async (formData) => {
//   const { email, password } = formData;
  
//   try {
//     const userCredential = await signInWithEmailAndPassword(auth, email, password);
//     const user = userCredential.user;
    
//     // Make an API call using Axios for user login
//     await axios.post(`${API_BASE_URL}/loginUser`, formData);
//     // Additional logic or handling of the API response
    
//     return user;
//   } catch (error) {
//     throw error;
//   }
// };
