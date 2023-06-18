

import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './register.css'

const Register = ({ onFormSwitch }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleFormSwitch = () => {
    onFormSwitch();
  };

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <div className="auth-form-container">
        
        <form className="form1" onSubmit={handleSubmit}>
          <div className="field1">
          <label htmlFor="name" className="confirm">Full name</label>
          <input
            value={name}
            name="name"
            id="name"
            placeholder="full name"
            onChange={(e) => setName(e.target.value)}
          />
          </div>
          <div className="field1">
          <label htmlFor="email" className="confirm">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="your email@gmail.com"
            name="email"
            id="email"
          />
          </div>
          <div className="field1">
          <label htmlFor="password" className="confirm">Password</label>
          <div className="password-input-container1">
            <input
              type={passwordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="*********"
              name="password"
              id="password2"
            />
            </div>
            </div>
            <div>
            <span
              className="password-toggle-icons"
              onClick={handlePasswordToggle}
            >
              <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
            </span>
          </div>
          <div className="field2">
          <label htmlFor="confirmPassword" className="confirm1">Confirm Password</label>
            <input
              type={passwordVisible ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="*********"
              name="confirmPassword"
              id="confirmPassword"
            />
            <span
              
              onClick={handlePasswordToggle}
            >
              <FontAwesomeIcon className="password-toggle-icons1" icon={passwordVisible ? faEyeSlash : faEye} />
            </span>
          </div>
          <button className="register" type="submit">Register</button>
        </form>
        {/* <button className="but"  onClick={handleFormSwitch}>
          Already have an account? Login here
        </button> */}
         <p>Already have an account? <a href="/login" className="but">Login</a></p>
        <h5 className="reg">By clicking "Register" I agree to the terms and conditions of this website</h5>
      </div>
    </div>
  );
};

Register.propTypes = {
  onFormSwitch: PropTypes.func.isRequired,
};

export default Register;
