import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  const companyName = 'tcecanteen.com';

  return (
    <footer className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          {/* Update the logo reference here */}
          <img className='tomatologofooter' src={assets.tcelogo} alt="Company Logo" />
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about-us">About us</a></li>
            <li><a href="#delivery">Delivery</a></li>
            <li><a href="#privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-82120-45678</li>
            <li><a href="mailto:contact@tcecanteen.com">contact@tcecanteen.com</a></li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2024 © {companyName} - All rights reserved.</p>
    </footer>
  );
}

export default Footer;
