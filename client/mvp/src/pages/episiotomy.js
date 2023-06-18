import React from "react";
import Navbar from "./navbar";
import "./episiotomy.css";
import { Link } from "react-router-dom";
import Footer from "./footer";

const Episiotomy = () => {
  const dos = [
    "Follow your healthcare provider's guidance on pushing techniques and breathing exercises during labor.",
    "Communicate your needs and preferences to your healthcare team, especially regarding pain management and episiotomy.",
    "Maintain a comfortable and upright position during labor to aid in the delivery process.",
    "Practice perineal massage as recommended by your healthcare provider to help prepare the area for an episiotomy.",
    "Follow your healthcare provider's instructions for postpartum perineal care and wound healing.",
    "Use pain relief measures, such as ice packs or sitz baths, as advised to alleviate discomfort after the delivery.",
    "Attend postpartum check-ups with your healthcare provider to monitor healing and address any concerns or complications.",
  ];

  const donts = [
    "Don't hesitate to ask for pain relief options, including local anesthesia, during the episiotomy procedure.",
    "Don't ignore signs of infection or delayed healing in the perineal area. Contact your healthcare provider if you have concerns.",
    "Don't engage in activities that could strain the perineal area, such as heavy lifting or vigorous exercises, during the initial healing period.",
    "Don't neglect self-care practices, such as maintaining proper hygiene and keeping the perineal area clean and dry.",
    "Don't compare your recovery process to others. Each woman's healing timeline may vary.",
    "Don't hesitate to seek emotional support or reach out to healthcare professionals if you have any postpartum concerns or feelings of distress.",
    "Don't forget to take time for rest and self-care as you recover from both childbirth and the episiotomy procedure.",
  ];

  return (
     <div>
    <div className="episiotomy">
      <Navbar />
      <div className="episiotomy-info">
        <h2>Episiotomy Guidelines</h2>
        <p>
          Episiotomy is a surgical incision made in the perineum (the area
          between the vagina and anus) during childbirth. It is performed by a
          healthcare provider to enlarge the vaginal opening and facilitate
          delivery, especially in cases where the birth canal needs additional
          space or to expedite the delivery process.
        </p>
        <h3 className="ep-dos-title" >Do's For Episiotomy</h3>
        <ul className="ep-dos-list" >
          {dos.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h3 className=" ep-dont-title">Don'ts For Episiotomy</h3>
        <ul className="ep-dont-list">
          {donts.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <Link to="/booking" className="book-caregiver-button">Book Our Caregiver</Link>

    </div>
    <Footer/>
    </div>
  );
};

export default Episiotomy;

