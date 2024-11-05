import React from "react";
import Logo from "../assets/Logo";

export default function Header(props) {
  return (
    <header className={props.page == "home" ? "header-home" : "header-others"}>
      <div className="navbar">
        <div className="logo">
          <Logo />
          <div className="companyLogo">Auction</div>
        </div>

        {props.page == "home" && (
          <div className="menuitems">
            <nav className="menu">
              <ul>
                <li>
                  <a href="#">Auctions</a>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropbtn">
                    Bidding
                  </a>
                  <ul className="dropdown-content">
                    <li>
                      <a href="#">Web Design</a>
                    </li>
                    <li>
                      <a href="#">SEO</a>
                    </li>
                    <li>
                      <a href="#">Marketing</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropbtn">
                    About Us
                  </a>
                  <ul className="dropdown-content">
                    <li>
                      <a href="#">Our Team</a>
                    </li>
                    <li>
                      <a href="#">Our Story</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
            <div className="select-dropdown">
              <select name="language" id="language-select">
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
