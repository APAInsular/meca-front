import React from 'react';
import '../styles/InfoPage.css';
import qrcode from '../images/SP_blog_Link.jpg';
import map from '../images/maps.png';
import { ArrowRight, QrCode, ChatLeftText, HandThumbsUp, Journal } from 'react-bootstrap-icons';

const InfoPage = () => {
    const rewards = [   
        {img: <QrCode></QrCode>, nombre: "QR", totems: "100"},
        {img: <ChatLeftText></ChatLeftText>, nombre: "Comentario", totems: "10"},
        {img: <HandThumbsUp></HandThumbsUp>, nombre: "Valorar", totems: "100"},
        {img: <Journal></Journal>, nombre: "Blog", totems: "10"},
    ]
    return (
        <div className='container-info-page'>
            <div className='info-page-box1 col-sm-12 col-md-12 col-lg-12'>
                <div className='info-box1'>
                    <h1 className='info-pg-h1'>Ver más</h1>
                    <h2>Moverse más</h2>
                    <p>Escanee el código para experimentar más.</p>
                    <p>No se necesita ninguna aplicación. Es fácil.</p>
                </div>
                <div className='d-flex justify-content-center m-3'>
                    <img
                        src={qrcode}
                        alt='qr'
                        className='rounded rounded-3'
                        style={{ height: 'auto', width: '100%', maxWidth: '250px', maxHeight: '500px' }}
                    />
                </div>
            </div>
            <div className='info-page-box2 col-xs-12 col-md-12 col-lg-12'>
                <div className='info-box3'>
                    <h1 className='puntos_h1'>Puntos de recogida</h1>
                </div>
            </div>
            <div className='d-flex justify-content-center flex-wrap align-items-stretch'> 
                <div className='col-12 col-md-5 m-3'>
                    <div className='rounded rounded-5 p-3' style={{backgroundColor: "#7B96FF"}}>
                        <div className='text-center h1 d-flex justify-content-evenly fw-bold' style={{color: "#263c5c"}}><span >Nombre</span> Totems</div>
                            <div className='m-3 d-flex fs-2 text-white align-items-center justify-content-around fw-bold'>Platino <ArrowRight></ArrowRight> 100000</div>
                            <hr className='mx-1 text-white'></hr>
                            <div className='m-3 d-flex fs-2 text-white align-items-center justify-content-around fw-bold'>Platino <ArrowRight></ArrowRight> 100000</div>
                            <hr className='mx-1 text-white'></hr>
                            <div className='m-3 d-flex fs-2 text-white align-items-center justify-content-around fw-bold'>Platino <ArrowRight></ArrowRight> 100000</div>
                            <hr className='mx-1 text-white'></hr>
                            <div className='m-3 d-flex fs-2 text-white align-items-center justify-content-around fw-bold'>Platino <ArrowRight></ArrowRight> 100000</div>
                    </div>
                </div>
                <div className='col-12 col-md-5 m-3'>
                    <div className='rounded rounded-5 p-3' style={{backgroundColor: "#7B96FF"}}>
                        <div className='text-center h1' style={{color: "#263c5c"}}>Acerca de este proyecto</div>
                        <hr className='mx-1 text-black'></hr>
                        <div className='text-center col-8 mx-auto m-3 text-white'>Después de escanear el código QR cerca del monumento, podrá obtener más información sobre ese objeto y también recibirá puntos por las tareas completadas.</div>
                        <hr className='mx-1 text-black'></hr>
                        <div className='text-center h1' style={{color: "#263c5c"}}>Eventos entrates</div>
                        <hr className='mx-1 text-black'></hr>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center flex-wrap flex-md-row-reverse p-5'>
                <div className='col-12 col-md-5 m-3 fs-3 text-center'>
                Al escanear los códigos QR cerca de los monumentos y explorarlos, serás recompensado con puntos por las tareas completadas.
                </div>
                <img className="col-12 col-md-5 text-center align-items-center d-flex justify-content-center m-3" style={{width: "30em", height: "20em"}} src={map} alt='/'/>
            </div>
        </div>
    );
};

export default InfoPage;
