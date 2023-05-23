import React from "react";
import { Link } from "react-router-dom";
import '../navbar.css'
import mini from '../Assets/mini.png'
import { navItems } from "./navitems";




function Navbar ( ) {
  return (
    <>
    
    <nav className="navbar">
       <Link to="/" className="navbar-logo">
       <img src={mini} alt="mini" />       
        </Link>
        <ul className="nav-items">
          {navItems.map((item)=>{
            return(
            <li key={item.id} className={item.cName}>
              <Link to={item.path}> {item.title}</Link>
            </li>
            );
          })}
        </ul>
       
    </nav>
    
    </>
  )
}

  export default Navbar;