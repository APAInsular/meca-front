import React from 'react';
import { useState, useEffect } from 'react';
import avatar from '../images/usuario_avatar.png';
import MobileRanking from 'src/components/RankingPage/MobileRanking';
import DesktopRanking from 'src/components/RankingPage/DesktopRanking';

const RankingPage = () => {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setViewportWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isLargeScreen = viewportWidth <= 1200;

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
            <div className="col-12 text-center p-2 h1 text-white" style={{backgroundColor: "#263c5c", margin: "0px"}}>TOP</div>
            {users.map((user, index) => (
                <div key={index} style={{backgroundColor: "#DEE6F0"}} className='d-flex align-items-center justify-content-between p-1 border-bottom border-black'>
                    <div className="d-flex align-items-center justify-content-center">
                        <img src={avatar} alt="usuario avatar" className="" style={{width: "40px", height: "auto"}}/>
                        {user.name}
                    </div>
                    <div className="estatuas">{user.statues}</div>
                </div>
            ))}
            {isLargeScreen ? <MobileRanking /> : <DesktopRanking/>} 
        </div>
    );
};

export default RankingPage;