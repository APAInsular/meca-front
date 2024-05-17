import React, { useState, useEffect } from "react";
import "../styles/MonumentPage.css";

import axios from "axios";

import BigSpinner from "../components/BigSpinner";
import Comment from "../components/Interaction/Comment";

import { useAxiosBaseUrl } from '../context/AxiosBaseUrl';

const MonumentPage = ({ monument }) => {
  const baseUrl = useAxiosBaseUrl();

  const id = window.location.pathname.split("/")[3];
  const userId = 1;
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [qrMessage, setQrMessage] = useState(null);

  const checkQrAndUpdatePoints = async () => {
    try {
      const response = await axios.get(`${baseUrl}/check-qr/${userId}/${id}`);
      setQrMessage(response.data.message);
      alert(response.data.message);
      console.log(response.data.message)
    } catch (error) {
      setQrMessage('Error al verificar el QR.');
    }
  };

  useEffect(() => {
    fetchMonument();

    // Verificar el parámetro qr en la URL
    const urlParams = new URLSearchParams(window.location.search);
    const qr = urlParams.get('qr');
    if (qr === 'true') {
      checkQrAndUpdatePoints();
    }
  }, [id]);

  const fetchMonument = async () => {
    try {
      const response = await axios.get(`${baseUrl}/monuments/${id}?userId=${userId}`);
      setData(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <BigSpinner />
  } else {
    return (
      <div className="container mt-5">
        <div className="row text-center">
          <div className="col-12">
            <h1>{data.title}</h1>
          </div>
        </div>
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
          <div className="col-lg-4">
            <div className="row">
              <div className="col">
                <div className="comments">
                  {data.comments.map((comment, index) => (
                    <Comment comment={comment} key={index} userId={userId} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MonumentPage