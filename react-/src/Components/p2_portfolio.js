import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css_files/confirmation.css';
import { Link } from 'react-router-dom';

function P2Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <p>Here is the portfolio content...</p>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/confirmation">Confirmation</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <div className="topBanner">
        <h2 className="topBannerText">FREE WORLDWIDE SHIPPING ON ALL ORDERS OVER $75</h2>
      </div>

      <div className='row'>
        <div className='col'>
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

      <div className="nine">
        <h1>NEW MOON
          <div className="nineImage">
            <img className="logo" src="images/N.png" alt="logo" />
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
      <div className="padding_larger"></div>

      <div className="row">
        <div className="col" style={{ textAlign: 'center', margin: 'auto' }}>
          <h2 className="featuredTextTitle">STYLISTS</h2>
          <div className="padding_larger"></div>

          <div className="card" style={{ width: '18rem', textAlign: 'center', margin: 'auto', borderStyle: 'none', paddingTop: 0 }}>
            <img src="images/frontImage.png" className="card-img-top" alt="stylist 1 photo" style={{ height: '300px', width: '288px' }} />
            <div className="card-body">
              <p className="card-text">
                <h5 className="stylistText"><b>STYLIST:</b> ALLY</h5>
                <h5 className="stylistText"><b>STYLE DESCRIPTION:</b> </h5>
                <h5 className="stylistText">CONTEMPORARY + STREETWEAR</h5>
              </p>
            </div>
          </div>
          <button className="recentLooksButton" data-toggle="modal" data-target="#modal1" style={{ width: '280px' }}>ALLY'S REVIEWS</button>
        </div>

        <div className="modal fade" id="modal1" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" style={{ textAlign: 'left', marginLeft: '10px' }}>&times;</button>
                <h4 className="modal-title" style={{ margin: 'auto', textAlign: 'left' }}>ALLY'S REVIEWS</h4>
              </div>
              <div className="modal-body">
                <p style={{ margin: 'auto', textAlign: 'center' }}>9.5/10</p>
                <p style={{ margin: 'auto', textAlign: 'center' }}>ALLY DID A GREAT JOB!</p>
                <hr />
                <p style={{ margin: 'auto', textAlign: 'center' }}>10/10</p>
                <p style={{ margin: 'auto', textAlign: 'center' }}>HAD THE BEST EXPERIENCE!</p>
                <hr />
                <p style={{ margin: 'auto', textAlign: 'center' }}>9/10</p>
                <p style={{ margin: 'auto', textAlign: 'center' }}>AMAZING SERVICE</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal" style={{ textAlign: 'center', margin: 'auto' }}>Close</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 className="featuredTextTitle">PORTFOLIOS</h2>
          <div className="padding_smaller"></div>
          <div className="padding_smaller"></div>

          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{ width: '18rem', textAlign: 'center', margin: 'auto' }}>
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active" style={{ height: '300px', width: '288px' }}>
                <img className="d-block w-100" src="images/frontImage.png" alt="First slide" style={{ height: '300px', width: '250px' }} />
              </div>
              <div className="carousel-item" style={{ height: '300px', width: '288px' }}>
                <img className="d-block w-100" src="images/h3.jpeg" alt="Second slide" style={{ height: '300px', width: '250px' }} />
              </div>
              <div className="carousel-item" style={{ height: '300px', width: '288px' }}>
                <img className="d-block w-100" src="images/hs2.jpeg" alt="Third slide" style={{ height: '300px', width: '250px' }} />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>

          <div className="padding_larger"></div>

          <div style={{ width: '288px', textAlign: 'center', margin: 'auto' }}>
            <button className="recentLooksButton" onClick={() => window.location.href = 'p2_services.html'}>BOOK WITH ALLY</button>
          </div>

          <div className="padding_larger"></div>
          <div className="padding_larger"></div>
        </div>
      </div>

      <div className="row">
        <div className="col" style={{ textAlign: 'center', margin: 'auto' }}>
          <div className="padding_larger"></div>

          <div className="card" style={{ width: '18rem', textAlign: 'center', margin: 'auto', borderStyle: 'none', paddingTop: 0 }}>
            <img src="images/frontImage.png" className="card-img-top" alt="stylist 1 photo" style={{ height: '300px', width: '288px' }} />
            <div className="card-body">
              <p className="card-text">
                <h5 className="stylistText"><b>STYLIST:</b> SOPH</h5>
                <h5 className="stylistText"><b>STYLE DESCRIPTION:</b> </h5>
                <h5 className="stylistText">PROFESSIONAL + CHIC</h5>
              </p>
            </div>
          </div>
          <button className="recentLooksButton" data-toggle="modal" data-target="#modal2" style={{ width: '280px' }}>SOPH'S REVIEWS</button>
        </div>

        <div className="modal fade" id="modal2" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" style={{ textAlign: 'left', marginLeft: '10px' }}>&times;</button>
                <h4 className="modal-title" style={{ margin: 'auto', textAlign: 'left' }}>SOPH'S REVIEWS</h4>
              </div>
              <div className="modal-body">
                <p style={{ margin: 'auto', textAlign: 'center' }}>9.5/10</p>
                <p style={{ margin: 'auto', textAlign: 'center' }}>SOPH DID A GREAT JOB!</p>
                <hr />
                <p style={{ margin: 'auto', textAlign: 'center' }}>10/10</p>
                <p style={{ margin: 'auto', textAlign: 'center' }}>HAD THE BEST EXPERIENCE!</p>
                <hr />
                <p style={{ margin: 'auto', textAlign: 'center' }}>9/10</p>
                <p style={{ margin: 'auto', textAlign: 'center' }}>AMAZING SERVICE</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal" style={{ textAlign: 'center', margin: 'auto' }}>Close</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="padding_smaller"></div>
          <div className="padding_smaller"></div>
          <div className="padding_smaller"></div>

          <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel" style={{ width: '18rem', textAlign: 'center', margin: 'auto' }}>
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators2" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active" style={{ height: '300px', width: '288px' }}>
                <img className="d-block w-100" src="images/frontImage.png" alt="First slide" style={{ height: '300px', width: '250px' }} />
              </div>
              <div className="carousel-item" style={{ height: '300px', width: '288px' }}>
                <img className="d-block w-100" src="images/h3.jpeg" alt="Second slide" style={{ height: '300px', width: '250px' }} />
              </div>
              <div className="carousel-item" style={{ height: '300px', width: '288px' }}>
                <img className="d-block w-100" src="images/hs2.jpeg" alt="Third slide" style={{ height: '300px', width: '250px' }} />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>

          <div className="padding_larger"></div>

          <div style={{ width: '288px', textAlign: 'center', margin: 'auto' }}>
            <button className="recentLooksButton" onClick={() => window.location.href = 'p2_services.html'}>BOOK WITH SOPH</button>
          </div>

          <div className="padding_larger"></div>
          <div className="padding_larger"></div>
        </div>
      </div>

      <div className="padding_larger"></div>
      <div className="padding_larger"></div>
      <div className="padding_larger"></div>
      <div className="padding_larger"></div>

      <div className="footer">
        <div className="row">
          <div className="col" style={{ textAlign: 'center' }}>
            <p className="footerTitle">NEW MOON</p>
          </div>
          <div className="col" style={{ textAlign: 'center' }}>
            <p className="footerTitle">OUR SERVICES</p>
            <a className="footerLinks" href="p2_services.html">BOOK A SERVICE</a>
            <p className="footerTitle">OUR STYLISTS</p>
            <a className="footerLinks" href="p2_portfolio.html">STYLISTS + PORTFOLIOS</a>
            <a className="footerLinks" href="p2_faq.html">FAQ</a>
          </div>
          <div className="col" style={{ textAlign: 'center' }}>
            <p className="footerTitle">GET IN TOUCH</p>
            <p className="footerLinks">CONTACT US</p>
          </div>
          <div className="col" style={{ textAlign: 'center' }}>
            <p className="footerTitle">NEW MOON NEWSLETTER</p>
            <p className="footerLinks">SIGN UP TO OUR NEWSLETTER</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default P2Portfolio;