import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import AuthProvider from './pages/authpro';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';


// const firebaseConfig = {
//   apiKey: "AIzaSyAuzECe72BiwbTKn9Kdh84qWqe1nT2Xn5g",
//     authDomain: "mommysos-c6dd7.firebaseapp.com",
//     projectId: "mommysos-c6dd7",
//     storageBucket: "mommysos-c6dd7.appspot.com",
//     messagingSenderId: "757736510184",
//     appId: "1:757736510184:web:c4f659e4bb625b38f72f5d",
//     measurementId: "G-28H30VXNDK"
// };

// firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <AuthProvider>
    <Routes>
     <Route path="/*" element={<App />} />
    </Routes>
    </AuthProvider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

