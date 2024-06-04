import React, { useState } from "react";

import ObrasDestacadas from "../components/HomePage/ObrasDestacadas";
import EventosDestacados from "../components/HomePage/EventosDestacados";
import AutoresDestacados from "../components/HomePage/AutoresDestacados";
import RutasDestacadas from "../components/HomePage/RutasDestacadas";
import StarRatingModal from "../components/HomePage/StarRatingModal";

const HomePage = () => {
    return (
        <div className="container-fluid">
            <div className="row mt-2 mb-1">
                <div className="align-items-center text-center">
                    Para sumergirse en un viaje más emocionante e ilustrativo del arte que nuestra isla ofrece te invitamos a registrarte, elegir el idioma y a disfrutar de la manera que tú quieras libremente
                    Les invitamos a recorrer cada sendero, a contemplar cada obra con detenimiento, a dejar que la imaginación vuele y a encontrar su propia interpretación en cada escultura. Este es su espacio, su tiempo para descubrir y disfrutar.
                </div>
            </div>
            <div className="row">
                <ObrasDestacadas />
            </div>

            <div className="row">
                <div className="col-xs-12 col-lg-6">
                    <EventosDestacados />
                </div>
                <div className="col-xs-12 col-lg-6">
                    <AutoresDestacados />
                </div>
            </div>

            <div>
                <RutasDestacadas />
            </div>
            <div>
                {/* <EntradasDestacadas /> */}
            </div>
        </div>
    )
}

export default HomePage;