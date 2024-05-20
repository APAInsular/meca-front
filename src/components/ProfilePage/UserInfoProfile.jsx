import React from "react";

const UserInfoProfile = ({ userInfo }) => {
    return (
        <>
            <h2>Informacion</h2>
            <div>
                <p>{userInfo.name}</p>
                {/* Agrega más campos que necesites mostrar */}
                <p>Email: {userInfo.email}</p>
                <p>Username: {userInfo.username}</p>
                {/* Otros campos según la estructura de userInfo */}
            </div>
        </>
    );
};

export default UserInfoProfile;
