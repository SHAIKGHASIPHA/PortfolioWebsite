import React,{useState} from 'react';
import {NavLink} from "react-router-dom";

export default function Navbar() {
  const[menuOpen,setMenuOpen]=useState(0)
  return (
    <div className="navbar">
      <NavLink to="/" className="logo">&lt;SKG /&gt;</NavLink>
        <div className={`nav-items ${menuOpen ? "active" : ""}`}>
      <NavLink 
  to="/" 
  end
  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}  onClick={() => setMenuOpen(false)}
>
  Home
</NavLink>

 
      
        <NavLink to="/skills" className="nav-link"  onClick={() => setMenuOpen(false)}>Skills</NavLink>
        <NavLink to="/projects" className="nav-link"  onClick={() => setMenuOpen(false)}>Projects</NavLink>
        <NavLink to="/certifications" className="nav-link"  onClick={() => setMenuOpen(false)}>Certifications</NavLink>
        <NavLink to="/contact" className="nav-link"  onClick={() => setMenuOpen(false)}>Contact</NavLink>
    </div>
     <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
      </div>
    </div>
  )
}
