import React from 'react';
import '../header/Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
        <NavLink to="/" className='linkStyle'>LOGO HERE</NavLink>
        <div className='rightLinks'>
            <NavLink to="/gallery" className='linkStyle rightLink'>Galeria</NavLink>
            <NavLink to="/reminders" className='linkStyle rightLink'>Recordatorios</NavLink>
            <NavLink to="/profile" className='linkStyle rightLink'>Perfil</NavLink>
        </div>
    </div>
  )
}

export default Header;