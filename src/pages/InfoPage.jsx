import React from 'react'
import '../styles/InfoPage.css';
import qrImage from '../images/SP_blog_Link.jpg';
import maps from '../images/maps.png';
import { QrCode } from 'react-bootstrap-icons'

const InfoPage = () => {
    return (
        <div className='container-info-page'>
            <div className='info-page-box1 col-sm-12 col-md-12 col-lg-12'>
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
            <div className='info-page-box2 col-xs-12 col-md-12 col-lg-12'>
                <div className='info-box3'>
                    <h1 className='puntos_h1'>Puntos de recogida</h1>
                </div>
            </div>




                <div className='boxes_2 col-12'>
                    <div className='left_box1 col-6'>
                        <div className='top_box_1_left'>
                            <h1 className='top_box_1_text'>Nombre</h1>
                        </div>
                        <div className='top_box_2_right'>
                            <h1 className='top_box_2_text'>Totems</h1>
                        </div>
                        <div className='icons_box_left'>
                            <QrCode className='QrCode' />
                            <QrCode className='QrCode' />
                            <QrCode className='QrCode' />
                            <QrCode className='QrCode' />
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



                    <div className='right_box1 col-6'>
                        <h1 className='acerca'>Acerca de este proyecto</h1>
                    </div>
                </div>




                <div className='bottom_parts d-flex justify-content-center row'>
                    <div className='maps d-flex col-xs-12 col-6'>
                        <img className="maps" src={maps} alt="mapa" />
                    </div>
                    <div className='about_qr d-flex col-xs-12 col-6 align-items-center'>
                        <p>Al escanear los códigos QR cerca de los monumentos y explorarlos, serás recompensado con puntos por las tareas completadas.</p>
                    </div>
                </div>






        </div>
            );
}

            export default InfoPage;