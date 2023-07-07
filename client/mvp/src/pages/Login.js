

// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import './login.css'

// const Login = ({ onFormSwitch }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const handleFormSwitch = () => {
//     onFormSwitch();
//   };

//   const handlePasswordToggle = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const handleSubmit = async (e) => { 
//     e.preventDefault();
    
//   };

//   return (
//     <div className="Loginpage">
//       <div className="background-image"></div>
//       <form className="form" onSubmit={handleSubmit}>
//         <div className="one">
//           <label htmlFor="email" className="mail">Email</label>
//           <input
//             className="hold"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             placeholder="your email@gmail.com"
//             id="email"
//             name="email"
//           />
          
//           <label className="pas" htmlFor="password">Password</label>
//           <div className="password-input-container">
//             <input
//               type={passwordVisible ? "text" : "password"}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="*********"
//               name="password"
//               id="password"
//             />
//             <span className="password-toggle-icon1" onClick={handlePasswordToggle}>
//               <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
//             </span>
//           </div>
//         </div>
        
//         <div>
//           <button className="login" type="submit">Login</button>
//         </div>
//       </form>
   
//       {/* <button className="but" onClick={handleFormSwitch}>
//         Don't have an account? Register here
//       </button> */}
//        <p className="yet-quest">Don't have an account yet?  <a href="/Register" className="but">Register</a></p>
       
       
//     </div>
//   );
// };

// Login.propTypes = {
//   onFormSwitch: PropTypes.func.isRequired,
// };

// export default Login;
// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import './login.css';
// import loginUser  from '../auth/userAuth';

//   const Login = ({ onFormSwitch }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const handleFormSwitch = () => {
//     onFormSwitch();
//   };

//   const handlePasswordToggle = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const handleSubmit = async (e) => { 
//     e.preventDefault();
    
//     const formData = {
//       email,
//       password
//     };

//     try {
//       const response = await loginUser(formData);
//       console.log(response.data);
//       alert('Login successful');
//       // Reset the form fields
//       setEmail('');
//       setPassword('');
//     } catch (error) {
//       console.error(error);
//       alert('Login failed');
//     }
//   };

//   return (
//     <div className="Loginpage">
//       <div className="background-image"></div>
//       <form className="form" onSubmit={handleSubmit}>
//         <div className="one">
//           <label htmlFor="email" className="mail">Email</label>
//           <input
//             className="hold"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             placeholder="your email@gmail.com"
//             id="email"
//             name="email"
//           />
          
//           <label className="pas" htmlFor="password">Password</label>
//           <div className="password-input-container">
//             <input
//               type={passwordVisible ? "text" : "password"}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="*********"
//               name="password"
//               id="password"
//             />
//             <span className="password-toggle-icon1" onClick={handlePasswordToggle}>
//               <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
//             </span>
//           </div>
//         </div>
        
//         <div>
//           <button className="login" type="submit">Login</button>
//         </div>
//       </form>
   
//       {/* <button className="but" onClick={handleFormSwitch}>
//         Don't have an account? Register here
//       </button> */}
//        <p className="yet-quest">Don't have an account yet?  <a href="/Register" className="but">Register</a></p>
       
       
//     </div>
//   );
// };

// Login.propTypes = {
//   onFormSwitch: PropTypes.func.isRequired,
// };

//export default Login;

// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import './login.css';
// import { loginUser } from './api/apiService';

// const Login = ({ onFormSwitch }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(false);
  

//   const handleFormSwitch = () => {
//     onFormSwitch();
//   };

//   const handlePasswordToggle = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const handleSubmit = async (e) => { 
//     e.preventDefault();
    
//     const formData = {
//       email,
//       password
//     };
  
//     loginUser(formData)
//       .then((response) => {
//         console.log(response.data);
//         alert('Login successful');
//         // Reset the form fields
//         setEmail('');
//         setPassword('');
//       })
//       .catch((error) => {
//         console.error(error);
//         alert('Login failed');
//       });
//   };

  

//   return (
//     <div className="Loginpage">
//       <div className="background-image"></div>
//       <form className="form" onSubmit={handleSubmit}>
//         <div className="one">
//           <label htmlFor="email" className="mail">Email</label>
//           <input
//             className="hold"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             placeholder="your email@gmail.com"
//             id="email"
//             name="email"
//           />
          
