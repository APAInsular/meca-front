import React from "react";

const UserInfoProfile = ({ userInfo }) => {
    return (
        <>
            <h2>Informacion</h2>
            <div>
                <div>
                    <p>Nombre: Luis</p>
                </div>
                <div>
                    <p>Apellidos: Gordillo Tadeo</p>
                </div>
                <div>
                    <p>Direccion: C/ Numero 1</p>
                </div>
            </div>
        </>
    );
};

export default UserInfoProfile;
