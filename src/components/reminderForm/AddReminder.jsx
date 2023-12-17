import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../reminderForm/AddReminder.css";
import { useGlobalContext } from '../../context';

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firestore";

function AddReminder() {
    const { getReminders } = useGlobalContext();

    const [title, setTitle] = useState('');
    const [asunto, setAsunto] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [userID, setUserId] = useState(1);
    const navigate = useNavigate();

    const newReminder = {
        title: title,
        asunto: asunto,
        date: fecha,
        hora: hora,
        user_Id: userID
    };

    const handleAdd = async(e) => {
        e.preventDefault();
        try {
            // Add a new document with a generated id.
                await addDoc(collection(db, "reminders"), {
                    ...newReminder
                });
                alert("Recordatorio guardado con exito!")
                await getReminders();
            } catch (error) {
                console.log("Error: ", error);
            }
        navigate('/v1/homePage');
    };

    const getFechaHoy = () => {
        const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
        return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    };

    const getHoraNow = () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        return `${hours}:${minutes}`;
    };

  return (
    <div className='form-Container'>
        <div>   
            <h3>Add Reminder</h3>
            <form onSubmit={handleAdd}>
                <label>
                    <input type='text' name='titulo' value={title} required placeholder='Nombre del recordatorio' aria-label='Nombre del recordatorio'
                        onChange={e => setTitle(e.target.value)} />
                </label><br />
                <label>
                    <input type='text' name='asunto' value={asunto} required placeholder='Asunto' aria-label='Asunto'
                        onChange={e => setAsunto(e.target.value)} />
                </label><br />
                <label>
                    <input type='date' name='date' value={fecha} min={getFechaHoy()} required aria-label='Date Picker'
                        onChange={e => setFecha(e.target.value)} />
                </label><br />
                <label>
                    <input type='time' name='time' value={hora}  required aria-label='Time Picker' onChange={e => setHora(e.target.value)}/>
                </label><br />
                <input type='submit' value='Registrar' aria-label='Add Appointment' />
            </form>
        </div>
    </div>
  )
}

export default AddReminder