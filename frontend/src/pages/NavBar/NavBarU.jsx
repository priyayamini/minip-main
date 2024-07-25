import React, { useState } from 'react';
import './NavBar1.css';
import { assets } from '../../assets/assets';

const NavBarU = ({ handleLogout }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="navbar" style={{backgroundColor:'black'}}>
      <img src={assets.main_logo} style={{width:"220px", height:"70px"}}alt="Logo" className="logo" />
      <div className="profile-container">
        <img style={{width:"80px", height:"60px"}}
          src={assets.profile}
          alt="Profile"
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

export default NavBarU;