//           <label className="pas" htmlFor="password">Password</label>
//           <div className="password-input-container">
//             <input
//               type={passwordVisible ? "text" : "password"}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="*********"
//               name="password"
//               id="password"
//             />
//             <span className="password-toggle-icon1" onClick={handlePasswordToggle}>
//               <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
//             </span>
//           </div>
//         </div>
        
//         <div>
//           <button className="login" type="submit">Login</button>
//         </div>
//       </form>
   
//       {/* <button className="but" onClick={handleFormSwitch}>
//         Don't have an account? Register here
//       </button> */}
//        <p className="yet-quest">Don't have an account yet?  <a href="/Register" className="but">Register</a></p>
       
       
//     </div>
//   );
// };

// Login.propTypes = {
//   onFormSwitch: PropTypes.func.isRequired,
// };

// export default Login;


// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import './login.css';
// import loginUser  from '../auth/userAuth';

// const Login = ({ onFormSwitch }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const handleFormSwitch = () => {
//     onFormSwitch();
//   };

//   const handlePasswordToggle = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const handleSubmit = async (e) => { 
//     e.preventDefault();
    
//     const formData = {
//       email,
//       password
//     };

//     try {
//       const user = await loginUser(formData);
//       console.log(user);
//       alert('Login successful');
//       // Reset the form fields
//       setEmail('');
//       setPassword('');
//     } catch (error) {
//       console.error(error);
//       alert('Login failed');
//     }
//   };
 

//   return (
//     <div className="Loginpage">
//       <div className="background-image"></div>
//       <form className="form" onSubmit={handleSubmit}>
//         <div className="one">
//           <label htmlFor="email" className="mail">Email</label>
//           <input
//             className="hold"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             placeholder="your email@gmail.com"
//             id="email"
//             name="email"
//           />
          
//           <label className="pas" htmlFor="password">Password</label>
//           <div className="password-input-container">
//             <input
//               type={passwordVisible ? "text" : "password"}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="*********"
//               name="password"
//               id="password"
//             />
//             <span className="password-toggle-icon1" onClick={handlePasswordToggle}>
//               <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
//             </span>
//           </div>
//         </div>
        
//         <div>
//           <button className="login" type="submit">Login</button>
//         </div>
//       </form>
   
//       {/* <button className="but" onClick={handleFormSwitch}>
//         Don't have an account? Register here
//       </button> */}
//        <p className="yet-quest">Don't have an account yet?  <a href="/Register" className="but">Register</a></p>
       
       
//     </div>
//   );
// };

// Login.propTypes = {
//   onFormSwitch: PropTypes.func.isRequired,
// };

//  export default Login;
// import React, { useState, useEffect, useRef} from "react";
// import useAuth from "./hooks/useAuth";
// import PropTypes from "prop-types";
// import { Link, useLocation, useNavigate} from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import './login.css';
// import { loginUser } from './api/apiService';

// const Login = ({ onFormSwitch, onLoginSuccess }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const handleFormSwitch = () => {
//     onFormSwitch();
//   };

//   const handlePasswordToggle = () => {
//     setPasswordVisible(!passwordVisible);
//   };
//   const {setAuth} = useAuth();
//   const Navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from?.pathname || "/";

//   const handleSubmit = async (e) => { 
//     e.preventDefault();
    
//     const formData = {
//       email,
//       password
//     };
  
//     loginUser(formData)
//       .then((response) => {
//         console.log(response.data);
//         alert('Login successful');
//         // Reset the form fields
//         setEmail('');
//         setPassword('');

//         // Call the login success callback to update the logged-in state
//         onLoginSuccess(response.data.user);
//       })
//       .catch((error) => {
//         console.error(error);
//         alert('Login failed');
//       });
//   };

//   return (
//     <div className="Loginpage">
//            <div className="background-image"></div>
//       <form className="form" onSubmit={handleSubmit}>
//         <div className="one">
//           <label htmlFor="email" className="mail">Email</label>
//           <input
//             className="hold"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             placeholder="your email@gmail.com"
//             id="email"
//             name="email"
//           />
          
