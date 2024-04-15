
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import { Dropdown } from 'react-bootstrap';

const navigation = [
    { name: 'Inicio', path: '/' },
    { name: 'Explorar', path: '/explorar' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contáctanos', path: '/contactus' },
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
        <div className='my-3 px-3 d-flex align-items-center' style={{ borderBottom: "2px solid #263C5C"}}>
            <div className='col-md-1 justify-content-center'>
                <img src="/Image/Logos/MECA-09.png" alt="Logo MECA" style={{ width: "170px", height: "109px", marginLeft: "-30%" }}/>
            </div>
            <div className="col-md-9 d-none d-sm-flex justify-content-start align-items-center">
                {navigation.map((item) => (
                    <div key={item.name}>
                        {item.name === 'Acciones' || item.name === 'Explorar' ? (
                            <div className="mx-3 justify-content-center" style={{ borderRadius: "10px",position: 'relative' }}>
                                <div className="btn mx-3 text-center NavBar_buttons" style={{ borderRadius: "10px", backgroundColor: '#263C5C' }} onClick={() => handleClick(item.name)}>
                                    <strong className='text-white'>{item.name}</strong>
                                </div>
                                <div hidden={selectedItem !== item.name} style={{ position: 'absolute', top: '100%', left: -12, zIndex: 1 }}>
                                    <div className="btn mx-3 mt-2 d-flex justify-content-center NavBar_buttons" style={{ backgroundColor: '#263C5C', borderRadius: "10px" }}>
                                        <strong className='text-white'>Obras</strong>
                                    </div>
                                    <div className="btn mx-3 mt-2 d-flex justify-content-center NavBar_buttons" style={{ backgroundColor: '#263C5C', borderRadius: "10px" }}>
                                        <strong className='text-white'>Autores</strong>
                                    </div>
                                    <div className="btn mx-3 mt-2 d-flex justify-content-center NavBar_buttons" style={{ backgroundColor: '#263C5C', borderRadius: "10px" }}>
                                        <strong className='text-white'>Estilos</strong>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Link to={item.path} className="btn mx-3 d-flex justify-content-center NavBar_buttons" style={{ backgroundColor: '#263C5C', borderRadius: "10px" }}>
                                <strong className='text-white'>{item.name}</strong>
                            </Link>
                        )}
                    </div>
                ))}
            </div>
            <div className='col-md-2 text-right'>
                <img className="flex float-right" src="/Image/PerfilPorDefecto.png" alt="PerfilPorDefecto" style={{ width: "100%", maxWidth: "45px", height: "auto" }} />
            </div>
        </div>
    );
}
