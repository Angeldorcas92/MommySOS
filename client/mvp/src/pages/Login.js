import React, { useState } from "react";
import PropTypes from 'prop-types';
import './login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = (props) => { // Corrected syntax here
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const auth = getAuth(); // Get the Firebase Authentication instance
      // Use signInWithEmailAndPassword method to authenticate the user
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in successfully!');
      // Redirect the user or perform any other actions upon successful login
    } catch (error) {
      console.log('Error logging in:', error);
      // Handle error if login fails
    }
  };

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="Loginpage">
     <div className="background-image"></div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="one">
          <label htmlFor="email">Email</label>
          <input
            className="hold"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="your email@gmail.com"
            id="email"
            name="email"
          />
          
          <label className="pass" htmlFor="password">Password</label>
          <div className="password-input-container">
            <input
              type={passwordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="*********"
              name="password"
              id="password"
            />
            <span className="password-toggle-icon1" onClick={handlePasswordToggle}>
              <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
            </span>
          </div>
          
        </div>
        
        <div>
          <button className="login" type="submit">Login</button>
        </div>
      </form>
      <button className="but" onClick={() => props.onformSwitch('register')}>
        Don't have an account? register here
      </button>
    </div>
  );
};

export default Login;
