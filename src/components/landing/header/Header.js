import React from "react";
import "./Header.css";
import AliceCarousel from "react-alice-carousel";
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CategoryCards from "../../container/grid/CategoryCards";
import CategoryShowsCards from "./CategoryShowsCards";
import SeasonShowsCards from "./SeasonShowsCards";


import { InstagramFilled } from "@ant-design/icons";
import { InstagramOutlined } from "@ant-design/icons/lib/icons";


const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="responsive-header sm:hidden">
          <div className="grid grid-rows-1 grid-flow-col gap-4">
            <div className="menu-icon">
              <MenuIcon />
            </div>
            <div className="header-item header-item-logo">
              <div className="logo flex items-center">
                <p>LUXETTE</p>
               <span>PARIS</span>
              </div>
            </div>
            <div className="icons">
              {/* search icon */}
              <img src="icons/search.png" alt="" />
              <img src="icons/cart.png" alt="" />

            </div>
          </div>

        </div>

        <div className="toolbar max-sm:hidden">
          <div className="page-width">
            <div className="toolbar_content">
              <div className="toolbar_item toolbar_item--menu ">
                <ul className="toolbar_menu inline-list font-light text-xs">
                  <li>About</li>
                  <li>Contact</li>
                  <li>FAQ</li>
                </ul>
              </div>
              <div className="flex items-center">
                <div className="toolbar_item">
                  <ul className="toolbar_social no-boolets inline-list">
                    <li>
                    {/* <InstagramOutlined /> */}
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
                  <form action="" className="flex items-center">
                   <img style={{borderRadius: "100%"}} src="/images/america-flag.png" className="flag"/>
                    <select className="font-twentieth">
                      <option className="font-twentieth" value="Unitied States">
                        United States (USD $)
                      </option>
                      <option className="font-twentieth" value="Unitied States">
                        United States (USD $)
                      </option>
                      <option className="font-twentieth" value="Unitied States">
                        United States (USD $)
                      </option>
                    </select>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-header max-sm:hidden">
          <div className="stickywrapper">
            <header className="site-header">
              <div className="page-width">
                <div className="header-layout">
                  <div className="header-item header-item-left">
                    <div className="search-icon icons">
                      {/* search icon */}
                      <img src="icons/search.png" alt="" />

                    </div>

                  </div>
                  <div className="header-item header-item-logo--split">

                    <div className="header-item header-item--split-left max-sm:hidden">
                      <ul className="site-nav">
                        <li className="site-nav-item">
                          
                          <div class="category-view-on-header">
                            <div class="icon">
                              <span className="border-line">Shop</span>
                              <div className="show-category-card">
                                <CategoryShowsCards />
                              </div>
                            </div>
                            <div class="arrow-down" onclick="toggleDropdown()">
                              <KeyboardArrowDownIcon />
                              
                            </div>
                          </div>


                        </li>
                        <li className="site-nav-item">
                          
                          <div class="category-view-on-header">
                            <div class="icon">
                              <span className='border-line'>Season</span>
                              <div className="show-category-card show-category-card-season">
                                <SeasonShowsCards />
                              </div>
                            </div>
                            <div class="arrow-down" onclick="toggleDropdown()">
                              <KeyboardArrowDownIcon />

                              
                            </div>
                      
                      
                    <div className="header-item header-item-logo">
                      <div className="logo">
                        <p>LUXETTE</p>
                        {" "}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>PARIS</span>
                      </div>
                    </div>
                    <div className="header-item header-item--split-right max-sm:hidden">
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
            <AliceCarousel autoPlay autoPlayInterval="5000" animationEasingFunction="ease" disableDotsControls disableButtonsControls infinite>
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
