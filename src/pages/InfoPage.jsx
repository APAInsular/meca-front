import React from 'react'
import '../styles/InfoPage.css';
import qrImage from '../images/SP_blog_Link.jpg';
import maps from '../images/maps.png';
import NavBar from '../components/NavBar';

const InfoPage = () => {
    return (
        <div><NavBar/> 
        <div className='container-info-page'>
                <div className='info-page-box1'>
                    <div className='info-box1'>
                        <h1 className='info-pg-h1'>Ver más</h1>                    
                            <h2>Moverse más</h2>
                                 <p>Escanee el código para experimentar más.</p>
                                    <p>No se necesita ninguna aplicación. Es fácil.</p>
                                        </div>
                <div className='info-box2'>
                    <img className="qr-image" src={qrImage} alt="qr" />
                        </div>
                            </div>
                <div className='info-page-box2'>
                   <div className='info-box3'>
                        <h1 className='puntos_h1'>Puntos de recogida</h1>
                            </div>
                                </div>
                <div className='boxes_2'>
                    <div className='left_box1'>
                        <p className='box_n_t'>Nombre Totems</p>
                        <h1 className='platino_r'>Platino = 100000</h1>
                        <div className='h_line_1'></div>
                        <h1 className='platino_r'>Platino = 100000</h1>
                        <div className='h_line_1'></div>
                        <h1 className='platino_r'>Platino = 100000</h1>
                        <div className='h_line_1'></div>
                        <h1 className='platino_r'>Platino = 100000</h1>
                        <div className='h_line_1'></div>
                        </div>
                    <div className='right_box1'>
                        </div>
                            </div>
                    <div className='bottom_parts'>
                        <div className='maps'>
                            <img className="maps" src={maps} alt="mapa" />
                        </div>
                        <div className='about_qr'>
                            <p>Al escanear los códigos QR cerca de los monumentos <br></br> y explorarlos, serás recompensado con puntos por las <br></br> tareas completadas.</p>
                        </div>
                    </div>
        </div></div>
    )
}

export default InfoPage;