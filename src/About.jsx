import React from "react";
import "./About.css";
import newvm from "./Assets/newvm.jpg";

import { personal } from "./Tempdata";
import Left from "./components/leftPersonal/Left";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <div className="vm">
        <div className="contact-details">
          <h2>{personal.Name}</h2>

          <div className="profiles">
            <NavLink to={personal.github}><span className="e">GitHub</span></NavLink>
            <NavLink to={personal.linkden}><span className="e">LinkdIn</span></NavLink>
            
            <span>{personal.mono}</span>
            <span>@{personal.email1}</span>
            <span>@{personal.email2}</span>
          </div>
        </div>

        <div className="cover">
          <img className="profilepic" src={newvm} alt="" />
        </div>
      </div>
      <div className="personal">
        <div className="left">
          <Left />
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default About;
