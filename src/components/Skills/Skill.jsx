import React from 'react'
import './Skills.css'
const Skill = ({Name,img}) => {
  return (
    <div className="skil">
    <img className="p1" src={img} alt="skill img" />
    <h4>{Name}</h4>
   </div>
  )
}

export default Skill