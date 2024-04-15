import React from 'react'
import '../styles/InfoPage.css';
import qrImage from '../images/SP_blog_Link.jpg';
import maps from '../images/maps.png';
import { QrCode } from 'react-bootstrap-icons'

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
                            <div className='top_box_1_left'>
                                <h1 className='top_box_1_text'>Nombre</h1>
                            </div>
                            <div className='top_box_2_right'>
                                <h1 className='top_box_2_text'>Totems</h1>
                            </div>
                            <div className='icons_box_left'>
                                <QrCode className='QrCode'/>
                                <QrCode className='QrCode'/>
                                <QrCode className='QrCode'/>
                                <QrCode className='QrCode'/>
                            </div>
                            <div className='ranks_left'>
                                <h1 className='platino_rank_left'>Platino</h1>
                                <h1 className='platino_rank1_left'>Platino</h1>
                                <h1 className='platino_rank2_left'>Platino</h1>
                                <h1 className='platino_rank3_left'>Platino</h1>
                            </div>
                            <div className='totems_left'>
                                <h1 className='platino_totems'>100000</h1>
                                <h1 className='platino_totems1'>100000</h1>
                                <h1 className='platino_totems2'>100000</h1>
                                <h1 className='platino_totems3'>100000</h1>
                            </div>
                        </div>



                    <div className='right_box1'>
                            <h1 className='acerca'>Acerca de este proyecto</h1>
                            <div className="acerca_line"></div>
                            <p className='acerca_text'>Después de escanear el código QR cerca del monumento, podrá obtener más información sobre ese objeto y también recibirá puntos por las tareas completadas.</p>
                            <div className="acerca_line"></div>
                            <h1 className='eventos_entrantes'>Eventos Entrantes</h1>
                            <div className="acerca_line"></div>
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