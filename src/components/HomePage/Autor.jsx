import { Container } from "postcss";
import React from "react";

const Autor = ({ autor }) => {
    return (
        <div className="row mb-2 text-white" style={{ backgroundColor: "#7B96FF", borderRadius: "20px" }}>
            <div className="col-2 d-flex justify-content-start align-items-center">
                <img src="/Image/PerfilPorDefecto.png" alt="FotoPerfil" style={{ width: "40px", height: "40px" }} />
            </div>
            <div className="col-4 d-flex justify-content-start align-items-end">
                <div>
                    <div className="mt-1">{autor.name}</div>
                    <div className="mb-1">{autor.nacimiento}</div>
                </div>
            </div>
            <div className="col-4 d-flex align-items-center">
                <div>
                    <strong>{autor.num_obras}</strong>
                </div>
            </div>
        </div>
    );
}

export default Autor