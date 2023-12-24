import React, { useState } from 'react';
import './Login.css';
import { useNavigate, Link } from 'react-router-dom';
import { useGlobalContext } from '../../context';

import { app } from '../../config/firestore';

import { getAuth, signInWithEmailAndPassword,setPersistence, browserSessionPersistence } from "firebase/auth";

const Login = () => {
  const { setCurrentUser, currentUser } = useGlobalContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const auth = getAuth(app);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await setPersistence(auth, browserSessionPersistence);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setCurrentUser({
        uid: user.uid,
        email: user.email,
      });
      navigate(`/v1/homePage`);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Login failed:', errorMessage, errorCode);
    }
  }

  return (
    <div className="login">
      <div className="login_container">
        <div className="column_left">
        </div>
        <div className="column_right">
          <div className="form_container">
            <h1 className="titulo">Bienvenido de nuevo</h1>
            <p className="parrafo">Tus recuerdos te esperan...</p>
            <form onSubmit={handleLogin}>      
              <label htmlFor='email'>Correo electrónico</label>
              <input id='email' type="email" name='email' placeholder="user@email.com" value={email} 
                onChange={e => setEmail(e.target.value)}/>
              <label htmlFor='password'>Contraseña</label>
              <input id='password' type="password" name='password' placeholder="Contraseña" value={password} 
                onChange={e => setPassword(e.target.value)}/>
              <div className='section-checkbox'>
                <div>
                  <label for='recuerdame'>Recuérdame</label>
                  <input type="checkbox" id='remember' name='remember' value='Recuerdame' className='input-checkbox' />
                </div>
                <div>
                  <p>Olvide mi contraseña</p>
                </div>
              </div>
              <div className='submit-btn-container'>
                <button className="sbt-btn" type="submit">Iniciar sesión</button>
              </div>
            </form>
            <div className='link-bottom'>
              <p className="nuevo">
                ¿Eres nuevo?{' '}
                <Link className="links" to='/signup'>
                  Crea una cuenta
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
