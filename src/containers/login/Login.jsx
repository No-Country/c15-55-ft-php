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

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   setPersistence(auth, browserSessionPersistence)
  //   .then(() => {
  //     return signInWithEmailAndPassword(auth, email, password);
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     console.log(errorMessage, errorCode);
  //   })
  //   const userCredential = signInWithEmailAndPassword(auth, email, password);
  //   const user = userCredential.user;
  //   setCurrentUser({
  //     uid: user.uid,
  //     email: user.email,
  //   });
  //   navigate('/v1/homePage');
  // }

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
      // console.log(`Login Success!, ${user.email}`);
      navigate(`/v1/homePage`);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Login failed:', errorMessage, errorCode);
    }
  }

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   setPersistence(auth, browserSessionPersistence);
  //   try {
  //     const userCredential = await signInWithEmailAndPassword(auth, email, password);
  //     let user = userCredential.user;
  //     setCurrentUser({
  //       uid: user.uid,
  //       email: user.email,
  //       username: user.username,
  //     });
  //     console.log(`Login Success!, ${currentUser.uid} `);
  //     navigate('/v1/homePage');
  //   } catch (error) {
  //     console.log(error); 
  //   }
  // };

  return (
    <div className="login">
      <div className="login_container">
        <div className="column_left" />
        <div className="column_right">
          <div className="form_container">
            <h1 className="titulo">Bienvenido de nuevo</h1>
            <p className="parrafo">Tus recuerdos esperan</p>
            <form onSubmit={handleLogin}>
              <div className="form_group">
                <label htmlFor='email'>Correo electrónico</label>
                <input id='email' type="email" name='email' placeholder="user@email.com" value={email} 
                  onChange={e => setEmail(e.target.value)}/>
              </div>
              <div className="form_group">
                <label htmlFor='password'>Contraseña</label>
                <input id='password' type="password" name='password' placeholder="Contraseña" value={password} 
                  onChange={e => setPassword(e.target.value)}/>
              </div>
              <div className="form_group_2col">
                <div className="form_group_checkbox">
                  <input type="checkbox" />
                  <label className="texto_checkbox">Recuérdame</label>
                </div>
                <div>
                  <Link className="links" to='#'>
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
              </div>
              <div className="form_group">
                <button className="boton_enviar" type="submit">Iniciar sesión</button>
              </div>
            </form>
            <div className="form_group">
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
