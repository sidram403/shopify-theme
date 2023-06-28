import React from "react";
import "./Footter.css";
import { useState } from "react";
import { FaCcVisa } from "react-icons/fa";
import {
  FaCcMastercard,
  FaCcAmex,
  FaCcPaypal,
  FaCcDinersClub,
  FaCcDiscover,
} from "react-icons/fa";
// import {FaCcMastercard}

import { FiMail } from "react-icons/fi";

const Footer = () => {
  const [selectedCountryValue, setSelectedCountryValue] = useState([
    {
      id: 0,
      name: "Argentina (USD $)",
      currency: "(USD $)",
      icon: "images/usa(1).png",
    },
  ]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const countryData = [
    {
      id: 1,
      name: "Argentina (USD $)",
      currency: "(USD $)",
      icon: "images/usa(1).png",
    },
    {
      id: 2,
      name: "Australia (USD $)",
      currency: "(USD $)",
      icon: "images/usa(1).png",
    },
    {
      id: 3,
      name: "Brazil (USD $)",
      currency: "(USD $)",
      icon: "images/usa(1).png",
    },
    {
      id: 4,
      name: "Canada (USD $)",
      currency: "(USD $)",
      icon: "images/usa(1).png",
    },
    {
      id: 5,
      name: "Denmark (USD $)",
      currency: "(USD $)",
      icon: "images/usa(1).png",
    },
    {
      id: 6,
      name: "Egypt (USD $)",
      currency: "(USD $)",
      icon: "images/usa(1).png",
    },
    {
      id: 7,
      name: "France (USD $)",
      currency: "(USD $)",
      icon: "images/usa(1).png",
    },
    {
      id: 8,
      name: "Germany (USD $)",
      currency: "(USD $)",
      icon: "images/usa(1).png",
    },
    {
      id: 9,
      name: "Hungary (USD $)",
      currency: "(USD $)",
      icon: "images/usa(1).png",
    },
    {
      id: 10,
      name: "India (INR ₹)",
      currency: "(INR ₹)",
      icon: "images/flag.png",
    },
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

  const sortedCountryData = countryData.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const handleSelectedValue = (e) => {
    const textvalue = e.target.innerText;
    const currentSoruce = e.target.currentSrc;
    if (textvalue) {
      // setSelectedCountryValue(textvalue)
      const countryDisply = sortedCountryData.filter(
        (country) => country.name === textvalue
      );
      setSelectedCountryValue(countryDisply);
    } else {
      const countryDisply = sortedCountryData.filter(
        (country) => country.icon === currentSoruce
      );
      setSelectedCountryValue(countryDisply);
    }
    setIsDropdownOpen(false);
  };

  return (
    <div>
      <div className="background ">
        <div className="background ">
          <a href="https://goo.gl/maps/QyZs1dBswWTdZ8oc6">
            <img src="images/location.png" alt="location" />
          </a>
          <div className="pickup-card">
            <h2>Local pickup available</h2>
            <p>301 Front St W</p>
            <p>Toronto, Canada</p>
            <p>Mon - Fri, 8:30am - 10:30pm</p>
            <p>Saturday, 8:30am - 10:30pm</p>
            <p>Sunday, 8:30am - 10:30pm</p>

            <div className="button" style={{ marginTop: 30 }}>
              <a href="https://www.google.com/maps/dir//Sambhram+Institute+of+Technology,+Hesaraghatta+Rd,+Jalahalli+East,+Bengaluru,+Karnataka+560097/@13.0895777,77.5431059,17z/data=!4m18!1m8!3m7!1s0x3bae2297b21d347b:0xbff7ae2269947666!2sSambhram+Institute+of+Technology!8m2!3d13.0895621!4d77.5456808!15sCghTYW1iaHJhbSIDiAEBkgEQZWR1Y2F0aW9uX2NlbnRlcuABAA!16s%2Fm%2F0404806!4m8!1m0!1m5!1m1!1s0x3bae2297b21d347b:0xbff7ae2269947666!2m2!1d77.5456808!2d13.0895621!3e9!5m1!1e1?entry=ttu">
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <ul>
                <li>Tops</li>
                <li>Tunics</li>
                <li>Dresses</li>
                <li>Sweatshirts</li>
              </ul>
            </div>
            <div className="footer-column">
              <ul>
                <li>Spring 2022</li>
                <li>Summer 2022</li>
                <li>Winter 2022</li>
                <li>Fall 2022</li>
              </ul>
            </div>
            <div className="footer-column">
              <ul>
                <li>About</li>
                <li>Contact</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div className="newsletter-form">
              <p>
                Be the first to know about our biggest and best sales. We'll
                never send more than one email a month.
              </p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  style={{
                    border: "none",
                    borderBottom: "2px solid black",
                    width: "60%",
                    marginRight: "5",
                  }}
                  className="font-normal text-slate-950 "
                />
                <span>
                  <FiMail size={20} className="text-gray-500" />
                </span>
              </div>
              <div className="media-icons">
                <a href="https://www.instagram.com/shopify/">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/shopify">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="https://www.pinterest.com/shopify/">
                  <i className="fa-brands fa-pinterest"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* create a icons with  all country name where user can clik on the arrow buttom */}

        <div className="country-info">
          <div className="arrow-down" onClick={toggleDropdown}>
            {selectedCountryValue.map((country) => (
              <div className="country-name inline-block">
                <img
                  src={country.icon}
                  alt="flag"
                  style={{ display: "inline-grid", padding: "20px" }}
                />
                <h1 className="inline-block font-medium">{country.name} </h1>
                <span className="fas fa-angle-down inline-block ml-5"></span>
              </div>
            ))}
          </div>

          {isDropdownOpen && (
            <div className="dropdown-content">
              {sortedCountryData.map((country) => (
                <div
                  key={country.id}
                  className="flex"
                  onClick={handleSelectedValue}
                >
                  <a href="#" className="flex items-center">
                    <img src={country.icon} alt="country" />
                    <span className="country-name text-black ml-4 ">
                      {country.name}
                    </span>
                    {/* <span className="currency text-black ml-1"></span> */}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>

        <div
          className="flex items-center justify-center"
          style={{ display: "block ruby" }}
        >
          <FaCcVisa className="mr-2" color="blue" size={24} />
          <FaCcMastercard
            className="mr-2"
            background="white"
            color="red"
            size={24}
          />
          <FaCcAmex className="mr-2" color="blue" size={24} />
          <FaCcPaypal className="mr-2" color="blue" size={24} />
          <FaCcDinersClub className="mr-2" color="green" size={24} />
          <FaCcDiscover color="orange" background="white" size={24} />
        </div>
        <div className="" style={{ marginTop: 25, color: "black" }}>
          <a
            href="https://www.shopify.com/?utm_campaign=poweredby&utm_medium=shopify&utm_source=onlinestore"
            style={{
              fontSize: "smaller",
              color: "black",
              textDecoration: "none",
            }}
          >
            Power by shopify
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
