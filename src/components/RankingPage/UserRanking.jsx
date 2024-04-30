import React from "react";

const UserRanking = ({ user, key }) => {
    return (
        <div key={key} style={{ backgroundColor: "#DEE6F0" }} className='d-flex align-items-center justify-content-between p-1 border-bottom border-black'>
            <div className="d-flex align-items-center justify-content-center">
                <img src={"/Image/PerfilPorDefecto.png"} alt="usuario avatar" className="" style={{ width: "40px", height: "auto" }} />
                {user.name + ' ' + user.last_name + ' ' + user.second_last_name}
            </div>
            <div className="estatuas">{user.points}</div>
        </div>
    )
}

export default UserRanking