import "../footer/Footer.css";
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
      <div className='logos-div-container'>
        <Link to='https://github.com/No-Country/c15-55-ft-php' target='_blank'>
          <FaGithubAlt className='github'/>
        </Link>
        <FaLinkedin />
        <FaGooglePlusG />
      </div>
      <div className='links-bottom'>
        <div className='links-div'>
          <p className='rights'>Todos los derechos reservados.</p><br />
        </div>
        <div className='links-div'>
          <p className='copyright'>© 2023 c15-55-ft-React</p>
        </div>
      </div>
    </div>
  )
}

export default Footer