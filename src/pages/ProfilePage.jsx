import React from "react";

import { useState } from "react";

import Menu from "../components/ProfilePage/Menu";
import UserInfoProfile from "../components/ProfilePage/UserInfoProfile"
import UserFavoriteProfile from "../components/ProfilePage/UserFavoriteProfile"
import UserAvatarProfile from "../components/ProfilePage/UserAvatarProfile"
import UserPublicationProfile from "../components/ProfilePage/UserPublicationProfile"

import { Bell, ArrowLeft, GearFill } from 'react-bootstrap-icons';
import "../styles/Profile.css";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState("info");
    const navigate = useNavigate();



    const routeChange = () => {
        let path = `newpost`;
        navigate(path);
    }

    const editar = () => {
        let path = `editar`;
        navigate(path);
    }

    const menuItems = [
        { key: 'info', label: 'Datos personales' },
        { key: 'favorite', label: 'Favoritos' },
        { key: 'avatar', label: 'Avatar' },
        { key: 'publications', label: 'Publicaciones' }
    ];

    return (
        <div>
            <div className="navbar p-3 pt-4 d-flex justify-content-between align-items-center">
                <div className="float-left">
                    <button className="pl-2" style={{ backgroundColor: "transparent" }}>
                        <ArrowLeft size="40" color="white" onClick={() => navigate(-1)} />
                    </button>
                </div>
                <div className="d-flex justify-content-center flex-grow-1">
                    <h1 className="text-white m-0">Perfil</h1>
                </div>
                <div className="float-right">
                    <button className="pr-2" style={{ backgroundColor: "transparent" }}>
                        <GearFill size="40" color="white" />
                    </button>
                </div>
            </div>

            <div className="profilePicture d-flex justify-content-center align-items-end">
                <img src={"/Image/PerfilPorDefecto.png"} alt="profile" className="p-2" style={{ backgroundColor: "white", border: "4px solid #263C5C", borderRadius: "50%", maxWidth: "200px", height: "auto" }} />
            </div>
            <div className="d-flex justify-content-center align-items-center mt-5 mx-5 row">
                <div className="col-3 d-flex justify-content-start">
                    <button>
                        <Bell size="50" color="#7B96FF" />
                    </button>
                </div>

                <div className="col-3 d-flex justify-content-end mt-5 pr-1">
                    <button className="btn ml-3 text-white fw-semibold" style={{ backgroundColor: "#7B96FF" }} onClick={routeChange}>
                        Crear Post
                    </button>

                </div>
                <div className="col-3 d-flex justify-content-start mt-5 pl-1">
                    <button className="btn mr-3 text-white fw-semibold" style={{ backgroundColor: "#7B96FF" }} onClick={editar}>
                        Editar Perfil
                    </button>
                </div>
                <div className="col-3 d-flex justify-content-end">
                    <div style={{ borderRadius: "10px", border: "1px solid #7B96FF" }}>
                        <img src={"/Image/Flag_of_Spain.png"} alt="flag" className="p-2"></img>
                    </div>
                </div>
            </div>
            <Menu items={menuItems} setActiveTab={setActiveTab} />
            <div className="mt-4">
                {
                    activeTab === "info" ? (
                        <UserInfoProfile />
                    ) : activeTab === "favorite" ? (
                        <UserFavoriteProfile />
                    ) : activeTab === "avatar" ? (
                        <UserAvatarProfile />
                    ) : activeTab === "publications" ? (
                        <UserPublicationProfile />
                    ) : (
                        null
                    )
                }
            </div>
        </div >
    );
};

export default ProfilePage;