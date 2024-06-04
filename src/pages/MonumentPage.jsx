import React, { useState, useEffect } from "react";
import "../styles/MonumentPage.css";

import axios from "axios";

import BigSpinner from "../components/BigSpinner";
import Comment from "../components/Interaction/Comment";
import RatingModal from "../components/MonumentPage/RatingModal";
import Swal from "sweetalert2";
import 'react-notifications-component/dist/theme.css';
import { Star, StarFill } from "react-bootstrap-icons";

import { useAxiosBaseUrl } from '../context/AxiosBaseUrl';
import { useUserPoints } from '../context/UserPointsContext'; // Ajusta la ruta según la ubicación del archivo

const MonumentPage = () => {
  const baseUrl = useAxiosBaseUrl();
  const { updateUserPoints } = useUserPoints();

  const id = window.location.pathname.split("/")[3];
  const userId = 1;
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [qrMessage, setQrMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);

  const checkQrAndUpdatePoints = async () => {
    try {
      const response = await axios.get(`${baseUrl}/check-qr/${userId}/${id}`);
      if (response.data.success) {
        handleAddPoints(50);
      } else {
        Swal.mixin({
          toast: true,
          position: "top-start",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        }).fire({
          icon: "warning",
          title: "Aun no han pasado 24 horas desde la ultima visita"
        });
      }
    } catch (error) {
      Swal.mixin({
        toast: true,
        position: "top-start",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      }).fire({
        icon: "warning",
        title: "Error"
      });
    }
  };

  const handleAddPoints = async (pointsToAdd) => {
    try {
      // Lógica para añadir puntos al usuario en el servidor
      const response = await axios.post(`${baseUrl}/user/${userId}/up-points`, { points: pointsToAdd });
      const newPoints = response.data.points;

      Swal.mixin({
        toast: true,
        position: "top-start",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      }).fire({
        icon: "success",
        title: "Puntos añadidos correctamente"
      });

      updateUserPoints(newPoints);
    } catch (error) {
      console.error('Error adding points:', error);
    }
  };

  const postRating = async () => {
    const payload = {
      user_id: userId,
      rateable_type: "App/Models/Monument",
      rateable_id: id,
      rating: rating
    }
    try {
      const response = await axios.post(`${baseUrl}/ratings`, payload);
      // Actualizar la información del monumento después de enviar la calificación
      fetchMonument();
      handleAddPoints(10);
      handleCloseModal();
    } catch (error) {
      console.log(error);
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

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

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

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <BigSpinner />;
  } else {
    return (
      <div>
        <RatingModal
          show={showModal}
          handleClose={handleCloseModal}
          rating={rating}
          setRating={setRating}
          handleSubmit={postRating}
        />

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
              <div className="d-flex mt-3" style={{ cursor: "pointer" }} onClick={handleOpenModal}>
                {getYellowStars(data.average_rating)}
                <p className="d-flex ml-2 fw-light" style={{ fontSize: "14px" }}>({data.total_ratings})</p>
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
                        {author.name + " " + author.first_surname + " " + author.second_surname}
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
                  <strong>Significado </strong>
                  <p className="text-start">{data.meaning}</p>
                </div>
              </div>
              <div className="row">
                <div className="col text-start">
                  <strong>Descripcion autores </strong>
                  <p className="text-start">
                    {data.authors.map((author, index) => (
                      <span key={index}>
                        <strong>{"->" + author.name + ": "}</strong>
                        {author.description}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row">
                <div className="col-12">
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
};

export default MonumentPage;
