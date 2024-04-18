import React from "react";

import ObraRuta from "src/components/RoutePage/ObraRuta";
import RouteInfo from "src/components/RoutePage/RouteInfo";

const RoutePage = () => {

  const obrasRuta = [
    {
      img: "/Image/Obra.jpg",
      info: "César Manrique Cabrera (Arrecife, 24 de abril de 1919-Teguise) Pintor, escultor y artista canario conocido particularmente por los proyectos arquitectónicos."
    },
    {
      img: "/Image/Obra.jpg",
      info: "César Manrique Cabrera (Arrecife, 24 de abril de 1919-Teguise) Pintor, escultor y artista canario conocido particularmente por los proyectos arquitectónicos."
    },
    {
      img: "/Image/Obra.jpg",
      info: "César Manrique Cabrera (Arrecife, 24 de abril de 1919-Teguise) Pintor, escultor y artista canario conocido particularmente por los proyectos arquitectónicos."
    },
    {
      img: "/Image/Obra.jpg",
      info: "César Manrique Cabrera (Arrecife, 24 de abril de 1919-Teguise) Pintor, escultor y artista canario conocido particularmente por los proyectos arquitectónicos."
    },
    {
      img: "/Image/Obra.jpg",
      info: "César Manrique Cabrera (Arrecife, 24 de abril de 1919-Teguise) Pintor, escultor y artista canario conocido particularmente por los proyectos arquitectónicos."
    }
  ]

  const ruta = {
    img: "/Image/maps.png",
    info: "César Manrique Cabrera (Arrecife, 24 de abril de 1919-Teguise) Pintor, escultor y artista canario conocido particularmente por los proyectos arquitectónicos.",
    num_obras: obrasRuta.length,
    num_obras_complete: 2,
  }

  // progessBar max 100
  // 100 / ruta.num_obras

  return (
    <div className="row text-center my-4">
      <div className="col-lg-6 col-12 mt-3">
        <RouteInfo ruta={ruta} />
      </div>
      <div className="col-lg-6 col-12 mt-3">
        <h2 className="fs-1">Obras</h2>
        <div className="col-3">
          {/* ProgressBar */}
        </div>
        <div className="col-12 col-md-9">
          {obrasRuta.map((data, index) => {
            return <ObraRuta key={index} obra={data} />
          })}
        </div>

      </div>
    </div>
  );
};

export default RoutePage;
