import React, { useState, useEffect } from 'react';
import avatar from '../images/usuario_avatar.png';
import MobileRanking from 'src/components/RankingPage/MobileRanking';
import DesktopRanking from 'src/components/RankingPage/DesktopRanking';
import { useTranslation } from 'react-i18next';


const RankingPage = () => {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const [t, i18n] = useTranslation("global");

    useEffect(() => {
        const handleResize = () => {
            setViewportWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isLargeScreen = viewportWidth >= 992;

    const users = [
        { name: "Nombre Usuario 1", statues: "Nº Estatuas" },
        { name: "Nombre Usuario 2", statues: "Nº Estatuas" },
        { name: "Nombre Usuario 3", statues: "Nº Estatuas" },
        { name: "Nombre Usuario 4", statues: "Nº Estatuas" },
        { name: "Nombre Usuario 5", statues: "Nº Estatuas" },
        { name: "Nombre Usuario 6", statues: "Nº Estatuas" },
        { name: "Nombre Usuario 7", statues: "Nº Estatuas" },
    ];

    return (
        <div>
            <div className="row d-flex justify-content-center">
                <div className="col-lg-5">
                <div className="col-12  text-center p-2 h1 text-white" style={{ backgroundColor: "#263c5c", margin: "0px" }}>{t("rankingPage.top")}</div>
                    {users.map((user, index) => (
                        <div key={index} style={{ backgroundColor: "#DEE6F0" }} className='d-flex align-items-center justify-content-between p-1 border-bottom border-black'>
                            <div className="d-flex align-items-center justify-content-center">
                                <img src={avatar} alt="usuario avatar" style={{ width: "40px", height: "auto", marginRight: "10px" }} />
                                {user.name}
                            </div>
                            <div className="estatuas">{user.statues}</div>
                        </div>
                    ))}
                </div>
                <div className="col-lg-5">
                    {isLargeScreen ? <DesktopRanking /> : <MobileRanking />}
                </div>
            </div>
        </div>
    );
};

export default RankingPage;