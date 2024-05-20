import React from 'react';

const MonumentDetails = ({ data }) => {
    return (
        <div className="row mt-3">
            <div className="col-lg-4">
                <div className="row d-flex justify-content-center">
                    <img src={"/Image/Obra.jpg"} alt="" style={{ width: "300px", height: "200px" }} />
                </div>
                <div className="row mt-3">
                    <div className="col-auto">
                        <strong>Fecha de creación: </strong>
                        <p className="text-start">{data.creation_date}</p>
                    </div>
                    <div className="col-auto">
                        <strong>Autor: </strong>
                        <p className="text-start">
                            {data.authors.map((author, index) => (
                                <span key={index}>
                                    {author.name}
                                    {index < data.authors.length - 1 && " y "}
                                </span>
                            ))}
                        </p>
                    </div>
                    <div className="col-auto">
                        <strong>Estilo: </strong>
                        <p className="text-start">
                            {data.styles.map((style, index) => (
                                <span key={index}>
                                    {style.name}
                                    {index < data.styles.length - 1 && " y "}
                                </span>
                            ))}
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="row">
                    <div className="col text-start">
                        <strong>Significado: </strong>
                        <p className="text-start">{data.meaning}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MonumentDetails;