//           <label className="pas" htmlFor="password">Password</label>
//           <div className="password-input-container">
//             <input
//               type={passwordVisible ? "text" : "password"}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="*********"
//               name="password"
//               id="password"
//             />
//             <span className="password-toggle-icon1" onClick={handlePasswordToggle}>
//               <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
//             </span>
//           </div>
//         </div>
        
//         <div>
//           <button className="login" type="submit">Login</button>
//         </div>
//       </form>
   
//       {/* <button className="but" onClick={handleFormSwitch}>
//         Don't have an account? Register here
//       </button> */}
//        <p className="yet-quest">Don't have an account yet?  <a href="/Register" className="but">Register</a></p>
       
       
//     </div>
//   );
// };
   

// Login.propTypes = {
//   onFormSwitch: PropTypes.func.isRequired,
//   onLoginSuccess: PropTypes.func.isRequired,
// };

// export default Login;


// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import { useLocation, useNavigate, Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import { loginUser } from "./api/apiService";
// import useAuth from "./hooks/useAuth";
// import './login.css'

// const Login = ({ onFormSwitch }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const { setAuth } = useAuth();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [redirectTo, setRedirectTo] = useState("/");

//   const handleFormSwitch = () => {
//     onFormSwitch();
//   };

//   const handlePasswordToggle = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = {
//       email,
//       password,
//     };
  

//     try {
//       const response = await loginUser(formData);
//       console.log(response.data);

//       // Reset the form fields
//       setEmail("");
//       setPassword("");

//       // Update authentication state
//       setAuth(response.data.user);
//       const from = location.state?.from?.pathname || "/";
//       setRedirectTo(from);


//       // Redirect the user to the booking page
//       navigate(redirectTo, { replace: true });
//     } catch (error) {
//       console.error(error);
//       // alert('Login failed');
//     }
//   };
//   const handleLoginClick = () => {
//     // Navigate to the login page and pass the desired redirect path
//     navigate("/", { state: { from: location.pathname } });
//   };

//   return (
//     <div className="Loginpage">
//       <div className="background-image"></div>
//       <form className="form" onSubmit={handleSubmit}>
//         <div className="one">
//           <label htmlFor="email" className="mail">
//             Email
//           </label>
//           <input
//             className="hold"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             placeholder="your email@gmail.com"
//             id="email"
//             name="email"
//           />

//           <label className="pas" htmlFor="password">
//             Password
//           </label>
//           <div className="password-input-container">
//             <input
//               type={passwordVisible ? "text" : "password"}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="*********"
//               name="password"
//               id="password"
//             />
//             <span className="password-toggle-icon1" onClick={handlePasswordToggle}>
//               <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
//             </span>
//           </div>
//         </div>

//         <div>
//         <button className="login" type="submit" onClick={handleLoginClick}>Login</button>
//         </div>
//       </form>

//       <p className="yet-quest">
//         Don't have an account yet? <a href="/Register" className="but">Register</a>
//       </p>
//     </div>
//   );
// };

// Login.propTypes = {
//   onFormSwitch: PropTypes.func.isRequired,
// };

// export default Login;


// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import { useLocation, useNavigate, Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import { loginUser } from "./api/apiService";
// import useAuth from "./hooks/useAuth";
// import './login.css';

// const Login = ({ onFormSwitch }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const { auth, setAuth } = useAuth();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [redirectTo, setRedirectTo] = useState("/");

//   const handleFormSwitch = () => {
//     onFormSwitch();
//   };

//   const handlePasswordToggle = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = {
//       email,
//       password,
//     };

//     try {
//       const response = await loginUser(formData);
//       console.log(response.data);

//       // Reset the form fields
//       setEmail("");
//       setPassword("");

//       // Update authentication state
//       setAuth(response.data.user);
//       const from = location.state?.from?.pathname || "/";
//       setRedirectTo(from);

//       // Redirect the user to the desired page
//       navigate(redirectTo, { replace: true });
//     } catch (error) {
//       console.error(error);
//       // alert('Login failed');
//     }
//   };

//   const handleLogout = () => {
//     // Clear authentication state
//     setAuth(null);

//     // Redirect the user to the desired page
//     const from = location.state?.from?.pathname || "/";
//     navigate(from);
//   };

