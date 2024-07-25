import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../../assets/assets';
import './SideBar2.css'

const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink 
          to="/data" 
          className="sidebar-option" >
          <img className="remove" src={assets.add_image} alt="" />
          <p style={{color:"white"}}>Add details</p>
        </NavLink>
        <NavLink 
          to="/list" 
          className="sidebar-option" 
          >
          <img className="remove" src={assets.view_image1} alt="" />
          <p style={{color:"white"}}>View Receivers</p>
        </NavLink>
        <NavLink 
          to="/aboutus" 
          className="sidebar-option" 
          >
          <img className="remove" src={assets.aboutus_image} alt="" />
          <p style={{color:"white"}}>AboutUs</p>
        </NavLink>
        <NavLink 
          to="/contactus" 
          className="sidebar-option" 
          >
          <img className="remove" src={assets.contactus_image} alt="" />
          <p  style={{color:"white"}}>Contact Us</p>
        </NavLink>
      </div>
    </div>
  );
}

export default SideBar;
