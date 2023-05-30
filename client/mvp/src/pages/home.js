import React, { useEffect } from 'react';
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
export default function Home() {
    const navigate= useNavigate();
  const handleStart = () => {
    navigate('./Register');
    
    console.log("Get Started clicked!");
  };

  return (
    <div className="homepage">
      <Navbar />
      <div className="background-image" />
      <div className="home">
  <div className="text-container">
    <h1 className="hometext01">Welcome to MommySOS!</h1>
    <h6 className="hometext02">MommySOS is a comprehensive platform designed to support mothers and families throughout their journey of motherhood. We understand the challenges and joys that come with being a mom, and we are here to provide you with a reliable resource and a supportive community.</h6>
  </div>
  </div>
  <div className="grid-container">
    <div className="grid-item"> <Link to="/motherandchild">Mother&Child</Link>
    <img src={photo} alt="photo" />

    </div>
    <div className="grid-item"> <Link to = "/postpartum">Postpartum Recovery</Link> 
    <img src={postpartum} alt="photo" />
    </div>
    <div className="grid-item"><Link to="/mealplan">Mealplan</Link>
    <img src={plan} alt="photo" />
    </div>
    <div className="grid-item"><Link to="/do'sanddon'ts">Do'sanddon't </Link></div>
    <div className="grid-item"> <Link to="/breastfeeding">Breastfeeding Support</Link>
    <img src={feed} alt='photo'/>
    </div>
    <div className="grid-item"><Link to="/newborn">Newborn Care</Link>
    <img src={newborn} alt="photo" />
    
    </div>
  </div>
    
        <button onClick={handleStart} className='startingbut'>Get Started</button>
      </div>
      
    
  );
}
