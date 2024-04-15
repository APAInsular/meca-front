import React, {useState} from 'react';
import '../styles/NavBarMobile.css';
import logo from '../images/meca-mobile.svg';
import avatar from '../images/PerfilPorDefecto.png';
import { Link } from 'react-router-dom';

export default function NavBarMobile() {
    const [showMenu, setShow] = useState(false);

    return (
        <div>
            <div className="mobile-navbar p-3"> 
            <button onClick={()=>setShow(!showMenu)}> 
            <div className="menu">
                <div className="menu-line"></div>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
            </div></button>
            <img src={logo} alt="logo" className="logo-mobile"></img>
            <img src={avatar} alt="avatar" className='avatar'></img>
        </div>
        <div className="h-line-1-menu"></div>
        { showMenu && <div className='menu-on-screen' onClick={()=>setShow(!showMenu)}>
                <button onClick={()=>setShow(!showMenu)} className='exit-menu mr-3 my-3 float-right'>X</button>
                <div className='menu-list'>
                    <Link to="/"><div className='menu-element title-menu my-1'>Inicio</div></Link>
                    <div className='menu-element title-menu my-1'>Acciones</div>
                    <Link to="/"><div className='menu-element my-1'>Logros</div></Link>
                    <Link to="/"><div className='menu-element my-1'>Eventos</div></Link>
                    <Link to="/"><div className='menu-element my-1'>Clasificación</div></Link>
                    <Link to="/"><div className='menu-element title-menu my-1'>Explorar</div></Link>
                    <Link to="/"><div className='menu-element my-1'>Obras</div></Link>
                    <Link to="/autores"><div className='menu-element my-1'>Autores</div></Link>
                    <Link to="/"><div className='menu-element my-1'>Estilos</div></Link>
                    <Link to="/"><div className='menu-element title-menu my-1'>Blog</div></Link>
                    <Link to="/"><div className='menu-element title-menu my-1'>Contáctanos</div> </Link>
                    <Link to="/info"><div className='menu-element title-menu my-1'>Información</div></Link>
                </div>
            </div>}
        </div>
        
    );
};