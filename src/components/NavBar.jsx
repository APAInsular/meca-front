
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import { Dropdown } from 'react-bootstrap';

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

    // 34,16px
    // 104,882px

    return (
        <div className='my-3 px-3 d-flex align-items-center'>
            <div className='col-md-1 justify-content-center'>
                <img src="/Image/Logos/MECA-09.png" alt="Logo MECA" />
            </div>
            <div className="col-md-9 d-none d-sm-flex justify-content-start align-items-center">
                {navigation.map((item) => (
                    <div key={item.name}>
                        {item.name === 'Acciones' || item.name === 'Explorar' ? (
                            <div onClick={() => handleClick(item.name)} className="mx-3 justify-content-center">
                                <div className="btn mx-3 text-center" style={{ borderRadius: "20px", backgroundColor: '#263C5C' }}>
                                    <strong className='text-white'>{item.name}</strong>
                                </div>
                                <div hidden={selectedItem !== item.name}>
                                    <Link to={item.path} className="btn mx-3 mt-2 d-flex justify-content-center" style={{ backgroundColor: '#263C5C', borderRadius: "20px" }}>
                                        <strong className='text-white'>Logros</strong>
                                    </Link>
                                    <Link to={item.path} className="btn mx-3 mt-2 d-flex justify-content-center" style={{ backgroundColor: '#263C5C', borderRadius: "20px" }}>
                                        <strong className='text-white'>Eventos</strong>
                                    </Link>
                                    <Link to={item.path} className="btn mx-3 mt-2 d-flex justify-content-center" style={{ backgroundColor: '#263C5C', borderRadius: "20px" }}>
                                        <strong className='text-white'>Clasificación</strong>
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <Link to={item.path} className="btn mx-3 d-flex justify-content-center" style={{ backgroundColor: '#263C5C', borderRadius: "20px" }}>
                                <strong className='text-white'>{item.name}</strong>
                            </Link>
                        )}
                    </div>
                ))}
            </div>
            <div className='col-md-2 text-right'>
                <img src="/Image/PerfilPorDefecto.png" alt="PerfilPorDefecto" style={{ width: "100%", maxWidth: "45px", height: "auto" }} />
            </div>
        </div>
    );
}
