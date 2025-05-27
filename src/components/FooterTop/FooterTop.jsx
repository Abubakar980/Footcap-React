import React from "react";
import "./FooterTop.css"; // Import the CSS file

const FooterTop = () => {
  return (
    <div className="footer-top">
      <div className="footer-top-container">
        <div className="footer-brand">
          <div className="footer-img">
            <img src="./images/logo.svg" alt="Footer Logo" />
          </div>
          <div className="footer-social-links">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-pinterest"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>

        <div className="footer-brand-links">
          <div className="contact-links">
            <div className="contact-links-head">
              <p>Contact Us</p>
              <div className="links-line"></div>
            </div>
            <div className="contact-link-one">
              <i className="fa-solid fa-location-dot"></i>
              <p>2751 S Parker Rd, Aurora, CO 80014, <br />United States</p>
            </div>
            <div className="contact-link-two">
              <i className="fa-solid fa-phone"></i>
              <p>+557343673257</p>
            </div>
            <div className="contact-link-three">
              <i className="fa-solid fa-envelope"></i>
              <p>footcap@help.com</p>
            </div>
          </div>

          <div className="myaccount-links">
            <div className="contact-links">
              <div className="contact-links-head">
                <p>My Account</p>
                <div className="links-line"></div>
              </div>
              <div className="myAcc-link">
                <i className="bx bx-chevron-right"></i>
                <p>My Account</p>
              </div>
              <div className="myAccLinks-links">
                <div className="myAcc-link">
                  <i className="bx bx-chevron-right"></i>
                  <p>View Cart</p>
                </div>
                <div className="myAcc-link">
                  <i className="bx bx-chevron-right"></i>
                  <p>Wishlist</p>
                </div>
                <div className="myAcc-link">
                  <i className="bx bx-chevron-right"></i>
                  <p>Compare</p>
                </div>
                <div className="myAcc-link">
                  <i className="bx bx-chevron-right"></i>
                  <p>New Products</p>
                </div>
              </div>
            </div>
          </div>

          <div className="openingtime-links">
            <div className="contact-links-head">
              <p>Opening Time</p>
              <div className="links-line"></div>
            </div>
            <div className="time">
              <div className="day">
                <p>Mon - Tue:</p>
                <p>Wed:</p>
                <p>Thurs:</p>
                <p>Sat:</p>
                <p>Sun:</p>
              </div>
              <div className="hours">
                <p>8AM - 10PM</p>
                <p>8AM - 7PM</p>
                <p>7AM - 12PM</p>
                <p>9AM - 8PM</p>
                <p>Closed</p>
              </div>
            </div>
          </div>

          <div className="newsletter-links">
            <div className="contact-links-head">
              <p>Newsletter</p>
              <div className="links-line"></div>
            </div>
            <div className="newsletter-info">
              <p>
                Authoritatively morph 24/7 potentialities with <br />error-free
                partnerships.
              </p>
              <div className="input-search">
                <input type="text" placeholder="Email Address" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
