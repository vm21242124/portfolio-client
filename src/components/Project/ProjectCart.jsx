import React from 'react'
import './Project.css'
const ProjectCart = ({Name,link}) => {
  return (
    <div className='projectcart'>
        <img className='projectimg' src={link} alt="" />
        <h4>{Name}</h4>
        <span className='btnview'>view</span>
    </div>
  )
}

export default ProjectCart