//   const handleLoginClick = () => {
//     // Navigate to the login page and pass the desired redirect path
//     navigate("/", { state: { from: location.pathname } });
//   };

//   return (
//     <div className="Loginpage">
//       <div className="background-image"></div>
//       <form className="form" onSubmit={handleSubmit}>
//         <div className="one">
//           <label htmlFor="email" className="mail">
//             Email
//           </label>
//           <input
//             className="hold"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             placeholder="your email@gmail.com"
//             id="email"
//             name="email"
//           />

//           <label className="pas" htmlFor="password">
//             Password
//           </label>
//           <div className="password-input-container">
//             <input
//               type={passwordVisible ? "text" : "password"}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="*********"
//               name="password"
//               id="password"
//             />
//             <span className="password-toggle-icon1" onClick={handlePasswordToggle}>
//               <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
//             </span>
//           </div>
//         </div>

//         <div>
//           <button className="login" type="submit" onClick={handleLoginClick}>
//             Login
//           </button>
//         </div>
//       </form>

//       <p className="yet-quest">
//         Don't have an account yet? <Link to="/Register" className="but">Register</Link>
//       </p>

//       {auth && (
//         <button className="logout" onClick={handleLogout}>
//           Logout
//         </button>
//       )}
//     </div>
//   );
// };

// Login.propTypes = {
//   onFormSwitch: PropTypes.func.isRequired,
// };

// // export default Login;
// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import './login.css';
// import { loginUser } from '../pages/api/apiService';

// const Login = ({ onFormSwitch }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(false);
  

//   const handleFormSwitch = () => {
//     onFormSwitch();
//   };

//   const handlePasswordToggle = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const handleSubmit = async (e) => { 
//     e.preventDefault();
    
//     const formData = {
//       email,
//       password
//     };
  
//     loginUser(formData)
//       .then((response) => {
//         console.log(response.data);
//         alert('Login successful');
//         // Reset the form fields
//         setEmail('');
//         setPassword('');
//       })
//       .catch((error) => {
//         console.error(error);
//         alert('Login failed');
//       });
//   };

  

//   return (
//     <div className="Loginpage">
//       <div className="background-image"></div>
//       <form className="form" onSubmit={handleSubmit}>
//         <div className="one">
//           <label htmlFor="email" className="mail">Email</label>
//           <input
//             className="hold"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             placeholder="your email@gmail.com"
//             id="email"
//             name="email"
//           />
          
//           <label className="pas" htmlFor="password">Password</label>
//           <div className="password-input-container">
//             <input
//               type={passwordVisible ? "text" : "password"}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="*********"
//               name="password"
//               id="password"
//             />
//             <span className="password-toggle-icon1" onClick={handlePasswordToggle}>
//               <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
//             </span>
//           </div>
//         </div>
        
//         <div>
//           <button className="login" type="submit">Login</button>
//         </div>
//       </form>
   
//       {/* <button className="but" onClick={handleFormSwitch}>
//         Don't have an account? Register here
//       </button> */}
//        <p className="yet-quest">Don't have an account yet?  <a href="/Register" className="but">Register</a></p>
       
       
//     </div>
//   );
// };

// Login.propTypes = {
//   onFormSwitch: PropTypes.func.isRequired,
// };

// export default Login;

import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './login.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { loginUser } from '../pages/api/apiService';

const LoginStatusContext = React.createContext();

const useLoginStatus = () => useContext(LoginStatusContext);

const useAuth = () => {
  const [auth, setAuth] = useState(null);

  const SetAuth = (user) => {
    setAuth(user);
  };

  return { auth, SetAuth };
};

