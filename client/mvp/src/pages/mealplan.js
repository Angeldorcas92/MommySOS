import React from 'react';
import Navbar from './navbar';
import "./mealplan.css";
import Meal from "../Assets/mealimg.jpg"
import { Link } from 'react-router-dom';
import meal from '../Assets/mealbk2.png';
import meall from '../Assets/mealbg.png';
import maal from '../Assets/lunch.png';
import meel from '../Assets/lunch2.png';
import mell from '../Assets/dinner.png';
import mall from '../Assets/ddd.png';
import malt from '../Assets/bbb.png';
import mbg from '../Assets/mbg.png';
import Footer from './footer';

const Mealplan = () => {
  return (
    <div className="mealplan-container">
      
      <Navbar />
     
        <img  src={Meal} className='backdrop'
      alt='mealplan'/>
     
         <h2 className="mealplan-heading">Personalized Meal Plans</h2>
      <p className="mealplan-text">
        We understand the importance of a healthy diet during the postpartum period. Our personalized meal plans are designed to meet your nutritional needs and support your recovery journey. Each meal plan is carefully curated by our nutrition experts to provide you with balanced and nourishing meals.
      </p>
      <div className="meal-box">
        <div className="mealplan-card">
          <img src={meal} alt="Breakfast" className="mealplan-image1" />
          <img src={malt} alt="Breakfast" className="mealplan-image2" />
          <div className="mealplan-card-content">
            <h3 className="mealplan-card-title">Breakfast</h3>
            <p className="mealplan-card-description">Start your day with a healthy and energizing breakfast. Begin with a balanced meal including whole grains, protein-rich foods like eggs or Greek yogurt, fruits or vegetables, and healthy fats such as avocado or nuts. This combination provides energy, essential nutrients, and supports milk production.</p>
          </div>
        </div>
        <div className="mealplan-card">
          <img src={maal} alt="Lunch" className="mealplan-image1" />
          <img src={meel} alt="Lunch" className="mealplan-image2" />
          <div className="mealplan-card-content">
            <h3 className="mealplan-card-title">Lunch</h3>
            <p className="mealplan-card-description">Enjoy a nutritious and satisfying lunch to fuel your day. Opt for a balanced meal with a variety of vegetables, lean proteins like chicken or fish, whole grains like quinoa or brown rice, and healthy fats like olive oil or avocado. Incorporating these food groups helps replenish nutrients, support healing, and maintain energy levels.</p>
          </div>
        </div>
        <div className="mealplan-card">
          <img src={mall} alt="Dinner" className="mealplan-image1" />
          <img src={mell} alt="Dinner" className="mealplan-image2" />
          <div className="mealplan-card-content">
            <h3 className="mealplan-card-title">Dinner</h3>
            <p className="mealplan-card-description">End your day with a delicious and wholesome dinner. Enjoy a well-balanced meal consisting of lean proteins, whole grains, plenty of vegetables, and healthy fats. Consider including foods rich in iron, such as lean red meat or leafy greens, to support postpartum recovery and replenish nutrient stores.</p>
          </div>
        </div>
      </div>
      <p className='important'>Remember to prioritize nutrient-dense foods, stay hydrated, and listen to your body's hunger and fullness cues. It's important to consult with a healthcare professional or nutritionist for personalized meal plans and dietary recommendations based on your specific needs and preferences.</p>
      <Link to="/booking" className="book-caregiver-button">Book Our Caregiver</Link>
      <Footer /> 
      </div>
    
  );
};

export default Mealplan;
