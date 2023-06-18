
import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Slideshow from './slide';
import './breastfeeding.css';
import breast from '../Assets/breast.png';
import brest from '../Assets/bff.png';
import bresst from '../Assets/breastfeeding-baby.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';


const BreastfeedingSupport = () => {
  return (
    <div className="breastfeeding-container">
      <Navbar />
      <img src={bresst} alt='back' className='breastbg'/>
      <div className="breastfeeding-content">
        <div className="breastfeeding-info">
          <div className="slideshow-container">
          <h1 className='slidehead'>Facts About Breastfeeding</h1>
          <Slideshow />
        </div>
        <h2 className="breastfeeding-heading">Breastfeeding Support</h2>
          <p className="breastfeeding-text">
           Breastfeeding is a precious bonding experience between a mother and her baby. At MommySOS, we understand the importance of breastfeeding and offer comprehensive support to help you navigate your breastfeeding journey successfully.
         </p>
           <ul  className="breastfeeding-list">
             <li>Expert lactation consultations</li>
           <li>Assessment and guidance for latch and positioning</li>
             <li>Support for common breastfeeding challenges</li>
             <li>Advice on increasing milk supply</li>
             <li>Guidance on pumping and storing breast milk</li>
             <li>Education on breastfeeding techniques and best practices</li>
             <li>Information on breastfeeding-friendly products and resources</li>
           </ul>
          
        </div>
        <div className="breastfeeding-images-boxes">
           <div className='image-box'>
          <img src={breast} alt="Mother and Baby" className="mom-baby-image" />
          <p className="breastfeeding-text1">
             Our goal is to empower you with the knowledge and support needed to establish and maintain a successful breastfeeding relationship. We understand that every mother and baby are unique, and we provide individualized care to address your specific needs and concerns.
          </p>
          </div>
          <div className='breastfeeding-images-boxes'>
          <div className='image-box'>
          <img src={brest} alt="Nurse" className="mom-baby-image" />
          <p className="breastfeeding-text2">
          Our team of lactation consultants and breastfeeding specialists is available to provide guidance, education, and assistance with any breastfeeding concerns you may have. We offer a range of services to support you and ensure a positive breastfeeding experience for both you and your baby.
         </p>
          </div> 
          </div>
          <Link to="/booking" className="book-caregiver-button">Book Our Caregiver</Link>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default BreastfeedingSupport;
