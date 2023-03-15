import React from "react";
import "./Navbar.css";
import vm from "../../Assets/vm.jpg";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={vm} alt="logo" className="logoimg" />
      </div>
      <div className="item">
        <span className="nav-items">Home</span>
        <span className="nav-items">Project</span>
        <span className="nav-items">Skills</span>
        <span className="nav-items">About</span>
      </div>
    </div>
  );
};

export default Navbar;
