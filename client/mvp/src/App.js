
import React, { useState } from 'react';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import image from './Assets/logo.png';
import Navbar from './pages/nav'
import Form from './pages/form';
import Home from './pages/home';


function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = () => {
    setCurrentForm(currentForm === 'login' ? 'register' : 'login');
  };

  return (
    <div className="App">
      
      {/* <div className='logo'>
        <img src={image} alt=""style={{ width: "448.8px", height: "444px", }} />  */}

        {/* <button className='join'>Click here to become our care giver</button> */}
       {/* </div>        

      <div className='two'>
        {currentForm === 'login' ? (
          <Login onformSwitch={toggleForm} />
        ) : (
          <Register onformSwitch={toggleForm} />
          
        )} */}
      
      {/* </div> */}

      
       <Navbar/> 
      
       {/* <Form/> */}
    </div>
  );
}

export default App;

