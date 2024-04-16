
import React, { useState } from 'react';
import '../styles/RegisterPage.css';
import meca from '../images/meca-mobile.svg';
import google from '../images/google.svg';
import face from '../images/facebook.svg';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  return (
    <div className='register-page'>
      <div class="logoa">
          <img className='mecaa' src={meca} alt=""/>
      </div>

      <div class="register_form">
          <h5>REGISTRATE</h5>
          <input type="text" placeholder='Nombre' class="nombre1"></input>
          <input type="text" placeholder='Apelidos' class="apelidos1"></input><br></br>
          <input type="text" placeholder='Email' class="email"></input><br></br>
          <input type="text" placeholder='Cludad' class="apelidos2"></input>
          <input type="text" placeholder='Pais' class="nombre2"></input><br></br>
          <input type="text" placeholder='Nacionalidad' class="email"></input><br></br>
          <input type="text" placeholder='Contraseña' class="apelidos3"></input>
          <input type="text" placeholder='Repetir Contraseña' class="nombre3"></input><br></br>
          <button class="entar">Entar</button><br></br>
          <button className='googleb'><img className='google' src={google} alt=""/></button>
          <button className="facebookb"><img className='facebook' src={face} alt=""/></button>
          <br></br><br></br><br></br><br></br>
          
      </div>
    </div>
  );
};

export default RegisterPage;
