import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <>
  <header>
    <div>
      <img src="" alt="Logotipo" />
      <a href="">Iniciar Sesión</a>
    </div>
    S
  </header>
  <main>
    <div className="contenedor">
      <h1>Recuerda lo que es importante</h1>
      <p className="subtitulo">
        La vida está llena de momentos maravillosos que merecen ser recordados.
      </p>
    </div>
    <div className="contenedor-row">
      <div>
        <img
          src="/src/assets/placeholder-image.jpg"
          width="648px"
          height="511px"
          alt="Imagen de la aplicación"
        />
      </div>
      <div>
        <h2>Sube fotos de tus seres queridos</h2>
        <p>Nunca te pierdas un momento especial.</p>
        <a href="">Crear recuerdos</a>
      </div>
    </div>
    <div className="contenedor-row">
      <div className="contenedor">
        <h2>Organiza tus elementos</h2>
        <p>Recupera tus recuerdos fácilmente</p>
        <a href="">Encontrar recuerdos</a>
      </div>
      <div className="contenedor">
        <img
          src="/src/assets/placeholder-image.jpg"
          width="300px"
          height="237px"
          alt="Imagen de la aplicación"
        />
        <img
          src="/src/assets/placeholder-image.jpg"
          width="300px"
          height="237px"
          alt="Imagen de la aplicación"
        />
        <img
          src="/src/assets/placeholder-image.jpg"
          width="300px"
          height="237px"
          alt="Imagen de la aplicación"
        />
        <img
          src="/src/assets/placeholder-image.jpg"
          width="300px"
          height="237px"
          alt="Imagen de la aplicación"
        />
      </div>
    </div>
    <p>
      Los recuerdos nos conectan con nuestro pasado, con nuestros seres queridos
      y con nosotros mismos.
    </p>
  </main>
  <section className="contenedor-row">
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
  </section>
  <footer>
    <img src="" alt="Logotipo" />
    <a href="">
      <img />
    </a>
    <div>
      <p>Todos los derechos reservados (c) 2023 c15-55-pt-php</p>
    </div>
  </footer>
</>
  )
}

export default LandingPage