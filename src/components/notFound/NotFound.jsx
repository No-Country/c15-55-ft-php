import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../../components/notFound/NotFound.css";

function NotFound() {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

  return (
    <div className='error-container'>
        <div className='error-txt'>
            <img src='https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg' alt='404'/>
            <span>404 Not Found</span>
            <p className='p-message'>Sorry, the page you were looking for does not exist</p>
            <p className='back' onClick={goBack}>Ir a ultima pagina</p>
        </div>
    </div>
  )
}

export default NotFound