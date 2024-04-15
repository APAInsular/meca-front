import React from 'react';
import logo from '../images/MECA-09.png'
import "../styles/Login.css";
const LoginPage = () => {
    return (
        <div className='login-box'>
            <img src={logo} alt="logo" className='logo my-1'></img>
            <div className="v-line-1"></div>
            <div className="form">
                <p className='title py-1'>INICIA SESIÓN</p> 
                <input type="text" className='my-2 input-text px-3' placeholder='Email'></input>  
                <input type="text" className='my-2 input-text px-3' placeholder='Contraseña'></input>
                <button type="submit" className='my-2 submit-button'>Entrar</button>
                <div className='social-login'>
                    <div class="google-btn m-1">no</div>
                    <div class="facebook-btn m-1">icon</div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;