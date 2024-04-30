import React from "react";
import Obra from "../images/Obra.jpg";
import Autor from "../images/Cesar.png"
import Map from "../images/maps.png"
import "../styles/MonumentPage.css";
import ObrasRelacionadas from "src/components/AuthorPage/ObrasRelaciondas";
import { useTranslation } from 'react-i18next';


const MonumentPage = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div>
      <div className="d-flex flex-wrap justify-content-center align-items-start mx-auto">
        <div className="col-12 d-flex justify-content-center flex-wrap col-lg-6">
          <div className="h1 text-center m-3 col-12">Escultura Movil</div>
          <img src={Obra} alt="obra" className="col-9 col-md-6 col-lg-9 m-3" style={{ height: "auto" }}></img>
          <div className="col-9 col-6-md col-lg-9 m-3 desc" style={{ textAlign: "justify", textJustify: "auto" }}>{t("monumentPage.monumentDesc")}</div>
        </div>
        <hr className="text-center text-black mx-auto m-3 col-8 h-line-1"></hr>
        <div className="row col-lg-6 mx-auto d-flex flex-wrap justify-content-center">
          <div className="col-12 d-flex justify-content-center flex-wrap col-md-6 col-lg-9">
            <div className="h1 text-center m-3 col-12">Autor</div>
            <img src={Autor} alt="obra" className="col-9 m-3 img-fluid" style={{ height: "auto" }}></img>
            <div className="col-9 m-3 desc text-center" style={{ textAlign: "justify", textJustify: "auto" }}>{t("monumentPage.monumentAuthorDesc")}</div>
          </div>
          <hr className="text-center text-black mx-auto m-3 col-4 h-line"></hr>
          <div className="col-12 d-flex justify-content-center flex-wrap col-md-6 col-lg-9">
            <div className="h1 text-center m-3 col-12">{t("monumentPage.monumentLocation")}</div>
            <img src={Map} alt="obra" className="col-9 m-3 img-fluid" style={{ height: "auto" }}></img>
            <div className="col-9 m-3 desc text-center" style={{ textAlign: "justify", textJustify: "auto" }}>{t("monumentPage.monumentLocationDesc")}</div>
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
        <div className="h1 text-center m-3 col-12">{t("monumentPage.monumentRuta")}</div>
        <img src={Map} alt="obra" className="col-9 m-3 img-fluid" style={{ height: "auto" }}></img>
        <div className="col-9 m-3 desc " style={{ textAlign: "justify", textJustify: "auto" }}>{t("monumentPage.monumentRutaDesc")}</div>
      </div>
    </div>
  );
}

export default MonumentPage