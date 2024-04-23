import React from "react";
import ObrasDestacadas from "src/components/HomePage/ObrasDestacadas";
import Cezar from "../images/Cesar.jpg";
import { Heart } from "react-bootstrap-icons";
import Usuario from "../images/nombreavatar.svg";

const FavoritePage = () => {
    return (
        <div>
            <p className="h1 rounded col-6 col-lg-3 text-center mx-auto m-5" style={{backgroundColor: "yellow"}}>Favoritos</p>
            <p className="h2 col-6 col-lg-3 text-center mx-auto m-5">Obras <span className="rounded" style={{backgroundColor: "yellow"}}>Favoritos</span></p>
            <ObrasDestacadas></ObrasDestacadas>
            <div> 
            <p className="h2 col-6 text-center mx-auto m-5">Autores <span className="rounded" style={{backgroundColor: "yellow"}}>Favoritos</span></p>
                <div className="mx-auto col-9 col-lg-3">
                    <img src={Cezar} alt="author" className="col-9 mx-auto" style={{height: "auto"}}></img>
                    <p className="fw-bold d-flex justify-content-between m-2 col-9 mx-auto">Cezar Anrique <Heart color="red" size="20"></Heart></p>
                    <p> (Arrecife, 24 abr 1919 - Teguise, 25 sep 1992) Pintor, escultory artista canariow</p>
                </div> 
                <div className="mx-auto col-9 col-lg-3">
                    <img src={Cezar} alt="author" className="col-9 mx-auto" style={{height: "auto"}}></img>
                    <p className="fw-bold d-flex justify-content-between m-2 col-9 mx-auto">Cezar Anrique <Heart color="red" size="20"></Heart></p>
                    <p> (Arrecife, 24 abr 1919 - Teguise, 25 sep 1992) Pintor, escultory artista canariow</p>
                </div>
            </div>
            <div className='mx-auto col-9 col-lg-9'>
                <p className="h2 col-6 text-center mx-auto m-5">Posts <span className="rounded" style={{backgroundColor: "yellow"}}>Favoritos</span></p>
                <img src={Cezar} alt="author" className="col-9 col-lg-3 mx-auto" style={{height: "auto"}}></img>
                <div className="d-flex justify-content-between align-items-center col-6 mx-auto">
                    <span className="d-flex align-items-center"><img src={Usuario} alt="avatar"></img>Nombre Usuario</span> 22.04.2024
                    <p className="col-12">Título de la entrada del blog</p>
                </div>
            </div>
        </div>
    );
};

export default FavoritePage