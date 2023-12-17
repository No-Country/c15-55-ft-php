import React from 'react';
import "../recuerdosCard/RecuerdoCard.css";
import { useGlobalContext } from '../../context';
import { useNavigate } from 'react-router-dom';

import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../../config/firestore';

function recuerdoCard({ recordatorio }) {
  const navigate = useNavigate();
  const { recordatorios, setRecordatorios } = useGlobalContext();
  const { id, title, asunto, hora, date } = recordatorio;

  const handleDelete = async(id) => {
    try {
      await deleteDoc(doc(db, "reminders", id));
      console.log(`deleting id: ${id}`);
      const updatedList = recordatorios.filter(x => x.id != id);
      setRecordatorios(updatedList);
    } catch (error) {
      console.log(`Error deleting reminder: ${error}`);
    }
  }

  const toUpdateForm = (id) => {
    navigate(`/v1/reminders/${id}`);
  }

  return (
    <div className='reminderContainer'>
      <h6>id: {id}</h6>
      <h5>{title}</h5>
      <p>Asunto: {asunto}</p>
      <p>Fecha: {date}, Hora: {hora}</p>
      <button onClick={() => {toUpdateForm(id)}}>🖊️</button><button onClick={() => { handleDelete(id) }}>❌</button>
    </div>
  )
}

export default recuerdoCard;