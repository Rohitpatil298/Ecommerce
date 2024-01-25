import React from "react";
import search from "../../Assets/Search.svg";
import cart from "../../Assets/Shopping--cart.svg";
import profile from "../../Assets/User--avatar.svg";
import "../Navbar/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <div className="txtLogo">
          <img src={search} alt="search" />
          <div className="logo">Avion</div>
          <img src={cart} className="cart" alt="cart" />
          <img src={profile} alt="profile" />
        </div>
        <div className="other">
          <div className="category">
            <a href="#">Plant pots</a>
            <a href="#">Ceramics</a>
            <a href="#">Tables</a>
            <a href="#">Chairs</a>
            <a href="#">Crockery</a>
            <a href="#">Tableware</a>
            <a href="#">Cutlery</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
