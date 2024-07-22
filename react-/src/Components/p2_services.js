import React from 'react';
import './style.css'; // Assuming the CSS is saved in a separate file

const App = () => {
  return (
    <div>
      <div className="topBanner">
        <h2 className="topBannerText">FREE WORLDWIDE SHIPPING ON ALL ORDERS OVER $75</h2>
      </div>

      <div className='row'>
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

      <div className="padding_larger"></div>
      <h2 className="featuredTextTitle">BOOK A SERVICE</h2>
      <div className="padding_larger"></div>
      <div className="padding_larger"></div>

      <div className="serviceTitle">1. SERVICES: </div>
      <div className="padding_larger"></div>
      <div className="serviceSubtitle" style={{ marginLeft: '80px' }}>SELECT 1 OR MULTIPLE SERVICES </div>
      <div className="padding_smaller"></div>

      <div style={{ width: '90%', textAlign: 'center', margin: 'auto' }}>
        <div className="card-group" style={{ textAlign: 'center', margin: 'auto' }}>
          <div className="card" style={{ padding: '25px', textAlign: 'center', margin: 'auto' }}>
            <img src="images/hs2.jpeg" className="card-img-top" alt="stylist 1" style={{ objectFit: 'fill', height: '230px', width: '40%', textAlign: 'center', margin: 'auto' }} />
            <div className="padding_smaller"></div>
            <div className="card-body">
              <h5 className="serviceSubtitle" style={{ textAlign: 'left' }}><b>SERVICE:</b> SINGLE OCCASION</h5>
              <h5 className="serviceSubtitle" style={{ textAlign: 'left' }}><b>DESCRIPTION:</b> STYLING CONSULTATION + OUTFIT FOR A SINGLE OCCASION</h5>
              <h5 className="serviceSubtitle" style={{ textAlign: 'left' }}><b>PRICE:</b> $50/HOUR (ESTIMATED 1-2 HOURS), OUTFIT NOT INCLUDED</h5>
            </div>
            <form action="/action_page.php" className="recentLooksButton" style={{ height: '60px', textAlign: 'left' }}>
              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style={{ width: '30px', height: '30px', marginLeft: '0px' }} />
              <label htmlFor="vehicle1" style={{ fontSize: '30px', marginLeft: '0px' }}> SELECT</label><br />
            </form>
            <div className="padding_larger"></div>
          </div>

          <div className="card" style={{ padding: '25px' }}>
            <img src="images/hs1.jpeg" className="card-img-top" alt="stylist 1" style={{ objectFit: 'fill', height: '230px', width: '40%', textAlign: 'center', margin: 'auto' }} />
            <div className="padding_smaller"></div>
            <div className="card-body">
              <h5 className="serviceSubtitle" style={{ textAlign: 'left' }}><b>SERVICE:</b> 3 OCCASIONS</h5>
              <h5 className="serviceSubtitle" style={{ textAlign: 'left' }}><b>DESCRIPTION:</b> STYLING CONSULTATION + OUTFITS FOR SEVEN OCCASIONS</h5>
              <h5 className="serviceSubtitle" style={{ textAlign: 'left' }}><b>PRICE:</b> $45/HOUR (ESTIMATED 6-7 HOURS), OUTFITS NOT INCLUDED</h5>
            </div>
            <form action="/action_page.php" className="recentLooksButton" style={{ height: '60px', textAlign: 'left' }}>
              <input type="checkbox" id="vehicle2" name="vehicle1" value="Bike" style={{ width: '30px', height: '30px', marginLeft: '0px' }} />
              <label htmlFor="vehicle2" style={{ fontSize: '30px' }}> SELECT</label><br />
            </form>
            <div className="padding_larger"></div>
          </div>

          <div className="card" style={{ padding: '25px' }}>
            <img src="images/h3.jpeg" className="card-img-top" alt="stylist 1" style={{ objectFit: 'fill', height: '230px', width: '40%', textAlign: 'center', margin: 'auto' }} />
            <div className="padding_smaller"></div>
            <div className="card-body">
              <h5 className="serviceSubtitle" style={{ textAlign: 'left' }}><b>SERVICE:</b> 10+ OCCASIONS</h5>
              <h5 className="serviceSubtitle" style={{ textAlign: 'left' }}><b>DESCRIPTION:</b> STYLING CONSULTATION + OUTFITS FOR 10+ OCCASIONS</h5>
              <h5 className="serviceSubtitle" style={{ textAlign: 'left' }}><b>PRICE:</b> $40/HOUR (ESTIMATED 12+ HOURS), OUTFITS NOT INCLUDED</h5>
            </div>
            <form action="/action_page.php" className="recentLooksButton" style={{ height: '60px', textAlign: 'left' }}>
              <input type="checkbox" id="vehicle3" name="vehicle1" value="Bike" style={{ width: '30px', height: '30px', marginLeft: '0px' }} />
              <label htmlFor="vehicle3" style={{ fontSize: '30px' }}> SELECT</label><br />
            </form>
            <div className="padding_larger"></div>
          </div>
        </div>
      </div>

      <div className="padding_larger"></div>
      <div className="padding_larger"></div>

      <div className="serviceTitle">2. SELECT A STYLIST: </div>
      <div className="padding_larger"></div>
      <div className="serviceSubtitle" style={{ marginLeft: '80px' }}>SELECT ONLY 1 </div>
      <div className="padding_smaller"></div>

      <div style={{ width: '90%', textAlign: 'center', margin: 'auto' }}>
        <div className="card-group" style={{ textAlign: 'center', margin: 'auto' }}>
          <div className="card" style={{ padding: '25px', textAlign: 'center', margin: 'auto' }}>
            <img src="images/hs2.jpeg" className="card-img-top" alt="stylist 1" style={{ objectFit: 'fill', height: '230px', width: '40%', textAlign: 'center', margin: 'auto' }} />
            <div className="padding_smaller"></div>
            <div className="card-body">
              <h5 className="stylistText"><b>STYLIST:</b> ALLY</h5>
              <h5 className="stylistText"><b>STYLE DESCRIPTION:</b> CLASSIC, MINIMAL</h5>
              <h5 className="stylistText"><b>GENDER SPECIALTY:</b> WOMEN</h5>
            </div>
            <form action="/action_page.php" className="recentLooksButton" style={{ height: '60px' }}>
              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style={{ width: '30px', height: '30px', marginLeft: '0px' }} />
              <label htmlFor="vehicle1" style={{ fontSize: '30px', marginLeft: '0px' }}> SELECT</label><br />
            </form>
            <div className="padding_larger"></div>
          </div>

          <div className="card" style={{ padding: '25px', textAlign: 'center', margin: 'auto' }}>
            <img src="images/hs1.jpeg" className="card-img-top" alt="stylist 1" style={{ objectFit: 'fill', height: '230px', width: '40%', textAlign: 'center', margin: 'auto' }} />
            <div className="padding_smaller"></div>
            <div className="card-body">
              <h5 className="stylistText"><b>STYLIST:</b> JESSICA</h5>
              <h5 className="stylistText"><b>STYLE DESCRIPTION:</b> BOLD, CREATIVE</h5>
              <h5 className="stylistText"><b>GENDER SPECIALTY:</b> MEN & WOMEN</h5>
            </div>
            <form action="/action_page.php" className="recentLooksButton" style={{ height: '60px' }}>
              <input type="checkbox" id="vehicle2" name="vehicle1" value="Bike" style={{ width: '30px', height: '30px', marginLeft: '0px' }} />
              <label htmlFor="vehicle2" style={{ fontSize: '30px' }}> SELECT</label><br />
            </form>
            <div className="padding_larger"></div>
          </div>

          <div className="card" style={{ padding: '25px', textAlign: 'center', margin: 'auto' }}>
            <img src="images/h3.jpeg" className="card-img-top" alt="stylist 1" style={{ objectFit: 'fill', height: '230px', width: '40%', textAlign: 'center', margin: 'auto' }} />
            <div className="padding_smaller"></div>
            <div className="card-body">
              <h5 className="stylistText"><b>STYLIST:</b> BETH</h5>
              <h5 className="stylistText"><b>STYLE DESCRIPTION:</b> MODERN, ECLECTIC</h5>
              <h5 className="stylistText"><b>GENDER SPECIALTY:</b> WOMEN</h5>
            </div>
            <form action="/action_page.php" className="recentLooksButton" style={{ height: '60px' }}>
              <input type="checkbox" id="vehicle3" name="vehicle1" value="Bike" style={{ width: '30px', height: '30px', marginLeft: '0px' }} />
              <label htmlFor="vehicle3" style={{ fontSize: '30px' }}> SELECT</label><br />
            </form>
            <div className="padding_larger"></div>
          </div>
        </div>
      </div>

      <div className="padding_larger"></div>
      <div className="padding_larger"></div>
      <div className="padding_larger"></div>
      <div className="padding_larger"></div>
      <div className="padding_larger"></div>
      <div className="padding_larger"></div>
      <div className="padding_larger"></div>
      <div className="padding_larger"></div>
      <div className="padding_larger"></div>
    </div>
  );
}

export default App;
