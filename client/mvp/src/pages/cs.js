

import React from "react";
import { Link } from "react-router-dom";
import './cs.css';
import Footer from "./footer";
import Navbar from "./navbar";

const CS = () => {
  const dos = [
    "Follow your healthcare provider's instructions regarding wound care and incision site hygiene.",
    "Take prescribed pain medication as directed to manage post-surgery discomfort.",
    "Ask for help when needed, especially during the initial recovery period.",
    "Engage in gentle postpartum exercises recommended by your healthcare provider.",
    "Communicate any concerns or unusual symptoms to your healthcare provider.",
    "Establish a support system to assist with newborn care and household tasks.",
    "Attend your follow-up appointments with your healthcare provider.",
    "Be sure to clean and keep your incission neat to avoid getting infected.",
  ];

  const donts = [
    "Don't lift heavy objects or engage in strenuous activities that could strain your incision.",
    "Don't neglect your pain management. Take the prescribed medication as directed.",
    "Don't ignore signs of infection. Contact your healthcare provider if you suspect an infection.",
    "Don't rush the recovery process. Allow yourself adequate time to heal.",
    "Don't neglect your emotional well-being. Reach out for support if needed.",
    "Don't skip postpartum check-ups or appointments with your healthcare provider.",
    "Don't compare your recovery timeline with others. Each woman's healing process is unique.",
  ];

  return (
    <div>
    <div className="cs-container">
      <Navbar />
      <h2 className="cs-title">CS (Cesarean Section) Delivery:</h2>
      <p className="cs-description">
        CS, also known as a C-section, is a surgical procedure in which a baby is delivered through an incision in the mother's abdomen and uterus. It is typically performed when vaginal delivery poses risks to the mother or baby's health or when certain complications arise during pregnancy or labor.
      </p>

      <h3 className="cs-subtitle">Importance of Consenting to CS Delivery:</h3>
      <ul className="cs-explanation">
        <li>
          <strong>Medical Necessity:</strong> CS delivery may be necessary to safeguard the health and well-being of the mother and baby. It can prevent complications such as fetal distress, placenta previa, prolonged labor, or issues with the baby's positioning.
        </li>
        <li>
          <strong>Emergency Situations:</strong> In some cases, a CS delivery is performed as an emergency procedure when unforeseen complications or emergencies arise during labor, putting the mother or baby at risk. It allows for a prompt and safe delivery.
        </li>
        <li>
          <strong>Planned CS:</strong> In certain situations, a planned CS delivery may be recommended by healthcare providers based on pre-existing conditions or factors that increase the risk of complications during vaginal delivery. This includes cases of breech presentation, multiple pregnancies, certain maternal medical conditions, or a history of previous CS deliveries.
        </li>
        <li>
          <strong>Maternal Choice:</strong> Some women may choose CS delivery for personal or medical reasons. This decision should be made after thorough discussions with healthcare providers, considering factors such as previous birth experiences, medical history, and individual circumstances.
        </li>
      </ul>

      <h2 className="cs-do-title">Do's for CS Delivery:</h2>
      <ul className="cs-do-list">
        {dos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="cs-dont-title">Don'ts for CS Delivery:</h2>
      <ul className="cs-dont-list">
        {donts.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Link to="/booking" className="book-caregiver-button">Book Our Caregiver</Link>

    </div>
    <Footer/>
    </div>
    
  );
};

export default CS;
