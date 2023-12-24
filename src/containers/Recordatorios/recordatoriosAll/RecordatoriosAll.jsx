import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../../context';
import RecuerdoCard from '../../../components/recuerdosCard/RecuerdoCard';
import '../recordatoriosAll/RecordatoriosAll.css';

function RecordatoriosAll() {
    const { currentUser, recordatorios, setRecordatorios } = useGlobalContext();
    const [myRecordatorios, SetMyRecordatorios] = useState([]);

    useEffect(() => {
        const filteredRecords = recordatorios.filter((x) => x.user_Id === currentUser.uid);
        SetMyRecordatorios(filteredRecords);
    }, [recordatorios, currentUser, setRecordatorios]);
    console.log(myRecordatorios);

  return (
    <div className='recordatoriosAll-container'>
        <h2>RecordatoriosAll</h2>
        <hr />
        <div className='cards-container'>
            {
                myRecordatorios.length > 0 ?
                myRecordatorios.map((recordatorio) => {
                    return (
                        <RecuerdoCard key={recordatorio.id} recordatorio={recordatorio}/>
                    )
                }) : (
                <h2>Not Available</h2>
                )
            }
        </div>
    </div>
  )
}

export default RecordatoriosAll