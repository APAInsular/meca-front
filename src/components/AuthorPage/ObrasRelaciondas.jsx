import React from 'react';
import Slider from "react-slick";

function ObrasRelacionadas() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const obras = ['/Image/Obra.jpg', '/Image/Obra.jpg', '/Image/Obra.jpg', '/Image/Obra.jpg', '/Image/Obra.jpg', '/Image/Obra.jpg', '/Image/Obra.jpg',]
  return (
    <div className="slider-container mx-auto">
      <Slider {...settings}>
        {obras.map((obra, index) => (
          <div className='mx-auto' key={index}>
            <img className="obraPng" src={obra} style={{ height: "200px", width: "auto" }} alt="Obra" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ObrasRelacionadas;