import React from 'react';
import './SideBarRecv2.css'; // Ensure this is the correct path to your CSS file
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';

const SideBarRecv = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to="/add" className="sidebar-option">
          <img className="remove" src={assets.add_image} alt="" />
          <p style={{color: "white"}}>Add details</p>
        </NavLink>
        <NavLink to="/aboutus" className="sidebar-option">
          <img className="remove" src={assets.aboutus_image} alt="" />
          <p style={{color: "white"}}>AboutUs</p>
        </NavLink>
        <NavLink to="/contactus" className="sidebar-option">
          <img className="remove" src={assets.contactus_image} alt="" />
          <p style={{color: "white"}}>Contact Us</p>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBarRecv;
