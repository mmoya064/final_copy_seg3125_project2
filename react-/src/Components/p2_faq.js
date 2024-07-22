import React, { useState } from 'react';
import './css_files/faq.css';
import { Link } from 'react-router-dom';

function P2Faq() {
  return (
    <div>
      <h2>FAQ</h2>
      <p>Here is the FAQ content...</p>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/confirmation">Confirmation</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}



function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const questions = [
    { question: "HOW DO I BOOK A SERVICE?", answer: "BY FILLING OUT THE FORM IN OUR 'BOOK A SERVICE' TAB!" },
    { question: "WHAT ARE YOUR HOURS OF OPERATION?", answer: "MONDAY-SUNDAY FROM 8:00AM-4:00PM" },
    { question: "WHERE CAN I FIND MORE INFO ON THE STYLISTS?", answer: "BY CHECKING OUT OUR 'STYLISTS' AND PORTFOLIOS' PAGE" },
    { question: "HOW MANY STYLISTS ARE ON YOUR TEAM?", answer: "WE CURRENTLY HAVE 3 STYLISTS ON OUR TEAM" },
    { question: "HOW LONG DOES A CONSULTATION TAKE", answer: "TIMING VARIES BASED ON THE CLIENT'S NEEDS, THOUGH CONSULTATIONS ARE USUALLY ABOUT AN HOUR LONG!" },
    { question: "HOW DO I GET IN CONTACT WITH A TEAM MEMBER", answer: "FOR ANY INQUIRIES OR COMPLAINTS, YOU CAN CONTACT US BY EMAIL AT newmoon@abc.com, OR BY PHONE (FROM 8AM-4PM MONDAY-SUNDAY) AT 123-555-4567" }
  ];

  return (
    <div>
      <div className="topBanner">
        <h2 className="topBannerText">FREE WORLDWIDE SHIPPING ON ALL ORDERS OVER $75</h2>
      </div>

      <div className="row">
        <div className="col">
          <nav role="navigation">
            <div id="menuToggle">
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              <ul id="menu">
                <a href="/"><li>HOMEPAGE</li></a>
                <a href="/p2_portfolio.html"><li>STYLISTS & PORTFOLIOS</li></a>
                <a href="/p2_faq.html"><li>FAQ</li></a>
                <a href="/p2_services.html"><li>BOOK A SERVICE</li></a>
              </ul>
            </div>
          </nav>
        </div>
        <div className="icons">
          <button className="recentLooksButton" onClick={() => window.location.href = 'FR-faq.html'}>FRANCAIS</button>
        </div>
      </div>

      <div className="nine">
        <h1>NEW MOON
          <div className="nineImage">
            <img className="logo" src="images/N.png" alt="logo" />
          </div>
          <span>RE-DISCOVER YOUR STYLE</span>
        </h1>
      </div>

      <div className="navbar">
        <a href="/">HOMEPAGE</a>
        <a href="/p2_portfolio.html">STYLISTS & PORTFOLIOS</a>
        <a href="/p2_faq.html">FAQ</a>
        <a href="/p2_services.html">BOOK A SERVICE</a>
      </div>

      <div className="padding_larger"></div>
      <div className="padding_larger"></div>

      <h2 className="featuredTextTitle">FAQ</h2>

      <div className="padding_larger"></div>

      <div className="container">
        <input id="searchbar" onChange={handleSearch} type="text" placeholder="TYPE HERE TO SEARCH FOR ANSWERS" style={{ color: 'rgb(15, 15, 77)' }} />
        <ul id="list">
          {questions.filter(q => q.question.toLowerCase().includes(searchTerm) || q.answer.toLowerCase().includes(searchTerm)).map((q, index) => (
            <li className="animals" key={index}>
              <span><b>Q:</b> {q.question} </span>
              <span style={{ fontSize: '20px' }}><b>A:</b> {q.answer}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="padding_larger"></div>
      <div className="padding_larger"></div>
    </div>
  );
}

export default P2Faq;
