
import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import "./mother.css";
import nne from '../Assets/motherchild.png';
import mom from '../Assets/motherch.jpg';
import { Link } from "react-router-dom";

const MotherChild = () => {
  return (
     <div>
    <div className="motherchild-container">
      <Navbar />
      <img src={nne} alt="mother" className="nne"/>
      <div className="motherchild-content">
        <h2 className="motherchild-title">Mother & Child</h2>
        <p className="motherchild-description">
          Welcome to the Mother & Child section of MommySOS! Here, we provide a
          wealth of resources and information to support you on your journey of
          motherhood. Whether you're an expecting mother, a new mom, or a
          caregiver, we've got you covered.
          
        </p>
        <p className="bonding">Mom And Child bonding techniques</p>
        <div className="motherchild-image-container">
            
        <img src={mom} alt="mother" className="mother"/>
         <ul>
            <li>
           <b>Skin-to-Skin Contact: </b> Holding your baby skin-to-skin immediately after birth and during breastfeeding helps create a strong bond. It promotes feelings of warmth, security, and closeness.</li>
            <li>
<b> Eye Contact and Talking:</b> Make eye contact with your baby while talking or singing to them. Your baby will recognize your voice and feel comforted by your presence. Engage in gentle conversations, even if your baby doesn't understand the words yet.</li>
<li>
<b>Cuddling and Holding:</b> Hold your baby close, cuddle them, and provide gentle touches. Physical touch releases oxytocin, a hormone that promotes bonding and feelings of love.</li>
<li>
<b>Breastfeeding:</b> If you choose to breastfeed, it can be a powerful bonding experience. The close physical contact and the act of nourishing your baby create a strong connection.</li>
<li>
<b>Responding to Cues:</b> Pay attention to your baby's cues and respond promptly. This helps build trust and a sense of security. Whether it's feeding, changing diapers, or comforting them when they cry, meeting your baby's needs strengthens your bond.</li>
<li>
<b>Baby Massage:</b> Gentle baby massage can be a soothing and bonding activity. Use baby-safe oils and learn techniques to massage your baby's arms, legs, and back. It can promote relaxation and enhance the parent-child connection.</li>
<li>
<b>Baby-Wearing: </b>Using a baby carrier or sling allows you to keep your baby close while going about your daily activities. The physical closeness promotes bonding, and your baby can feel your movements and hear your heartbeat.</li>
<li>
<b> Play and Sing Together</b>: Engage in simple play activities like peek-a-boo, singing lullabies, or gentle tickling. These interactive moments create joy and laughter, strengthening your bond.</li>

<li><b>Take Care of Yourself</b>: Bonding is also influenced by the mother's well-being. Take care of yourself physically and emotionally, as it positively impacts your ability to bond with your baby. Rest, eat nutritious meals, seek support when needed, and practice self-care.
            </li>
         </ul>
        </div> 
      </div>
      <Link to="/booking" className="book-caregiver-button">Book Our Caregiver</Link>

    </div>
    <Footer/>
    </div>
  );
};

export default MotherChild;
