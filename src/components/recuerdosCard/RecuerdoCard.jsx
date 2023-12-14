import React from 'react';
import "../recuerdosCard/RecuerdoCard.css";

import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../../config/firestore';

function recuerdoCard({ recordatorio, setReminders, reminders, getReminders }) {
  const { id, title, asunto, hora, date } = recordatorio;

  const handleDelete = async(id) => {
    try {
      await deleteDoc(doc(db, "reminders", id));
      console.log(`deleting id: ${id}`);
      const updatedList = reminders.filter(x => x.id != id);
      setReminders(updatedList);
      // await getReminders();
    } catch (error) {
      console.log(`Error deleting reminder: ${error}`);
    }
  }

  return (
    <div className='reminderContainer'>
      <h6>id: {id}</h6>
      <h5>{title}</h5>
      <p>Asunto: {asunto}</p>
      <p>Fecha: {date}, Hora: {hora}</p>
      <button>🖊️</button><button onClick={() => { handleDelete(id) }}>❌</button>
    </div>
  )
}

export default recuerdoCard;