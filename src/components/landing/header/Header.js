import React from "react";
import "./Header.css";
import AliceCarousel from "react-alice-carousel";



const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="toolbar">
          <div className="page-width">
            <div className="toolbar_content">
              <div className="toolbar_item toolbar_item--menu">
                <ul className="toolbar_menu inline-list">
                  <li>About</li>
                  <li>Contact</li>
                  <li>FAQ</li>
                </ul>
              </div>
              <div className="toolbar_item">
                <ul className="toolbar_social no-boolets inline-list">
                  <li>
                    <img src="icons/instgram.png" alt="" />
                  </li>
                  <li>
                    <img src="icons/facebook.png" alt="" />
                  </li>
                  <li>
                    <img src="icons/pinterest.png" alt="" />
                  </li>
                </ul>
              </div>
              <div className="toolbar_item">
                <form action="">
                  <select>
                    <option value="Unitied States">
                      🏁 &nbsp; United States (USD $)
                    </option>
                    <option value="Unitied States">
                      🏁 &nbsp; United States (USD $)
                    </option>
                    <option value="Unitied States">
                      🏁 &nbsp; United States (USD $)
                    </option>
                  </select>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-header">
          <div className="stickywrapper">
            <header className="site-header">
              <div className="page-width">
                <div className="header-layout">
                  <div className="header-item header-item-left">
                    <div className="search-icon icons">
                      {/* search icon */}
                      <img src="icons/search.png" alt="" />
                    </div>
                    <div className="header-item header-item-logo--split">
                      <div className="header-item header-item--split-left">
                        <ul className="site-nav">
                          <li className="site-nav-item">
                            <form action="">
                              <select>
                                <option value="shop">Shop</option>
                              </select>
                            </form>
                          </li>
                          <li className="site-nav-item">
                            <form action="">
                              <select>
                                <option value="shop">Season</option>
                              </select>
                            </form>
                          </li>
                        </ul>
                      </div>
                      <div className="header-item header-item-logo">
                        <div className="logo">
                          <p>LUXETTE</p>
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>PARIS</span>
                        </div>
                      </div>
                      <div className="header-item header-item--split-right">
                        <ul className="site-nav">
                          <li className="site-nav-item">
                            <span>Journal</span>
                          </li>
                          <li className="site-nav-item">
                            <span>Features</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="header-item header-item-icons">
                      <div className="site-nav">
                        <div className="site-nav-icon">
                          <div className="site-nav-icon-item icons">
                            {/* user icon */}
                            <img src="icons/about.png" alt="" />
                          </div>
                          <div className="site-nav-icon-item icons">
                            {/* add cart icon */}
                            <img src="icons/cart.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>
      <div className="announcement-bar">
        <div className="page-width">
          <div className="slideshow-wrapper">
            {/* <p>
              {" "}
              <span>This is</span> Hello World!
            </p> */}
            <AliceCarousel autoPlay autoPlayInterval="5000" animationEasingFunction="ease"  disableDotsControls disableButtonsControls infinite>
              <p className="sliderText">FREE SHIPPING on orders above $100</p>
              <p className="sliderText">FREE SHIPPING on orders above $100</p>
            </AliceCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
