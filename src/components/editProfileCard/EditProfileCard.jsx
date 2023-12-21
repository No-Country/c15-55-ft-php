import React from 'react';
import { FaSave } from 'react-icons/fa';
import "../../components/editProfileCard/EditProfileCard.css";

function EditProfileCard({ setIsEditing }) {


    const handleCancel = () => {
        setIsEditing(false);
        setEditedData({
            username: userData.username,
            email: userData.email,
            phoneNumber: userData.phoneNumber,
        });
    };

  return (
    <div>
        <form className="edit-profile-card">
            <h2>Editar Información</h2>
            <div className="input-group">
                <label>Nombre de usuario:</label>
                <input type="email" name="email"  />
            </div>
            <div className="input-group">
                <label>Foto de perfil:</label>
                <input type="password" name="password" />
            </div>
            <div className="button-group">
                <button className='btn-update'><FaSave /> Guardar</button>
                <button className='btn-dlt' onClick={handleCancel}>Cancelar</button>
            </div>           
        </form>
    </div>
  )
}

export default EditProfileCard