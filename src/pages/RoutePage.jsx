import React from "react";
import "../styles/RoutePage.css";
import maps_route from "../images/maps.png";
import Obra_img from "../images/Obra.jpg";

// Import the ProgressBar component

const RoutePage = () => {
  return (
    <div className="container row d-flex">
        <div className="row col-xs-6 col-md-6 col-lg-12">
      <div className="ruta-left">
        <h1 className="ruta-h1">Ruta</h1>
        <img className="maps" src={maps_route} alt="" />
        <p className="about_cesar">
          César Manrique Cabrera (Arrecife, 24 de abril de 1919-Teguise) Pintor,
          escultor y artista canario conocido particularmente por los proyectos
          arquitectónicos.
        </p>
      </div>

      <div className="vertical-line "></div> 

      <div className="obras-right col-xs-6 col-md-6 col-lg-12">


        <div className="progress_bar_full">
          <div className="progress_bar_completed"></div>
        </div>
        <div className="images_obras">
        <div className="route_box1 d-flex">
        <img className="obra_img1 h-14 w-14" src={Obra_img} alt="" />
        <p className="obra_img1_p">César Manrique Cabrera (Arrecife, 24 de abril de 1919-Teguise) Pintor, escultor y artista canario 
        conocido particularmente por los proyectos arquitectónicos.</p>
        </div>
        <div className="route_box2 d-flex">
        <img className="obra_img2 h-14 w-14" src={Obra_img} alt="" />
        <p className="obra_img2_p">César Manrique Cabrera (Arrecife, 24 de abril de 1919-Teguise) Pintor, escultor y artista canario 
        conocido particularmente por los proyectos arquitectónicos.</p>
            </div>
        </div>

      <h1 className="obras-h1 text-center">Obras</h1>
        
      </div>
      </div>
    </div>
  );
};

export default RoutePage;
