import React from 'react';
import '../styles/RankingPage.css';

const RankingPage = () => {

    const users = [
        { name: "Nombre Usuario", statues: "Nº Estatuas" },
        { name: "Nombre Usuario", statues: "Nº Estatuas" },
        { name: "Nombre Usuario", statues: "Nº Estatuas" },
    ];

    return (
        <div>
            <div className="h-line-3"></div>
            <div className="ranking-title">TOP</div>
            <div className="h-line-2"></div>
            <div className="usuario_top_box">
                <div class="usuario1 px-2">
                    <div className="usuario_name"><img src={'/Image/user(1).png'} alt="usuario avatar" className="usuario_avatar mr-1"></img>Nombre Usuario</div>
                    <div className="estatuas">Nº Estatuas</div>
                </div>
            </div>
            <div className="h-line-1"></div>
            {users.map((user, index) => (
                <div key={index} className="usuario_top_box">
                    <div className="usuario px-2">
                        <div className="usuario_name">
                            <img src={'/Image/user(1).png'} alt="usuario avatar" className="usuario_avatar mr-1" />
                            {user.name}
                        </div>
                        <div className="estatuas">{user.statues}</div>
                    </div>
                    <div className="h-line-1"></div>
                </div>
            ))}
            <div className="ranking-title">PLATINO</div>
            {users.map((user, index) => (
                <div key={index} className="usuario_top_box">
                    <div className="usuario px-2">
                        <div className="usuario_name">
                            <img src={'/Image/user(1).png'} alt="usuario avatar" className="usuario_avatar mr-1" />
                            {user.name}
                        </div>
                        <div className="estatuas">{user.statues}</div>
                    </div>
                    <div className="h-line-1"></div>
                </div>
            ))}
            <div className="ranking-title">ORO</div>
            {users.map((user, index) => (
                <div key={index} className="usuario_top_box">
                    <div className="usuario px-2">
                        <div className="usuario_name">
                            <img src={'/Image/user(1).png'} alt="usuario avatar" className="usuario_avatar mr-1" />
                            {user.name}
                        </div>
                        <div className="estatuas">{user.statues}</div>
                    </div>
                    <div className="h-line-1"></div>
                </div>
            ))}
            <div className="ranking-title">PLATA</div>
            {users.map((user, index) => (
                <div key={index} className="usuario_top_box">
                    <div className="usuario px-2">
                        <div className="usuario_name">
                            <img src={'/Image/user(1).png'} alt="usuario avatar" className="usuario_avatar mr-1" />
                            {user.name}
                        </div>
                        <div className="estatuas">{user.statues}</div>
                    </div>
                    <div className="h-line-1"></div>
                </div>
            ))}
            <div className="ranking-title">BRONCE</div>
            {users.map((user, index) => (
                <div key={index} className="usuario_top_box">
                    <div className="usuario px-2">
                        <div className="usuario_name">
                            <img src={'/Image/user(1).png'} alt="usuario avatar" className="usuario_avatar mr-1" />
                            {user.name}
                        </div>
                        <div className="estatuas">{user.statues}</div>
                    </div>
                    <div className="h-line-1"></div>
                </div>
            ))}
        </div>
    );
};

export default RankingPage;