import React, { useState } from "react";
import { Cursor, Star, StarFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Obra = ({ obra }) => {
    let idioma = window.location.pathname.split("/")[1];
    idioma = idioma || 'es';

    function getYellowStars(rating) {
        const truncatedRating = Math.floor(Math.max(0, Math.min(5, rating))); // Ignora la parte decimal y redondea hacia abajo
        const yellowStars = [];

        // Añade componentes de estrellas rellenas al array
        for (let i = 0; i < truncatedRating; i++) {
            yellowStars.push(<StarFill color={"yellow"} key={i} />);
        }

        // Añade componentes de estrellas vacías si es necesario
        for (let i = truncatedRating; i < 5; i++) {
            yellowStars.push(<Star color={"yellow"} key={i} />);
        }

        return yellowStars;
    }

    return (
        <Link to={`/${idioma}/monumentos/${obra.id}`} style={{ color: "black", textDecoration: "none" }} className="col-xs-12 col-md-6 col-lg-3 d-flex flex-column align-items-center">
            <div>
                <img src={"/Image/Obra.jpg"} alt="ImagenObra" style={{ width: "200px", height: "200px" }} />
                <div className="text-center mt-2">
                    <strong style={{ fontSize: "13px" }}>{obra.title}</strong>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <div className="d-flex flex-column">
                        {obra.authors.map((autor, index) => (
                            <div key={index} className="d-flex justify-content-center">
                                <span style={{ fontSize: "12px" }}>{autor.name}</span>
                            </div>
                        ))}
                    </div>

                    <span style={{ fontSize: "11px" }}>{obra.creation_date}</span>

                    <div className="d-flex" style={{ cursor: "pointer" }}>
                        {
                            getYellowStars(obra.avg_rating)
                        }
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Obra;
