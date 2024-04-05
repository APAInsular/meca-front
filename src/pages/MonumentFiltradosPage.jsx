import React from 'react';
import '../styles/MonumentFiltradosPage.css'
import myImagea from '../images/Obra.jpg'

const MonumentFiltradosPage = () => {
  return (
    <div className='filtro'>
    <div className='lista-obras'>
        <h1>Lista de Obras</h1>
    </div>
    <div className='esculturas'>
        <h1>ESCULTURAS EN LA ZONA DE PLAYA BLANCA</h1>
    </div>
    <div className='obras'>
        <div className='box1'>
            <img className='obra1' src={myImagea} alt="obra" />
            <h3>Nombre de la obra</h3>
            <p>Nombre Author: Ano Creacion</p>
        </div>
        <div className='box2'>
            <img className='obra2' src={myImagea} alt="obra" />
            <h3>Nombre de la obra</h3>
            <p>Nombre Author: Ano Creacion</p> 
        </div>
        <div className='box3'>
            <img className='obra3' src={myImagea} alt="obra" />
            <h3>Nombre de la obra</h3>
            <p>Nombre Author: Ano Creacion</p> 
        </div>
        <div className='box4'>
            <img className='obra4' src={myImagea} alt="obra" /> 
            <h3>Nombre de la obra</h3>
            <p>Nombre Author: Ano Creacion</p>
        </div>
        <div className='box5'>
            <img className='obra5' src={myImagea} alt="obra" /> 
            <h3>Nombre de la obra</h3>
            <p>Nombre Author: Ano Creacion</p>
        </div>
        <div className='box6'>
            <img className='obra6' src={myImagea} alt="obra" /> 
            <h3>Nombre de la obra</h3>
            <p>Nombre Author: Ano Creacion</p>
        </div>
        <div className='box7'>
            <img className='obra7' src={myImagea} alt="obra" /> 
            <h3>Nombre de la obra</h3>
            <p>Nombre Author: Ano Creacion</p>
        </div>
        <div className='box8'>
            <img className='obra8' src={myImagea} alt="obra" /> 
            <h3>Nombre de la obra</h3>
            <p>Nombre Author: Ano Creacion</p>
        </div>
    </div>
    </div>
  );
};

export default MonumentFiltradosPage;