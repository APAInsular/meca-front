import React from "react";
import "../styles/MonumentPage.css";
import ObrasRelacionadas from "../components/AuthorPage/ObrasRelaciondas";


const MonumentPage = () => {
  return (
    <div>
      <div className="d-flex flex-wrap justify-content-center align-items-start mx-auto">
        <div className="col-12 d-flex justify-content-center flex-wrap col-lg-6">
          <div className="h1 text-center m-3 col-12">Escultura Movil</div>
          <img src={"/Image/Obra.jpg"} alt="obra" className="col-9 col-md-6 col-lg-9 m-3" style={{ height: "auto" }}></img>
          <div className="col-9 col-6-md col-lg-9 m-3 desc" style={{ textAlign: "justify", textJustify: "auto" }}>César Manrique Cabrera <br></br>Arrecife, 24 abr 1919 - Teguise, 25 sep 1992 Pintor, escultory artista canario conocido particularmente por los proyectos arquitectónicos en los que intervino como director artístico. Compaginó su obra con la defensa de los valores medioambientales de Canarias. Buscó la armonía entre el arte y la naturaleza como espacio creativo. Obtuvo, entre otros, el Premio Mundial de Ecología y Turismo y el Premio Europa.</div>
        </div>
        <hr className="text-center text-black mx-auto m-3 col-8 h-line-1"></hr>
        <div className="row col-lg-6 mx-auto d-flex flex-wrap justify-content-center">
          <div className="col-12 d-flex justify-content-center flex-wrap col-md-6 col-lg-9">
            <div className="h1 text-center m-3 col-12">Autor</div>
            <img src={"/Image/Cesar.jpg"} alt="obra" className="col-9 m-3 img-fluid" style={{ height: "auto" }}></img>
            <div className="col-9 m-3 desc text-center" style={{ textAlign: "justify", textJustify: "auto" }}>César Manrique <br></br> (Arrecife, 24 abr 1919 - Teguise, 25 sep 1992) Pintor, escultory artista canario</div>
          </div>
          <hr className="text-center text-black mx-auto m-3 col-4 h-line"></hr>
          <div className="col-12 d-flex justify-content-center flex-wrap col-md-6 col-lg-9">
            <div className="h1 text-center m-3 col-12">Ubicación</div>
            <img src={"/Image/Map.png"} alt="obra" className="col-9 m-3 img-fluid" style={{ height: "auto" }}></img>
            <div className="col-9 m-3 desc text-center" style={{ textAlign: "justify", textJustify: "auto" }}>Parque infantil del Castillo Negro <br></br>Av. la Constitución <br></br>38003 Santa Cruz de Tenerife</div>
          </div>
        </div>
      </div>
      <hr className="text-center text-black mx-auto m-3 col-8 h-line"></hr>
      <div>
        <div className="text-center h1">Obras Destacadas</div>
        <div className="col-9 mx-auto m-3 col-lg-6"><ObrasRelacionadas></ObrasRelacionadas></div>
      </div>
      <hr className="text-center text-black mx-auto m-3 col-8 h-line"></hr>
      <div className="col-12 col-lg-6 d-flex justify-content-center flex-wrap mx-auto">
        <div className="h1 text-center m-3 col-12">Ruta Relacionidas</div>
        <img src={"/Image/Map.png"} alt="obra" className="col-9 m-3 img-fluid" style={{ height: "auto" }}></img>
        <div className="col-9 m-3 desc " style={{ textAlign: "justify", textJustify: "auto" }}>César Manrique Cabrera (Arrecife, 24 de abril de 1919-Teguise) Pintor, escultory artista canario conocido particularmente por los proyectos arquitectónicos.</div>
      </div>
    </div>
  );
}

export default MonumentPage