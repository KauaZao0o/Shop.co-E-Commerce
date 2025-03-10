import React from 'react';
import './Footer.css';
import addressIcon from '../../assets/images/Address.png';
import socialIcons from '../../assets/images/Social.png';
import cardsIcon from '../../assets/images/Cards.png';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="newsletter-section">
        <div className="newsletter-content">
          <h2>STAY UP TO DATE ABOUT<br />OUR LATEST OFFERS</h2>
          <form id="myForm" className="newsletter-form">
            <label htmlFor="email" className="email-container">
              <img src={addressIcon} alt="Email Icon" className="email-icon" />
              <input type="email" id="email" placeholder="Enter your email address" className="email-input" required />
            </label>
            <button type="submit" className="subscribe-btn">Subscribe to Newsletter</button>
          </form>
        </div>
      </div>

      <footer>
        <div className="footer-top">
          <div className="footer-left">
            <h1>SHOP.CO</h1>
            <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
            <div className="social-icons">
              <img src={socialIcons} alt="Social Icons" />
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-links">
              <div>
                <h3>COMPANY</h3>
                <ul>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Features</a></li>
                  <li><a href="#">Works</a></li>
                  <li><a href="#">Career</a></li>
                </ul>
              </div>
              <div>
                <h3>HELP</h3>
                <ul>
                  <li><a href="#">Customer Support</a></li>
                  <li><a href="#">Delivery Details</a></li>
                  <li><a href="#">Terms & Conditions</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>
              <div>
                <h3>FAQ</h3>
                <ul>
                  <li><a href="#">Account</a></li>
                  <li><a href="#">Manage Deliveries</a></li>
                  <li><a href="#">Orders</a></li>
                  <li><a href="#">Payments</a></li>
                </ul>
              </div>
              <div>
                <h3>RESOURCES</h3>
                <ul>
                  <li><a href="#">Free eBooks</a></li>
                  <li><a href="#">Development Tutorial</a></li>
                  <li><a href="#">How to - Blog</a></li>
                  <li><a href="#">Youtube Playlist</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="payment-cards">
            <img src={cardsIcon} alt="Payment Cards" />
          </div>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;