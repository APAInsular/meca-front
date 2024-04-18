import '../styles/Login.css';
import React from 'react';
import logo from '../images/MECA-09.png';
import gugyl from '../images/google.svg';
import fejsbuk from '../images/facebook.svg';
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
                    <button className='google'><img src={gugyl} alt="gugyl" className='gogl'></img></button>
                    <button className='facebook'><img src={fejsbuk} alt="fejsbuk" className='face'></img></button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
