import React from 'react';
import "../recuerdosCard/RecuerdoCard.css";
import { useGlobalContext } from '../../context';
import { useNavigate } from 'react-router-dom';
import { GrUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";



import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../../config/firestore';

function recuerdoCard({ recordatorio }) {
  const navigate = useNavigate();
  const { recordatorios, setRecordatorios, currentUser } = useGlobalContext();
  const { id, title, asunto, hora, date } = recordatorio;

  const handleDelete = async(id) => {
    try {
      await deleteDoc(doc(db, "reminders", id));
      console.log(`deleting id: ${id}`);
      // const updatedList = recordatorios.filter(x => x.id != id);
      const updatedList = recordatorios.filter((x) => (x.id !== id && x.user_Id === currentUser.uid));
      setRecordatorios(updatedList);
    } catch (error) {
      console.log(`Error deleting reminder: ${error}`);
    }
  }

  const toUpdateForm = (id) => {
    navigate(`/v1/reminders/${id}`);
  }

  return (
    <div className='reminderCardSingle'>
      <div className='title-date-container'>
        <div className='title-card'>
          <p>{title}</p>
        </div>
        <div className='dateTimeCard'> 
          <p>{date}</p>
          <p>{hora} hrs</p>
        </div>
      </div>
      <div className='aboutCard'>
        <p>{asunto}</p>
      </div>
      <div className='btns-Card'>
        {/* <button onClick={() => {toUpdateForm(id)}}>🖊️</button> */}
        <button className='update-btn' onClick={() => { toUpdateForm(id) }}><GrUpdate className='img-icon'/></button>
        <button className='dlt-btn' onClick={() => { handleDelete(id) }}><MdDeleteForever className='img-icon' /></button>
      </div>
    </div>
  )
}

export default recuerdoCard;