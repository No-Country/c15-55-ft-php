import React, { useState } from 'react';
import { recordatoriosdata } from "../../data/recordatoriosdata";
import "../Recordatorios/Recordatorios.css";
import RecuerdoCard from '../../components/recuerdosCard/RecuerdoCard';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context';

const Recordatorios = () => {
  // const [recordatorios, setRecordatorios] = useState(reminders);
  // console.log(reminders);

  const { recordatorios, getReminders } = useGlobalContext();
  console.log(`esto viene de global:`,  recordatorios);

  const navigate = useNavigate();

  const addReminder = () => {
    navigate('/v1/add');
  }

  return (
    <div>
      <h2>Recordatorios</h2>
      <hr />
      <div className='btn-add-container'>
        <div className='btn-add-reminder' onClick={addReminder}>Agregar Nuevo</div>
      </div>
      <div>
        {
          recordatorios ? (
            recordatorios.map((recordatorio) => {
              return (
                <RecuerdoCard key={recordatorio.id} recordatorio={recordatorio} />
              )
            })
          ) : 
            <div>
              <h2>No Reminders At This Moment</h2>
            </div>
        }
      </div>
    </div>
  )
}

export default Recordatorios;