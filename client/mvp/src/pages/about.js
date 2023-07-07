import React from 'react';
import Navbar from './navbar';
import foto from '../Assets/abtbk.png';
import fot from '../Assets/abtimg.png';
import fots from '../Assets/motherch.jpg';
import Footer from './footer';
import './about.css'
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <div>
            <Navbar/>
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
          <img src={foto} alt="Box 1" className='abtbk' />
          <h2 className="about-heading">About MommySOS</h2>
          <p className='abt'>
            MommySOS is a dedicated platform that offers comprehensive after-birth care services to new mothers. We understand the unique challenges and joys that come with motherhood, and our mission is to provide unwavering support to women during this transformative journey.
            Our team consists of experienced professionals, including lactation consultants, postpartum doulas, and mental health experts, who are passionate about maternal well-being. We believe that every mother deserves personalized care and guidance to thrive during the postpartum period.
            At MommySOS, we offer a range of services tailored to meet the specific needs of new mothers. From breastfeeding support and newborn care to postpartum recovery and emotional well-being, our team is here to provide compassionate assistance every step of the way.
            We strive to create a supportive community where mothers can connect, share their experiences, and find solace in knowing that they are not alone. Through our resources, educational materials, and online forums, we aim to empower women and foster a sense of camaraderie among mothers worldwide.
            We believe that every mother deserves to be nurtured and cared for during this precious time of their lives. With MommySOS, you can rest assured that you have a trusted companion by your side as you embrace the joys and challenges of motherhood. Together, let's create a world where all mothers feel supported, valued, and empowered.
          </p>
        </div>
          </div>
          <div className="about-boxes">
            <div className="about-box">
              <img src={fot} alt="Box 1" />
              <h3>Our Mission</h3>
              <p className='mission'>
              At MommySOS, our mission is to provide unwavering support and comprehensive care to new mothers during their postpartum journey. We strive to empower and nurture mothers, ensuring their physical, emotional, and mental well-being during this transformative phase of their lives.</p>
            </div>
            <div className="about-box">
              <img src={fots} alt="Box 2" />
              <h3>Our Vision</h3>
              <p className='mission'>
                Our vision at MommySOS is to create a world where every mother receives the care, support, and resources she needs to thrive during the postpartum period. We envision a society that recognizes and values the essential role of mothers and provides them with the tools and support to navigate the challenges and joys of motherhood.
              </p>
            </div>
           
          </div>
          <div>
              <p>
              <Link to="/form" className='blink'>Become one of our care giver</Link>
              </p>
            </div>
        </div>
         <Footer/>
        </div>
    );
  };
  
  export default About;