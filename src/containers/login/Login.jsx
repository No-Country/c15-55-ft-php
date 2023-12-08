import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login">
      <div className="login_container">
        <div className="column_left" />
        <div className="column_right">
          <div className="form_container">
            <h1 className="titulo">Bienvenido de nuevo</h1>
            <p className="parrafo">Tus recuerdos esperan</p>
            <form>
              <div className="form_group">
                <label>Correo electrónico</label>
                <input type="text" placeholder="Correo electrónico" />
              </div>
              <div className="form_group">
                <label>Contraseña</label>
                <input type="password" placeholder="Contraseña" />
              </div>
              <div className="form_group_2col">
                <div class="form_group_checkbox">
                  <input type="checkbox" />
                  <label class="texto_checkbox">Recuérdame</label>
                </div>
                <div>
                  <a className="links" href="#">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
              </div>
              <div className="form_group">
                <button className="boton_enviar" type="submit">Iniciar sesión</button>
              </div>
            </form>
            <div className="form_group">
              <p className="nuevo">
                ¿Eres nuevo?{' '}
                <a className="links" href="#">
                  Crea una cuenta
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
