import React, { useState } from 'react';
import { recordatoriosdata } from "../../data/recordatoriosdata";
import "../Recordatorios/Recordatorios.css";
import RecuerdoCard from '../../components/recuerdosCard/RecuerdoCard';
import { useNavigate } from 'react-router-dom';

const Recordatorios = ({ reminders, setReminders, getReminders } ) => {
  // const [recordatorios, setRecordatorios] = useState(reminders);
  console.log(reminders);

  const navigate = useNavigate();

  const addReminder = () => {
    navigate('/add');
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
          reminders ? (
            reminders.map((recordatorio) => {
              return (
                <RecuerdoCard key={recordatorio.id} recordatorio={recordatorio} setReminders={setReminders} reminders={reminders} getReminders={getReminders} />
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