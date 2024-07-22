import React from 'react';
import './App.css';
import frontImage from './images/frontImage.png'; // Update with the correct path
import hs1 from './images/hs1.jpeg'; // Update with the correct path
import hs2 from './images/hs2.jpeg'; // Update with the correct path
import hs3 from './images/h3.jpeg'; // Update with the correct path
import logo from './images/N.png'; // Update with the correct path

const App = () => {
  return (
    <div>
      <div className="topBanner">
        <h2 className="topBannerText">FREE WORLDWIDE SHIPPING ON ALL ORDERS OVER $75</h2>
      </div>

      <div className="top-container">
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
      </div>

      <div className="nine">
        <h1>
          NEW MOON
          <div className="nineImage">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <span>RE-DISCOVER YOUR STYLE</span>
        </h1>
      </div>

      <div className="navbar">
        <a href="index.html">HOMEPAGE</a>
        <a href="p2_portfolio.html">STYLISTS & PORTFOLIOS</a>
        <a href="p2_faq.html">FAQ</a>
        <a href="p2_services.html">BOOK A SERVICE</a>
      </div>

      <div className="padding_larger"></div>

      <h2 className="featuredTextTitle">HOMEPAGE</h2>

      <div className="frontPhoto">
        <img src={frontImage} alt="front image" />
        <h2 className="frontSlogan">RE-DISCOVER YOUR STYLE</h2>
        <button className="btn" onClick={() => window.location.href = 'p2_services.html'}>BOOK A SERVICE</button>
      </div>

      <h2 className="featuredTextTitle">FEATURED</h2>
      <div className="featuredBox">
        <h3 className="featuredTextSubtitle">DON'T KNOW WHERE TO START?</h3>
        <h3 className="featuredTextSubtitle" style={{ fontSize: '20px', marginTop: '30px' }}>
          TAKE OUR QUIZ: FIND YOUR STYLE + YOUR BEST STYLIST MATCH!
        </h3>
        <div style={{ textAlign: 'center', paddingTop: '30px', marginBottom: '0px' }}>
          <button className="featuredQuizButton" onClick={() => window.location.href = 'http://localhost:3000/Users/mare3/Documents/GitHub/final_copy_seg3125_project2/index.html'}>
            START QUIZ
          </button>
        </div>
      </div>

      <div className="padding_larger"></div>
      <div className="padding_larger"></div>

      <h2 className="featuredTextTitle">RECENT LOOKS</h2>

      <div className="padding_larger"></div>

      <div style={{ width: '90%', textAlign: 'center', margin: 'auto' }}>
        <div className="card-group" style={{ textAlign: 'center', margin: 'auto' }}>
          <div className="card" style={{ padding: '25px', textAlign: 'center', margin: 'auto' }}>
            <img src={hs2} className="card-img-top" alt="stylist 1" style={{ objectFit: 'fill', height: '430px', width: '80%', textAlign: 'center', margin: 'auto' }} />
            <div className="padding_smaller"></div>
            <div className="card-body">
              <h5 className="recentLooksCards">STYLIST: ALLY</h5>
            </div>
            <button className="recentLooksButton">PORTFOLIO</button>
            <div className="padding_larger"></div>
          </div>

          <div className="card" style={{ padding: '25px' }}>
            <img src={hs1} className="card-img-top" alt="stylist 2" style={{ objectFit: 'fill', height: '430px', width: '80%', textAlign: 'center', margin: 'auto' }} />
            <div className="padding_smaller"></div>
            <div className="card-body" style={{ width: '100%' }}>
              <h5 className="recentLooksCards">STYLIST: SOPH</h5>
            </div>
            <button className="recentLooksButton">PORTFOLIO</button>
            <div className="padding_larger"></div>
          </div>

          <div className="card" style={{ padding: '25px' }}>
            <img src={hs3} className="card-img-top" alt="stylist 3" style={{ objectFit: 'fill', height: '430px', width: '80%', textAlign: 'center', margin: 'auto' }} />
            <div className="padding_smaller"></div>
            <div className="card-body">
              <h5 className="recentLooksCards">STYLIST: JAKE</h5>
            </div>
            <button className="recentLooksButton">PORTFOLIO</button>
            <div className="padding_larger"></div>
          </div>
        </div>
      </div>

      <div className="padding_larger"></div>
      <div className="padding_larger"></div>
      <div className="padding_larger"></div>
      <div className="padding_larger"></div>

      <h2 className="featuredTextTitle">CONTACT INFO</h2>
      <h3 className="featuredTextSubtitle">CONTACT US FOR FURTHER INQUIRIES</h3>

      <div className="featuredBox" style={{ height: '450px' }}>
        <h3 className="featuredTextSubtitle">EMAIL: newmoon@abc.com</h3>
        <h3 className="featuredTextSubtitle">PHONE NUMBER: 123-555-4567</h3>
        <h3 className="featuredTextSubtitle">ADDRESS: 123 Moon Road</h3>
      </div>

      <div className="padding_larger"></div>
      <div className="padding_larger"></div>
    </div>
  );
}

export default App;