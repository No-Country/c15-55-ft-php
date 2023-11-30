import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login">
      <div className="login_container">
        <div className="column_left" />
        <div className="column_right">
          <div className="form_container">
            <h1>Bienvenido de nuevo</h1>
            <p>Tus recuerdos esperan</p>
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
                <div>
                  <input type="checkbox" />
                  <label>Recuérdame</label>
                </div>
                <div>
                  <a className="links" href="#">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
              </div>
              <div className="form_group">
                <button type="submit">Iniciar sesión</button>
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
