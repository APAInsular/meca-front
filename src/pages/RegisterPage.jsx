import React from 'react';
import logo from '../images/MECA-09.png';
import '../styles/RegisterPage.css';

const RegisterPage = () => {
    return (
        <div className='login-box'>
            <img src={logo} alt="logo" className='logo my-1'></img>
            <div className="v-line-1"></div>
            <div className="form">
                <p className='title py-1'>REGISTRATE</p> 
                <div className="input-group"> {/* Wrap the first two inputs in a container */}
                    <input type="text" className='my-3 px-3 nombre' placeholder='Nombre'></input>  
                    <input type="text" className='my-3 px-3 apelidos' placeholder='Apellidos'></input>
                </div>
                <input type="text" className='my-3 px-3 email' placeholder='Email'></input>
                <div className="input-group"> {/* Wrap the first two inputs in a container */}
                  <input type="text" className='my-3 px-3 ciudad' placeholder='Ciudad'></input>
                  <input type="text" className='my-3 px-3 pais' placeholder='País'></input>
                </div>
                <input type="text" className='my-3 px-3 email' placeholder='Nacionalidad'></input>
                <div className="input-group"> {/* Wrap the first two inputs in a container */}
                <input type="text" className='my-3 px-3 ciudad' placeholder='Contraseña'></input>
                <input type="text" className='my-3 px-3 pais' placeholder='Repetir Contraseña'></input>
                </div>
                <button type="submit" className='my-9 submit-button'>Entrar</button>
            </div>
        </div>
    );
}

export default RegisterPage;