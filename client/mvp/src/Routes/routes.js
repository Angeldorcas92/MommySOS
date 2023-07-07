// import React from "react";
// import { Route,Routes, Link } from "react-router-dom";
// import Home from "../pages/home";
// import Register from "../pages/Register";
// import Services from "../pages/services";
// import About from "../pages/about";
// import Postpartum from "../pages/postpartum";
// import Newborn from "../pages/newborncare";
// import Dropdown from "../pages/dropdown";
// import Dos from "../pages/does&don'ts";
// import Breastfeeding from "../pages/breastfeeding";
// import Login from "../pages/Login";
// import Vaginaldelivery from "../pages/vaginal";
// import CS from "../pages/cs";
// import Mealplan from "../pages/mealplan";
// import Mother from "../pages/motherandchild";
// import Contact from "../pages/contact";
// import Booking from "../pages/booking";
// import Episiotomy from "../pages/episiotomy";
// import Logout from "../pages/logout";


//  const Rout =()=> {
//   const handleCSClick = () => {
    
//   };

//   const handleVaginaldeliveryClick = () => {
    
//   };
  
//     return (
//         <div>
//            <button onClick={handleCSClick}>
//         <Link to="/cs"></Link>
//       </button>
//       <button onClick={handleVaginaldeliveryClick}>
//         <Link to="/vaginal"></Link>
//       </button>

//       <Routes>
//         <Route path="/cs" element={<CS />} />
//         <Route path="/vaginal" element={<Vaginaldelivery />} />
//       </Routes>
//       <Routes>
//           {/* <Route path="/register" element={<Register />} /> */}
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />}>
//           <Route path="/services/postpartum" element={<Postpartum />} />
//           <Route path="/services/mealplan" element={<Mealplan />} />
//           <Route path="/services/newborn" element={<Newborn />} />
//           <Route path="/services/breastfeeding" element={<Breastfeeding />} />
//           <Route path="/services/doesanddon'ts" element={<Dos />} />
//           </Route>         
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/motherandchild" element={<Mother />} />
//           <Route path="/breastfeeding" element={<Breastfeeding />} />
//           <Route path="/newborn" element={<Newborn />} />
//           <Route path="/postpartum" element={<Postpartum />} />
//           <Route path="/mealplan" element={<Mealplan />} /> 
//           <Route exact path="/booking" element={<Booking/>} /> 
//           </Routes> 
//           <Routes>
//           <Route path="/do'sanddon'ts" element={<Dos />} > 
//           </Route>
//          </Routes>
//          <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/logout" element={<Logout/>}/>
//         </Routes>
//        <Routes>
//         <Route path="/episiotomy" element={<Episiotomy/>}/>
//        </Routes>
//       </div>
//     );
//   }
//   export default Rout;

// import React, { useContext } from "react";
// import { Route, Routes, Link } from "react-router-dom";
// import Home from "../pages/home";
// import Register from "../pages/Register";
// import Services from "../pages/services";
// import About from "../pages/about";
// import Postpartum from "../pages/postpartum";
// import Newborn from "../pages/newborncare";
// import Dropdown from "../pages/dropdown";
// import Dos from "../pages/does&don'ts";
// import Breastfeeding from "../pages/breastfeeding";
// import Login from "../pages/Login";
// import Vaginaldelivery from "../pages/vaginal";
// import CS from "../pages/cs";
// import Mealplan from "../pages/mealplan";
// import Mother from "../pages/motherandchild";
// import Contact from "../pages/contact";
// import Booking from "../pages/booking";
// import Episiotomy from "../pages/episiotomy";
// import Logout from "../pages/logout";
// import { AuthContext } from '../pages/authentication';
// import MyComponent from "../pages/mycomponenet";

// const Rout = () => {
//   const { isAuthenticated } = useContext(AuthContext);

//   const handleCSClick = () => {
//     // Handle CS button click
//   };

//   const handleVaginaldeliveryClick = () => {
//     // Handle Vaginal Delivery button click
//   };

//   return (
//     <div>
//       {/* <button onClick={handleCSClick}>
//         <Link to="/cs">CS</Link>
//       </button>
//       <button onClick={handleVaginaldeliveryClick}>
//         <Link to="/vaginal">Vaginal Delivery</Link>
//       </button> */}

