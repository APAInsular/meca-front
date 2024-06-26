import "../styles/ContactUs.css";

const ContactUs = () => {
    return (
        <div className="ContactUs">
            <h1 class="info">Contacta con nosotras</h1>
            <p class="info2">¿Alguna pregunta o comentario? ¡Solo escríbenos un mensaje!</p>
            <div class="ContactUs1">

                <div className="box">
                    {/* <img className='email' src={"#"} alt="" /> */}
                    <h3>Email</h3>
                    <p className="contact">contact@example.com</p>
                    <button className='emailb'>CONTACTO</button>
                </div>

                <div className="box">
                    {/* <img className='phone' src={myImage2} alt="" /> */}
                    <h3>Teléfono</h3>
                    <p>Office. (phone number)</p>
                    <button className='phoneb'>LLAMAR</button>
                </div>

                <div className="box">
                    {/* <img className='pin' src={myImage} alt="" /> */}
                    <h3>Oficina</h3>
                    <p>(Agrega tu ubicación)</p>
                    <button className='oficinab'>UBICACIÓN</button>
                </div>

                <div className="downbox">
                    <button className='entegar'>Entegar</button>
                    <div className="downboxinside">
                        <h3>Enviar un formulario</h3>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ContactUs;
