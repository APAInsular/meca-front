import React from "react";
import './NavBar.css';
import logo from './images/MECA-10.png';
import userImg from './images/userimg.svg';
function NavBar() {
    return (
        <div className="header">
            <img className="header-img" src={logo} alt="LOGO" />
            <button id="home">Inicio</button>
            <button id="explore">Explorar</button>
            <button id="blog">Blog</button>
            <button id="connections">Contáctanos</button>
            <img className="userImage" src={userImg} alt="userImage"/>
            <div className="line-break">
            </div>
        </div>
    );
}

export default NavBar;