import React, { useEffect, useState } from 'react';
import { FaUser, FaEnvelope, FaCamera, FaEdit, FaLock, FaSignOutAlt, FaSave } from 'react-icons/fa';
import './ProfilePage.css';
import EditProfileCard from '../../components/editProfileCard/EditProfileCard';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import { getAuth, signOut } from "firebase/auth";

const ProfilePage = () => {
  const { currentUser, userInfo } = useGlobalContext();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    username: 'u$eR',
    email: 'usuario@example.com',
    phoneNumber: '555-1234',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    username: userData.username,
    email: userData.email,
    phoneNumber: userData.phoneNumber,
  });

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log('logout successful');
      navigate('/login');
    }).catch((error) => {
      console.log(error);
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedData({
      username: userData.username,
      email: userData.email,
      phoneNumber: userData.phoneNumber,
    });
  };

   const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className='outer-space'>
      <div className="profile-page">
          <div className="left-column">
            <div className="profile-info">
              <div className="profile-picture">
                <FaUser size={64} />
              </div>
              <div className='profile-info-name-email'>
                <p>{userData.username}</p>
                <p>{currentUser.email}</p>
              </div>
            </div>
            <div className="profile-buttons">
              <div className='btn-single'>
                <p>Cambiar Foto</p> <p><FaCamera /></p>
              </div>
              <div className='btn-single' onClick={handleEdit}>
                <p>Editar Perfil</p>
                <p><FaEdit /></p>
              </div>
              <div className='btn-single'>
                <p>Cambiar Contraseña</p>
                <p><FaLock /></p>
              </div>
              <div className='btn-single logout-btn' onClick={handleLogout}>
                <p>Cerrar Sesión</p>
                <p><FaSignOutAlt /></p>
              </div>
            </div>
          </div>
          <div className="center-column">
            <div className='center-column-title'>
              <h2>Bienvenido a Re-Mind</h2>
              <hr />
            </div>
            <div className='center-column-about'>
              <p>Aquí podrás ver información o estadísticas relevantes acerca del uso de tus recordatorios<br></br> y cambiar la información del perfil utilizando la sección de la izquierda.</p>
            </div>
            {isEditing && (
              <EditProfileCard setIsEditing={setIsEditing }/>
            )}
          </div>
        </div>
    </div>
  );
};

export default ProfilePage;
