import React from 'react';
import '../header/Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
        <NavLink to="/homePage" className='linkStyle'>Re-Mind</NavLink>
        <div className='rightLinks'>
          <NavLink to="/gallery" className={({ isActive }) => `linkStyle rightLink ${isActive ? `linkStyle-active` : ''}`}>Galeria</NavLink>
          <NavLink to="/reminders" className={({ isActive }) => `linkStyle rightLink ${isActive ? `linkStyle-active` : ''}`}>Recordatorios</NavLink>
          <NavLink to="/profile" className={({ isActive }) => `linkStyle rightLink ${isActive ? `linkStyle-active` : ''}`}>Perfil</NavLink>
        </div>
    </div>
  )
}

export default Header;