import React from "react";
import "./Main.css";
import newvm from "../../Assets/newvm.jpg";
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
        <button className="btn">Linkden</button>
        <button className="btn">Know More</button>
      </div>
      <div className="rightside">
        <img className="hero" src={newvm} alt="myimg" />
      </div>
    </div>
  );
};

export default Main;
