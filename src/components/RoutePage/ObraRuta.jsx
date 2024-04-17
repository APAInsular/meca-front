import React from "react";

const ObraRuta = ({ obra }) => {
    return (
        <div className="row my-3">
            <div className="col-12 col-md-4 d-flex justify-content-center">
                <img src={obra.img} alt="" style={{ width: "70px", height: "70px" }} />
            </div>
            <div className="col-12 col-md-8 d-none d-md-block">
                <p>{obra.info}</p>
            </div>
        </div>
    )
}

export default ObraRuta;