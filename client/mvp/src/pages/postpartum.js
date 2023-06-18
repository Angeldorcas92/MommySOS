
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import "./postpartum.css";
import aaa from "../Assets/pp2.png";
import ccc from "../Assets/ppp.png";
import ddd from "../Assets/p1.png";
import Footer from "./footer";
const Postpartum = () => {
  return (
    <div className="postpartum-container">
      <Navbar />
      <img src={aaa} alt="" className="pimg"/>
      <h3 className="about-box-heading">Postpartum Recovery</h3>
      <p className="about-box-description">
            Congratulations on your new arrival! The postpartum period is a critical time for your recovery and well-being. At MommySOS, we are here to support you during this phase and provide guidance to ensure a healthy and smooth recovery.
            Remember, postpartum recovery is a gradual process, and each woman's journey is unique. Our aim is to support you holistically, promoting your physical, emotional, and psychological well-being as you embrace the joys and challenges of motherhood.
          </p>
      <div className="about-boxes">
        <div className="about-box">
          <img src={ddd} alt="" className="about-box-img" />
         
         
          <p className="about-box-heading">
           <h3 className="about-box-heading"> Essential Recovery Tips:</h3>
          </p>
          <ul className="about-box-list">
            <li>Take ample rest and prioritize self-care.</li>
            <li>Stay hydrated and eat nutritious meals.</li>
            <li>Follow your healthcare provider's instructions for postpartum exercises.</li>
            <li>Seek emotional support from loved ones or join a support group.</li>
            <li>Manage pain and discomfort with prescribed medications or natural remedies.</li>
            <li>Listen to your body and give yourself time to heal.</li>
          </ul>
        </div>
        <div className="about-box">
          <img src={ccc} alt="" className="about-box-img" />
          <h3 className="about-box-heading">Additional Resources:</h3>
          <ul className="about-box-list">
            <li>Consult with your healthcare provider for personalized recovery recommendations.</li>
            <li>Explore our postpartum recovery articles and guides for in-depth information.</li>
            <li>Join our postpartum fitness classes and wellness workshops.</li>
            <li>Connect with other mothers in our supportive online community.</li>
            <li>Schedule a consultation with our postpartum recovery specialists.</li>
          </ul>
        </div>
      </div>
      <Link to="/booking" className="book-caregiver-button">Book Our Caregiver</Link>
    
        <Footer/>
     
    </div>
  );
};

export default Postpartum;


