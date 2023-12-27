import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import { CiFolderOn } from "react-icons/ci";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { MdGroups2 } from "react-icons/md";
import { GiBrain } from "react-icons/gi";


function LandingPage() {
  return (
        <div className='Landing-Container'>
            <div className="header-container bg-violeta">
              <div className='container-logo'>
              <img src='src/assets/brain.png' className='brainLogo' />
                <h2>Re-Mind</h2>
              </div>
              <div className='container-login'>
                <div className='login-btn'>
                  <p><Link to="/login" className='link'>Iniciar Sesión</Link></p>
                </div>
              </div>
            </div>
          <main>
            <div className='hero'>
                <div className='left-space-hero'></div>
                <div className='right-space-hero'>
                  <h2>Sube fotos de tus seres queridos</h2>
                  <p>Nunca te pierdas un momento especial</p>
                  <div className='btn-create'><Link to="/signup" className='link'>Registrate hoy mismo</Link></div>
                </div>
            </div>
            <div className='introduction-container'>
              <div className='intro-subtitle'>
                <h2>Bienvenido a Re-Mind</h2>
                <p>Recuerda lo que es importante</p>
                <hr />
              </div>
              <div className='intro-image'>
                <div className='div-intro-img'>h</div>
              </div>
              <div className='buttons-container'>
                <div className='icon-btn'>
                  <p><CiFolderOn className='icon-lp' /></p>
                </div>
                <div className='icon-btn'><p><PiMagnifyingGlassBold className='icon-lp' /></p></div>
                <div className='icon-btn'><p><MdGroups2 className='icon-lp' /></p></div>
              </div>
              <div className='buttons-subtitles'>
                <p>Organiza tus elementos</p> 
                <p>Recupera tus recuerdos fácilmente</p>
                <p>Comparte facilmente</p>
              </div>
            </div>
          </main>
          <div className="footer-container bg-violeta">
            <div className='footer-logo'>
              <GiBrain className='logo'/>
              <p>Re~Mind</p>
            </div>
            <div className='footer-info'>
              <p>Todos los derechos reservados.</p>
              <p>© 2023 c15-55-ft-React</p>
            </div>
          </div>
        </div>

  )
}

export default LandingPage