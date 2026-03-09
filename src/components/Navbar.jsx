import React from 'react'
import {NavLink} from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="nav-items">
      <NavLink 
  to="/" 
  end
  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
>
  Home
</NavLink>


        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/skills" className="nav-link">Skills</NavLink>
        <NavLink to="/projects" className="nav-link">Projects</NavLink>
        <NavLink to="/certifications" className="nav-link">Certifications</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
    </div>
    </div>
  )
}
