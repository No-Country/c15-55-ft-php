import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../../context';

function GaleriaFavs() {
    const { favPics, setPhotos, currentUser } = useGlobalContext();
    let [keyId, setKeyId] = useState(1);
    const [bigView, setBigView] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    console.log(`Favs: `, favPics);

    const filteredFavs = favPics.filter((pic) => pic.user_id === currentUser.uid);
    console.log(`Filtered Favs: `, filteredFavs);

    const bigPic = (url, name) => {
        setSelectedPhoto(url);
        setBigView(true);
    }

    const cancel = () => {
        setBigView(false);
        setSelectedPhoto(null);
        setSelectedName('');
    }

    return (
        <div className='photoAll-main'>
            <h2>Tus memorias Favoritas</h2>
            <hr />
            <div className='cards-container2'>
                {
                    filteredFavs.length > 0 ?
                        filteredFavs.map((photo) => {
                            return (
                                <div key={photo.id} className='photo-card' onClick={() => bigPic(photo.imageUrl)}>
                                    <img src={photo.imageUrl} alt={photo.name} />
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
                            <span className='close' onClick={cancel}>❌</span>
                            <img src={selectedPhoto} alt='Big View' />
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default GaleriaFavs