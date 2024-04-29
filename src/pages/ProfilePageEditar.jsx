import React from "react";
import { ArrowLeft, Share } from "react-bootstrap-icons"; 
import ProfilePicture from "../images/Profile.png";
import { useTranslation } from 'react-i18next';

const ProfilePageEditar = () => {
    const [t, i18n] = useTranslation("global");
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center" style={{backgroundColor: "#263c5c"}}>
                <ArrowLeft color="white" size="40"></ArrowLeft>
                <div className="text-white h1">{t("editarProfile.editarTitle")}</div>
                <Share color="white" size="40"></Share>
            </div>
            <div className="profilePicture d-flex justify-content-center align-items-end" style={{position: "relative", backgroundColor: "#263c5c", height: "10em"}}>
                <img src={ProfilePicture} alt="profile" className="border border-3 border-white rounded-circle"/>
            </div>
            <div style={{marginTop: "100px"}}>
                <div className="col-10 col-lg-5 m-3 mx-auto">
                    <label for="nombre" className="form-label">{t("editarProfile.editarName")}</label>
                    <input type="text" className="form-control" id="nombre"></input>
                </div>
                <div className="col-10 col-lg-5 m-3 mx-auto">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email"></input>
                </div>
                <div className="col-10 col-lg-5 m-3 mx-auto">
                    <label for="tele" className="form-label">{t("editarProfile.editarPhone")}</label>
                    <input type="text" className="form-control" id="tele"></input>
                </div>
                <div className="col-10 col-lg-5 m-3 mx-auto">
                    <label for="contrasena" className="form-label">{t("editarProfile.editarPassword")}</label>
                    <input type="text" className="form-control" id="contrasena"></input>
                </div>
                <div className="d-flex justify-content-center"> 
                    <button type="button" className="btn btn-dark text-white col-8 col-lg-4 m-3">{t("editarProfile.editarUpdate")}</button>
                </div>  
            </div>
        </div>
    );
}

export default ProfilePageEditar