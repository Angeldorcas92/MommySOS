// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Navbar from './navbar.js';
// import CS from './cs.js';
// import Vaginaldelivery from './vaginal.js';

// const Dos = () => {
//   const [showCS, setShowCS] = useState(false);
//   const [showVaginaldelivery, setShowVaginaldelivery] = useState(false);

//   const handleCSClick = () => {
//     setShowCS(true);
//     setShowVaginaldelivery(false);
//   };

//   const handleVaginaldeliveryClick = () => {
//     setShowVaginaldelivery(true);
//     setShowCS(false);
//   };

//   return (
    
//       <div>
//         <Navbar />
//         <div className="guideline">
//           <h4>After giving birth, it's crucial to prioritize your well-being and focus on postpartum care. Every woman's birthing experience is unique, and whether you had a cesarean delivery (CS) or vaginal delivery, it's important to understand the specific guidelines and recommendations for your recovery process.</h4>

//           <p>We have provided separate guidelines for CS delivery and vaginal delivery to address the specific needs and considerations associated with each type of delivery. By clicking on the links below, you can access detailed guidelines tailored to your delivery method. These guidelines will provide you with valuable insights and information to ensure a smooth recovery and optimum postpartum care.</p>

//            <button onClick={handleCSClick}>
//             <Link to="/cs">CS Delivery Guidelines</Link>
//           </button>
//           <button onClick={handleVaginaldeliveryClick}>
//             <Link to="/vaginal">Vaginal Delivery Guidelines</Link>
//           </button> 
        

//           {showCS && <CS />}
//           {showVaginaldelivery && <Vaginaldelivery />}
//         </div>
//       </div>
    
//   );
// };

// export default Dos;



import React, { useState } from 'react';
import {  Link } from 'react-router-dom';
import Navbar from './navbar.js';
import './dos.css';
import CS from './cs.js';
import Vaginaldelivery from './vaginal.js';
import csImage from '../Assets/css.png';
import vaginalDeliveryImage from '../Assets/vg delivery.png';
import Footer from './footer.js';

const Dos = () => {
  const [showCS, setShowCS] = useState(false);
  const [showVaginaldelivery, setShowVaginaldelivery] = useState(false);

  const handleCSClick = () => {
    setShowCS(true);
    setShowVaginaldelivery(false);
  };

  const handleVaginaldeliveryClick = () => {
    setShowVaginaldelivery(true);
    setShowCS(false);
  };

  return (
    <div>
      <Navbar />
      <div className="guidelines">
        <h4>After giving birth, it's crucial to prioritize your well-being and focus on postpartum care. Every woman's birthing experience is unique, and whether you had a cesarean delivery (CS) or vaginal delivery, it's important to understand the specific guidelines and recommendations for your recovery process.</h4>

        <p>We have provided separate guidelines for CS delivery and vaginal delivery to address the specific needs and considerations associated with each type of delivery. By clicking on the links below, you can access detailed guidelines tailored to your delivery method. These guidelines will provide you with valuable insights and information to ensure a smooth recovery and optimum postpartum care.</p>

        <button onClick={handleCSClick}>
          <Link to="/cs">
            <img src={csImage} alt="CS Delivery" className="delivery-image" />
            CS Delivery Guidelines
          </Link>
        </button>
        <button onClick={handleVaginaldeliveryClick}>
          <Link to="/vaginal">
            <img src={vaginalDeliveryImage} alt="Vaginal Delivery" className="delivery-image" />
            Vaginal Delivery Guidelines
          </Link>
        </button>

        {showCS && <CS />}
        {showVaginaldelivery && <Vaginaldelivery />}
      </div>
      <Link to="/booking" className="book-caregiver-button">Book Our Caregiver</Link>

      <Footer/>
    </div>
  );
};

export default Dos;
