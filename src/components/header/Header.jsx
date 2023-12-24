import React from 'react';
import '../header/Header.css';
import { NavLink } from 'react-router-dom';
import { GiBrain } from "react-icons/gi";

function Header() {
  return (
    <div className='Header'>
      <div className='leftLink'>
        <GiBrain  className='brain-logo'/>
        <NavLink to="/v1/homePage" className='linkStyle'>Re-Mind</NavLink>
      </div>
      <div className='rightLinks'>
        <NavLink to="/v1/gallery" className={({ isActive }) => `linkStyle rightLink ${isActive ? `linkStyle-active` : ''}`}>Galeria</NavLink>
        <NavLink to="/v1/reminders" className={({ isActive }) => `linkStyle rightLink ${isActive ? `linkStyle-active` : ''}`}>Recordatorios</NavLink>
        <NavLink to="/v1/profile" className={({ isActive }) => `linkStyle rightLink ${isActive ? `linkStyle-active` : ''}`}>Perfil</NavLink>
      </div>
    </div>
  )
}

export default Header;