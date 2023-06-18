// import React from "react";
// import Navbar from "./navbar";
// import './vg.css';
// import { Link } from "react-router-dom";
// import Footer from "./footer";

// const Vaginaldelivery = () => {
//   const dos = [
//     "Follow your healthcare provider's guidance on pushing techniques and breathing exercises during labor.",
//     "Maintain a comfortable and upright position during labor to help with the delivery process.",
//     "Communicate your needs and preferences to your healthcare team.",
//     "Stay hydrated and nourished during labor, following any dietary restrictions advised by your healthcare provider.",
//     "Engage in relaxation techniques, such as deep breathing or visualization, to manage pain and promote a smoother delivery.",
//     "Take advantage of labor support, such as the presence of a birth partner, doula, or healthcare provider.",
//     "Attend childbirth education classes to learn about the process and prepare yourself mentally and emotionally.",
//   ];

//   const donts = [
//     "Don't ignore signs of labor or delay seeking medical assistance if you suspect you're in active labor.",
//     "Don't be afraid to ask for pain management options if needed.",
//     "Don't hold back from vocalizing or expressing your needs during labor.",
//     "Don't forget to practice self-care, including rest and relaxation, during the early stages of labor.",
//     "Don't hesitate to reach out to your healthcare provider with any concerns or questions you may have.",
//     "Don't compare your labor experience to others. Every birth is unique.",
//     "Don't forget to celebrate and bond with your newborn once they arrive.",
//   ];

//   return (
//     <div>
//        <Navbar/>
//       <h2>Vaginal Delivery Guidelines</h2>
//       <h3>Do's</h3>
//       <ul>
//         {dos.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//       <h3>Don'ts</h3>
//       <ul>
//         {donts.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Vaginaldelivery;


import React from "react";
import Navbar from "./navbar";
import './vg.css';
import { Link } from "react-router-dom";
import Footer from "./footer";

const Vaginaldelivery = () => {
  const dos = [
    "Follow your healthcare provider's guidance on pushing techniques and breathing exercises during labor.",
    "Maintain a comfortable and upright position during labor to help with the delivery process.",
    "Communicate your needs and preferences to your healthcare team.",
    "Stay hydrated and nourished during labor, following any dietary restrictions advised by your healthcare provider.",
    "Engage in relaxation techniques, such as deep breathing or visualization, to manage pain and promote a smoother delivery.",
    "Take advantage of labor support, such as the presence of a birth partner, doula, or healthcare provider.",
    "Attend childbirth education classes to learn about the process and prepare yourself mentally and emotionally.",
  ];

  const donts = [
    "Don't ignore signs of labor or delay seeking medical assistance if you suspect you're in active labor.",
    "Don't be afraid to ask for pain management options if needed.",
    "Don't hold back from vocalizing or expressing your needs during labor.",
    "Don't forget to practice self-care, including rest and relaxation, during the early stages of labor.",
    "Don't hesitate to reach out to your healthcare provider with any concerns or questions you may have.",
    "Don't compare your labor experience to others. Every birth is unique.",
    "Don't forget to celebrate and bond with your newborn once they arrive.",
  ];

  return (
    <div>
      <Navbar />
    <div className="vaginal-delivery">
      
      <h2 className="guide">Vaginal Delivery Guidelines</h2>
      <p>
        Vaginal delivery is the natural method of childbirth where the baby is
        delivered through the birth canal. It is the most common and preferred
        mode of delivery for uncomplicated pregnancies. During vaginal
        delivery, the mother experiences labor contractions, and the baby
        passes through the cervix and vagina.
      </p>

      <h3>Importance of Vaginal Delivery:</h3>
      <ul>
        <li> <strong>Natural Process</strong>: Vaginal delivery allows for the natural process of childbirth, enabling the mother to experience the stages of labor and the physical and emotional aspects of giving birth.</li>
        <li> <strong>Shorter Recovery Time</strong>: Compared to cesarean section (CS) delivery, vaginal delivery generally involves a shorter recovery period. After a vaginal delivery, the mother may experience less pain, have a faster return to normal activities, and require less postpartum care.</li>
        <li><strong>Hormonal Benefits</strong>Hormonal Benefits: Vaginal delivery triggers the release of hormones, such as oxytocin and endorphins, which aid in bonding, breastfeeding, and postpartum healing.</li>
        <li> <strong>Lower Risk of Complications</strong>: In the absence of certain medical conditions or complications, vaginal delivery is generally considered safer and carries a lower risk of surgical complications associated with CS delivery.</li>
        <li> <strong>Reduced Neonatal Respiratory Issues</strong>: Babies born through vaginal delivery often have better respiratory outcomes compared to those delivered by CS. The process of passing through the birth canal helps expel amniotic fluid from the baby's lungs, promoting better breathing.</li>
        <li> <strong>Faster Initiation of Breastfeeding</strong>: Skin-to-skin contact and the immediate initiation of breastfeeding are commonly facilitated after vaginal delivery, promoting early bonding and the establishment of breastfeeding.</li>
      </ul>

      <h3 className="vaginal-delivery-do-title">  Do's For Vaginal Delivery</h3>
      <ul className="vaginal-delivery-do-list">
        {dos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3 className="vaginal-delivery-dont-title">Don'ts For Vaginal Delivery</h3>
      <ul className="vaginal-delivery-dont-list">
        {donts.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Link to="/episiotomy" className="episiotomy-button">Episiotomy Care?</Link>

    </div>
    <Link to="/booking" className="book-caregiver-button">Book Our Caregiver</Link>

    <Footer />
    </div>
  );
};

export default Vaginaldelivery;
