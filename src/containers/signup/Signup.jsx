import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firestore";

const Signup = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState('');

  const navigate = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        email: user.email,
        username: username,
      });
      console.log(`User Created: ${user.uid}, ${user.email}`);
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };
  console.log(username);

  return (
    <div className="login">
  <div className="login_container">
    <div className="column_left" />
    <div className="column_right">
      <div className="form_container">
        <h1>Crea una cuenta</h1>
        <p>Proporciona tus datos</p>
        <form onSubmit={handleCreate}>
          <div className="form_group">
            <label>Nombre de usuario</label>
            <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
          </div>
          <div className="form_group">
            <label htmlFor='email'>Correo electrónico</label>
            <input id='email' type="email" name='email' placeholder="email@gmail.com"  value={email}
              onChange={e => setEmail(e.target.value)} required/>
          </div>
          <div className="form_group">
            <label htmlFor='password'>Contraseña</label>
            <input id='password' type="password" name='password' placeholder="Tdfg%63S" value={password} 
              onChange={e => setPassword(e.target.value)} required/>
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
            <button type="submit">Crear Cuenta</button>
          </div>
        </form>
        <div className="form_group">
          <p className="nuevo">
            ¿Ya Eres usuario?{" "}
            <Link className="links" to='/login'>
              Inicia Sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Signup;