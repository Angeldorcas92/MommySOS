import React, { useState } from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import './register.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      // Registration successful
      // You can add further logic here, such as redirecting to a different page
    } catch (error) {
      console.log(error);
      // Handle registration error
      // You can display an error message or take appropriate action based on the error
    }
  };

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="auth-form-container">
      <form className="form1" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input
          value={name}
          name="name"
          id="name"
          placeholder="full name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="your email@gmail.com"
          name="email"
          id="email"
        />
        <label htmlFor="password">Password</label>
        <div className="password-input-container">
          <input
            type={passwordVisible ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="*********"
            name="password"
            id="password2"
          />
          <span
            className="password-toggle-icon"
            onClick={handlePasswordToggle}
          >
            <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
          </span>
        </div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <div className="password-input-container">
          <input
            type={passwordVisible ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="*********"
            name="confirmPassword"
            id="confirmPassword"
          />
          <span
            className="password-toggle-icon"
            onClick={handlePasswordToggle}
          >
            <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
          </span>
        </div>
        <button className="register" type="submit">Register</button>
      </form>
      <button className="but" onClick={() => props.onformSwitch("login")}>
        Already have an account? Login
      </button>
      <h5 className="reg">By clicking "Register" I agree to the terms <br></br>
      and conditions of this website</h5>
    </div>
  );
};

export default Register;

