import React from 'react';

import Slider from 'react-slick'

// import '../styles/BlogPage.css'


const BlogPage = () => {
    const nombres = ["Nombre", "Nombre", "Nombre", "Nombre", "Nombre", "Nombre", "Nombre", "Nombre", "Nombre", "Nombre", "Nombre", "Nombre", "Nombre", "Nombre", "Nombre", "Nombre", "Nombre", "Nombre", "Nombre", "Nombre", "Nombre", "Nombre", "Nombre", "Nombre", "Nombre"]
    const posts = [
        { img: "/Image/Obra.jpg", pic: "/Image/PerfilPorDefecto.png", name: 'Nombre Apellidos', date: '23/04/1956', title: 'Título de la entrada del blog', desc: "Descripción corta de la entrada del blog de una usuario concreto mientras escribe esta descripción que saldrá en el homePage abajo del todo" },
        { img: "/Image/Obra.jpg", pic: "/Image/PerfilPorDefecto.png", name: 'Nombre Apellidos', date: '23/04/1956', title: 'Título de la entrada del blog', desc: "Descripción corta de la entrada del blog de una usuario concreto mientras escribe esta descripción que saldrá en el homePage abajo del todo" },
        { img: "/Image/Obra.jpg", pic: "/Image/PerfilPorDefecto.png", name: 'Nombre Apellidos', date: '23/04/1956', title: 'Título de la entrada del blog', desc: "Descripción corta de la entrada del blog de una usuario concreto mientras escribe esta descripción que saldrá en el homePage abajo del todo" },
        { img: "/Image/Obra.jpg", pic: "/Image/PerfilPorDefecto.png", name: 'Nombre Apellidos', date: '23/04/1956', title: 'Título de la entrada del blog', desc: "Descripción corta de la entrada del blog de una usuario concreto mientras escribe esta descripción que saldrá en el homePage abajo del todo" },
    ]
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
    };
    return (
        <div>
            <div class="d-flex justify-content-center">
                <div class="input-group mx-auto">
                    <input type="text" class="form-control border-black shadow-none" style={{ height: "75px", borderRight: "none", borderTopLeftRadius: "50px", borderBottomLeftRadius: "50px" }} placeholder="Busqueda..." aria-describedby="button-addon" />
                    <div class="input-group-append" id="button-addon">
                        <button class="btn shadow-none d-flex align-items-center border-black" style={{ height: "75px", borderLeft: "none", borderRight: "none" }} type="button"><img src={entra} style={{ height: "40px" }}></img></button>
                        <button class="btn shadow-none d-flex align-items-center border-black" style={{ height: "75px", borderLeft: "none", borderTopRightRadius: "50px", borderBottomRightRadius: "50px" }} type="button"><img src={filtra} style={{ height: "40px" }}></img></button>
                    </div>
                </div>
            </div>
            <div className="slider-container col-12 col-lg-6 mx-auto mt-3">
                <Slider {...settings}>
                    {nombres.map((nombre, index) => (
                        <div key={index} className="d-flex flex-column align-items-center mx-2">
                            <div className={`rounded-circle mb-2`} style={{ height: "50px", width: "50px", backgroundColor: "gray" }}></div>
                            <p className="mb-0">{nombre}</p>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className='d-flex flex-wrap justify-content-center'>
                {posts.map((post, index) => (
                    <div className='col-xs-12 col-md-6 col-lg-3 my-5' key={index} style={{ fontSize: "14px" }}>
                        <img src={post.img} className='w-100' style={{ height: "auto" }} alt="/" />
                        <div className='d-flex justify-content-between align-items-center p-2'>
                            <div className='d-flex align-items-center'>
                                <img src={post.pic} className="" style={{ height: "20px", width: "auto" }} alt="/" />
                                <p className='m-0'>{post.name}</p>
                            </div>
                            <p className='m-0'>{post.date}</p>
                        </div>
                        <h5 className='m-2'>{post.title}</h5>
                        <p className='text-left m-2'>{post.desc}</p>
                        <div className='d-flex flex-wrap m-2'>
                            <h5 className='m-1 text-white rounded p-1' style={{ backgroundColor: "#7B96FF", fontSize: "10px" }}>Escultura</h5>
                            <h5 className='m-1 text-white rounded p-1' style={{ backgroundColor: "#7B96FF", fontSize: "10px" }}>Arte</h5>
                            <h5 className='m-1 text-white rounded p-1' style={{ backgroundColor: "#7B96FF", fontSize: "10px" }}>Fuerteventura</h5>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <button><img src={arrow} alt='/'></img></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogPage;

{/* <div class='blogblock' key={index}>
                    <img src={post.img} class='monumento' alt="/"/>
                    <img src={post.pic} class="avataro" alt="/"/>
                    <p>{post.name}</p><p class="date">{post.date}</p>
                    <h5>{post.title}</h5>
                    <p class="description">{post.desc}</p>
                    <div class='categories'>
                        <h5 className='one'>Escultura</h5>
                        <h5 className='two'>Arte</h5>
                        <h5 className='three'>Fuerteventura</h5>
                    </div>
                    <button><img src={arrow} class='arrowdown' alt='/'></img></button>
                </div> */}