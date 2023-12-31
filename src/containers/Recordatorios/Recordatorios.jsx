import React, { useContext, useEffect, useState } from 'react';
import "../Recordatorios/Recordatorios.css";
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import { IoCalendarNumberOutline } from "react-icons/io5";
import { BsFillInboxFill } from "react-icons/bs";

const Recordatorios = () => {
  const { recordatorios, getReminders, currentUser } = useGlobalContext();
  console.log(`esto viene de global:`,  recordatorios);
  const [myRecordatorios, SetMyRecordatorios] = useState();
  const [today, setToday] = useState();

  const [allTotal, setAllTotal] = useState([]);
  useEffect(() => {
    const filteredRecords = recordatorios.filter((x) => x.user_Id === currentUser.uid);
    SetMyRecordatorios(filteredRecords);
    if(filteredRecords.length > 0){
      setAllTotal(filteredRecords.length);
    } else {
      setAllTotal(0);
    }
  }, [recordatorios, currentUser]);
  console.log(myRecordatorios);

  const getFechaHoy = () => {
    const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const [totalToday, setTotalToday] = useState([]);
  useEffect(() => {
    try {
      let todayDate = getFechaHoy();
      const filterToday = recordatorios.filter((y) => (y.user_Id === currentUser.uid && y.date === todayDate));
      setToday(filterToday);
      if(filterToday.length > 0){
        setTotalToday(filterToday.length);
      } else {
        setTotalToday(0);
      }
    } catch (error) {
      console.log(error);
    }
  }, [recordatorios, currentUser]);


  const navigate = useNavigate();

  const addReminder = () => {
    navigate('/v1/add');
  }

  const toToday = () => {
    navigate('/v1/remindersToday');
  }

  const toAll = () => {
    navigate('/v1/remindersAll');
  }

  return (
    <div className='main-recordatorios-div'>
      <h2>Recordatorios</h2>
      <hr />
      <div className='btn-add-container'>
        <div className='btn-add-reminder' onClick={addReminder}>Agregar Nuevo</div>
      </div>
      <div className='section-containers-btns'>
        <div className='div-reminder'>
          <div className='div-icon' onClick={toToday}>
            <IoCalendarNumberOutline className='icon icon-today' />
            <p>Today: {totalToday}</p>
          </div>
          <div className='div-sb'>
            <p>TODAY</p>
          </div>
        </div >
        <div className='div-reminder'>
          <div className='div-icon' onClick={toAll}>
            <BsFillInboxFill className='icon icon-all'/>
            <p>All: {allTotal}</p>
          </div>
          <div className='div-sb'>
            <p>Scheduled</p>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Recordatorios;