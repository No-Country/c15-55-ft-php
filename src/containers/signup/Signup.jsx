import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import '../login/Login.css';
import '../signup/Signup.css';
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
        <div className="column_left">
        </div>
        <div className="column_right">
          <div className='title-div'>
            <h1>Re-Mind</h1>
          </div>
          <div className="form_container">
            <h2>Crea una cuenta</h2>
            <p className='parrafo'>Proporciona tus datos</p>
            <form onSubmit={handleCreate}>
              <label>Nombre de usuario
              <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
              </label>
              <label htmlFor='email'>Correo electrónico
              <input id='email' type="email" name='email' placeholder="email@gmail.com"  value={email}
                onChange={e => setEmail(e.target.value)} required/>
              </label>
              <label htmlFor='password'>Contraseña
              <input id='password' type="password" name='password' placeholder="Tdfg%63S" value={password} 
                onChange={e => setPassword(e.target.value)} required/>
              </label>
              <div className='section-checkbox'>
                {/* <div className='section-checkbox-label-box'>
                  <label htmlFor='terminos'>Acepto los terminos y condiciones
                  <input type='checkbox' id='terminos' name='terminos' value='terminos'></input>
                  </label>
                </div> */}
              </div>
              <div className='submit-btn-container'>
                <button className='sbt-btn' type="submit">Crear Cuenta</button>
              </div>
            </form>
            <div className="link-bottom">
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