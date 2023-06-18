

import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './login.css'

const Login = ({ onFormSwitch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleFormSwitch = () => {
    onFormSwitch();
  };

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => { 
    e.preventDefault();
    
  };

  return (
    <div className="Loginpage">
      <div className="background-image"></div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="one">
          <label htmlFor="email" className="mail">Email</label>
          <input
            className="hold"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="your email@gmail.com"
            id="email"
            name="email"
          />
          
          <label className="pas" htmlFor="password">Password</label>
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
   
      {/* <button className="but" onClick={handleFormSwitch}>
        Don't have an account? Register here
      </button> */}
       <p className="yet-quest">Don't have an account yet?  <a href="/Register" className="but">Register</a></p>
       
       
    </div>
  );
};

Login.propTypes = {
  onFormSwitch: PropTypes.func.isRequired,
};

export default Login;
