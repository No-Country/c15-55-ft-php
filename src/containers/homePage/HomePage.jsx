import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../homePage/HomePage.css';
import data from '../../data';

const HomePage = () => {
  const navigate = useNavigate();
  const [pics, setPics] = useState(data);
  const[index, setIndex] = useState(0);


  const toReminders = () => {
    navigate("/v1/reminders");
  };

  const toGallery = () => {
    navigate("/v1/gallery");
  };

  useEffect(() => {
    const lastIndex = pics.length -1;
    if(index < 0){
      setIndex(lastIndex);
    }
    if(index > lastIndex){
      setIndex(0);
    }
  }, [index, pics]);
  
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);  


  return (
    <div className='homePageContainer'>
      <div className='title-car-container'>
        <div className='hPtitle'>
          <h2>Hola <strong className='username'>User190212</strong></h2>
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
                    <h3>{name}</h3>
                  </article>
                )
              })
            }
            {/* <button className='prev' onClick={() => setIndex(index - 1)}>⬅️</button> */}
            {/* <button className='next' onClick={() => setIndex(index + 1)}>➡️</button> */}
          </div>
      </div>
      <h2 className='tools-h2'>Mis Herramientas</h2>
      <div className='container-secciones'>
        <div className='calendario-btn' onClick={toReminders}>
          {/* <img className='icon-homePage' src='../src/assets/calendarBW.jpg' alt='calendario' /> */}
          <p className='p-icon'>Recordatorios</p>
        </div>
        <div className='audio-btn' onClick={toGallery}>
          {/* <img className='icon-homePage' src="../src/assets/galeriaIcon.jpg" alt='audio player' /> */}
          <p className='p-icon'>Galeria</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage;