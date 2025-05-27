// Nav.js
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav id="navbar">
      <div className="nav-content">
        <div className="logo">
          <img src="./images/logo.svg" alt="Logo" />
        </div>
        <div className="pgs-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/signup">SignUp</Link>
          <Link to="/login">Login</Link>
        </div>
        {/* <div className="extra-features">
          <div className="ex-search">
            <i className="bx bx-search"></i>
          </div>
          <div className="ex-user">
            <i className="fa-regular fa-user"></i>
          </div>
          <div className="ex-heart">
            <i className="fa-regular fa-heart"></i>
            <p>5</p>
          </div>
          <div className="ex-bag">
            <i className="bx bx-shopping-bag"></i>
            <p>4</p>
          </div>
          <div className="theme_switch">
            <img src="./images/moon.png" id="icon" alt="Theme Icon" />
          </div>
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
