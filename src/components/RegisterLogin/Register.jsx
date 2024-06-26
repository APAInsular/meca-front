import React from "react";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import useAuthContext from '../../hooks/useAuthContext';


const Register = () => {
    const [flags, setFlags] = useState([]);
    const [selectedFlag, setSelectedFlag] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const [first_surname, setFirstSurname] = useState('');
    const [second_surname, setSecondSurname] = useState('');
    const [nationality, setNationality] = useState('España');
    const [location, setLocation] = useState('');
    const [nickname, setNickname] = useState('');

    const { register, errors, loading } = useAuthContext();

    const separarApellidos = (e) => {
        let [apellido1, apellido2] = e.split(' ');

        setFirstSurname(apellido1);
        setSecondSurname(apellido2);
    }

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password === confirm_password) {
            register({ name, nickname, email, password, first_surname, second_surname, nationality, location, confirm_password });
        } else {
            console.log("Las contraseñas no son iguales")
        }
    };

    async function getFlags() {
        await fetch('https://flagcdn.com/es/codes.json')
            .then(response => response.json())
            .then(data => {
                const flagsArray = Object.entries(data)
                    .map(([code, name]) => ({
                        code,
                        name,
                        imgUrl: `https://flagcdn.com/256x192/${code}.png`
                    }))
                    .filter(flag => !flag.code.startsWith('us-'))
                    .sort((a, b) => a.name.localeCompare(b.name));

                console.log("Flags:", flagsArray);

                setFlags(flagsArray);
            })
            .catch(error => console.error('Error fetching flags:', error));
    }

    useEffect(() => {
        getFlags();
    }, []);

    const handleFlagSelect = (code) => {
        setSelectedFlag(code);
        setIsOpen(false);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const stylesArray = [
        {
            display: 'none',
            width: '100%',
            maxHeight: '200px', /* Altura máxima del menú */
            overflowY: 'auto', /* Añade scroll si el contenido excede la altura máxima */
            border: '1px solid #ccc',
            borderTop: 'none',
        },
        {
            display: 'block',
            width: '100%',
            maxHeight: '200px', /* Altura máxima del menú */
            overflowY: 'auto', /* Añade scroll si el contenido excede la altura máxima */
            border: '1px solid #ccc',
            borderTop: 'none',
        },
        {
            display: 'flex',
            alignItems: 'center',
            padding: '8px',
            cursor: 'pointer',
        },
        {
            width: '16px',
            height: '12px',
            marginRight: '5px',
        }
    ];

    return (
        <div className="col-md-5 p-5 d-flex align-items-center justify-content-center border-custom-registerLogin">
            <form className="pl-3 row g-3 d-flex align-items-center" onSubmit={handleRegister}>
                <h2 className="text-center mb-4 text-white">Sign up</h2>
                <div className="col-md-6">
                    <label className="form-label text-white">Nombre *</label>
                    <input
                        type="text"
                        className="form-control custom-input"
                        name="name"
                        placeholder='Nombre'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="col-md-6">
                    <label className="form-label text-white">Apellidos *</label>
                    <input
                        type="text"
                        className="form-control custom-input"
                        name="apellidos"
                        placeholder='Apellidos'
                        onChange={(e) => separarApellidos(e.target.value)}
                    />
                </div>
                <div className="col-12">
                    <label className="form-label text-white">Email *</label>
                    <input
                        type="email"
                        className="form-control custom-input"
                        name="email"
                        placeholder="example@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="col-12">
                    <label className="form-label text-white">Localidad *</label>
                    <input
                        type="text"
                        className="form-control custom-input"
                        name="localidad"
                        placeholder="Localidad"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <div className='col-12'>
                    <div className='d-flex justify-content-center'>
                        <div className='d-flex justify-content-start mx-3'>
                            <button className="btn text-white" type="button" style={{ backgroundColor: "#263c5c" }} onClick={toggleMenu}>
                                Seleccionar Bandera
                            </button>
                        </div>
                        {selectedFlag && (
                            <div className='d-flex align-items-center justify-content-end mx-3'>
                                <span className='fw-semibold mr-2'>{flags.find(flag => flag.code === selectedFlag)?.name || ''}</span>
                                <img src={`https://flagcdn.com/256x192/${selectedFlag}.png`} alt={selectedFlag} style={{ width: "50px", height: "auto" }} />
                            </div>
                        )}
                    </div>
                    <div style={isOpen ? stylesArray[1] : stylesArray[0]} className="menu">
                        <div className="menu-content">
                            {flags.map(flag => (
                                <div key={flag.code} onChange={() => setNationality(flag.name)} style={stylesArray[2]} onClick={() => handleFlagSelect(flag.code)}>
                                    <img src={flag.imgUrl} alt={flag.code} style={stylesArray[3]} />
                                    <span>{flag.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <label className="form-label text-white">Usuario *</label>
                    <input
                        type="text"
                        className="form-control custom-input"
                        name="usuario"
                        placeholder='Usuario'
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                    />
                </div>
                <div className="col-md-6">
                    <label className="form-label text-white">Contraseña *</label>
                    <input
                        type="password"
                        className="form-control custom-input"
                        name="password"
                        placeholder='Contraseña'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="col-md-6">
                    <label className="form-label text-white">Confirmar contraseña *</label>
                    <input
                        type="password"
                        className="form-control custom-input"
                        name="password_confirmation"
                        placeholder='Repite la contraseña'
                        value={confirm_password}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <div className='col-md-7 m-0'>
                    <Link to={'/login'} className="text-register" href="/login">Ya tengo una cuenta</Link>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn color-button-general" disabled={loading}>
                        <strong>Sign up</strong>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Register;