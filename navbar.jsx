import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ onCartClick, cartCount }) => (
  <nav className="navbar">
    <div className="navbar-section navbar-logo">
      <img src="/src/img/mainlogo.png" alt="MariaCoffee" className="logo-img" />
    </div>
      <div className="navbar-section navbar-links">
      <a href="/">HOME</a>
      <Link to="/Menu">MENU</Link>
      <a href="#about">ABOUT</a>
      <a href="#findus">LOCATION</a>
      <a href="#footer">SOCIALMEDIA</a>
    </div>
    <div className="navbar-section navbar-actions">
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        <input className="navbar-search" type="text" placeholder="Search" />
        <SearchIcon
          style={{
            position: "absolute",
            left: 15,
            color: "#fff",
            fontSize: 22,
            pointerEvents: "none"
          }}
        />
      </div>
     <AccountCircleIcon
          className="navbar-icon"
          component={Link}
          to="/login"
        />
    </div>
  </nav>
);

export default Navbar;