
import React from "react";

const MobileRanking = () => {
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
            <div className="col-12 text-center p-2 h1 text-white" style={{ backgroundColor: "#263c5c", margin: "0px" }}>PLATINA</div>
            {users.map((user, index) => (
                <div key={index} style={{ backgroundColor: "#DEE6F0" }} className='d-flex align-items-center justify-content-between p-1 border-bottom border-black'>
                    <div className="d-flex align-items-center justify-content-center">
                        <img src={"/Image/PerfilPorDefecto.png"} alt="usuario avatar" className="" style={{ width: "40px", height: "auto" }} />
                        {user.name}
                    </div>
                    <div className="estatuas">{user.statues}</div>
                </div>
            ))}
            <div className="col-12 text-center p-2 h1 text-white" style={{ backgroundColor: "#263c5c", margin: "0px" }}>ORO</div>
            {users.map((user, index) => (
                <div key={index} style={{ backgroundColor: "#DEE6F0" }} className='d-flex align-items-center justify-content-between p-1 border-bottom border-black'>
                    <div className="d-flex align-items-center justify-content-center">
                        <img src={avatar} alt="usuario avatar" className="" style={{ width: "40px", height: "auto" }} />
                        {user.name}
                    </div>
                    <div className="estatuas">{user.statues}</div>
                </div>
            ))}
            <div className="col-12 text-center p-2 h1 text-white" style={{ backgroundColor: "#263c5c", margin: "0px" }}>PLATA</div>
            {users.map((user, index) => (
                <div key={index} style={{ backgroundColor: "#DEE6F0" }} className='d-flex align-items-center justify-content-between p-1 border-bottom border-black'>
                    <div className="d-flex align-items-center justify-content-center">
                        <img src={avatar} alt="usuario avatar" className="" style={{ width: "40px", height: "auto" }} />
                        {user.name}
                    </div>
                    <div className="estatuas">{user.statues}</div>
                </div>
            ))}
            <div className="col-12 text-center p-2 h1 text-white" style={{ backgroundColor: "#263c5c", margin: "0px" }}>BRONCE</div>
            {users.map((user, index) => (
                <div key={index} style={{ backgroundColor: "#DEE6F0" }} className='d-flex align-items-center justify-content-between p-1 border-bottom border-black'>
                    <div className="d-flex align-items-center justify-content-center">
                        <img src={avatar} alt="usuario avatar" className="" style={{ width: "40px", height: "auto" }} />
                        {user.name}
                    </div>
                    <div className="estatuas">{user.statues}</div>
                </div>
            ))}
        </div>
    );
}

export default MobileRanking
