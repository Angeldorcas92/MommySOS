import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import './newborn.css';
import { Link } from 'react-router-dom';
import nnn from '../Assets/bathing.png';
import bbb from '../Assets/bathing2.png';
import nbn from '../Assets/massage.png';
import nnb from '../Assets/nb.png';
import bbn from '../Assets/nb1.png';
import nn from '../Assets/nb2.png';

const Newborn = () => {
  return (
    <div className="newborn-container">
      <Navbar />
      <div className="newborn-content">
        <div className="newborn-image">
          <img src={bbn} alt="Newborn Baby" className="baby-image" />
          <img src={nnb} alt="Newborn Baby" className="baby-image" />
          <img src={nn} alt="Newborn Baby" className="baby-image" />
          <img src={nbn} alt="Newborn Baby" className="baby-image" />
        </div>
        <div className="newborn-info">
          <h2 className="newborn-heading">Welcome to the World, Newborn!</h2>
          <p className="newborn-text">
            Congratulations on the arrival of your precious little one! The newborn stage is a magical and transformative time for both parents and baby. At MommySOS, we are here to provide you with guidance, support, and resources to help you navigate this beautiful journey of parenthood.
          </p>
          <p className="newborn-text">
            Our team of experts is dedicated to ensuring the well-being and development of your newborn. From breastfeeding assistance to sleep schedules, we offer a range of services to address your specific needs and concerns. We understand that every baby is unique, and we tailor our approach to provide personalized care for your little one.
          </p>
          <p className="newborn-text">
            Bathing and Massaging: Bathing and massaging your newborn is not only a bonding experience but also has several benefits. Massaging your baby with gentle oils promotes relaxation, aids digestion, improves blood circulation, and enhances muscle development. It also provides sensory stimulation and can help soothe your baby, promoting better sleep. Our experts will demonstrate proper techniques and recommend suitable products to keep your baby's skin soft and nourished.
          </p>
          <p className="newborn-text">
            Caring for the Baby's Cord: Taking care of your baby's umbilical cord is essential for proper healing. The cord stump requires special attention to prevent infection. Our experts will guide you on how to clean and care for the cord stump, ensuring it remains dry and infection-free until it naturally falls off. By following proper hygiene practices, you can promote a healthy healing process and minimize any discomfort for your baby.
          </p>
          <p className="newborn-text">
            Along with our professional services, we also provide a nurturing and inclusive community of parents who can share their experiences and offer support. Our workshops and classes cover various topics such as newborn care, postpartum recovery, and early development, allowing you to gain knowledge and connect with other parents on this incredible journey.
          </p>
          <p className="newborn-text">
            Trust MommySOS to be your partner in this precious chapter of your life. We are committed to ensuring the health, happiness, and well-being of both you and your newborn. Let us guide you through this beautiful and transformative experience.
          </p>
        </div>
      </div>
      <Link to="/booking" className="book-caregiver-button">Book Our Caregiver</Link>
       
       
       <Footer />
      
    </div>
  );
};

export default Newborn;
