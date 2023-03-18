import React from "react";
import "./Main.css";
import newvm from "../../Assets/newvm.jpg";
import { NavLink } from "react-router-dom";
import gitr from '../../Assets/gitr.png'
import lt from '../../Assets/lt.png'
import gfg from '../../Assets/gfg.png'
const Main = () => {
  return (
    <div className="Main">

      <div className="leftside">
        <h1 className="head">
          Hii !... <span className="name">vinod mali</span> here
        </h1>
        <p>
          welcome to my profile I am full stack developer working with new tech
          stack MERN
        </p>
        <NavLink to={"https://linkedin.com/in/vinod-mali-9a2abb230/"}>

        <button className="btn">Linkden</button>
        </NavLink>
        <NavLink to={"https://linkedin.com/in/vinod-mali-9a2abb230/"}>

        <button className="btn">Know More</button>
        </NavLink>
        <div className="codepr">
          <NavLink to={"https://github.com/vm21242124"}><img src={gitr} alt="" className="idd" /></NavLink>
          <NavLink to={"https://leetcode.com/vm2124/"}><img src={lt} alt="" className="idd" /></NavLink>
          <NavLink to={"https://auth.geeksforgeeks.org/user/vm21242124/"}><img src={gfg} alt="" className="idd" /></NavLink>

        </div>
      </div>
      <div className="rightside">
        <img className="hero" src={newvm} alt="myimg" />
      </div>
    </div>
  );
};

export default Main;
