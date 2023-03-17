import React from "react";
import { projects } from "../../Tempdata";
import "./Project.css";
import ProjectCart from "./ProjectCart";
const Project = () => {
  return (
    <div className="projects">
      <div className="ge">

      <h3>projects</h3>
      </div>
      <div className="prj">
        {projects.map((item, id) => (
          <ProjectCart key={id} Name={item.Name} link={item.link}  lin={item.plink}/>
        ))}
      </div>
    </div>
  );
};

export default Project;
