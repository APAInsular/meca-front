import React from "react";
import avatar from '../../images/usuario_avatar.png';
import { useTranslation } from 'react-i18next';


const MobileRanking = () => {
    const [t, i18n] = useTranslation("global");
    const users = [
        { name: "Nombre Usuario", statues: "Nº Estatuas" },
        { name: "Nombre Usuario", statues: "Nº Estatuas" },
        { name: "Nombre Usuario", statues: "Nº Estatuas" },
        { name: "Nombre Usuario", statues: "Nº Estatuas" },
        { name: "Nombre Usuario", statues: "Nº Estatuas" },
        { name: "Nombre Usuario", statues: "Nº Estatuas" },
        { name: "Nombre Usuario", statues: "Nº Estatuas" },
    ];

    return (
        <div>
            <div className="col-12 text-center p-2 h1 text-white" style={{backgroundColor: "#263c5c", margin: "0px"}}>{t("rankingPage.platen")}</div>
            {users.map((user, index) => (
                <div key={index} style={{backgroundColor: "#DEE6F0"}} className='d-flex align-items-center justify-content-between p-1 border-bottom border-black'>
                    <div className="d-flex align-items-center justify-content-center">
                        <img src={avatar} alt="usuario avatar" className="" style={{width: "40px", height: "auto"}}/>
                        {user.name}
                    </div>
                    <div className="estatuas">{user.statues}</div>
                </div>
            ))}
            <div className="col-12 text-center p-2 h1 text-white" style={{backgroundColor: "#263c5c", margin: "0px"}}>{t("rankingPage.gold")}</div>
            {users.map((user, index) => (
                <div key={index} style={{backgroundColor: "#DEE6F0"}} className='d-flex align-items-center justify-content-between p-1 border-bottom border-black'>
                    <div className="d-flex align-items-center justify-content-center">
                        <img src={avatar} alt="usuario avatar" className="" style={{width: "40px", height: "auto"}}/>
                        {user.name}
                    </div>
                    <div className="estatuas">{user.statues}</div>
                </div>
            ))}
            <div className="col-12 text-center p-2 h1 text-white" style={{backgroundColor: "#263c5c", margin: "0px"}}>{t("rankingPage.silver")}</div>
            {users.map((user, index) => (
                <div key={index} style={{backgroundColor: "#DEE6F0"}} className='d-flex align-items-center justify-content-between p-1 border-bottom border-black'>
                    <div className="d-flex align-items-center justify-content-center">
                        <img src={avatar} alt="usuario avatar" className="" style={{width: "40px", height: "auto"}}/>
                        {user.name}
                    </div>
                    <div className="estatuas">{user.statues}</div>
                </div>
            ))}
            <div className="col-12 text-center p-2 h1 text-white" style={{backgroundColor: "#263c5c", margin: "0px"}}>{t("rankingPage.bronze")}</div>
            {users.map((user, index) => (
                <div key={index} style={{backgroundColor: "#DEE6F0"}} className='d-flex align-items-center justify-content-between p-1 border-bottom border-black'>
                    <div className="d-flex align-items-center justify-content-center">
                        <img src={avatar} alt="usuario avatar" className="" style={{width: "40px", height: "auto"}}/>
                        {user.name}
                    </div>
                    <div className="estatuas">{user.statues}</div>
                </div>
            ))}
        </div>
    );
}

export default MobileRanking
