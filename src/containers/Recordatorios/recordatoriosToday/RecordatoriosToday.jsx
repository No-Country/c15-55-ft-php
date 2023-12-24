import React, { useState, useEffect} from 'react';
import { useGlobalContext } from '../../../context';
import RecuerdoCard from '../../../components/recuerdosCard/RecuerdoCard';
import '../recordatoriosToday/RecordatoriosToday.css';

function RecordatoriosToday() {
    const { currentUser, recordatorios, setRecordatorios } = useGlobalContext();
    const [todayRecordatorios, setTodayRecordatorios] = useState([]);

    const getFechaHoy = () => {
        const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
        return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    };

    useEffect(() => {
        try {
            let todayDate = getFechaHoy();
            const filteredRecords = recordatorios.filter((x) => (x.user_Id === currentUser.uid && x.date === todayDate));
            setTodayRecordatorios(filteredRecords);
        } catch (error) {
            console.log(error);
        }
    }, [recordatorios, currentUser, setRecordatorios]);
    console.log(todayRecordatorios);

  return (
    <div className='recordatoriosAll-container'>
        <h2>RecordatoriosToday</h2>
        <hr />
        <div className='cards-container'>
            {
                todayRecordatorios.length > 0 ? 
                    todayRecordatorios.map((recordatorio) => {
                        return (
                            <RecuerdoCard key={recordatorio.id} recordatorio={recordatorio} />
                        )
                    }) : (
                        <div className='not-available-container'>
                            <h2>No Recordatorios disponibles para este dia!</h2>
                        </div>
                    )
            }
        </div>
    </div>
  )
}

export default RecordatoriosToday