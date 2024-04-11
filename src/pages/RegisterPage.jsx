
import React, { useState } from 'react';
import '../styles/RegisterPage.css';
import meca from '../images/MECA-09.png';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  return (
    <div className='register-page'>
      <div class="logo">
          <img className='meca' src={meca} alt=""/>
      </div>

      <div class="register_form">
          <h5>REGISTRATE</h5>
          <input type="text" placeholder='Nombre' class="nombre"></input>
          <input type="text" placeholder='Apelidos' class="apelidos"></input><br></br>
          <input type="text" placeholder='Email' class="email"></input><br></br>
          <input type="text" placeholder='Cludad' class="nombre"></input>
          <input type="text" placeholder='Pais' class="apelidos"></input><br></br>
          <input type="text" placeholder='Nacionalidad' class="email"></input><br></br>
          <input type="text" placeholder='Contraseña' class="nombre"></input>
          <input type="text" placeholder='Repetir Contraseña' class="apelidos"></input><br></br>
          <button>Entar</button><br></br>
          
      </div>
    </div>
  );
};

export default RegisterPage;
