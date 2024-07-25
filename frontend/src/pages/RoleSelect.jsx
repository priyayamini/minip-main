import React from 'react';
import { Link } from 'react-router-dom';
import './RoleSelectStyles.css';
import { assets } from '../assets/assets'; // Adjust this path if necessary

const RoleSelect = () => (
    <>
    <h1 className="hello text-cursive text-black h1"><center>Select Our Service</center></h1>
    <div className="site-section bg-image overlay-success" style={{ backgroundImage: `url(${assets.roleimage})` }}>
    <div className="pricing-section" >
      
      <div className="feature-29192-wrap d-md-flex"></div>
      <br /><br /><br />
      <div className="pricing-cards">
        <div className="card">
          <h2>Donor</h2>
          <p className="price"></p>
          <ul>
            <li>Do not give spoiled food</li>
            <li>Select feasible receiver</li>
            <li>No last-minute cancellation</li>
            <li>Violation of rules is an offense</li>
          </ul>
          <Link to="/login"><button className="btn">DONATE</button></Link>
        </div>
        <div className="card">
          <h2>Reciever</h2>
          <ul>
            <li>Should not be a misuser</li>
            <li>Should not humiliate users</li>
            <li>Should not waste the donated food</li>
            <li><br/><br/></li>
          </ul>
          <Link to="/loginrecv"><button className="btn">RECIEVE</button></Link>
        </div>
        <div className="card">
          <h2>Admin</h2>
          <ul>
            <li>Should be an authorized member</li>
            <li>Access data legally</li>
            <li>Protection of data</li>
            <li>Maintenance of data</li>
          </ul>
          <Link to="/loginadmin"><button className="btn">LOGIN</button></Link>
        </div>
      </div>
    </div>
  </div>
  </>
);

export default RoleSelect;
