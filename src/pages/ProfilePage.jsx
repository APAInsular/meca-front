import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom"; // Dodaj useHistory

import UserInfoProfile from "../components/ProfilePage/UserInfoProfile"
import UserFavoriteProfile from "../components/ProfilePage/UserFavoriteProfile"
import UserAvatarProfile from "../components/ProfilePage/UserAvatarProfile"
import UserPublicationProfile from "../components/ProfilePage/UserPublicationProfile"

import Flag from "../images/Flag_of_Spain.png";
import { List, Bell, ArrowLeft, CaretRightFill, Heart, GearFill, Link } from 'react-bootstrap-icons';
import "../styles/Profile.css";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState("info");
    const navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = `newpost`; 
    navigate(path);
    }

    const editar = () =>{ 
    let path = `editar`; 
    navigate(path);
    }

    return (
        <div>
            <div className="navbar p-3 pt-4 d-flex justify-content-between align-items-center">
                <div className="float-left">
                    <button className="pl-2" onClick={() => navigate(-1)}>
                    <ArrowLeft size="40" color="white" />
                    </button>
                </div>
                <div className="d-flex justify-content-center flex-grow-1">
                    <h1 className="text-white m-0">Perfil</h1>
                </div>
                <div className="float-right">
                    <button className="pr-2">
                        <GearFill size="40" color="white" />
                    </button>
                </div>
            </div>

            <div className="profilePicture d-flex justify-content-center align-items-end">
                <img src={"Image/PerfilPorDefecto.png"} alt="profile" className="p-2" style={{ backgroundColor: "white", border: "4px solid #263C5C", borderRadius: "50%", maxWidth: "200px", height: "auto" }} />
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
                        <img src={Flag} alt="flag" className="p-2"></img>
                    </div>
                </div>
            </div>
            <div className="mt-3 row">
                <div
                    className="col-3 fs-5 d-flex justify-content-center fw-semibold"
                    style={{ borderBottom: "2px solid black", cursor: "pointer" }}
                    onClick={() => setActiveTab("info")}
                >
                    Datos personales
                </div>
                <div
                    className="col-3 fs-5 d-flex justify-content-center fw-semibold"
                    style={{ borderBottom: "2px solid black", cursor: "pointer" }}
                    onClick={() => setActiveTab("favorite")}
                >
                    Favoritos
                </div>
                <div
                    className="col-3 fs-5 d-flex justify-content-center fw-semibold"
                    style={{ borderBottom: "2px solid black", cursor: "pointer" }}
                    onClick={() => setActiveTab("avatar")}
                >
                    Avatar
                </div>
                <div
                    className="col-3 fs-5 d-flex justify-content-center fw-semibold"
                    style={{ borderBottom: "2px solid black", cursor: "pointer" }}
                    onClick={() => setActiveTab("publications")}
                >
                    Publicaciones
                </div>
            </div>
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