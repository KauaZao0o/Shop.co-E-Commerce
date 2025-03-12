import React from 'react';
import './Header.css';
import searchIcon from '../../assets/images/navbar/Search.png';
import downArrow from '../../assets/images/navbar/Down-arrow.png';
import carIcon from '../../assets/images/navbar/Car.png';
import profileIcon from '../../assets/images/navbar/Profile.png';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav-header">
        <div className="nav-primary-container">
          <div className="hamburger" id="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <h1>shop.co</h1>
          <ul className="nav-list close">
            <li>Shop <img src={downArrow} alt="Down Arrow" /></li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
          </ul>
        </div>

        <div className="nav-secondary-container">
          <div className="input-group close">
            <div className="input-icon">
              <img src={searchIcon} alt="Search" />
            </div>
            <input id="search" type="text" className="input-field" placeholder="Search for products..." />
          </div>
          <div className="nav-img">
            <img src={searchIcon} alt="Search" className="search-nav" />
            <img src={carIcon} alt="Car" className="car-nav" />
            <img src={profileIcon} alt="Profile" className="perfil-nav" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;