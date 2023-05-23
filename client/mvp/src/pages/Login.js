
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="auth-form-container">
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
            <span className="password-toggle-icon" onClick={handlePasswordToggle}>
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
