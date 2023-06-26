import React, { useEffect, useState } from "react";
import "./Header.css";
import AliceCarousel from "react-alice-carousel";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CategoryShowsCards from "./CategoryShowsCards";
import SeasonShowsCards from "./SeasonShowsCards";
import { alpha, styled } from "@mui/material";
import InputBase from "@mui/material/InputBase";

// import { InstagramFilled } from "@ant-design/icons";
// import { InstagramOutlined } from "@ant-design/icons/lib/icons";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 1),
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "85ch",
    },
  },
}));

const Header = () => {
  const [searchbarShow, setSearchbarShow] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [showSeasonDropdown, setShowSeasonDropdoen] = useState(false);
  const SearchbarExpand = () => {
    setSearchbarShow(true);
  };

  const HandleCloseSearchBar = () => {
    setSearchbarShow(false);
  };

  useEffect(() => {}, []);

  return (
    <div>
      <div className="header ">
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
                    <img
                      style={{ borderRadius: "100%" }}
                      src="/images/america-flag.png"
                      className="flag"
                    />
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
        {searchbarShow && (
          <div
            classsName="searchbar "
            style={{
              height: 76,
              padding: 18,
              background: "gray",
              display: "flex",
            }}
          >
            <Search
              className="completeSearchbar"
              style={{
                margin: "0px 0px 0px 190px",
                background: "white",
                border: "1px solid black",
              }}
            >
              <StyledInputBase
                placeholder="Search our store"
                inputProps={{ "aria-label": "search" }}
              />
              <img
                src="icons/search.png"
                alt="search"
                style={{
                  display: "inline-block",
                  width: 22,
                  height: 22,
                  margin: 10,
                  cursor: "pointer",
                }}
              />
            </Search>
            <img
              onClick={HandleCloseSearchBar}
              src="icons/close.png"
              alt="close"
              style={{
                marginLeft: 20,
                alignItems: "center",
                height: "100%",
                width: 38,
                cursor: "pointer",
              }}
            />
          </div>
        )}
        
          <div className="sticky-header max-sm:hidden">
           {showShop && <div  className="sticky-dropdown">
               <CategoryShowsCards setShowShop = {setShowShop} />

            </div>}
           {showSeasonDropdown && <div className="sticky-dropdown">
               <SeasonShowsCards setShowSeasonDropdoen = {setShowSeasonDropdoen}/>

            </div>}
            <div className="stickywrapper">
              <header className="site-header">
                <div className="page-width">
                  <div className="header-layout">
                    {!searchbarShow && (
                      <div className="header-item header-item-left">
                        <div
                          className="search-icon icons"
                          onClick={SearchbarExpand}
                        >
                          {/* search icon */}
                          <img
                            src="icons/search.png"
                            alt="search"
                            style={{ cursor: "pointer" }}
                          />
                        </div>
                      </div>
                    )}
                    
                      <div className="header-item header-item-logo--split">
                        <div className="header-item header-item--split-left max-sm:hidden">
                          <ul className="site-nav">
                            <li className="site-nav-item">
                              <div class="category-view-on-header"  onMouseEnter={() => {setShowShop(true)}} onMouseLeave={() => {setShowShop(false)}}>
                                <div className="border-line">
                                  <div class="icon">
                                    <span>Shop</span>
                                    <div className="show-category-card">
                                    </div>
                                  </div>
                                </div>
                                <div class="arrow-down-header">
                                  <KeyboardArrowDownIcon />
                                </div>
                              </div>
                            </li>
                            <li className="site-nav-item">
                              <div class="category-view-on-header"  onMouseEnter={() => {setShowSeasonDropdoen(true)}} onMouseLeave={() => {setShowSeasonDropdoen(false)}}>
                                <div className="border-line">
                                  <div class="icon">
                                    <span>Season</span>
                                    <div className="show-category-card show-category-card-season">
                                      
                                    </div>
                                  </div>
                                </div>
                                <div class="arrow-down-header">
                                  <KeyboardArrowDownIcon />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>

                    <div className="header-item header-item-logo">
                      <div className="logo flex items-center">
                        <p>LUXETTE</p>
                        <span>PARIS</span>
                      </div>
                    </div>
                        <div className="header-item header-item--split-right max-sm:hidden">
                          <ul className="site-nav">
                            <div className="mx-4">
                              <li className="site-nav-item">
                                <span className="border-line ">Journal</span>
                              </li>
                            </div>
                            <div className="mx-4">
                              <li className="site-nav-item">
                                <span className="border-line ">Features</span>
                              </li>
                            </div>
                          </ul>
                        </div>
                      </div>
                 
                    {!searchbarShow && (
                      <div className="header-item header-item-icons justify-end">
                        <div className="site-nav">
                          <div className="site-nav-icon">
                            <div className="site-nav-icon-item icons">
                              {/* user icon */}
                              <img src="icons/about.png" alt="" />
                            </div>
                            <div>
                              {/* add cart icon */}
                              <img src="icons/cart.png" alt="" style={{width:"19px"}}/>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </header>
            </div>
          </div>
        
        <div className="announcement-bar">
          <div className="page-width">
            <div className="slideshow-wrapper">
              {/* <p>
              {" "}
              <span>This is</span> Hello World!
            </p> */}
              <AliceCarousel
                autoPlay
                autoPlayInterval="5000"
                animationEasingFunction="ease"
                disableDotsControls
                disableButtonsControls
                infinite
              >
                <p className="sliderText">FREE SHIPPING on orders above $100</p>
                <p className="sliderText">FREE SHIPPING on orders above $100</p>
              </AliceCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
