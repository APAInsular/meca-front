import React from "react";
import { useTranslation } from 'react-i18next';

const AdminEventPage = () => {
    const [t, i18n] = useTranslation("global");
    const  users = [
        { name: "Nombre Usuario"},
        { name: "Nombre Usuario"},
        { name: "Nombre Usuario"},
        { name: "Nombre Usuario"},
    ]
    const ruta = [
        {parada: t("adminEventPage.eventStop"), obra: t("adminEventPage.eventObra")},    
        {parada: t("adminEventPage.eventStop"), obra: t("adminEventPage.eventObra")},
        {parada: t("adminEventPage.eventStop"), obra: t("adminEventPage.eventObra")},
        {parada: t("adminEventPage.eventStop"), obra: t("adminEventPage.eventObra")},
        {parada: t("adminEventPage.eventStop"), obra: t("adminEventPage.eventObra")},
    ]
    return (
        <div> 
        <div className="text-center fs-1">Título del evento</div>
        <div className="col-lg-4 col-9 mx-auto rounded border-2 border-black m-5 p-0">
            <div className="text-center rounded-top px-5 py-2 fs-2 text-white fw-bold" style={{backgroundColor: "#263c5c"}}>{t("adminEventPage.eventParticipantes")}</div>
            {users.map((user, index) => (
                <div key={index} className="d-flex justify-content-between py-2 px-5 align-items-center fs-2" style={{ backgroundColor: "#DEE6F0" }}>{user.name}
                    <div className="d-flex align-items-center">
                        <div className="bg-success rounded-circle m-2" style={{ width: '30px', height: '30px' }}></div>
                        <div className="bg-danger rounded-circle m-2" style={{ width: '30px', height: '30px' }}></div>
                    </div>
                </div>
            ))}
        </div>
        <div className="text-center fs-1 fw-bold">{t("adminEventPage.eventRoute")}</div>
        <div className="d-flex justify-content-around row m-5">
            <div className="col-12 col-lg-4 bg-secondary-subtle text-center align-items-center d-flex justify-content-center mb-3" style={{width: "30em", height: "20em"}}>MAPA</div>
            <div className="col-12 col-lg-4 " style={{width: "30em", height: "20em"}}>
                <div className="text-center fs-5 fw-bold">Información de la ruta</div>
                <div className=""> 
                    {ruta.map((ruta, index ) => (
                        <div key={index}> {ruta.parada}: {ruta.obra}</div>
                    ))}
                </div>
            </div>      
        </div>
        </div>
    );
}

export default AdminEventPage