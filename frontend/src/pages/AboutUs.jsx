import React from 'react';
import {assets} from '../assets/assets'; // Adjust this path if necessary
import 'bootstrap/dist/css/bootstrap.min.css';
const AboutUs = () => (
  <section id="aboutus">
    <h2 className="text-cursive text-black h1 text-center"></h2>
    <div className="site-section bg-image overlay-primary" style={{ backgroundImage: `url(${assets.img_3})` }}>
      <div className="container">
        <div className="row align-items-stretch">
          <div className="col-md-6">
            <img src={assets.img_3} alt="About Us" className="img-fluid shadow" />
          </div>
          <div className="col-md-6">
            <div className="bg-white h-100 p-4 shadow">
              <p>We are dedicated to transforming the way the world handles food waste. Our mission is to reduce food waste at every stage of the supply chain, from farms to households, and to create sustainable solutions that benefit both people and the planet.</p>
              <p>Every year, millions of tons of food end up in landfills, producing methane, a potent greenhouse gas that contributes significantly to climate change. By managing food waste effectively, we can reduce our carbon footprint and protect our environment.</p>
              <p>Every individual and organization has a role to play in reducing food waste. Whether you are a business looking to optimize your operations, a community group aiming to make a difference, or an individual passionate about sustainability, we invite you to join us in our mission.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
