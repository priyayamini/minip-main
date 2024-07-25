import React from 'react';
import {assets} from '../assets/assets'; // Adjust this path if necessary

const OurMission = () => (
  <section id="ourmission" >
    <h2 className="text-cursive text-black h1 text-center" ></h2>
    <div className="site-section bg-image overlay-success" style={{backgroundColor:'teal'}}>
      <div className="container">
        <div className="row align-items-stretch">
          <div className="col-md-6">
            <div className="bg-white h-100 p-4 shadow">
              <h3>What do we do?</h3>
              <p>We provide innovative solutions to tackle food waste at every level:</p>
              <p><strong>Education and Awareness:</strong> We conduct workshops, webinars, and campaigns to educate the public and businesses about the importance of reducing food waste and practical steps they can take.</p>
              <p><strong>Technological Solutions:</strong> Our cutting-edge technology helps businesses track and manage their food waste, optimize their supply chains, and make data-driven decisions to reduce waste.</p>
              <p><strong>Partnerships and Collaborations:</strong> We work with farmers, restaurants, grocery stores, non-profits, and government agencies to create a collaborative approach to food waste management.</p>
              <p><strong>Redistribution Programs:</strong> We partner with local organizations to redistribute surplus food to those in need, ensuring that good food goes to people, not landfills.</p>
            </div>
          </div>
          <div className="col-md-6">
            <img src={assets.donation} alt="Our Mission" className="img-fluid shadow" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default OurMission;
