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
          {/* <section className="contenedor-row">
            <h2>Nunca te pierdas un evento</h2>
            <div className="contenedor">
              <img
                src="/src/assets/placeholder-image.jpg"
                alt="Imagen de la aplicación"
              />
              <div>
                <h3>Crea</h3>
                <p>¡Es fácil y rápido!</p>
                <p>
                  Elige el evento que deseas recordar, la fecha y la hora en que desesas
                  recibir el recordatorio, y listo.
                </p>
              </div>
              <icon />
            </div>
          </section>
          <section className="contenedor-row">
            <div className="contenedor">
              <icon />
              <h3>Personaliza</h3>
              <p>¡Para que no te olvides de nada!</p>
              <p>Modifica el sonido, la frecuencia y mucho más.</p>
              <p>¡Encuentra lo que funciona mejor para ti!</p>
            </div>
            <div />
            <img
              src="/src/assets/placeholder-image.jpg"
              alt="Imagen de la aplicación"
            />
          </section>
          <section>
            <div className="contenedor-row">
              <img
                src="/src/assets/placeholder-image.jpg"
                alt="Imagen de la aplicación"
              />
              <div className="contenedor">
                <h3>Administra</h3>
                <p>¡No te preocupes si te equivocas!</p>
                <p>
                  Cambia lo que necesites, cuando necesites y mantén tus recordatorios
                  actualizados con facilidad.
                </p>
              </div>
              <icon />
            </div>
          </section>
          <section>
            <div className="contenedor">
              <a href="">Crear recordatorios</a>
              <h2>¡Invita a un familiar o amigo a conectarse!</h2>
              <p>
                Conecta a tu cuenta con la de un familiar o amigo para que puedan
                recibir alertas sobre tus recordatorios.
              </p>
            </div>
            <div>
              <div>
                <h3>Las alertas pueden ayudarte a:</h3>
                <ul>
                  <li>Mantenerte organizado y al día</li>
                  <li>Sentirte más independiente</li>
                  <li>Mantener una conexión con tus seres queridos</li>
                </ul>
                <p>
                  Un familiar o amigo puede recibir una notificación en su teléfono o
                  correo electrónico.
                </p>
                <icon />
                <icon />
              </div>
            </div>
            <div className="contenedor">
              <h3>¿Estás listo para empezar?</h3>
              <p>¡Configura tus alertas hoy mismo!</p>
              <a href="">Comenzar</a>
            </div>
          </section> */}
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