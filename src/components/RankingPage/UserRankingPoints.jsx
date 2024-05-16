import React from "react";

const UserRankingPoints = ({ userPoints }) => {
    return (
        <div className="d-flex">
            <img src={"/Image/Moneda-Tara.png"} alt="" style={{ width: "30px", height: "auto" }} />
            <div className="estatuas">{userPoints}</div>
        </div>
    );
}

export default UserRankingPoints;