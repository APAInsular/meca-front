import '../styles/Login.css';
import React from 'react';
import logo from '../images/MECA-09.png';
import gugyl from '../images/google.svg';
import fejsbuk from '../images/facebook.svg';
import { useTranslation } from 'react-i18next';
const LoginPage = () => {
    const [t, i18n] = useTranslation("global");
    return (
        <div className='login-box'>
            <img src={logo} alt="logo" className='logo my-1'></img>
            <div className="v-line-1"></div>
            <div className="form">
                <p className='title py-1'>{t("loginPage.loginTitle")}</p> 
                <input type="text" className='my-2 input-text px-3' placeholder='Email'></input>  
                <input type="text" className='my-2 input-text px-3' placeholder={t("loginPage.loginPassword")}></input>
                <button type="submit" className='my-2 submit-button'>{t("loginPage.loginButton")}</button>
                <div className='social-login'>
                    <button className='google'><img src={gugyl} alt="gugyl" className='gogl'></img></button>
                    <button className='facebook'><img src={fejsbuk} alt="fejsbuk" className='face'></img></button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
