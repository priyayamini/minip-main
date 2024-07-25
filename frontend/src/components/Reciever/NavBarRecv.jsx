import React, { useState } from 'react';
import './NavBarRecv.css';
import { assets } from '../../assets/assets';

const NavBarRecv = ({ handleLogout }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="navbar" style={{backgroundColor:"black"}}>
      <img src={assets.main_logo} style={{height:"70px", width:"220px"}}alt="Logo" className="logo" />
      <div className="profile-container">
        <img
          src={assets.profile}
          alt="Profile"
          style={{width:"80px", height:"60px"}}
          className="profile"
          onClick={toggleDropdown} // Toggle dropdown on profile click
        />
        {isDropdownVisible && (
          <div className="dropdown-menu">
            <button onClick={() => handleLogout()}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBarRecv;
