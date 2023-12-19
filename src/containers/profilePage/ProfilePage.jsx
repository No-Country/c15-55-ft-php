import React, { useEffect, useState } from 'react';
import { FaUser, FaEnvelope, FaCamera, FaEdit, FaLock, FaSignOutAlt, FaSave } from 'react-icons/fa';
import './ProfilePage.css';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import { getAuth, signOut } from "firebase/auth";

const ProfilePage = () => {
  const { currentUser } = useGlobalContext();
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

  const handleSave = () => {
    setUserData(editedData);
    setIsEditing(false);
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
    <div className="profile-page">
      <div className="left-column">
        <div className="profile-info">
          <div className="profile-picture">
            <FaUser size={64} />
          </div>
          <h2>{userData.username}</h2>
          <p>{currentUser.email}</p>
        </div>
        <div className="profile-buttons">
          <button><FaCamera /> Cambiar Foto</button>
          <button onClick={handleEdit}><FaEdit /> Editar Perfil</button>
          <button><FaLock /> Cambiar Contraseña</button>
          <button className='logout-btn' onClick={handleLogout}><FaSignOutAlt /> Cerrar Sesión</button>
        </div>
      </div>
      <div className="center-column">
        <h2>Bienvenido a Re-Mind</h2>
        <p>Aquí podrás ver información o estadísticas relevantes acerca del uso de tus recordatorios<br></br> y cambiar la información del perfil utilizando la sección de la izquierda.</p>
        <div className="navigation-buttons">
          <button onClick={() => console.log("Ir a Recordatorios")}>
            Ir a Recordatorios
          </button>
          <button onClick={() => console.log("Añadir Recuerdos")}>
            Añadir Recuerdos
          </button>
        </div>
        {isEditing && (
          <div className="edit-profile-card">
            <h2>Editar Información</h2>
            <div className="input-group">
              <label>Email:</label>
              <input type="email" name="email" value={editedData.email} onChange={handleInputChange} />
            </div>
            <div className="input-group">
              <label>Nueva Contraseña:</label>
              <input type="password" name="password" value={editedData.password} onChange={handleInputChange} />
            </div>
            <div className="button-group">
              <button onClick={handleSave}><FaSave /> Guardar</button>
              <button onClick={handleCancel}>Cancelar</button>
            </div>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default ProfilePage;
