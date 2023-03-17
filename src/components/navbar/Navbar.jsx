import React from "react";
import "./Navbar.css";
import vm from "../../Assets/vm.jpg";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={vm} alt="logo" className="logoimg" />
      </div>
      <div className="item">
        <NavLink to="/">
          <span className="nav-items">Home</span>
        </NavLink>
        <NavLink to="/contact">
          <span className="nav-items">contact</span>
        </NavLink>
        <NavLink to="/about">
          <span className="nav-items">About</span>
        </NavLink>
        <NavLink to="/skills"> 
          <span className="nav-items">Skills</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
