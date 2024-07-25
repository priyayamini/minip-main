import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menu, setMenu] = useState("");

  return (
    <div className="navbar" style={{backgroundColor:'black'}}>
      <ul className="navbar-menu">
        <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={() => setMenu("aboutus")} className={menu === "aboutus" ? "active" : ""}>
          <Link to="/aboutus">About Us</Link>
        </li>
        <li onClick={() => setMenu("ourmission")} className={menu === "ourmission" ? "active" : ""}>
          <Link to="/ourmission">Our Mission</Link>
        </li>
        <li onClick={() => setMenu("contactus")} className={menu === "contactus" ? "active" : ""}>
          <Link to="/contactus">Contact Us</Link>
        </li>
      </ul>
      <div className="navbar-right">
        <Link to="/roleselect"><button>Get Started</button></Link>
      </div>
    </div>
  );
}

export default Navbar;