const Login = ({ onFormSwitch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { auth, SetAuth } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [redirectTo, setRedirectTo] = useState("/");

  const handleLoginClick = async () => {
    try {
      const formData = {
        email,
        password,
      };

      const response = await loginUser(formData);
      console.log(response.data);
      // alert('Login successful');
      setIsLoggedIn(true);
      setEmail('');
      setPassword('');

      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    } catch (error) {
      console.error(error);
      alert('Login failed');
    }
  };

  const handleFormSwitch = () => {
    onFormSwitch();
  };

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email,
      password,
    };

    try {
      const response = await loginUser(formData);
      console.log(response.data);
      // alert('Login successful');
      setIsLoggedIn(true);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error(error);
      alert('Login failed');
    }
  };

  return (
    <LoginStatusContext.Provider value={isLoggedIn}>
      <div className="Loginpage">
        <div className="background-image"></div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="one">
            <label htmlFor="email" className="mail">
              Email
            </label>
            <input
              className="hold"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="your email@gmail.com"
              id="email"
              name="email"
            />

            <label className="pas" htmlFor="password">
              Password
            </label>
            <div className="password-input-container">
              <input
                type={passwordVisible ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="*********"
                name="password"
                id="password"
              />
              <span
                className="password-toggle-icon1"
                onClick={handlePasswordToggle}
              >
          
                <FontAwesomeIcon
                  icon={passwordVisible ? faEyeSlash : faEye}
                />
              </span>
            </div>
          </div>

          <div>
            <button className="login" type="submit" onClick={handleLoginClick}>
              Login
            </button>
          </div>
        </form>

        <p className="yet-quest">
          Don't have an account yet?{' '}
          <a href="/Register" className="but">
            Register
          </a>
        </p>
      </div>
    </LoginStatusContext.Provider>
  );
};

Login.propTypes = {
  onFormSwitch: PropTypes.func.isRequired,
};

export default Login;
export { useLoginStatus, useAuth };
 

// import React, { useState, useContext } from 'react';
// import PropTypes from 'prop-types';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import './login.css';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { loginUser } from '../pages/api/apiService';
// const LoginStatusContext = React.createContext();

// const useLoginStatus = () => useContext(LoginStatusContext);

// const Login = ({ onFormSwitch }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const handleLoginClick = async () => {
//     try {
//       const formData = {
//         email,
//         password,
//       };

//       const response = await loginUser(formData);
//       console.log(response.data);

//       // Set JWT as a cookie
//       document.cookie = `jwt=${response.data.token}; path=/`;

//       setIsLoggedIn(true);
//       setEmail('');
//       setPassword('');

//       const from = location.state?.from?.pathname || '/';
//       navigate(from, { replace: true });
//     } catch (error) {
//       console.error(error);
//       alert('Login failed');
//     }
//   };

//   const handleFormSwitch = () => {
//     onFormSwitch();
//   };

//   const handlePasswordToggle = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = {
//       email,
//       password,
//     };

//     try {
//       const response = await loginUser(formData);
//       console.log(response.data);

//       // Set JWT as a cookie
//       document.cookie = `jwt=${response.data.token}; path=/`;

//       setIsLoggedIn(true);
//       setEmail('');
//       setPassword('');
//     } catch (error) {
//       console.error(error);
//       alert('Login failed');
//     }
//   };

//   return (
//     <LoginStatusContext.Provider value={isLoggedIn}>
//       <div className="Loginpage">
//         <div className="background-image"></div>
//         <form className="form" onSubmit={handleSubmit}>
//         <div className="one">
//             <label htmlFor="email" className="mail">
//               Email
//             </label>
//             <input
//               className="hold"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               placeholder="your email@gmail.com"
//               id="email"
//               name="email"
//             />

//             <label className="pas" htmlFor="password">
//               Password
//             </label>
//             <div className="password-input-container">
//               <input
//                 type={passwordVisible ? 'text' : 'password'}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="*********"
//                 name="password"
//                 id="password"
//               />
//               <span
//                 className="password-toggle-icon1"
//                 onClick={handlePasswordToggle}
//               >
          
//                 <FontAwesomeIcon
//                   icon={passwordVisible ? faEyeSlash : faEye}
//                 />
//               </span>
//             </div>
//           </div>

//           <div>
//             <button className="login" type="submit" onClick={handleLoginClick}>
//               Login
//             </button>
//           </div>
//         </form>

//         <p className="yet-quest">
//           Don't have an account yet?{' '}
//           <a href="/Register" className="but">
//             Register
//           </a>
//         </p>
//       </div>
//     </LoginStatusContext.Provider>
//   );
// };

// Login.propTypes = {
//   onFormSwitch: PropTypes.func.isRequired,
// };

// export default Login;
// export { useLoginStatus};

