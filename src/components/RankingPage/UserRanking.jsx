import React from "react";

import UserRankingPoints from "./UserRankingPoints";

const UserRanking = ({ user, key }) => {
    return (
        <div key={key} style={{ backgroundColor: "#DEE6F0" }} className='d-flex align-items-center justify-content-between p-1 border-bottom border-black'>
            <div className="d-flex align-items-center justify-content-center">
                <img src={"/Image/PerfilPorDefecto.png"} alt="usuario avatar" className="" style={{ width: "40px", height: "auto" }} />
                {user.name + ' ' + user.first_surname + ' ' + user.second_surname}
            </div>
            <UserRankingPoints userPoints={user.points} />
        </div>
    )
}

export default UserRanking