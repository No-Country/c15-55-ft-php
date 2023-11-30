// ProfilePage.jsx

import React, { useEffect, useState } from 'react';
import { FaUser, FaEnvelope, FaCamera, FaEdit, FaLock, FaSignOutAlt, FaSave } from 'react-icons/fa';
import './ProfilePage.css';

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    username: 'u$eR',
    email: 'usuario@example.com',
    phoneNumber: '555-1234',
    // ... otros campos de perfil
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    username: userData.username,
    email: userData.email,
    phoneNumber: userData.phoneNumber,
  });

  useEffect(() => {
    // Lógica para cargar datos del perfil desde tu API
    // axios.get('/api/perfil').then(response => setUserData(response.data));
  }, []);

  const handleLogout = () => {
    // Lógica para cerrar sesión, por ejemplo, redirigiendo a la página de inicio de sesión
    // Puedes usar el enrutador (React Router) o realizar otras acciones según tus necesidades
    // Ejemplo: history.push('/login');
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Aquí puedes realizar la lógica para actualizar la información del perfil
    // Puedes hacer una llamada a la API o realizar otras acciones según tus necesidades
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
          <p>{userData.email}</p>
        </div>
        <div className="profile-buttons">
          <button><FaCamera /> Cambiar Foto</button>
          <button onClick={handleEdit}><FaEdit /> Editar Perfil</button>
          <button><FaLock /> Cambiar Contraseña</button>
          <button className='logout-btn' onClick={handleLogout}><FaSignOutAlt /> Cerrar Sesión</button>
        </div>
      </div>
      <div className="center-column">
        <h2>Bienvenido, {userData.username} a Re-Mind</h2>
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
