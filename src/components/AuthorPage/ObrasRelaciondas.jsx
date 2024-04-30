import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

    const obras = ['/Image/Obra.jpg','/Image/Obra.jpg','/Image/Obra.jpg','/Image/Obra.jpg','/Image/Obra.jpg','/Image/Obra.jpg','/Image/Obra.jpg',]
    return (
        <div className="slider-container mx-auto"> {/* Poprawiono miejsce na return */}
            <Slider {...settings}>
                {obras.map((obra, index) => (
                    <div className='mx-auto' key={index}> {/* Dodano key dla elementów mapowanych */}
                        <img className="obraPng" src={obra} style={{height: "200px" , width: "auto"}} alt="Obra" /> {/* Poprawiono src */}
                    </div>
                ))}  
            </Slider>
        </div>
    );
}

export default ObrasRelacionadas;