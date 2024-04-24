import React, { useState } from "react";
import { Heart, HeartFill } from "react-bootstrap-icons";

const Obra = ({ obra }) => {
    const [isFill, setIsFill] = useState(false);

    function fillHeart(data) {
        setIsFill(data);
    }

    return (
        <div className="col-xs-12 col-sm-6 col-lg-3">
            <div className="col-12 d-flex flex-column align-items-center">
                <img src={obra.imagen} alt="ImagenObra" style={{ width: "200px", height: "200px" }} />
                <div className="text-center mt-2">
                    <strong>{obra.nombre}</strong>
                </div>
                <div className="d-flex justify-content-between">
                    <span style={{ fontSize: "13px" }}>{obra.autor.nombre}</span>
                    <span style={{ fontSize: "13px" }} className="mx-3">{obra.fecha}</span>
                    <button onClick={() => fillHeart(!isFill)}>
                        {
                            isFill ? (
                                <HeartFill color={"red"} />
                            ) : (
                                <Heart color={"red"} />
                            )
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Obra;
