import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { List } from 'react-bootstrap-icons';

const navigation = [
    { name: 'Inicio', path: '/' },
    { name: 'Acciones', path: '/acciones' },
    { name: 'Explorar', path: '/explorar' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contáctanos', path: '/contactanos' },
    { name: 'Información', path: '/info' },
];

export default function NavBar() {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleClick = (itemName) => {
        setSelectedItem((prevSelectedItem) => {
            return prevSelectedItem === itemName ? null : itemName;
        });
    };

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='my-3 px-3 d-flex align-items-center'>
            {/* Botón de menú para tablet */}
            <div className="col-md-4 col-xs-4 text-right d-flex d-lg-none justify-content-start">
                <button className="btn" onClick={toggleMenu}>
                    <List size="50" color="#263C5C" />
                </button>
            </div>

            {/* Logo */}
            <div className='col-md-4 col-xs-4 col-lg-2 text-center d-flex justify-content-center'>
                <img src="/Image/Logos/MECA-09.png" alt="Logo MECA" />
            </div>

            {/* Botones NavBar */}
            <div className="d-none d-lg-flex justify-content-start align-items-center col-lg-8 d-md-none">
                {navigation.map((item) => (
                    <div key={item.name}>
                        {item.name === 'Acciones' ? (
                            <div className="mx-3 justify-content-center" style={{ position: 'relative' }}>
                                <div className="btn mx-3 text-center NavBar_buttons" style={{ borderRadius: "20px", backgroundColor: '#263C5C' }} onClick={() => handleClick(item.name)}>
                                    <strong className='text-white'>{item.name}</strong>
                                </div>
                                <div hidden={selectedItem !== item.name} className="justify-content-center" style={{ position: 'absolute', top: '100%', left: -12, zIndex: 1 }}>
                                    <Link to={"/logros"} className="btn mx-3 mt-2 d-flex justify-content-center NavBar_buttons" style={{ backgroundColor: '#263C5C', borderRadius: "20px" }}>
                                        <strong className='text-white'>Logros</strong>
                                    </Link>
                                    <Link to={"/eventos"} className="btn mx-3 mt-2 d-flex justify-content-center NavBar_buttons" style={{ backgroundColor: '#263C5C', borderRadius: "20px" }}>
                                        <strong className='text-white'>Eventos</strong>
                                    </Link>
                                    <Link to={"/clasificacion"} className="btn mx-3 mt-2 d-flex justify-content-center NavBar_buttons" style={{ backgroundColor: '#263C5C', borderRadius: "20px" }}>
                                        <strong className='text-white'>Clasificación</strong>
                                    </Link>
                                </div>
                            </div>
                        ) : item.name === 'Explorar' ? (
                            <div className="mx-3 justify-content-center" style={{ position: 'relative' }}>
                                <div className="btn mx-3 text-center NavBar_buttons" style={{ borderRadius: "20px", backgroundColor: '#263C5C' }} onClick={() => handleClick(item.name)}>
                                    <strong className='text-white'>{item.name}</strong>
                                </div>
                                <div hidden={selectedItem !== item.name} className="justify-content-center" style={{ position: 'absolute', top: '100%', left: 0, zIndex: 1 }}>
                                    <Link to={"/monumentos"} className="btn mx-3 mt-2 d-flex justify-content-center NavBar_buttons" style={{ backgroundColor: '#263C5C', borderRadius: "20px" }}>
                                        <strong className='text-white'>Obras</strong>
                                    </Link>
                                    <Link to={"/autores"} className="btn mx-3 mt-2 d-flex justify-content-center NavBar_buttons" style={{ backgroundColor: '#263C5C', borderRadius: "20px" }}>
                                        <strong className='text-white'>Autores</strong>
                                    </Link>
                                    <Link to={"/estilos"} className="btn mx-3 mt-2 d-flex justify-content-center NavBar_buttons" style={{ backgroundColor: '#263C5C', borderRadius: "20px" }}>
                                        <strong className='text-white'>Estilos</strong>
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <Link to={item.path} className="btn mx-3 d-flex justify-content-center NavBar_buttons" style={{ backgroundColor: '#263C5C', borderRadius: "20px" }}>
                                <strong className='text-white'>{item.name}</strong>
                            </Link>
                        )}
                    </div>
                ))}
            </div>

            {/* Menú desplegable para tablet */}
            <div className={`col-md-12 d-md-none ${menuOpen ? 'd-block' : 'd-none'}`}>
                {navigation.map((item) => (
                    <div key={item.name}>
                        <Link to={item.path} className="btn mx-3 mt-2 d-flex justify-content-center NavBar_buttons" style={{ backgroundColor: '#263C5C', borderRadius: "20px" }}>
                            <strong className='text-white'>{item.name}</strong>
                        </Link>
                    </div>
                ))}
            </div>

            {/* Perfil */}
            <div className='col-md-4 col-xs-4 col-lg-2 text-right'>
                <img className="flex float-right p-1" src="/Image/PerfilPorDefecto.png" alt="PerfilPorDefecto" style={{ border: "1px solid #263C5C", borderRadius: "50%", maxWidth: "40px", height: "auto" }} />
            </div>
        </div>
    );
}
