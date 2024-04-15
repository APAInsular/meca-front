import React from "react";
import Arrow from "../images/MaterialSymbolsArrowLeftAlt.png"
import ProfilePicture from "../images/Profile.png";
import "../styles/Profile.css";
const ProfilPage = () => {
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center navbar">
                <img src={Arrow} alt="back"></img>
                <h1 className="text-white">Perfil</h1>
                <img src={Arrow} alt="back"></img>
            </div>
            <div className="profilePicture d-flex justify-content-center align-items-end">
                <img src={ProfilePicture} alt="profile" className="border border-3 border-white rounded-circle"></img>
            </div>
            <div className="d-flex justify-content-end align-items-center m-5">
                <p>There should be spain flag</p>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <button className="btn btn-dark w-20 fs-1 d-grid gap-2 col-1 p-2 px-3" style={{fontSize: "24px"}}>Editar Perfil</button>
            </div>
            <div>
                <div className="row">
                    <div class="col">Data Personales</div>
                    <div class="col">Favoritos</div>
                    <div class="col">Preferences</div>
                </div>
                <div className="row">
                    <div class="col">Karol Stolarczyk</div>
                    <div class="col"></div>
                    <div class="col"></div>
                </div>
                <div className="row">
                    <div class="col"></div>
                    <div class="col"></div>
                    <div class="col"></div>
                </div>
                <div className="row">
                    <div class="col"></div>
                    <div class="col"></div>
                    <div class="col"></div>
                </div>
            </div>
        </div>
    );
}

export default ProfilPage;