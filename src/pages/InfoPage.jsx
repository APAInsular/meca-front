import React from 'react';
import '../styles/InfoPage.css';
import qrcode from '../images/qrcode.svg';
import { ArrowRight } from 'react-bootstrap-icons';
import Events from 'src/components/EventPage/Event';

const InfoPage = () => {
    const rewards = [
        {img: "a", nombre: "nombre", totems: "totems"},
        {img: "a", nombre: "nombre", totems: "totems"},
        {img: "a", nombre: "nombre", totems: "totems"},
        {img: "a", nombre: "nombre", totems: "totems"},
        {img: "a", nombre: "nombre", totems: "totems"},
    ]
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center flex-wrap m-1'>
                <div className='border border-black border-5 rounded rounded-5 m-3' style={{maxHeight: "600px"}}>
                    <div className='m-3 m-md-5 text-center h1 mb-2 fw-bold'>Ver más</div>
                    <div className='m-3 m-md-5 text-center h1 fw-bold'>Moverse más</div>
                    <div className='m-3 m-md-5 text-center fs-5'><strong>Escanee el código</strong> para experimentar <strong>más.</strong></div>
                    <div className='m-3 m-md-5 text-center fs-5'><strong>No se necesita ninguna aplicación.</strong> Es fácil.</div>
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
            <div className='col-12 col-md-10 mx-auto m-3' style={{backgroundColor: "#7B96FF"}}>
                <div className='text-center h1'>Puntos de recogida</div>
                <div className='d-flex'> 
                    <div className='col-6'>
                        <div className='d-flex justify-content-around border-bottom border-white fs-4'>
                            <span></span><span>Nombre</span><span>Totems</span>
                        </div>
                        {rewards.map((reward, index) => {
                            const isLastItem = index === rewards.length - 1;
                            return (
                                <div key={index} className={'d-flex justify-content-around fs-4' + (index !== rewards.length - 1 ? ' border-bottom border-white' : '')}>
                                    <span>{reward.img}</span><span>{reward.nombre}</span><span>{reward.totems}</span>
                                </div>  
                            );
                        })}
                    </div>
                    <div className='col-6'>
                        <div className='d-flex justify-content-around border-bottom border-white fs-4'>
                            <span></span><span>Nombre</span><span>Totems</span>
                        </div>
                        {rewards.map((reward, index) => {
                            const isLastItem = index === rewards.length - 1;
                            return (
                                <div key={index} className={'d-flex justify-content-around fs-5' + (index !== rewards.length - 1 ? ' border-bottom border-white' : '')}>
                                    <span>{reward.img}</span><span>{reward.nombre}</span><span>{reward.totems}</span>
                                </div>  
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center flex-wrap align-items-stretch'> 
                <div className='col-12 col-md-5 m-3'>
                    <div className='rounded rounded-5 p-3' style={{backgroundColor: "#7B96FF"}}>
                        <div className='text-center h1 d-flex justify-content-evenly fw-bold'><span>Nombre</span> Totems</div>
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
                        <div className='text-center h1'>Acerca de este proyecto</div>
                        <hr className='mx-1 text-black'></hr>
                        <div className='text-center col-8 mx-auto m-3'>Después de escanear el código QR cerca del monumento, podrá obtener más información sobre ese objeto y también recibirá puntos por las tareas completadas.</div>
                        <hr className='mx-1 text-black'></hr>
                        <div className='text-center h1'>Eventos entrates</div>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center flex-wrap flex-md-row-reverse p-5'>
                <div className='col-12 col-md-4 m-3 fs-3 text-center'>
                Al escanear los códigos QR cerca de los monumentos y explorarlos, serás recompensado con puntos por las tareas completadas.
                </div>
                <div className="col-12 col-md-8 bg-secondary-subtle text-center align-items-center d-flex justify-content-center m-3" style={{width: "30em", height: "20em"}}>MAPA</div>
            </div>
        </div>
    );
};

export default InfoPage;