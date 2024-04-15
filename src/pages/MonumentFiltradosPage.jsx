import React from "react";
import "../styles/MonumentFiltradosPage.css";
import myImagea from "../images/Obra.jpg";
import Obra from "src/components/HomePage/Obra";

const MonumentFiltradosPage = () => {
  const obras = [
    {
      nombre: "Escultura 1",
      fecha: "23-06-2007",
      autor: {
        nombre: "Luis Gordillo",
      },
      imagen: "/Image/Obra.jpg",
    },
    {
      nombre: "Escultura 2",
      fecha: "23-06-2007",
      autor: {
        nombre: "Luis Gordillo",
      },
      imagen: "/Image/Obra.jpg",
    },
    {
      nombre: "Escultura 3",
      fecha: "23-06-2007",
      autor: {
        nombre: "Luis Gordillo",
      },
      imagen: "/Image/Obra.jpg",
    },
    {
      nombre: "Escultura 4",
      fecha: "23-06-2007",
      autor: {
        nombre: "Luis Gordillo",
      },
      imagen: "/Image/Obra.jpg",
    },
    {
        nombre: "Escultura 5",
        fecha: "23-06-2007",
        autor: {
          nombre: "Luis Gordillo",
        },
        imagen: "/Image/Obra.jpg",
      },
      {
        nombre: "Escultura 6",
        fecha: "23-06-2007",
        autor: {
          nombre: "Luis Gordillo",
        },
        imagen: "/Image/Obra.jpg",
      },
      {
        nombre: "Escultura 7",
        fecha: "23-06-2007",
        autor: {
          nombre: "Luis Gordillo",
        },
        imagen: "/Image/Obra.jpg",
      },
      {
        nombre: "Escultura 8",
        fecha: "23-06-2007",
        autor: {
          nombre: "Luis Gordillo",
        },
        imagen: "/Image/Obra.jpg",
      },
  ];

  return (
    <div className="filtro">
      <div className="lista-obras">
        <h1 className="lista-obras-text">Lista de Obras</h1>
      </div>
      <div className="esculturas">
        <h1 className="esculturas-text">ESCULTURAS EN LA ZONA DE PLAYA BLANCA</h1>
      </div>
      <div className="obras">
        {obras.map((obra, index) => {
            return <Obra obra={obra} key={index} />;

        })}
      </div>
    </div>
  );
};

export default MonumentFiltradosPage;
