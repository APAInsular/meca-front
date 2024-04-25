import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avatar from '../../images/usuario_avatar.png';
import { ArrowLeftCircleFill, ArrowRightCircleFill } from "react-bootstrap-icons";

const DesktopRanking = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <ArrowLeftCircleFill  size={1000} color="black"></ArrowLeftCircleFill>,
        nextArrow: <ArrowRightCircleFill size={1000} color="black"></ArrowRightCircleFill>
      };
    const users = [
        { name: "Nombre Usuario", statues: "Nº Estatuas" },
        { name: "Nombre Usuario", statues: "Nº Estatuas" },
        { name: "Nombre Usuario", statues: "Nº Estatuas" },
        { name: "Nombre Usuario", statues: "Nº Estatuas" },
        { name: "Nombre Usuario", statues: "Nº Estatuas" },
        { name: "Nombre Usuario", statues: "Nº Estatuas" },
        { name: "Nombre Usuario", statues: "Nº Estatuas" },
    ];
    return (
        <div className="col-12">
            <Slider {...settings}>
                <div>
                    <div className="col-12 text-center p-2 h1 text-white" style={{backgroundColor: "#263c5c", margin: "0px"}}>PLATINA</div>
                    {users.map((user, index) => (
                        <div key={index} style={{backgroundColor: "#DEE6F0"}} className='d-flex align-items-center justify-content-between p-1 border-bottom border-black'>
                            <div className="d-flex align-items-center justify-content-center">
                                <img src={avatar} alt="usuario avatar" className="" style={{width: "40px", height: "auto"}}/>
                                {user.name}
                            </div>
                            <div className="estatuas">{user.statues}</div>
                        </div>
                    ))}
                </div>
                <div>
                    <div className="col-12 text-center p-2 h1 text-white" style={{backgroundColor: "#263c5c", margin: "0px"}}>ORO</div>
                    {users.map((user, index) => (
                        <div key={index} style={{backgroundColor: "#DEE6F0"}} className='d-flex align-items-center justify-content-between p-1 border-bottom border-black'>
                            <div className="d-flex align-items-center justify-content-center">
                                <img src={avatar} alt="usuario avatar" className="" style={{width: "40px", height: "auto"}}/>
                                {user.name}
                            </div>
                            <div className="estatuas">{user.statues}</div>
                        </div>
                    ))}
                </div>
                <div>
                    <div className="col-12 text-center p-2 h1 text-white" style={{backgroundColor: "#263c5c", margin: "0px"}}>PLATA</div>
                    {users.map((user, index) => (
                        <div key={index} style={{backgroundColor: "#DEE6F0"}} className='d-flex align-items-center justify-content-between p-1 border-bottom border-black'>
                            <div className="d-flex align-items-center justify-content-center">
                                <img src={avatar} alt="usuario avatar" className="" style={{width: "40px", height: "auto"}}/>
                                {user.name}
                            </div>
                            <div className="estatuas">{user.statues}</div>
                        </div>
                    ))}
                </div>
                <div>
                    <div className="col-12 text-center p-2 h1 text-white" style={{backgroundColor: "#263c5c", margin: "0px"}}>BRONCE</div>
                    {users.map((user, index) => (
                        <div key={index} style={{backgroundColor: "#DEE6F0"}} className='d-flex align-items-center justify-content-between p-1 border-bottom border-black'>
                            <div className="d-flex align-items-center justify-content-center">
                                <img src={avatar} alt="usuario avatar" className="" style={{width: "40px", height: "auto"}}/>
                                {user.name}
                            </div>
                            <div className="estatuas">{user.statues}</div>
                        </div>
                    ))}
                </div>
            </Slider>
        </div>
    );  
}

export default DesktopRanking