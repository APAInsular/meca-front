import React, {useState, useEffect} from "react";
import ProfilePicture from "../images/Profile.png";
import Flag from "../images/spain.png";
import { List, Bell, ArrowLeft, CaretRightFill, Heart  } from 'react-bootstrap-icons';
import "../styles/Profile.css";

const ProfilePage = () => {
    const [fontSize, setFontSize] = useState(24);

    const[windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth);
    };

    const updateFontSize = () => {
        const width = window.innerWidth;
        setFontSize(width < 800 ? 20 : 24);
    };

    useEffect(() => {
        window.addEventListener("resize", updateWindowWidth);
        window.addEventListener("resize", updateFontSize);
        return () => {
            window.removeEventListener("resize", updateWindowWidth);
            window.removeEventListener("resize", updateFontSize);
        };
    }, []);

    const getMobileBackgroundClass = () => {
        return windowWidth < 1200 ? 'mobile-background' : ''; 
    }
    
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center navbar p-3">
                <button>
                    <ArrowLeft size="50" color="white" />
                </button>
                <h1 className="text-white">Perfil</h1>
                {windowWidth < 992 ? (
                    <div>
                    <button>
                        <List size="50" color="black" />
                    </button>
                </div>
                ) : (
                    <button>
                    <Bell size="50" color="white" />
                    </button>
                )}  
                 
            </div>
            <div className="profilePicture d-flex justify-content-center align-items-end">
                <img src={ProfilePicture} alt="profile" className="border border-3 border-white rounded-circle"/>
            </div>
            <div className="d-flex justify-content-end align-items-center m-3">
                <img src={Flag} alt="flag"></img>
            </div>
            <div className="d-flex justify-content-center align-items-center m-5">
                {windowWidth < 992 && (
                        <button>
                        <Bell size="50" color="black" />
                        </button>
                    )}
                <button className="btn btn-primary mx-3"  style={{fontSize: `${fontSize}px`,width: "100%", maxWidth: "200px" }}>Crear Post</button>
                <button className="btn btn-dark mx-3" style={{fontSize: `${fontSize}px`,width: "100%", maxWidth: "200px" }}>Editar Perfil</button>
            </div>
            <div className="p-0 mt-5 m-lg-0 ">
                <div className="row justify-content-around">
                    <div className="col-12 col-xl-4 text-left mb-4">
                        <div className={`fw-bold fs-1 fw-semibold ${getMobileBackgroundClass()}`}>Datos personales</div>
                        <div className="fs-2 mt-3 d-flex justify-content-between">Karol<button><CaretRightFill size="50" color="black" className="arrow"/></button></div>
                        <div className="fs-2 d-flex justify-content-between">Poland<button><CaretRightFill size="50" color="black" className="arrow"/></button></div>
                        <div className="fs-2 d-flex justify-content-between">Puerto Del Rosario<button><CaretRightFill size="50" color="black" className="arrow"/></button></div>
                    </div>
                    <div className="col-12 col-xl-4 text-left mb-4">
                        <div className={`fw-bold fs-1 fw-semibold ${getMobileBackgroundClass()}`}>Favoritos</div>
                        <div className="fs-2 mt-3 d-flex justify-content-between"><span className="d-flex align-items-center"><Heart size="32" color="black" /> Obras Favoritas</span><button><CaretRightFill size="50" color="black" className="arrow"/></button></div>
                        <div className="fs-2 d-flex justify-content-between">     <span className="d-flex align-items-center"><Heart size="32" color="black" /> Autores Favoritos</span><button><CaretRightFill size="50" color="black" className="arrow"/></button></div>
                    </div>
                    <div className="col-12 col-xl-4 text-left mb-4">
                        <div className={`fw-bold fs-1 fw-semibold ${getMobileBackgroundClass()}`}>Preferencias</div>
                        <div className="fs-2 mt-3 d-flex justify-content-between">Español<button><CaretRightFill size="50" color="black" className="arrow"/></button></div>
                        <div className="fs-2 d-flex justify-content-between">Oro<button><CaretRightFill size="50" color="black" className="arrow"/></button></div>
                        <div className="fs-2 d-flex justify-content-between">Clasificación Nº1<button><CaretRightFill size="50" color="black" className="arrow"/></button></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;