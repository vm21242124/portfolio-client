import React from 'react'
import { NavLink } from 'react-router-dom'
import './Project.css'
const ProjectCart = ({Name,link ,lin}) => {
  return (
    <div className='projectcart'>
        <img className='projectimg' src={link} alt="" />
        <h4>{Name}</h4>
        <NavLink to={lin} >

        <button className='btn'>view</button>
        </NavLink>
    </div>
  )
}

export default ProjectCart