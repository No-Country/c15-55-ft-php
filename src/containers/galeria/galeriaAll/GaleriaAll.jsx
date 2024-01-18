import React, { useState } from 'react';
import { useGlobalContext } from '../../../context';
import '../galeriaAll/GaleriaAll.css';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../config/firestore';
import { ref, deleteObject } from "firebase/storage";
import { storage } from '../../../config/firestore';

function GaleriaAll() {
    const { photos, setPhotos, currentUser, getPhotos } = useGlobalContext();
    console.log(photos);
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

    const handleDelete = async (imageName) => {
        try {
            const folderName = `users/${currentUser.uid}/private`;
            const storageRef = ref(storage, `${folderName}/${imageName}`);
            await deleteObject(storageRef);
            console.log(`Image ${imageName} deleted from storage`);
            const updatedList = photos.filter((photo) => photo.name !== imageName);
            setPhotos(updatedList);
            setBigView(false);
            alert(`${imageName} ha sido eliminada!`);
            console.log(`Image ${imageName} deleted from storage and corresponding Firestore document deleted`);
        } catch (error) {
            console.error(`Error deleting image: ${error.message}`);
        }
    };


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
                                <p>{photo.name}</p>
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
                          <p style={{ backgroundColor: 'white', cursor: 'pointer' }} onClick={() => { handleDelete(selectedName) }}>Eliminar: 🗑️</p>
                      </div>
                  </div> 
            )
        }
    </div>
  )
}

export default GaleriaAll