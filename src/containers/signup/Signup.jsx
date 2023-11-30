import React from 'react'

const Signup = () => {
  return (
    <div className="login">
  <div className="login_container">
    <div className="column_left" />
    <div className="column_right">
      <div className="form_container">
        <h1>Crea una cuenta</h1>
        <p>Proporciona tus datos</p>
        <form>
          <div className="form_group">
            <label>Tu Nombre</label>
            <input type="text" placeholder="Rogelio Mansilla" />
          </div>
          <div className="form_group">
            <label>Correo electrónico</label>
            <input type="text" placeholder="ejemplo@gmail.com" />
          </div>
          <div className="form_group">
            <label>Contraseña</label>
            <input type="password" placeholder="Tdfg%63S" />
          </div>
          <div className="form_group_2col">
            <div>
              <p className="parrafo">
                Al registrarme acepto los{" "}
                <span className="nuevo">términos y condiciones</span> y{" "}
                <span className="nuevo">política de privacidad</span>
              </p>
            </div>
          </div>
          <div className="form_group">
            <button type="submit">Iniciar sesión</button>
          </div>
        </form>
        <div className="form_group">
          <p className="nuevo">
            ¿Ya Eres usuario?{" "}
            <a className="links" href="#">
              Inicia Sesión
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Signup;