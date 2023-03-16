import React from "react";
import { skills2 } from "../../Tempdata.js";
import Skill from "./Skill";
import "./s1.css";
const Skills = () => {
  return (
    <div className="skills">
      <div className="s1">
       <div className="f"><h3>skills</h3></div>

        {skills2.map((item) => (
          <Skill key={item.id} Name={item.Name} img={item.img} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
