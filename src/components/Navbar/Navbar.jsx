// import React from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.svg";


const Navbar = () => {
  return (
    <div className="nav-container">
      <img src={Logo} alt="" />
      <div className="right">
        <ul>
          <li>About</li>
          <li>Pricing</li>
          <li>Contact</li>
          <li>But Nfts</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
