import { Container } from "postcss";
import React from "react";

const Autor = ({ autor }) => {
    return (
        <div className="row mb-2 text-white" style={{ backgroundColor: "#7b96ff", borderRadius: "20px" }}>
            <div className="col-1 d-flex align-items-center">
                <div>
                    <img src={"/Image/PerfilPorDefecto.png"} alt="" style={{ width: "40px", height: "auto" }} />
                </div>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
                <div className="text-start">
                    <div className="mt-1">{autor.name}</div>
                    <div className="mb-1">{autor.nacimiento}</div>
                </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
                <div className="text-end">{autor.num_obras}</div>
            </div>
        </div>
    );
}

export default Autor