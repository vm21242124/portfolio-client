import React from "react";
import "./Main.css";
import vm from "../../Assets/vm.jpg";
// import {BiPhoneCall} from "react-icons/bi"
// import {AiFillLinkedin,AiFillGithub,AiOutlineMail} from "react-icons/ai"
const Main = () => {
  return (
    <div className="Main">
      {/* <div className="icons">
        <span className="icon">{AiFillLinkedin}</span>
        <span className="icon">{AiFillGithub}</span>
        <span className="icon">{AiOutlineMail}</span>
        <span className="icon">{BiPhoneCall}</span>
      </div> */}
      <div className="leftside">
        <h1 className="head">
          Hii !... <span className="name">vinod mali</span> here
        </h1>
        <p>
          welcome to my profile I am full stack developer working with new tech
          stack MERN
        </p>
        <button className="ln">Linkden</button>
        <button className="nn">Know More</button>
      </div>
      <div className="rightside">
        <img className="hero" src={vm} alt="myimg" />
      </div>
    </div>
  );
};

export default Main;
