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
  const[selectedCountryValue, setSelectedCountryValue] = useState([
    {
      id:0,
      name:"Argentina (USD $)",
      currency:"(USD $)",
      icon:"images/usa(1).png"
    }
  ])
  const [countrySelect, setCountrySelect] = useState(false);
  const [searchbarShow, setSearchbarShow] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [showSeasonDropdown, setShowSeasonDropdoen] = useState(false);
  const SearchbarExpand = () => {
    setSearchbarShow(true);
  };

  

  const HandleCloseSearchBar = () => {
    setSearchbarShow(false);
  };
  const countryData = [
    { id:1, name: "Argentina (USD $)", currency: "(USD $)", icon: "images/usa(1).png" },
    {id:2, name: "Australia (USD $)", currency: "(USD $)", icon: "images/usa(1).png" },
    { id:3, name: "Brazil (USD $)", currency: "(USD $)", icon: "images/usa(1).png" },
    { id:4,name: "Canada (USD $)", currency: "(USD $)", icon: "images/usa(1).png" },
    {id:5, name: "Denmark (USD $)", currency: "(USD $)", icon: "images/usa(1).png" },
    { id:6,name: "Egypt (USD $)", currency: "(USD $)", icon: "images/usa(1).png" },
    { id:7,name: "France (USD $)", currency: "(USD $)", icon: "images/usa(1).png" },
    { id:8,name: "Germany (USD $)", currency: "(USD $)", icon: "images/usa(1).png" },
    { id:9,name: "Hungary (USD $)", currency: "(USD $)", icon: "images/usa(1).png" },
    { id:10,name: "India (INR ₹)", currency: "(INR ₹)", icon: "images/flag.png" },
    // { name: 'Japan', currency: 'USD $', icon: 'images/japan-icon.png' },
    // { name: 'Kenya', currency: 'USD $', icon: 'images/kenya-icon.png' },
    // { name: 'Mexico', currency: 'USD $', icon: 'images/mexico-icon.png' },
    // { name: 'Netherlands', currency: 'USD $', icon: 'images/netherlands-icon.png' },
    // { name: 'Oman', currency: 'USD $', icon: 'images/oman-icon.png' },
    // { name: 'Peru', currency: 'USD $', icon: 'images/peru-icon.png' },
    // { name: 'Qatar', currency: 'USD $', icon: 'images/qatar-icon.png' },
    // { name: 'Russia', currency: 'USD $', icon: 'images/russia-icon.png' },
    // { name: 'South Africa', currency: 'USD $', icon: 'images/south-africa-icon.png' },
    // { name: 'Thailand', currency: 'USD $', icon: 'images/thailand-icon.png' },
    // { name: 'United Kingdom', currency: 'USD $', icon: 'images/uk-icon.png' },
    // { name: 'United States', currency: 'USD $', icon: 'images/usa-icon.png' },
    // { name: 'Vietnam', currency: 'USD $', icon: 'images/vietnam-icon.png' },
    // { name: 'Zimbabwe', currency: 'USD $', icon: 'images/zimbabwe-icon.png' },
    // Add more countries with their respective icons
  ];

  


  const handelSelect = () => {
    setCountrySelect(!countrySelect);
  };

  const handleSelectedValue = (e) =>{
    const textvalue = e.target.innerText;
    const currentSoruce = e.target.currentSrc;
    if(textvalue){
      // setSelectedCountryValue(textvalue)
      const countryDisply = countryData.filter((country) => country.name===textvalue)
      setSelectedCountryValue(countryDisply)
    }else{
      const countryDisply = countryData.filter((country) => country.icon===currentSoruce)
      setSelectedCountryValue(countryDisply)
    }
    setCountrySelect(false)

  }

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
              <img src="icons/search.png" alt="search" />
              <img src="icons/cart.png" alt="cart" />
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
                      <img src="icons/instgram.png" alt="instagram" />
                    </li>
                    <li>
                      <img src="icons/facebook.png" alt="facebook" />
                    </li>
                    <li>
                      <img src="icons/pinterest.png" alt="pinterest" />
                    </li>
                  </ul>
                </div>
                <div className="toolbar_item cursor-pointer	" onClick={handelSelect}>
                  {selectedCountryValue.map((country) => (
                    <form action="" className="flex items-center">
                    <img
                      style={{ borderRadius: "100%" }}
                      src={country.icon}
                      className="flag"
                      alt="flag"
                    />
                    <h1 className="font-twentieth inline-block font-medium ml-2">
                      {country.name}
                    </h1>
                    
                    <span className="fas fa-angle-down inline-block ml-4"></span>
                    
                  </form>
                  )) }
                </div>
              </div>
            </div>
          </div>
        </div>
        {searchbarShow && (
          <div
            classsName="searchbar "
            style={{
              height: 96,
              padding: 25,
              background: "gray",
              display: "flex",
              position: "absolute",
              overflow: "hidden",
              zIndex: 1,
              width: "100%",
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
          {showShop && (
            <div className="sticky-dropdown">
              <CategoryShowsCards setShowShop={setShowShop} />
            </div>
          )}
          {showSeasonDropdown && (
            <div className="sticky-dropdown">
              <SeasonShowsCards setShowSeasonDropdoen={setShowSeasonDropdoen} />
            </div>
          )}
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
                          <div
                            class="category-view-on-header"
                            onMouseEnter={() => {
                              setShowShop(true);
                            }}
                            onMouseLeave={() => {
                              setShowShop(false);
                            }}
                          >
                            <div className="border-line">
                              <div class="icon">
                                <span>Shop</span>
                                <div className="show-category-card"></div>
                              </div>
                            </div>
                            <div class="arrow-down-header">
                              <KeyboardArrowDownIcon />
                            </div>
                          </div>
                        </li>
                        <li className="site-nav-item">
                          <div
                            class="category-view-on-header"
                            onMouseEnter={() => {
                              setShowSeasonDropdoen(true);
                            }}
                            onMouseLeave={() => {
                              setShowSeasonDropdoen(false);
                            }}
                          >
                            <div className="border-line">
                              <div class="icon">
                                <span>Season</span>
                                <div className="show-category-card show-category-card-season"></div>
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

                  <div className="header-item header-item-icons justify-end">
                    <div className="site-nav">
                      <div className="site-nav-icon">
                        <div className="site-nav-icon-item icons">
                          {/* user icon */}
                          <img src="icons/about.png" alt="about" />
                        </div>
                        <div>
                          {/* add cart icon */}
                          <img
                            src="icons/cart.png"
                            alt="cart"
                            style={{ width: "19px" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
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
            {countrySelect &&
                <div className="country-dropdown-header" >
                  {countryData.map((country) => (
                  <div key={country.id} className="flex" onClick={handleSelectedValue}>
                  <a href="#"  className="flex items-center" >
                    <img src={country.icon} alt="country" />
                    <span className="country-name-header text-black ml-4">
                      {country.name}
                    </span>
                    {/* <span className="currency text-black ml-1"></span> */}
                    
                  </a>
                  </div>
                  ))}
                </div>
              }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
