import React from 'react';
import { assets } from '../assets/assets'; // Adjust this path if necessary

const Contact = () => (
  <section id="contact">
    <h2 className="text-cursive text-black h1 text-center"></h2>
    <div className="site-section bg-image overlay-danger" style={{ backgroundImage: `url(${assets.donation2})` }}>
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5">
              <form action="#" method="post">
                <div className="form-group row mb-3">
                  <div className="col-md-6 mb-3">
                    <input type="text" className="form-control" placeholder="First name" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input type="text" className="form-control" placeholder="Last name" />
                  </div>
                </div>
                <div className="form-group row mb-3">
                  <div className="col-md-12 mb-3">
                    <input type="text" className="form-control" placeholder="Email address" />
                  </div>
                </div>
                <div className="form-group row mb-3">
                  <div className="col-md-12 mb-3">
                    <textarea className="form-control" placeholder="Write your message." cols="30" rows="10"></textarea>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-6 mr-auto">
                    <input type="submit" className="btn btn-block btn-primary text-white py-3 px-5 rounded-0" value="Send Message" />
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4 ml-auto">
              <div className="bg-white p-3 p-md-5">
                <h3 className="text-cursive mb-4">Contact Info</h3>
                <ul className="list-unstyled footer-link">
                  <li className="d-block mb-3">
                    <span className="d-block text-muted small text-uppercase font-weight-bold">Address:</span>
                    <span>34 Street Name, City Name Here, United States</span>
                  </li>
                  <li className="d-block mb-3">
                    <span className="d-block text-muted small text-uppercase font-weight-bold">Phone:</span>
                    <span>+1 242 4942 290</span>
                  </li>
                  <li className="d-block mb-3">
                    <span className="d-block text-muted small text-uppercase font-weight-bold">Email:</span>
                    <span>info@yourdomain.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
