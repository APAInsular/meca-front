import React from "react";

import ObrasDestacadas from "../components/HomePage/ObrasDestacadas";
import EventosDestacados from "../components/HomePage/EventosDestacados";
import AutoresDestacados from "../components/HomePage/AutoresDestacados";

const HomePage = () => {
    return (
        <div className="container-fluid">
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
                {/* <RutasDestacadas /> */}
            </div>
            <div>
                {/* <EntradasDestacadas /> */}
            </div>
        </div>
    )
}

export default HomePage;