import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { db } from '../../config/firestore';
import { doc, getDoc, setDoc } from "firebase/firestore";

function UpdateRecordatorioForm() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [singleRecordatorio, setSingleRecordatorio] = useState();
    const [title, setTitle] = useState('');
    const [asunto, setAsunto] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');

    const getFechaHoy = () => {
        const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
        return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    };

    const getSingleReminder = async () => {
        try {
            const docRef = doc(db, "reminders", id);
            const docSnap = await getDoc(docRef);
            if(docSnap.exists()) {
                setSingleRecordatorio(docSnap.data());
                setTitle(docSnap.data().title);
                setAsunto(docSnap.data().asunto);
                setFecha(docSnap.data().fecha);
                setHora(docSnap.data().hora);
            } else {
                setSingleRecordatorio(null);
            }
        } catch (error) {
            console.log(error);
        }
        console.log(singleRecordatorio);
    };

    const updateRecordatorio = async (e) => {
        e.preventDefault();
        await setDoc(doc(db, "reminders", id), {
            title: title,
            asunto: asunto,
            date: fecha,
            hora: hora,
        })
        navigate('/v1/reminders')
    };

    useEffect(() => {
        const fetchSingle = async () => {
            await getSingleReminder();
            console.log(singleRecordatorio);
        };
        fetchSingle();
    }, [id])

    if(!singleRecordatorio) {
        return (
            <h2>No recordatorio disponible!</h2>
        )
    }

  return (
    <div>
        <div>
            <h2>Update Form</h2>
        </div>
        <div>
            <form onSubmit={updateRecordatorio}>
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
                    <input type='time' name='time' value={hora} required aria-label='Time Picker' onChange={e => setHora(e.target.value)} />
                </label><br />
                <input type='submit' value='Actualizar' aria-label='Add Appointment' />
            </form>
        </div>
    </div>
  )
}

export default UpdateRecordatorioForm;