import React from "react";
import AuthorImg from "../../images/Cesar.jpg"

import "../../styles/Author.css"

function Author() {
    return (
        <div className="col-12 d-flex justify-content-center flex-wrap">
                <div className="col-6">
                    <p className="h1 col-12 mb-2">Cesar Manrique</p>
                    <img src={AuthorImg} alt="author" className="col-12" style={{height: "auto"}}></img>
                </div>
                <div className="col-6">
                    <p className="text mb-2 col-12 mt-lg-5">César Manrique Cabrera (Arrecife, 24 de abril de 1919-Teguise) Pintor, escultory artista canario </p>
                    <p className="text col-12">conocido particularmente por los proyectos arquitectónicos en los que intervino como director artístico.1 Compaginó su obra con la defensa de los valores medioambientales de Canarias. Buscó la armonía entre el arte y la naturaleza como espacio creativo. Obtuvo, entre otros, el Premio Mundial de Ecología y Turismo y el Premio Europa.</p>
                </div>
            </div>
    );
}

export default Author;