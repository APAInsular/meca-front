import React from "react";
import Obra from "../images/Obra.jpg";
import Autor from "../images/Cesar.png"
import Map from "../images/maps.png"
import "../styles/MonumentPage.css";
import ObrasRelacionadas from "src/components/AuthorPage/ObrasRelaciondas";


const AuthorPage = () => {
  return (
    <div className="d-flex">
        <div className="row">
        <div
          className="ml-[10%] mx-auto col-xs-12 col-md-6 col-lg-6"
          style={{ width: "50%" }}
        >
          <h1 className="mx-auto">Escultura Móvil</h1>
          <img
            className="w-[35%] h-auto mt-3 mx-auto"
            src="/Image/monumentos_.png"
            alt=""
          />
          <p className="mt-3 d-flex justify-content-center">
            César Manrique Cabrera  Arrecife, 24 abr 1919 - Teguise, 25 sep 1992
            Pintor, escultor y artista canario conocido particularmente por los
            proyectos arquitectónicos en los que intervino como director
            artístico. Compaginó su obra con la defensa de los valores
            medioambientales de Canarias. Buscó la armonía entre el arte y la
            naturaleza como espacio creativo. Obtuvo, entre otros, el Premio
            Mundial de Ecología y Turismo y el Premio Europa.
          </p>
        </div>
        <div className="col-xs-12 col-md-6 col-lg-6 mb-5">
          
          <h1 className="mx-auto">Autor</h1>
          <img
            className="w-[40%] h-auto mt-2 mx-auto"
            src="/Image/Cesar.jpg"
            alt="Cesar"
          />
          <p className="mx-auto">
            César Manrique (Arrecife, 24 abr 1919 - Teguise, 25 sep 1992)
            Pintor, escultor y artista canario 
          </p>
          <h1 className="mx-auto">Ubicación</h1>
          <img
            className="w-[50%] h-auto mt-2 mx-auto"
            src="/Image/map.png"
            alt="map"
          />
          <p className="mx-auto d-flex">
            Parque infantil del Castillo Negro Av. la Constitución 38003 Santa
            Cruz de Tenerife
          </p>
        </div>
      </div>
    </div>
  );
};

export default MonumentPage