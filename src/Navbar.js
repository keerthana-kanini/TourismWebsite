import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [navbarVisible, setNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setNavbarVisible((prevState) => !prevState);
  };

  const hideNavbar = () => {
    setNavbarVisible(false);
  };

  return (
    <header>
      <nav className={`navbar ${navbarVisible ? 'visible' : ''}`}>
        <ul>
          <li style={{ '--i': 1 }}><a href="#home">home</a></li>
          <li style={{ '--i': 2 }}><a href="#feature">feature</a></li>
          <li style={{ '--i': 3 }}><a href="#about">about</a></li>
          <li style={{ '--i': 4 }}><a href="#gallery">gallery</a></li>
          <li style={{ '--i': 5 }}><a href="#review">review</a></li>
          <li style={{ '--i': 6 }}><a href="#contact">contact</a></li>
        </ul>
      </nav>
      <div className="menu" onClick={toggleNavbar}>
        <FontAwesomeIcon icon={faBars} className={navbarVisible ? 'fa-times' : ''} />
      </div>
      <div>
        <style>
          {`
          /* Add necessary CSS styles for the navbar */
          .navbar {
            display: none;
            /* Add other necessary styles for your navbar */
          }
          
          .navbar.visible {
            display: block;
          }
          
          /* Add necessary CSS styles for the menu icon */
          .menu .fa-bars,
          .menu .fa-times {
            /* Add necessary styles for your menu icon, e.g., font-size, color, etc. */
          }
          
          /* Add necessary styles for the list items */
          .navbar ul {
            list-style: none;
            /* Add other necessary styles for the list items */
          }
          
          `}
        </style>
      </div>
    </header>
      );
};

export default Header;
