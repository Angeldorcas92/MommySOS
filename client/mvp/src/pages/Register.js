

// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import { createUser } from './api/apiService';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import './register.css'

// const Register = ({ onFormSwitch }) => {
//   const [fullname, setfullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const handleFormSwitch = () => {
//     onFormSwitch();
//   };

//   const handlePasswordToggle = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const handleSubmit = (event) => {
//       event.preventDefault();
    
//     // Create the form data object
//     const formData = {
//      fullname,
//       email,
//       password,
//       confirmPassword
//     };
//       // Get the form data
     
    
//       // Call the registerUser function
//       createUser(formData)
//         .then((response) => {
//           // Handle the response from the API
//           console.log(response.data);
//         })
//         .catch((error) => {
//           // Handle any errors that occurred during the request
//           console.error(error);
//         });
//     };
//   };

//   return (
//     <div>
//       <div className="auth-form-container">
        
//         <form className="form1" onSubmit={handleSubmit}>
//           <div className="field1">
//           <label htmlFor="name" className="confirm">Full name</label>
//           <input
//             value={fullname}
//             name="name"
//             id="name"
//             placeholder="full name"
//             onChange={(e) => setfullName(e.target.value)}
//           />
//           </div>
//           <div className="field1">
//           <label htmlFor="email" className="confirm">Email</label>
//           <input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             placeholder="your email@gmail.com"
//             name="email"
//             id="email"
//           />
//           </div>
//           <div className="field1">
//           <label htmlFor="password" className="confirm">Password</label>
//           <div className="password-input-container1">
//             <input
//               type={passwordVisible ? "text" : "password"}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="*********"
//               name="password"
//               id="password2"
//             />
//             </div>
//             </div>
//             <div>
//             <span
//               className="password-toggle-icons"
//               onClick={handlePasswordToggle}
//             >
//               <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
//             </span>
//           </div>
//           <div className="field2">
//           <label htmlFor="confirmPassword" className="confirm1">Confirm Password</label>
//             <input
//               type={passwordVisible ? "text" : "password"}
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               placeholder="*********"
//               name="confirmPassword"
//               id="confirmPassword"
//             />
//             <span
              
//               onClick={handlePasswordToggle}
//             >
//               <FontAwesomeIcon className="password-toggle-icons1" icon={passwordVisible ? faEyeSlash : faEye} />
//             </span>
//           </div>
//           <button className="register" type="submit">Register</button>
//         </form>
        
//          <p>Already have an account? <a href="/login" className="but">Login</a></p>
//         <h5 className="reg">By clicking "Register" I agree to the terms and conditions of this website</h5>
//       </div>
//     </div>
//   );
// };

// Register.propTypes = {
//   onFormSwitch: PropTypes.func.isRequired,
// };

// export default Register;



// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import {getData} from './api/apiService';
// import { createUser } from "./api/create";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import './register.css'

// const Register = ({ onFormSwitch }) => {
//   const [fullname, setfullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [isLoading, setIsLoading] = useState(false); 

//   const handleFormSwitch = () => {
//     onFormSwitch();
//   };

//   const handlePasswordToggle = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     const formData = {
//       fullname,
//       email,
//       password,
//       confirmPassword
//     };

//     createUser(formData)
//       .then((response) => {
//         console.log(response.data);
//         alert('Registration Successful');
//         setfullName('');
//         setEmail('');
//         setPassword('');
//         setConfirmPassword('');
//         setIsLoading(false); 
//       })
//       .catch((error) => {
//         console.error(error);
//         setIsLoading(false); 
//       });
//   };

//   return (
//     <div>
//       <div className="auth-form-container">
//       <form className="form1" onSubmit={handleSubmit}>
//         <div className="field1">
//           <label htmlFor="name" className="confirm">Full name</label>
//           <input
//             value={fullname}
//             name="name"
//             id="name"
//             placeholder="full name"
//             onChange={(e) => setfullName(e.target.value)}
//           />
//         </div>
//         <div className="field1">
//           <label htmlFor="email" className="confirm">Email</label>
//           <input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             placeholder="your email@gmail.com"
//             name="email"
//             id="email"
//           />
//         </div>
//         <div className="field1">
//           <label htmlFor="password" className="confirm">Password</label>
//           <div className="password-input-container1">
//             <input
//               type={passwordVisible ? "text" : "password"}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="*********"
//               name="password"
//               id="password2"
//             />
//           </div>
//         </div>
//         <div>
//           <span
//             className="password-toggle-icons"
//             onClick={handlePasswordToggle}
//           >
//             <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
//           </span>
//         </div>
//         <div className="field2">
//           <label htmlFor="confirmPassword" className="confirm1">Confirm Password</label>
//           <input
//             type={passwordVisible ? "text" : "password"}
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             placeholder="*********"
//             name="confirmPassword"
//             id="confirmPassword"
//           />
//           <span
//             onClick={handlePasswordToggle}
//           >
//             <FontAwesomeIcon className="password-toggle-icons1" icon={passwordVisible ? faEyeSlash : faEye} />
//           </span>
//         </div>
//         <button className="register" type="submit" disabled={isLoading}>
//           {isLoading ? 'Registering...' : 'Register'}
//         </button>
//       </form>
//       {/* <button className="register" type="submit">Register</button> */}
//       <p>Already have an account? <a href="/login" className="but">Login</a></p>
//       <h5 className="reg">By clicking "Register" I agree to the terms and conditions of this website</h5>
//     </div>
//   </div>
//   );
// };

