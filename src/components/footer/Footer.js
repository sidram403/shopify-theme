import React from 'react'
import './Footter.css'

const Footer = () => {
  return (
    <div>
        <div className="background ">
        <a href="https://goo.gl/maps/QyZs1dBswWTdZ8oc6">
            <img src="images/location.png" alt='location'/>
        </a>
        <div className="pickup-card">
            <h2>Local pickup available</h2>
            <p>301 Front St W</p>
            <p>Toronto, Canada</p>
            <p>Mon - Fri, 8:30am - 10:30pm</p>
            <p>Saturday, 8:30am - 10:30pm</p>
            <p>Sunday, 8:30am - 10:30pm</p>

            <div className="button" style={{marginTop: 30}}>
                <a
                    href="https://www.google.com/maps/dir//Sambhram+Institute+of+Technology,+Hesaraghatta+Rd,+Jalahalli+East,+Bengaluru,+Karnataka+560097/@13.0895777,77.5431059,17z/data=!4m18!1m8!3m7!1s0x3bae2297b21d347b:0xbff7ae2269947666!2sSambhram+Institute+of+Technology!8m2!3d13.0895621!4d77.5456808!15sCghTYW1iaHJhbSIDiAEBkgEQZWR1Y2F0aW9uX2NlbnRlcuABAA!16s%2Fm%2F0404806!4m8!1m0!1m5!1m1!1s0x3bae2297b21d347b:0xbff7ae2269947666!2m2!1d77.5456808!2d13.0895621!3e9!5m1!1e1?entry=ttu">Get
                    Directions</a>
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
                    <p>Be the first to know about our biggest and best sales. We'll never send more than one email a
                        month.
                    </p>
                    <div>
                        <input type="email" placeholder="Enter your email"
                            style={{border: "none", borderBottom: "2px solid black", width: "50%"}}/><i
                            className="fa-solid fa-envelope " style={{fontSize: 30}}></i>
                    </div>
                    <div className="media-icons" style={{marginTop:5, marginRight:160, marginBottom: 20, justifyItems: "center"}}>
                        <a href="https://www.instagram.com/shopify/"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://www.facebook.com/shopify"><i className="fa-brands fa-square-facebook"></i></a>
                        <a href="https://www.pinterest.com/shopify/"><i className="fa-brands fa-shopify"></i></a>
                    </div>
                </div>
            </div>
        </div>

        <div className="power">
            <div className="icon">
                <form action="">
                  <select >
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
            
            {/* <div className="arrow-down" onclick="toggleDropdown()">
                <span className="fas fa-angle-down"></span>
                <div className="dropdown-content">
                    <a href="#">
                        <img src="images/currancy.png" alt="Canada" />
                        Canada (CAD $)
                    </a>
                    <a href="#">
                        <img src="images/currancy.png" alt="United Kingdom" />
                        United Kingdom (GBP £)
                    </a>
                    <a href="#">
                        <img src="aus-icon.png" alt="Australia" />
                        Australia (AUD $)
                    </a>
                    <a href="#">
                        <img src="aus-icon.png" alt="Australia" />
                        Australia (AUD $)
                    </a>
                    <a href="#">
                        <img src="aus-icon.png" alt="Australia" />
                        Australia (AUD $)
                    </a>
                    <a href="#">
                        <img src="aus-icon.png" alt="Australia" />
                        Australia (AUD $)
                    </a>
                    <a href="#">
                        <img src="aus-icon.png" alt="Australia" />
                        Australia (AUD $)
                    </a>
                </div>
            </div> */}
        </div>

        <div className="logo" style={{marginTop: 20, fontSize: 25}}>
            <i className="fa-brands fa-cc-visa" style={{background:"white"}}></i>
            <i className="fa-brands fa-cc-mastercard"></i>
            <i className="fa-brands fa-cc-amex"></i>
            <i className="fa-brands fa-cc-paypal"></i>
            <i className="fa-brands fa-cc-diners-club"></i>
            <i className="fa-brands fa-cc-discover"></i>
        </div>
        <div className="" style={{marginTop: 25, color: "black"}}>
            <a href="https://www.shopify.com/?utm_campaign=poweredby&utm_medium=shopify&utm_source=onlinestore"
                style={{fontSize:"smaller", color: "black", textDecoration: "none"}}>Power by shopify</a>

        </div>
    </footer>

      
    </div>
  )
}

export default Footer
