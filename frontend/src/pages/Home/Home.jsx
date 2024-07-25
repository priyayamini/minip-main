import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { assets } from '../../assets/assets';
const Home = () => (
  <>
    <div className="owl-carousel-wrapper">
      <div className="box-92819">
        <h1 className="text-white mb-3">Join The Movement To End Deaths With Hunger</h1>
        <p><Link to="/roleselect" className="btn btn-primary py-3 px-4 rounded-1">Get Started</Link></p>
      </div>
      <Carousel>
        <Carousel.Item>
          <div className="ftco-cover-1 overlay"><img src={assets.slide1} alt="Slide 1" /></div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="ftco-cover-1 overlay"><img src={assets.slide2} alt="Slide 2" /></div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="ftco-cover-1 overlay"><img src={assets.slide3} alt="Slide 3" /></div>
        </Carousel.Item>
      </Carousel>
    </div>
    <div className="container">
      <div className="feature-29192-wrap d-md-flex" style={{ marginTop: '-20px', position: 'relative', zIndex: 2 }}>
        <Link to="#" className="feature-29192 overlay-danger" style={{ backgroundImage: `url(${assets.orphanage})` }}>
          <div className="text">
            <span className="meta">Orphanages</span>
            <h3 className="text-cursive text-white h1">Orphanages</h3>
          </div>
        </Link>
        <Link to="#" className="feature-29192 overlay-success" style={{ backgroundImage: `url(${assets.roadside})` }}>
          <div className="text">
            <span className="meta">Road Side</span>
            <h3 className="text-cursive text-white h1">Children and Old people</h3>
          </div>
        </Link>
        <div className="feature-29192 overlay-warning" style={{ backgroundImage: `url(${assets.img_1_gray})` }}>
          <div className="text">
            <span className="meta">School</span>
            <h3 className="text-cursive text-white h1">Nutritious Food</h3>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Home;
