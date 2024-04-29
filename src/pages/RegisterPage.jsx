import React from 'react';
import logo from '../images/MECA-09.png';
import '../styles/RegisterPage.css';
import { useTranslation } from 'react-i18next';

const RegisterPage = () => {
    const [t, i18n] = useTranslation("global");
    return (
        <div className='login-box'>
            <img src={logo} alt="logo" className='logo my-1'></img>
            <div className="v-line-1"></div>
            <div className="form">
                <p className='title py-1'>{t("registerPage.registerTitle")}</p> 
                <div className="input-group"> {/* Wrap the first two inputs in a container */}
                    <input type="text" className='my-3 px-3 nombre' placeholder={t("registerPage.registerName")}></input>  
                    <input type="text" className='my-3 px-3 apelidos' placeholder={t("registerPage.registerSurname")}></input>
                </div>
                <input type="text" className='my-3 px-3 email' placeholder='Email'></input>
                <div className="input-group"> {/* Wrap the first two inputs in a container */}
                  <input type="text" className='my-3 px-3 ciudad' placeholder={t("registerPage.registerCity")}></input>
                  <input type="text" className='my-3 px-3 pais' placeholder={t("registerPage.registerCountry")}></input>
                </div>
                <input type="text" className='my-3 px-3 email' placeholder='Nacionalidad'></input>
                <div className="input-group"> {/* Wrap the first two inputs in a container */}
                <input type="text" className='my-3 px-3 ciudad' placeholder={t("registerPage.registerPassword")}></input>
                <input type="text" className='my-3 px-3 pais' placeholder={t("registerPage.registerRepeat")}></input>
                </div>
                <button type="submit" className='my-9 submit-button'>{t("registerPage.registerButton")}</button>
            </div>
        </div>
    );
}

export default RegisterPage;