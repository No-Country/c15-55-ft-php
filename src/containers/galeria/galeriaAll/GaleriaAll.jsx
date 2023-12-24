import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../../../context';
import '../galeriaAll/GaleriaAll.css';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../config/firestore';

function GaleriaAll() {
    const { photos, setPhotos, currentUser, getPhotos } = useGlobalContext();
    let [keyId, setKeyId] = useState(1);
    const [bigView, setBigView] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [selectedName, setSelectedName] = useState('');

    const bigPic = (url,name) => {
        setSelectedPhoto(url);
        setSelectedName(name);
        setBigView(true);
    }

    const cancel = () => {
        setBigView(false);
        setSelectedPhoto(null);
        setSelectedName('');
    }

    const createFavorite = async(name, url, uid) => {
        try {
            await addDoc(collection(db, "memories"), {
                name: name,
                imageUrl: url,
                user_id: uid,
            });
            getPhotos();
        } catch (error) {
            console.log(`Error al adding favorites:`, error);
        }
        alert('Added to favorites list');
    }


  return (
    <div className='photoAll-main'>
        <h2>Todas tus fotos en un sitio</h2>
        <hr />
        <div className='cards-container2'>
            {
                photos.length > 0 ?
                    photos.map((photo) => {
                        return (
                            <div key={photo.name} className='photo-card' onClick={() => bigPic(photo.url, photo.name)}>
                                <img src={photo.url} alt={photo.name} />
                            </div>
                        )
                    }) : (
                        <div>No fotos disponibles</div>
                    )
            }
        </div>
        {
            bigView && (
                  <div className='popup'>
                      <div className='popup-content'>
                          <span className='favorite' onClick={() => createFavorite(selectedName, selectedPhoto, currentUser.uid)}>⭐</span>
                          <span className='close' onClick={cancel}>❌</span>
                          <img src={selectedPhoto} alt='Big View' />
                      </div>
                  </div> 
            )
        }
    </div>
  )
}

export default GaleriaAll