//       <Routes>
//         <Route path="/cs" element={<CS />} />
//         <Route path="/vaginal" element={<Vaginaldelivery />} />
//       </Routes>
//       <Routes>
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />}>
//           <Route path="/services/postpartum" element={<Postpartum />} />
//           <Route path="/services/mealplan" element={<Mealplan />} />
//           <Route path="/services/newborn" element={<Newborn />} />
//           <Route path="/services/breastfeeding" element={<Breastfeeding />} />
//           <Route path="/services/doesanddon'ts" element={<Dos />} />
//         </Route>
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/motherandchild" element={<Mother />} />
//         <Route path="/breastfeeding" element={<Breastfeeding />} />
//         <Route path="/newborn" element={<Newborn />} />
//         <Route path="/postpartum" element={<Postpartum />} />
//         <Route path="/mealplan" element={<Mealplan />} />
//         <Route exact path="/booking" element={<Booking />} />
//         <Route path="/do'sanddon'ts" element={<Dos />} />
//       </Routes>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {isAuthenticated ? (
//           <>
//             <Route path="/register" element={<Register />} />
//             <Route path="/login" element={<Login />} />
//           </>
//         ) : (
//           <Route path="/" element={<Login />} />
//         )}
//         <Route path="/logout" element={<Logout />} />
//       </Routes>
//       <Routes>
//         <Route path="/episiotomy" element={<Episiotomy />} />
//       </Routes>
//       <button onClick={handleCSClick}>
//         <Link to="/cs">CS</Link>
//       </button>
//       <button onClick={handleVaginaldeliveryClick}>
//         <Link to="/vaginal">Vaginal Delivery</Link>
//       </button>
//     </div>
//   );
// };

// // export default Rout;
//GOOD
// import React, { useState } from "react";
// import { Route, Routes, Link, Navigate } from "react-router-dom";
// import Home from "../pages/home";
// import Register from "../pages/Register";
// import Services from "../pages/services";
// import About from "../pages/about";
// import Postpartum from "../pages/postpartum";
// import Newborn from "../pages/newborncare";
// import Dropdown from "../pages/dropdown";
// import Dos from "../pages/does&don'ts";
// import Breastfeeding from "../pages/breastfeeding";
// import Login from "../pages/Login";
// import Vaginaldelivery from "../pages/vaginal";
// import CS from "../pages/cs";
// import Mealplan from "../pages/mealplan";
// import Mother from "../pages/motherandchild";
// import Contact from "../pages/contact";
// import Booking from "../pages/booking";
// import Episiotomy from "../pages/episiotomy";
// import Logout from "../pages/logout";
// import { useNavigate } from "react-router-dom";

// const Rout = () => {
//   const handleCSClick = () => {};

//   const handleVaginaldeliveryClick = () => {};

//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//     navigate("/home");
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     navigate("/login");
//   };

//   return (
//     <div>
//       <button onClick={handleCSClick}>
//         <Link to="/cs">CS</Link>
//       </button>
//       <button onClick={handleVaginaldeliveryClick}>
//         <Link to="/vaginal">Vaginal Delivery</Link>
//       </button>

//       <Routes>
//         <Route
//           path="/"
//           element={
//             isLoggedIn ? (
//               <Home onLogout={handleLogout} />
//             ) : (
//               <Register onLogin={handleLogin} />
//             )
//           }
//         />
//         <Route path="/cs" element={<CS />} />
//         <Route path="/vaginal" element={<Vaginaldelivery />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />}>
//           <Route path="/services/postpartum" element={<Postpartum />} />
//           <Route path="/services/mealplan" element={<Mealplan />} />
//           <Route path="/services/newborn" element={<Newborn />} />
//           <Route path="/services/breastfeeding" element={<Breastfeeding />} />
//           <Route path="/services/doesanddonts" element={<Dos />} />
//         </Route>
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/motherandchild" element={<Mother />} />
//         <Route path="/breastfeeding" element={<Breastfeeding />} />
//         <Route path="/newborn" element={<Newborn />} />
//         <Route path="/postpartum" element={<Postpartum />} />
//         <Route path="/mealplan" element={<Mealplan />} />
//         <Route path="/booking" element={<Booking />} />
//         <Route path="/episiotomy" element={<Episiotomy />} />
//         <Route path="/logout" element={<Logout />} />
//         <Route path="/dosanddonts" element={<Dos />} />
//         <Route
//           path="/register"
//           element={
//             isLoggedIn ? (
//               <Navigate to="/" replace />
//             ) : (
//               <Register onLogin={handleLogin} />
//             )
//           }
//         />
//         <Route
//           path="/login"
//           element={
//             isLoggedIn ? (
//               <Navigate to="/" replace />
//             ) : (
//               <Login onLogin={handleLogin} />
//             )
//           }
//         />
//       </Routes>
//     </div>
//   );
// };

// export default Rout;

// import React, { useState } from "react";
// import { Route, Routes, Link, Navigate } from "react-router-dom";
// import Home from "../pages/home";
// import Register from "../pages/Register";
// import Services from "../pages/services";
// import About from "../pages/about";
// import Postpartum from "../pages/postpartum";
// import Newborn from "../pages/newborncare";
// import Dropdown from "../pages/dropdown";
// import Dos from "../pages/does&don'ts";
// import Breastfeeding from "../pages/breastfeeding";
// import Login from "../pages/Login";
// import Vaginaldelivery from "../pages/vaginal";
// import CS from "../pages/cs";
// import Mealplan from "../pages/mealplan";
// import Mother from "../pages/motherandchild";
// import Contact from "../pages/contact";
// import Booking from "../pages/booking";
// import Episiotomy from "../pages/episiotomy";
// import Logout from "../pages/logout";
// import RequireAuth from "../pages/requireAuth";
// import Layout from "../pages/layout";

// const Rout = () => {

//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/motherandchild" element={<Mother />} />
//         <Route path="/breastfeeding" element={<Breastfeeding />} />
//         <Route path="/newborn" element={<Newborn />} />
//         <Route path="/postpartum" element={<Postpartum />} />
//         <Route path="/mealplan" element={<Mealplan />} />
//         <Route element={<RequireAuth/>}>
//         <Route path="/booking" element={<Booking />} /></Route>
//         <Route path="/episiotomy" element={<Episiotomy />} />
//         <Route path="/dosanddonts" element={<Dos />} />
//         <Route path="/logout" element={<Logout />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
      
//         </Route>
//       </Routes>
//     </div>
//   );
// };

// export default Rout;


// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Home from "../pages/home";
// import Register from "../pages/Register";
// import Services from "../pages/services";
// import About from "../pages/about";
// import Postpartum from "../pages/postpartum";
// import Newborn from "../pages/newborncare";
// import Dropdown from "../pages/dropdown";
// import Dos from "../pages/does&don'ts";
// import Breastfeeding from "../pages/breastfeeding";
// import Login from "../pages/Login";
// import Vaginaldelivery from "../pages/vaginal";
// import CS from "../pages/cs";
// import Mealplan from "../pages/mealplan";
// import Mother from "../pages/motherandchild";
// import Contact from "../pages/contact";
// import Booking from "../pages/booking";
// import Episiotomy from "../pages/episiotomy";
// import Logout from "../pages/logout";
// import RequireAuth from "../pages/requireAuth";
// import Layout from "../pages/layout";

// const Rout = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/motherandchild" element={<Mother />} />
//           <Route path="/breastfeeding" element={<Breastfeeding />} />
//           <Route path="/newborn" element={<Newborn />} />
//           <Route path="/postpartum" element={<Postpartum />} />
//           <Route path="/mealplan" element={<Mealplan />} />
//           <Route element={<RequireAuth />}>
//             <Route path="/booking" element={<Booking />} /></Route>
//             <Route path="/episiotomy" element={<Episiotomy />} />
//             <Route path="/dosanddonts" element={<Dos />} />
//             <Route path="/logout" element={<Logout />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//         </Route>
//       </Routes>
//     </div>
//   );
// };

// export default Rout;


import React from "react";
import { Route,Routes, Link } from "react-router-dom";
import Home from "../pages/home";
import Register from "../pages/Register";
import Services from "../pages/services";
import About from "../pages/about";
import Postpartum from "../pages/postpartum";
import Newborn from "../pages/newborncare";
import Dropdown from "../pages/dropdown";
import Dos from "../pages/does&don'ts";
import Breastfeeding from "../pages/breastfeeding";
import Login from "../pages/Login";
import Vaginaldelivery from "../pages/vaginal";
import CS from "../pages/cs";
import Mealplan from "../pages/mealplan";
import Mother from "../pages/motherandchild";
import Contact from "../pages/contact";
import Booking from "../pages/booking";
import Episiotomy from "../pages/episiotomy";
import Logout from "../pages/logout";
import Form from "../pages/form";


 const Rout =()=> {
  const handleCSClick = () => {
    
  };

  const handleVaginaldeliveryClick = () => {
    
  };
  
    return (
        <div>
           <button onClick={handleCSClick}>
        <Link to="/cs"></Link>
      </button>
      <button onClick={handleVaginaldeliveryClick}>
        <Link to="/vaginal"></Link>
      </button>

      <Routes>
        <Route path="/cs" element={<CS />} />
        <Route path="/vaginal" element={<Vaginaldelivery />} />
      </Routes>
      <Routes>
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />}>
          <Route path="/services/postpartum" element={<Postpartum />} />
          <Route path="/services/mealplan" element={<Mealplan />} />
          <Route path="/services/newborn" element={<Newborn />} />
          <Route path="/services/breastfeeding" element={<Breastfeeding />} />
          <Route path="/services/doesanddon'ts" element={<Dos />} />
          </Route>         
          <Route path="/contact" element={<Contact />} />
          <Route path="/motherandchild" element={<Mother />} />
          <Route path="/breastfeeding" element={<Breastfeeding />} />
          <Route path="/newborn" element={<Newborn />} />
          <Route path="/postpartum" element={<Postpartum />} />
          <Route path="/mealplan" element={<Mealplan />} /> 
          <Route exact path="/booking" element={<Booking />} /> 
          <Route exact path="/form" element={<Form />} />
          </Routes> 
          <Routes>
          <Route path="/do'sanddon'ts" element={<Dos />} > 
          </Route>
         </Routes>
         <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        </Routes>
       <Routes>
        <Route path="/episiotomy" element={<Episiotomy />} />
       </Routes>
      </div>
    );
  }
  export default Rout;