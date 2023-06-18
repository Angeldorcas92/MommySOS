import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './navbar.css';
import mini from '../Assets/mini.png';
import Dropdown from './dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  const onMouseEnter = () => {
    if (window.innerWidth >= 960) {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth >= 960) {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={handleLogoClick}>
        <img src={mini} alt="logo" />
      </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/about' className="nav-links" onClick={closeMobileMenu}>
              About
            </Link>
            
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
<span
  className="nav-links"
  onClick={closeMobileMenu}
>
  Services <i className="fas fa-caret-down" />
</span>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link to='/contact' className="nav-links" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to='/motherandchild'
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Mother&Child
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;




