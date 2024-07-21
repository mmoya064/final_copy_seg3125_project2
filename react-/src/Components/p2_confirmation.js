import React from 'react';
import './css_files/confirmation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function P2Confirmation() {
  return (
    <div>
      <h2>Confirmation</h2>
      <p>Here is the confirmation content...</p>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

const App = () => {
  return (
    <div>
      {/* TOP BANNER */}
      <div className="topBanner">
        <h2 className="topBannerText">FREE WORLDWIDE SHIPPING ON ALL ORDERS OVER $75</h2>
      </div>

      {/* HAMBURGER MENU AND ICONS */}
      <div className="row">
        <div className="col">
          <nav role="navigation">
            <div id="menuToggle">
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              <ul id="menu">
                <a href="index.html"><li>HOMEPAGE</li></a>
                <a href="p2_portfolio.html"><li>STYLISTS & PORTFOLIOS</li></a>
                <a href="p2_faq.html"><li>FAQ</li></a>
                <a href="p2_services.html"><li>BOOK A SERVICE</li></a>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      {/* MAIN TITLE */}
      <div className="nine">
        <h1>NEW MOON
          <div className="nineImage">
            <img className="logo" src="images/N.png" alt="logo" />
          </div>
          <span>RE-DISCOVER YOUR STYLE</span>
        </h1>
      </div>

      {/* NAV BAR */}
      <div className="navbar">
        <a href="index.html">HOMEPAGE</a>
        <a href="p2_portfolio.html">STYLISTS & PORTFOLIOS</a>
        <a href="p2_faq.html">FAQ</a>
        <a href="p2_services.html">BOOK A SERVICE</a>
      </div>

      <div className="padding_larger"></div>

      {/* BOOKING CONFIRMATION */}
      <div className="padding_larger"></div>
      <h2 className="featuredTextTitle">ORDER CONFIRMATION</h2>
      <div className="padding_larger"></div>
      <div style={{ margin: 'auto', textAlign: 'center' }}>
        <img src="images/bookingConfirmation.png" alt="check mark" style={{ width: '80px', height: '80px' }} />
      </div>
      <div className="padding_larger"></div>
      <h2 className="featuredTextSubtitle" style={{ margin: 'auto', textAlign: 'center', fontSize: '30px' }}>YOUR ORDER HAS BEEN CONFIRMED.</h2>
      <div className="padding_larger"></div>
      <div className="padding_larger"></div>
      <h2 className="featuredTextSubtitle" style={{ margin: 'auto', textAlign: 'center', fontSize: '30px' }}>CHECK YOUR EMAIL FOR A CONFIRMATION EMAIL.</h2>
      <div className="padding_larger"></div>
      <div className="padding_larger"></div>
      <div className="padding_larger"></div>
    </div>
  );
}

export default P2Confirmation;
