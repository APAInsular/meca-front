import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { List, XCircleFill } from 'react-bootstrap-icons';
import axios from 'axios'; // Importa axios si no lo has hecho
import useTranslationContext from '../hooks/useTranslationContext';
import { useUserPoints } from '../context/UserPointsContext';
import { useAxiosBaseUrl } from '../context/AxiosBaseUrl';

export default function NavBar() {
    let idioma = window.location.pathname.split("/")[1];
    idioma = idioma || 'es';
    const translation = useTranslationContext();
    const { points, showGIF } = useUserPoints();

    const baseUrl = useAxiosBaseUrl();
    const userId = 1;

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const navigation = [
        { name: "Inicio", path: `/${idioma}/MeCa` },
        { name: "Acciones", path: `/${idioma}/acciones` },
        { name: "Explorar", path: `/${idioma}/explorar` },
        { name: "Blog", path: `/${idioma}/blog` },
        { name: "Contacta", path: `/${idioma}/contactanos` },
        { name: "Informacion", path: `/${idioma}/info` },
    ];

    const handleClick = (itemName) => {
        setSelectedItem((prevSelectedItem) => {
            return prevSelectedItem === itemName ? null : itemName;
        });
    };

    const closeNav = () => {
        setSelectedItem(null);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className='mt-3 pb-3 px-3 d-flex align-items-center' style={{ borderBottom: "2px solid #263C5C" }}>
            {/* Botón de menú para tablet */}
            <div className="col-md-4 col-xs-4 text-right d-flex d-lg-none justify-content-start">
                <button onClick={toggleMenu}>
                    <List size="50" color="#263C5C" />
                </button>
            </div>

            {/* Logo */}
            <div className='col-md-4 col-xs-4 col-lg-1 text-center d-flex justify-content-center'>
                <Link to={`/${idioma}/MeCa`} onClick={closeNav}>
                    <img src="/Image/Logos/MECA-09.png" alt="Logo MECA" />
                </Link>
            </div>

            {/* Botones NavBar */}
            <div className="d-none d-lg-flex justify-content-start align-items-center col-lg-7">
                {navigation.map((item) => (
                    <div key={item.name}>
                        {item.name === "Acciones" ? (
                            <div className="justify-content-center" style={{ position: 'relative' }}>
                                <div className="btn mx-3 text-center NavBar_buttons" style={{ borderRadius: "20px", backgroundColor: '#263C5C' }} onClick={() => handleClick(item.name)}>
                                    <strong className='text-white'>{item.name}</strong>
                                </div>
                                <div hidden={selectedItem !== item.name} className="justify-content-center" style={{ position: 'absolute', top: '100%', left: -30, zIndex: 1 }}>
                                    <Link to={`/${idioma}/logros`} className="btn mx-3 mt-2 d-flex justify-content-center NavBar_buttons" style={{ backgroundColor: '#263C5C', borderRadius: "20px" }} onClick={closeNav}>
                                        <strong className='text-white'>Logros</strong>
                                    </Link>
                                    <Link to={`/${idioma}/eventos`} className="btn mx-3 mt-2 d-flex justify-content-center NavBar_buttons" style={{ backgroundColor: '#263C5C', borderRadius: "20px" }} onClick={closeNav}>
                                        <strong className='text-white'>Eventos</strong>
                                    </Link>
                                    <Link to={`/${idioma}/clasificacion`} className="btn mx-3 mt-2 d-flex justify-content-center NavBar_buttons" style={{ backgroundColor: '#263C5C', borderRadius: "20px" }} onClick={closeNav}>
                                        <strong className='text-white'>Clasificacion</strong>
                                    </Link>
                                </div>
                            </div>
                        ) : item.name === "Explorar" ? (
                            <div className="justify-content-center" style={{ position: 'relative' }}>
                                <div className="btn mx-3 text-center NavBar_buttons" style={{ borderRadius: "20px", backgroundColor: '#263C5C' }} onClick={() => handleClick(item.name)}>
                                    <strong className='text-white'>{item.name}</strong>
                                </div>
                                <div hidden={selectedItem !== item.name} className="justify-content-center" style={{ position: 'absolute', top: '100%', left: 11, zIndex: 1 }}>
                                    <Link to={`/${idioma}/monumentos`} className="btn mx-3 mt-2 d-flex justify-content-center NavBar_buttons" style={{ backgroundColor: '#263C5C', borderRadius: "20px" }} onClick={closeNav}>
                                        <strong className='text-white'>Monumentos</strong>
                                    </Link>
                                    <Link to={`/${idioma}/autores`} className="btn mx-3 mt-2 d-flex justify-content-center NavBar_buttons" style={{ backgroundColor: '#263C5C', borderRadius: "20px" }} onClick={closeNav}>
                                        <strong className='text-white'>Autores</strong>
                                    </Link>
                                    <Link to={`/${idioma}/estilos`} className="btn mx-3 mt-2 d-flex justify-content-center NavBar_buttons" style={{ backgroundColor: '#263C5C', borderRadius: "20px" }} onClick={closeNav}>
                                        <strong className='text-white'>Estilos</strong>
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <Link to={item.path} className="btn mx-3 d-flex justify-content-center NavBar_buttons" style={{ backgroundColor: '#263C5C', borderRadius: "20px" }} onClick={closeNav}>
                                <strong className='text-white'>{item.name}</strong>
                            </Link>
                        )}
                    </div>
                ))}
            </div>

            {/* Menú desplegable para tablet */}
            <div className={`col-md-12 d-md-none ${menuOpen ? 'd-flex' : 'd-none'}`} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#263C5C', opacity: "80%", zIndex: 1000 }}>
                <div className="d-flex flex-column justify-content-center align-items-center h-100 w-100">
                    <button className="btn position-absolute top-0 end-0 m-3" onClick={toggleMenu}>
                        <strong className="text-white"><XCircleFill size="30" /></strong>
                    </button>
                    <div className="d-flex flex-column justify-content-center align-items-center w-100">
                        {navigation.map((item, index) => (
                            <div key={index}>
                                {item.name === "Acciones" ? (
                                    <div className="mx-3" style={{ position: 'relative' }} onClick={() => handleClick(item.name)}>
                                        <div to={item.path} className='btn my-1 text-white fs-2 d-flex justify-content-center'><strong>{item.name}</strong></div>
                                        <div hidden={selectedItem !== item.name}>
                                            <div className='d-flex justify-content-center'>
                                                <Link to={`/${idioma}/logros`} className='btn my-1 text-white fs-2'><strong>Logros</strong></Link>
                                            </div>
                                            <div className='d-flex justify-content-center'>
                                                <Link to={`/${idioma}/eventos`} className='btn my-1 text-white fs-2'><strong>Eventos</strong></Link>
                                            </div>
                                            <div className='d-flex justify-content-center'>
                                                <Link to={`/${idioma}/clasificacion`} className='btn my-1 text-white fs-2'><strong>Clasificacion</strong></Link>
                                            </div>
                                        </div>
                                    </div>
                                ) : item.name === "Explorar" ? (
                                    <div className="mx-3" style={{ position: 'relative' }} onClick={() => handleClick(item.name)}>
                                        <div to={item.path} className='btn my-1 text-white fs-2 d-flex justify-content-center'><strong>{item.name}</strong></div>
                                        <div hidden={selectedItem !== item.name}>
                                            <div className='d-flex justify-content-center'>
                                                <Link to={`/${idioma}/monumentos`} className='btn my-1 text-white fs-2'><strong>Monumentos</strong></Link>
                                            </div>
                                            <div className='d-flex justify-content-center'>
                                                <Link to={`/${idioma}/autores`} className='btn my-1 text-white fs-2'><strong>Autores</strong></Link>
                                            </div>
                                            <div className='d-flex justify-content-center'>
                                                <Link to={`/${idioma}/estilos`} className='btn my-1 text-white fs-2'><strong>Estilos</strong></Link>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <Link to={item.path} className='btn my-1 text-white fs-2'><strong>{item.name}</strong></Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='col-md-2 col-xs-1 col-lg-3 d-flex justify-content-end align-items-center'>
                {/* {showGIF ? <img src="/Image/Moneda-GIF-2.0.gif" alt="" style={{ width: "50px", height: "auto" }} /> : <img src="/Image/Moneda-Tara.png" alt="" style={{ width: "30px", height: "auto" }} />} */}
                <img src="/Image/Moneda-GIF.gif" alt="" style={{ width: "80px", height: "auto" }} />
                <span style={{ position: "absolute", top: "28%", left: "90%" }}>{points}</span>
            </div>

            {/* Perfil */}
            <div className='col-md-2 col-xs-2 col-lg-1 text-right'>
                <Link to={`/${idioma}/perfil`} onClick={closeNav}>
                    <img className="flex float-right p-1" src="/Image/PerfilPorDefecto.png" alt="PerfilPorDefecto" style={{ border: "1px solid #263C5C", borderRadius: "50%", maxWidth: "40px", height: "auto" }} />
                </Link>
            </div>
        </div>
    );
}
