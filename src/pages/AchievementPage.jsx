import React, { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import "../styles/AchievementPage.css";

import { CheckCircleFill, ClockHistory, Circle } from 'react-bootstrap-icons';

import axios from "axios";

import BigSpinner from "../components/BigSpinner"
import { useAxiosBaseUrl } from "../context/AxiosBaseUrl";

const AchievementPage = () => {
  const baseUrl = useAxiosBaseUrl();
  const [achievements, setAchievements] = useState();
  const userId = 1;

  const getAchievements = async () => {
    try {
      const response = await axios.get(`${baseUrl}/subachievement/get-all/${userId}`);
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

  if (!achievements) {
    return (
      <BigSpinner />
    );
  } else {
    return (
      <div className="container-fluid">
        {
          Object.keys(achievements).map((key1, index1) => {
            const element1 = achievements[key1];
            return Object.keys(element1).map((key2, index2) => {
              const element2 = element1[key2];
              return Object.keys(element2).map((key3, index3) => {
                const element3 = element2[key3];
                let inProgressShown = false;

                return (
                  <div key={key3} className="row  align-items-center d-flex text-start my-4">
                    <div className="col-5">
                      <h3 className="text-start">{"- " + element3.title}</h3>
                    </div>
                    <div className="col-3 d-flex align-items-center justify-content-end" style={{ display: 'flex', alignItems: 'center' }}>
                      {
                        (() => {
                          let inProgressShown = false;
                          let pendingShown = false;
                          for (const subachievement of element3.subachievements) {
                            if (subachievement.status === 'in_progress' && !inProgressShown) {
                              inProgressShown = true;
                              return <span key={subachievement.title}>{subachievement.title}</span>;
                            } else if (subachievement.status === 'pending' && !pendingShown) {
                              pendingShown = true;
                              return <span key={subachievement.title}>{subachievement.title}</span>;
                            }
                          }
                          // Si no hay sublogros en progreso ni pendientes, retornar "Logro completado"
                          return <span>Logro completado</span>;
                        })()
                      }
                    </div>

                    <div className="col-4" style={{ display: 'flex', alignItems: 'center' }}>
                      {element3.subachievements.map((subachievement, index) => {
                        if (subachievement.status === 'completed') {
                          return <CheckCircleFill size={50} key={index} style={{ color: 'green', marginRight: '5px' }} />;
                        } else if (subachievement.status === 'in_progress' && !inProgressShown) {
                          return <ClockHistory size={50} key={index} style={{ color: 'orange', marginRight: '5px' }} />;
                        } else if (subachievement.status === 'pending') {
                          return <Circle size={50} key={index} style={{ color: 'grey', marginRight: '5px' }} />;
                        }
                        return null;
                      })}
                    </div>
                  </div>
                );
              });
            });
          })
        }
      </div>
    );
    // return (
    //   <div className="row">
    //     <div className="ac_box_1 d-flex mx-auto rounded-3xl" style={{ background: "#263C5C", width: "80%" }}>
    //       {/* <img
    //         src={star}
    //         alt='star'
    //         className='rounded rounded-3'
    //         style={{ height: '100%', width: '70%', maxWidth: '70px', maxHeight: '100px', color: "white" }}
    //       /> */}
    //       <h1 className="" style={{ color: "#FFFFFF", marginLeft: "5%", padding: "10px" }}>Logros</h1>
    //       <ProgressBar className="progress_bar_ac my-auto ml-[25%] position-relative" completed={35} maxCompleted={100} />
    //     </div>
    //     <div className="ac_box_2 d-flex mx-auto" style={{ background: "#263C5C", width: "80%", marginTop: "5%" }}>
    //       <h1 style={{ color: "#FFFFFF", padding: "10px", fontSize: "32px" }}>Visita 5 figuras</h1>
    //       <ProgressBar className="progress_bar_ac my-auto ml-auto position-relative" completed={74} maxCompleted={100} />
    //     </div>
    //     <div className="ac_box_3 d-flex mx-auto" style={{ background: "#263C5C", width: "80%", marginTop: "2%" }}>
    //       <h1 style={{ color: "#FFFFFF", padding: "10px", fontSize: "32px" }}>Completa dos rutas  en el mismo dia</h1>
    //       <ProgressBar className="progress_bar_ac my-auto ml-auto position-relative" completed={45} maxCompleted={100} />
    //     </div>
    //     <div className="ac_box_4 d-flex mx-auto" style={{ background: "#263C5C", width: "80%", marginTop: "2%" }}>
    //       <h1 style={{ color: "#FFFFFF", padding: "10px", width: "45%", fontSize: "32px" }}>Logro#3</h1>
    //       <ProgressBar className="progress_bar_ac my-auto ml-auto position-relative" completed={56} maxCompleted={100} />
    //     </div>
    //   </div>
    // );
  }
};

export default AchievementPage;
