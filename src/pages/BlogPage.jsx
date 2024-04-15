import '../styles/BlogPage.css';

import entra from '../images/entra.svg';
import filtra from '../images/filtras.svg';
import nombre from '../images/nombre.svg';
import monument from '../images/monumento.svg';
import avatar from '../images/nombreavatar.svg';


const RoutePage = () => {
    return (
        <div className="BlogPage">
            <div class="searchbar">
            <form action="" method="get">
                <input type="search" name="q" placeholder="Busqueda" />
                <button class="entra"><img class="entra" src={entra}/></button>           
                <button class="filtras"><img class="filtra" src={filtra}/></button>  
            </form>
            </div>
            <div class="nombregroup">
                <img src={nombre} class='nombr' alt=''/>
                <img src={nombre} class='nombr' alt=''/>
                <img src={nombre} class='nombr' alt=''/>
                <img src={nombre} class='nombr' alt=''/>
                <img src={nombre} class='nombr' alt=''/>
                <img src={nombre} class='nombr' alt=''/>
                <img src={nombre} class='nombr' alt=''/>
            </div>
            <div class='nombretext'>
                <p class='nom1'>Nombre</p>
                <p class='nom'>Nombre</p>
                <p class='nom2'>Nombre</p>
                <p class='nom3'>Nombre</p>
                <p class='nom4'>Nombre</p>
                <p class='nom5'>Nombre</p>
                <p class='nom6'>Nombre</p>
            </div>
            <div class='blogblock'>
                <img src={monument} class='monumento' alt="/"/>
                <img src={avatar} class="avataro" alt="/"/><p>Nombre Apellidos</p><p class="date">23/04/1956</p>
                <h5>Título de la entrada del blog</h5>
                <p class="description">Descripción corta de la entrada del blog de<br></br>una usuario concreto mientras escribe esta<br></br>descripción que saldrá en el homePage<br></br>abajo del todo</p>
                <div class='categories'>
                    <h5 className='one'>Escultura</h5>
                    <h5 className='two'>Arte</h5>
                    <h5 className='three'>Fuerteventura</h5>
                </div>
            </div>
            <div class='blogblock'>
                <img src={monument} class='monumento' alt="/"/>
                <img src={avatar} class="avataro" alt="/"/><p>Nombre Apellidos</p><p class="date">23/04/1956</p>
                <h5>Título de la entrada del blog</h5>
                <p class="description">Descripción corta de la entrada del blog de<br></br>una usuario concreto mientras escribe esta<br></br>descripción que saldrá en el homePage<br></br>abajo del todo</p>
                <div class='categories'>
                    <h5 className='one'>Escultura</h5>
                    <h5 className='two'>Arte</h5>
                    <h5 className='three'>Fuerteventura</h5>
                </div>            
            </div>
            <div class='blogblock'>
                <img src={monument} class='monumento' alt="/"/>
                <img src={avatar} class="avataro" alt="/"/><p>Nombre Apellidos</p><p class="date">23/04/1956</p>
                <h5>Título de la entrada del blog</h5>
                <p class="description">Descripción corta de la entrada del blog de<br></br>una usuario concreto mientras escribe esta<br></br>descripción que saldrá en el homePage<br></br>abajo del todo</p>
                <div class='categories'>
                    <h5 className='one'>Escultura</h5>
                    <h5 className='two'>Arte</h5>
                    <h5 className='three'>Fuerteventura</h5>
                </div>
            </div>
            <div class='blogblock'>
                <img src={monument} class='monumento' alt="/"/>
                <img src={avatar} class="avataro" alt="/"/><p>Nombre Apellidos</p><p class="date">23/04/1956</p>
                <h5>Título de la entrada del blog</h5>
                <p class="description">Descripción corta de la entrada del blog de<br></br>una usuario concreto mientras escribe esta<br></br>descripción que saldrá en el homePage<br></br>abajo del todo</p>
                <div class='categories'>
                    <h5 className='one'>Escultura</h5>
                    <h5 className='two'>Arte</h5>
                    <h5 className='three'>Fuerteventura</h5>
                </div>
            </div>
        </div>        
    )
}

export default RoutePage;