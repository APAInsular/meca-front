import React, { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import "../styles/AchievementPage.css";

import axios from "axios";

import BigSpinner from "../components/BigSpinner"

const AchievementPage = () => {
  const [achievements, setAchievements] = useState([]);

  const getAchievements = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/achievements');
      // Manejar la respuesta
      console.log(response.data);

      setAchievements(response.data);

      // Aquí puedes actualizar el estado de tu aplicación o realizar otras operaciones con los datos recibidos
    } catch (error) {
      // Manejar errores
      console.error('Error al obtener los logros', error);
    }
  }

  useEffect(() => {
    getAchievements();
  }, []);

  if (achievements.length == 0) {
    return (
      <BigSpinner />
    );
  } else {
    return (
      <div className="row">
        <div className="ac_box_1 d-flex mx-auto rounded-3xl" style={{ background: "#263C5C", width: "80%" }}>
          {/* <img
            src={star}
            alt='star'
            className='rounded rounded-3'
            style={{ height: '100%', width: '70%', maxWidth: '70px', maxHeight: '100px', color: "white" }}
          /> */}
          <h1 className="" style={{ color: "#FFFFFF", marginLeft: "5%", padding: "10px" }}>Logros</h1>
          <ProgressBar className="progress_bar_ac my-auto ml-[25%] position-relative" completed={35} maxCompleted={100} />
        </div>
        <div className="ac_box_2 d-flex mx-auto" style={{ background: "#263C5C", width: "80%", marginTop: "5%" }}>
          <h1 style={{ color: "#FFFFFF", padding: "10px", fontSize: "32px" }}>Visita 5 figuras</h1>
          <ProgressBar className="progress_bar_ac my-auto ml-auto position-relative" completed={74} maxCompleted={100} />
        </div>
        <div className="ac_box_3 d-flex mx-auto" style={{ background: "#263C5C", width: "80%", marginTop: "2%" }}>
          <h1 style={{ color: "#FFFFFF", padding: "10px", fontSize: "32px" }}>Completa dos rutas  en el mismo dia</h1>
          <ProgressBar className="progress_bar_ac my-auto ml-auto position-relative" completed={45} maxCompleted={100} />
        </div>
        <div className="ac_box_4 d-flex mx-auto" style={{ background: "#263C5C", width: "80%", marginTop: "2%" }}>
          <h1 style={{ color: "#FFFFFF", padding: "10px", width: "45%", fontSize: "32px" }}>Logro#3</h1>
          <ProgressBar className="progress_bar_ac my-auto ml-auto position-relative" completed={56} maxCompleted={100} />
        </div>
      </div>
    );
  }
};

export default AchievementPage;