// Register.propTypes = {
//   onFormSwitch: PropTypes.func.isRequired,
// };

// export default Register;


// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import { createUser } from "./api/create";
// import { useLocation, useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import './register.css'

// const Register = ({ onFormSwitch, onRegistrationSuccess }) => {
//   const [fullname, setfullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [isLoading, setIsLoading] = useState(false); 
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [redirectTo, setRedirectTo] = useState("/");


//   const handleFormSwitch = () => {
//     onFormSwitch();
//   };

//   const handlePasswordToggle = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     const formData = {
//       fullname,
//       email,
//       password,
//       confirmPassword
//     };

//     createUser(formData)
//       .then((response) => {
//         console.log(response.data);
//         alert('Registration Successful');
//         setfullName('');
//         setEmail('');
//         setPassword('');
//         setConfirmPassword('');
//         setIsLoading(false); 
        
//         // Call the registration success callback to navigate to the login page
//         onRegistrationSuccess();
//       })
//       .catch((error) => {
//         console.error(error);
//         setIsLoading(false); 
//       });
//   };
//   const handleRegisterClick =() => {
//     navigate("/login", { state: { from: location.pathname } });
//   };
  

//   return (
//     <div>
//       <div className="auth-form-container">
//       <form className="form1" onSubmit={handleSubmit}>
//       <div className="field1">
//           <label htmlFor="name" className="confirm">Full name</label>
//           <input
//             value={fullname}
//             name="name"
//             id="name"
//             placeholder="full name"
//             onChange={(e) => setfullName(e.target.value)}
//           />
//         </div>
//         <div className="field1">
//           <label htmlFor="email" className="confirm">Email</label>
//           <input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             placeholder="your email@gmail.com"
//             name="email"
//             id="email"
//           />
//         </div>
//         <div className="field1">
//           <label htmlFor="password" className="confirm">Password</label>
//           <div className="password-input-container1">
//             <input
//               type={passwordVisible ? "text" : "password"}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="*********"
//               name="password"
//               id="password2"
//             />
//           </div>
//         </div>
//         <div>
//           <span
//             className="password-toggle-icons"
//             onClick={handlePasswordToggle}
//           >
//             <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
//           </span>
//         </div>
//         <div className="field2">
//           <label htmlFor="confirmPassword" className="confirm1">Confirm Password</label>
//           <input
//             type={passwordVisible ? "text" : "password"}
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             placeholder="*********"
//             name="confirmPassword"
//             id="confirmPassword"
//           />
//           <span
//             onClick={handlePasswordToggle}
//           >
//             <FontAwesomeIcon className="password-toggle-icons1" icon={passwordVisible ? faEyeSlash : faEye} />
//           </span>
//         </div>
//         <button className="register" type="submit" onClick={handleRegisterClick} disabled={isLoading}>
//           {isLoading ? 'Registering...' : 'Register'}
//         </button>
//       </form>
//       {/* <button className="register" type="submit">Register</button> */}
      
//       <p>Already have an account? <a href="/login" className="but">Login</a></p>
//       <h5 className="reg">By clicking "Register" I agree to the terms and conditions of this website</h5>
//     </div>
//   </div>
//   );
// };

// Register.propTypes = {
//   onFormSwitch: PropTypes.func.isRequired,
//   onRegistrationSuccess: PropTypes.func.isRequired,
// };

// export default Register;
import React, { useState } from "react";
import PropTypes from "prop-types";
import { createUser } from '../pages/api/apiService';
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './register.css'

const Register =({ onFormSwitch, onRegistrationSuccess }) => {
  const [fullname, setfullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 
  
  const handleFormSwitch = () => {
    onFormSwitch();
  };

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = {
      fullname,
      email,
      password,
      confirmPassword
    };

    createUser(formData)
      .then((response) => {
        console.log(response.data);
        alert('Registration Successful');
        setfullName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setIsLoading(false); 
       
        
      })
      
      .catch((error) => {
        console.error(error);
        setIsLoading(false); 
      });
  };
  

  return (
    <div>
      <div className="auth-form-container">
      <form className="form1" onSubmit={handleSubmit}>
        <div className="field1">
          <label htmlFor="name" className="confirm">Full name</label>
          <input
            value={fullname}
            name="name"
            id="name"
            placeholder="full name"
            onChange={(e) => setfullName(e.target.value)}
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
        <button className="register" type="submit"  disabled={isLoading}>
          {isLoading ? 'Registering...' : 'Register'}
        </button>
      </form>
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