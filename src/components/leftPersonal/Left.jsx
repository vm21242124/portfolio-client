import React from "react";
import { NavLink } from "react-router-dom";
import { personal } from "../../Tempdata";

const Left = () => {
  return (
    <div className="lefti">
      <h3>Education: </h3>
      <h4>{personal.c1}</h4>
      <p>{personal.education1}</p>
      <h4>{personal.c2}</h4>
      <p>{personal.education2}</p>
      <h3>Skills:</h3>
      <h4>Frontend</h4>
      <p>{personal.frontend}</p>
      <h4>Backend</h4>
      <p>{personal.backend}</p>
      <h4>Tools and Technologies</h4>
      <p>{personal.TECHNOLOGIES}</p>
      <h4>Programming Languages</h4>
      <p>{personal.PROGRAMMING}</p>
      <h3>Achivements and Rewards</h3>
      <p>{personal.Achievement1}</p>
      <p>{personal.Achievement2}</p>
      <p>{personal.Achievement3}</p>
      <p>{personal.Achievement4}</p>
      <h3>Projects</h3>
      <h4>{personal.project1}</h4>
      <p>{personal.project1d}</p>
      <NavLink to={personal.p1link}>
        <button className="btn">checkout</button>
      </NavLink>
      <h4>{personal.project2}</h4>
      <p>{personal.project2d}</p>
      <NavLink to={personal.p2link}>
        <button className="btn">checkout</button>
      </NavLink>

      <h4>{personal.project3}</h4>

      <p>{personal.project3d}</p>
      <NavLink to={personal.p3link}>
        <button className="btn">checkout</button>
      </NavLink>
    </div>
  );
};

export default Left;
