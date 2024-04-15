import React, {useState, useEffect} from "react";
import Arrow from "../images/MaterialSymbolsArrowLeftAlt.png";
import ProfilePicture from "../images/Profile.png";
import Bell from "../images/bell.png";
import BlackBell from "../images/blackBell.png";
import Flag from "../images/spain.png";
import "../styles/Profile.css";

const ProfilePage = () => {
    const [fontSize, setFontSize] = useState(24);

    const updateFontSize = () => {
        const windowWidth = window.innerWidth;
        if (windowWidth < 800) {
        setFontSize(15);  
        } else {
        setFontSize(24);  
        }
    };
    
    const[windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        updateFontSize();
        window.addEventListener("resize", updateWindowWidth);
        window.addEventListener("resize", updateFontSize);
        return () => {
            window.removeEventListener("resize", updateFontSize);
            window.removeEventListener("resize", updateWindowWidth);
        };
    }, []);

    const getMobileBackgroundClass = () => {
        return windowWidth < 1000 ? 'mobile-background' : ''; 
    }
    
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center navbar p-3">
                <img src={Arrow} alt="back" />
                <h1 className="text-white">Perfil</h1>
                {windowWidth < 1000 ? (
                    <button> <div className="menu">
                    <div className="menu-line bg-dark"></div>
                    <div className="menu-line bg-dark"></div>
                    <div className="menu-line bg-dark"></div>
                    </div></button>
                ) : (
                    <img src={Bell} alt="bell"></img>
                )}  
                 
            </div>
            <div className="profilePicture d-flex justify-content-center align-items-end">
                <img src={ProfilePicture} alt="profile" className="border border-3 border-white rounded-circle"/>
            </div>
            <div className="d-flex justify-content-end align-items-center m-5">
                
                <img src={Flag} alt="flag"></img>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                {windowWidth < 1000 && (
                        <img src={BlackBell} alt="bell"></img>
                    )}
                <button className="btn btn-primary mx-3"  style={{ fontSize: `${fontSize}px`,width: "100%", maxWidth: "200px" }}>Crear Post</button>
                <button className="btn btn-dark mx-3" style={{ fontSize: `${fontSize}px`,width: "100%", maxWidth: "200px" }}>Editar Perfil</button>
            </div>
            <div className="p-5">
                <div className="row justify-content-around">
                    <div className={`col-12 col-lg-4 text-left mb-4`}>
                        <div className={`fw-bold fs-1 fw-semibold ${getMobileBackgroundClass()}`}>Datos personales</div>
                        <div className="fs-4 mt-3">Karol</div>
                        <div className="fs-4">Poland</div>
                        <div className="fs-4">Puerto Del Rosario</div>
                    </div>
                    <div className="col-12 col-lg-4 text-left mb-4">
                        <div className={`fw-bold fs-1 fw-semibold ${getMobileBackgroundClass()}`}>Favoritos</div>
                        <div className="fs-4 mt-3">Obras Favoritas</div>
                        <div className="fs-4">Autores Favoritos</div>
                    </div>
                    <div className="col-12 col-lg-4 text-left mb-4">
                        <div className={`fw-bold fs-1 fw-semibold ${getMobileBackgroundClass()}`}>Preferencias</div>
                        <div className="fs-4 mt-3">Español</div>
                        <div className="fs-4">Oro</div>
                        <div className="fs-4">Clasificación Nº1</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;