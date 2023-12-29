import React, { useState, useEffect } from 'react';
import '../galeria/Galeria.css';
import { storage } from '../../config/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useGlobalContext } from '../../context';
import { db } from '../../config/firestore';
import { push, set } from 'firebase/database';
import { getStorage, listAll } from 'firebase/storage';
import { MdAddToPhotos } from "react-icons/md";
import { TbPhotoSquareRounded } from "react-icons/tb";
import { CiStar } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';


const Galeria = () => {
  const { currentUser, photos, setPhotos, setCurrentUser } = useGlobalContext();
  console.log(currentUser.uid);
  console.log(photos);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

  const [percentage, setPercentage] = useState();

  const toAll = () => {
    navigate('/v1/galleryAll');
  }

  const toFavs = () => {
    navigate('/v1/galleryFavs');
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!photo){
      console.log(`Select a photo before submiting.`);
      return;
    }
    try {
      const folderName = `users/${currentUser.uid}/private`;
      const fileName = name;
      console.log('Folder Name:', folderName);
      console.log('File Name:', fileName);
      const photoRef = ref(storage, `${folderName}/${fileName}`);
      console.log('Photo Reference:', photoRef);
      const uploadTask = uploadBytesResumable(photoRef, photo);

      uploadTask.on(`state_changed`, (snapshot) => {
        const progress = (snapshot.bytesTransferred/snapshot)*100;
        setPercentage(Math.round(progress));
      },
        (error) => {
          console.log(`Error uploading image: ${error.message}`);
        },
        async () => {
          const downloadURL = await getDownloadURL(photoRef);
          const databaseRef = ref(db, 'memories');
          const newMemoryRef = push(databaseRef);
          set(newMemoryRef, {
            user_id: currentUser.uid,
            name,
            imageUrl: downloadURL,
            id: newMemoryRef.id,
          });
          setImageUrl(downloadURL);
        })
        setName('');
        setPhoto(null);
      console.log(`Data successfully submitted to Firebase.`);
      alert('Nueva Memoria added');
    } catch (error) {
      console.error(`Error submitting data to Firebase: ${error.message}`);
    }
  };

  const addForm = () => {
    setShowForm(!showForm);
    // console.log(showForm);
  }

  const cancel = () => {
    setShowForm(false);
  }

  const getPhotos = async () => {
    try {
      if (currentUser?.uid) {
        const folderName = `users/${currentUser.uid}/private`;
        const storageRef = ref(storage, folderName);
        const listResult = await listAll(storageRef);

        const photoItems = await Promise.all(
          listResult.items.map(async (item) => {
            const downloadURL = await getDownloadURL(item);
            return {
              name: item.name,
              url: downloadURL,
              // console.log(item.name);
              // console.log('Image URL:', downloadURL);
            };
          })
        )
        setPhotos(photoItems);
      }
    } catch (error) {
      console.error('Error listing images:', error.message);
    }
  }

  useEffect(() => {
    getPhotos();
  }, [setCurrentUser]);

  return (
    <div className='galeria-container'>
      <div className='memorias-container'>
        <h2>Memorias</h2>
        <div className='add-photo' onClick={() => {addForm()}}>Add a memory</div>
      </div>
      <div>
      {showForm && ( 
          <div className='popup-container'>
            <h4>Nueva Memoria</h4>
            <form className='photo-form' onSubmit={handleSubmit}>
              <label>Nombre:</label>
              <input type='text' value={name} onChange={handleNameChange} maxLength="15"></input>
              <br />
              <label>Photo:</label>
              <input type='file' accept='image/*' onChange={handlePhotoChange} ></input>
              <br />
              <div className='icon-add-container'>
                <MdAddToPhotos className='icon-add-photo'/>
              </div>
              <div className='btn-section'>
                <button className='submitBtn' type='submit'>Submit</button>
                <button className='cancelBtn' onClick={cancel}>Cancelar</button>
              </div>
            </form>
          </div>
      )}
      </div>
      <div className='photos-container'>
        <div className='photo-div' onClick={toAll}>
            <TbPhotoSquareRounded className='icon-div-gallery'/>
          <p>Todas</p>
        </div>
        <div className='photo-div' onClick={toFavs}>
          <CiStar className='icon-div-gallery' />
          <p>Favoritas</p>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Galeria;