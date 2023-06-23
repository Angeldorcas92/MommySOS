import React, { useEffect, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom'
import Navbar from './navbar';
import './home.css';
import './navbar.css';
import Register from './Register';
import photo from '../Assets/mother-and-child.png';
import feed from '../Assets/breastfeeding.png';
import plan from '../Assets/mealplan.png';
import newborn from '../Assets/newborn.png';
import postpartum from '../Assets/postpartum.png'
import Login from './Login';
import logo from '../Assets/home.png'
import dos from '../Assets/dos.png'
import Breastfeeding from './breastfeeding';
import Postpartum from './postpartum';
import Footer from './footer';
import MyComponent from './mycomponenet';

export default function Home() {

  const navigate= useNavigate();

  const handleStart = () => {
    navigate('./register');
    
    console.log("Get Started clicked!");
  };

  const [show, setShow] = useState(false)

  const hanClick = () => {
    setShow(!show)
  }

  return (
    <div className="homepage">
      <Navbar />
      <div className="background-image" />
      <div className="home">
  <div className="text-container">
    <img src={logo} alt='logo' className='homeimage'></img>
    <h1 className="hometext01">Welcome to MommySOS!</h1>
    <h6 className="hometext02">MommySOS is a comprehensive platform designed to support mothers and families throughout their journey of motherhood. We understand the challenges and joys that come with being a mom, and we are here to provide you with a reliable resource and a supportive community.</h6>
    </div>
    </div>
    <div className="container">
    <div className="box">
    <Link to="/breastfeeding">
    <img src={feed} alt="newborn" className='boximg'/>
    </Link> 
     <p><Link to="/breastfeeding" className='homehead'>Breastfeeding Support</Link></p>
      <p className='homewriting'>At MommySOS, we provide comprehensive breastfeeding support to new mothers.We understand that breastfeeding can sometimes be challenging, and we are here to offer the knowledge, expertise, and encouragement you need to succeed.</p>
    </div>
    <div className="box">
    <Link to="/mother">
    <img src={photo} alt="newborn" className='boximg'/>
    </Link>
    <p><Link to="/mother" className='homehead'>Mother&Child</Link></p>
    <p className='homewriting'>At MommySOS, we understand the unique and precious bond between a mother and her child. We prioritize the well-being and health of both mother and child, providing comprehensive support and resources to ensure their optimal care.</p>
    </div>
    <div className="box">
    <Link to="/do'sanddon'ts">
    <img src={dos} alt="newborn" className='boximg'/>
    </Link>
    <p><Link to="/do'sanddon'ts" className='homehead'>Do's&Don'ts</Link></p>
    <p className='homewriting'>At MommySOS, we believe in providing helpful guidelines and information to support new parents in their parenting journey.Remember, parenting is a journey filled with love, learning, and joy.  </p>
    </div>
    </div>
    <div className="container">
    <div className="box">
    <Link to="/mealplan">
    <img src={plan} alt="newborn" className='boximg'/>
    </Link>
    <p><Link to="/mealplan" className='homehead'>Mealplan</Link></p>
    <p className='homewriting'>At MommySOS, we understand the importance of nourishing meals for both new mothers and their growing families. Our meal plan is designed to provide wholesome and balanced nutrition, supporting postpartum recovery and overall well-being.</p>
    </div>
    <div className="box">
    <Link to="/newborn">
     <img src={newborn} alt="newborn" className='boximg'/>
    </Link>
    <p><Link to="/newborn" className='homehead'>Newborn Care</Link></p>
    <p className='homewriting'>We provide support from feeding and sleep routines to diapering, bathing, and soothing techniques, we cover all aspects of newborn care. Our experienced professionals provide evidence-based advice, tips, and strategies to help you feel confident and empowered in providing the best care for your newborn.</p>
    </div>
    <div className="box">
    <Link to="/postpartum">
    <img src={postpartum} alt="newborn" className='boximg'/>
    </Link>
    <p><Link to="/postpartum" className='homehead'>Postpartum Recovery</Link></p>
    <p className='homewriting'>The postpartum period is a time of physical and emotional healing as your body adjusts to its pre-pregnancy state. Our team at MommySOS is here to support you through this transformative phase, offering guidance, care, and resources to aid in your postpartum recovery.</p>
    </div>
    </div>
    <button onClick={handleStart} className='startingbut'>Get Started</button>

    
    <Footer/>
   </div>
      
    
  );
}
