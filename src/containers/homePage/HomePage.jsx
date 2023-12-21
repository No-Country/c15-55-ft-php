import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../homePage/HomePage.css';
import data from '../../data';
import { useGlobalContext } from '../../context';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../config/firestore';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

const HomePage = () => {
  const { currentUser, users, setUsers, userInfo, setUserInfo, setCurrentUser, getSingleUser } = useGlobalContext();
  const navigate = useNavigate();
  console.log(users);
  if(userInfo.length > 0) {
    console.log(`userInfooooooooooooooooooooo:`, userInfo[0].username);
  }
  
  
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
    });
    getSingleUser();
    return () => unsubscribe();
  }, []);
  // }, [setCurrentUser, currentUser]);

  // useEffect(() => {
  //   const info = users.filter((user) => user.email === currentUser.email);
  //   setUserInfo(info);
  // }, [setUsers]);
  // console.log(userInfo.username);


  const [pics, setPics] = useState(data);
  const[index, setIndex] = useState(0);

  const toReminders = () => {
    navigate("/v1/reminders");
  };

  const toGallery = () => {
    navigate("/v1/gallery");
  };

  // useEffect(() => {
  //   const lastIndex = pics.length -1;
  //   if(index < 0){
  //     setIndex(lastIndex);
  //   }
  //   if(index > lastIndex){
  //     setIndex(0);
  //   }
  // }, [index, pics]);
  
  // useEffect(() => {
  //   let slider = setInterval(() => {
  //     setIndex(index + 1);
  //   }, 5000);
  //   return () => {
  //     clearInterval(slider);
  //   };
  // }, [index]);  

  if(!currentUser){
    return;
  }

  return (
    <div className='homePageContainer'>
      <div className='title-car-container'>
        <div className='section-text'>
          <div className='hPtitle'>
            <h2>Bienvenido <strong className='username'>{currentUser.email}</strong></h2>
            <h4 className='subtitle'>Este espacio esta disenado para ayudarte a recordar las cosas importantes de tu vida, incluso si tienes alzaheimer.</h4>
            <p className='subtitle'>Con Re-Mind podras:</p>
            <ul>
              <li>Establecer recordatorios para eventos importantes, como citas medicas o reuniones familiares.</li>
              <li>Almacenar recuerdos personales, como fotos y videos.</li>
            </ul>
            <div className='container-btn-empezar'>
              <div className='btn-empezar'>
                <p>Empezar</p>
              </div>
            </div>
          </div>
        </div>
          <div className='section-photos'>
            {
              data.map((pic, picIndex) => {
                const { id, image, title, name } = pic;
                let position = 'nextSlide';
                if(picIndex === index){
                  position = 'activeSlide';
                }
                if(picIndex === index -1 || (index === 0 && picIndex === pics.length -1)){
                  position = 'lastSlide';
                }
                return (
                  <article key={id} className={position}>
                    <img src={image} alt={title} className='img-caroussel'/>
                    <h2>{name}</h2>
                  </article>
                )
              })
            }
            {/* <button className='prev' onClick={() => setIndex(index - 1)}>⬅️</button> */}
            {/* <button className='next' onClick={() => setIndex(index + 1)}>➡️</button> */}
          </div>
      </div>
      {/* <div className='tools'>
        <h2 className='tools-h2'>Mis Herramientas</h2>
        <div className='container-secciones'>
          <div className='calendario-btn' onClick={toReminders}>
            <p className='p-icon'>Recordatorios</p>
          </div>
          <div className='audio-btn' onClick={toGallery}>
            <p className='p-icon'>Galeria</p>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default HomePage;